/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module LargeFileUploadTask
 */

import { GraphClientError } from "../GraphClientError";
import { GraphResponseHandler } from "../GraphResponseHandler";
import { Client } from "../index";
import { ResponseType } from "../ResponseType";
import { UploadEventHandlers } from "./FileUploadTask/Interfaces/IUploadEventHandlers";
import { Range } from "./FileUploadTask/Range";
import { UploadResult } from "./FileUploadTask/UploadResult";

/**
 * @interface
 * Signature to representing key value pairs
 * @property {[key: string] : string | number} - The Key value pair
 */
interface KeyValuePairObjectStringNumber {
	[key: string]: string | number;
}

/**
 * @interface
 * Signature to represent the resulting response in the status enquiry request
 * @property {string} expirationDateTime - The expiration time of the upload session
 * @property {string[]} nextExpectedRanges - The ranges expected in next consecutive request in the upload
 */
interface UploadStatusResponse {
	expirationDateTime: string;
	nextExpectedRanges: string[];
}

/**
 * @interface
 * Signature to define options for upload task
 * @property {number} [rangeSize = LargeFileUploadTask.DEFAULT_FILE_SIZE] - Specifies the range chunk size
 * @property {UploadEventHandlers} uploadEventHandlers - UploadEventHandlers attached to an upload task
 */
export interface LargeFileUploadTaskOptions {
	rangeSize?: number;
	uploadEventHandlers?: UploadEventHandlers;
}

/**
 * @interface
 * Signature to represent upload session resulting from the session creation in the server
 * @property {string} url - The URL to which the file upload is made
 * @property {Date} expiry - The expiration of the time of the upload session
 */
export interface LargeFileUploadSession {
	url: string;
	expiry: Date;
	isCancelled?: boolean;
}

/**
 * @type
 * Representing the return type of the sliceFile function that is type of the slice of a given range.
 */
export type SliceType = ArrayBuffer | Blob | Uint8Array;

/**
 * @interface
 * Signature to define the properties and content of the file in upload task
 * @property {ArrayBuffer | File} content - The actual file content
 * @property {string} name - Specifies the file name with extension
 * @property {number} size - Specifies size of the file
 */
export interface FileObject<T> {
	content: T;
	name: string;
	size: number;
	sliceFile(range: Range): SliceType | Promise<SliceType>;
}

/**
 * @class
 * Class representing LargeFileUploadTask
 */
export class LargeFileUploadTask<T> {
	/**
	 * @private
	 * Default value for the rangeSize
	 */
	private DEFAULT_FILE_SIZE: number = 5 * 1024 * 1024;

	/**
	 * @protected
	 * The GraphClient instance
	 */
	protected client: Client;

	/**
	 * @protected
	 * The object holding file details
	 */
	protected file: FileObject<T>;

	/**
	 * @protected
	 * The object holding options for the task
	 */
	protected options: LargeFileUploadTaskOptions;

	/**
	 * @protected
	 * The object for upload session
	 */
	protected uploadSession: LargeFileUploadSession;

	/**
	 * @protected
	 * The next range needs to be uploaded
	 */
	protected nextRange: Range;

	/**
	 * @public
	 * @static
	 * @async
	 * Makes request to the server to create an upload session
	 * @param {Client} client - The GraphClient instance
	 * @param {string} requestUrl - The URL to create the upload session
	 * @param {any} payload - The payload that needs to be sent
	 * @param {KeyValuePairObjectStringNumber} headers - The headers that needs to be sent
	 * @returns The promise that resolves to LargeFileUploadSession
	 */
	public static async createUploadSession(client: Client, requestUrl: string, payload: any, headers: KeyValuePairObjectStringNumber = {}): Promise<LargeFileUploadSession> {
		const session = await client
			.api(requestUrl)
			.headers(headers)
			.post(payload);
		const largeFileUploadSession: LargeFileUploadSession = {
			url: session.uploadUrl,
			expiry: new Date(session.expirationDateTime),
			isCancelled: false,
		};
		return largeFileUploadSession;
	}

	/**
	 * @public
	 * @constructor
	 * Constructs a LargeFileUploadTask
	 * @param {Client} client - The GraphClient instance
	 * @param {FileObject} file - The FileObject holding details of a file that needs to be uploaded
	 * @param {LargeFileUploadSession} uploadSession - The upload session to which the upload has to be done
	 * @param {LargeFileUploadTaskOptions} options - The upload task options
	 * @returns An instance of LargeFileUploadTask
	 */
	public constructor(client: Client, file: FileObject<T>, uploadSession: LargeFileUploadSession, options: LargeFileUploadTaskOptions = {}) {
		this.client = client;

		if (!file.sliceFile) {
			throw new GraphClientError("Please pass the FileUpload object, StreamUpload object or any custom implementation of the FileObject interface");
		} else {
			this.file = file;
		}
		this.file = file;
		if (!options.rangeSize) {
			options.rangeSize = this.DEFAULT_FILE_SIZE;
		}

		this.options = options;
		this.uploadSession = uploadSession;
		this.nextRange = new Range(0, this.options.rangeSize - 1);
	}

	/**
	 * @private
	 * Parses given range string to the Range instance
	 * @param {string[]} ranges - The ranges value
	 * @returns The range instance
	 */
	private parseRange(ranges: string[]): Range {
		const rangeStr = ranges[0];
		if (typeof rangeStr === "undefined" || rangeStr === "") {
			return new Range();
		}
		const firstRange = rangeStr.split("-");
		const minVal = parseInt(firstRange[0], 10);
		let maxVal = parseInt(firstRange[1], 10);
		if (Number.isNaN(maxVal)) {
			maxVal = this.file.size - 1;
		}
		return new Range(minVal, maxVal);
	}

	/**
	 * @private
	 * Updates the expiration date and the next range
	 * @param {UploadStatusResponse} response - The response of the upload status
	 * @returns Nothing
	 */
	private updateTaskStatus(response: UploadStatusResponse): void {
		this.uploadSession.expiry = new Date(response.expirationDateTime);
		this.nextRange = this.parseRange(response.nextExpectedRanges);
	}

	/**
	 * @public
	 * Gets next range that needs to be uploaded
	 * @returns The range instance
	 */
	public getNextRange(): Range {
		if (this.nextRange.minValue === -1) {
			return this.nextRange;
		}
		const minVal = this.nextRange.minValue;
		let maxValue = minVal + this.options.rangeSize - 1;
		if (maxValue >= this.file.size) {
			maxValue = this.file.size - 1;
		}
		return new Range(minVal, maxValue);
	}

	/**
	 * @deprecated This function has been moved into FileObject interface.
	 * @public
	 * Slices the file content to the given range
	 * @param {Range} range - The range value
	 * @returns The sliced ArrayBuffer or Blob
	 */
	public sliceFile(range: Range): ArrayBuffer | Blob {
		console.warn("The LargeFileUploadTask.sliceFile() function has been deprecated and moved into the FileObject interface.");
		if (this.file.content instanceof ArrayBuffer || this.file.content instanceof Blob || this.file.content instanceof Uint8Array) {
			return this.file.content.slice(range.minValue, range.maxValue + 1);
		}
		throw new GraphClientError("The LargeFileUploadTask.sliceFile() function expects only Blob, ArrayBuffer or Uint8Array file content. Please note that the sliceFile() function is deprecated.");
	}

	/**
	 * @public
	 * @async
	 * Uploads file to the server in a sequential order by slicing the file
	 * @returns The promise resolves to uploaded response
	 */
	public async upload(): Promise<UploadResult> {
		const uploadEventHandlers = this.options && this.options.uploadEventHandlers;
		while (!this.uploadSession.isCancelled) {
			const nextRange = this.getNextRange();
			if (nextRange.maxValue === -1) {
				const err = new Error("Task with which you are trying to upload is already completed, Please check for your uploaded file");
				err.name = "Invalid Session";
				throw err;
			}
			const fileSlice = await this.file.sliceFile(nextRange);
			const rawResponse = await this.uploadSliceGetRawResponse(fileSlice, nextRange, this.file.size);
			if (!rawResponse) {
				throw new GraphClientError("Something went wrong! Large file upload slice response is null.");
			}

			const responseBody = await GraphResponseHandler.getResponse(rawResponse);
			/**
			 * (rawResponse.status === 201) -> This condition is applicable for OneDrive, PrintDocument and Outlook APIs.
			 * (rawResponse.status === 200 && responseBody.id) -> This additional condition is applicable only for OneDrive API.
			 */
			if (rawResponse.status === 201 || (rawResponse.status === 200 && responseBody.id)) {
				this.reportProgress(uploadEventHandlers, nextRange);
				return UploadResult.CreateUploadResult(responseBody, rawResponse.headers);
			}

			/* Handling the API issue where the case of Outlook upload response property -'nextExpectedRanges'  is not uniform.
			 * https://github.com/microsoftgraph/msgraph-sdk-serviceissues/issues/39
			 */
			const res: UploadStatusResponse = {
				expirationDateTime: responseBody.expirationDateTime || responseBody.ExpirationDateTime,
				nextExpectedRanges: responseBody.NextExpectedRanges || responseBody.nextExpectedRanges,
			};
			this.updateTaskStatus(res);
			this.reportProgress(uploadEventHandlers, nextRange);
		}
	}

	private reportProgress(uploadEventHandlers: UploadEventHandlers, nextRange: Range) {
		if (uploadEventHandlers && uploadEventHandlers.progress) {
			uploadEventHandlers.progress(nextRange, uploadEventHandlers.extraCallbackParam);
		}
	}

	/**
	 * @public
	 * @async
	 * Uploads given slice to the server
	 * @param {ArrayBuffer | Blob | File} fileSlice - The file slice
	 * @param {Range} range - The range value
	 * @param {number} totalSize - The total size of a complete file
	 * @returns The response body of the upload slice result
	 */
	public async uploadSlice(fileSlice: ArrayBuffer | Blob | File, range: Range, totalSize: number): Promise<unknown> {
		return await this.client
			.api(this.uploadSession.url)
			.headers({
				"Content-Length": `${range.maxValue - range.minValue + 1}`,
				"Content-Range": `bytes ${range.minValue}-${range.maxValue}/${totalSize}`,
				"Content-Type": "application/octet-stream",
			})
			.put(fileSlice);
	}

	/**
	 * @public
	 * @async
	 * Uploads given slice to the server
	 * @param {unknown} fileSlice - The file slice
	 * @param {Range} range - The range value
	 * @param {number} totalSize - The total size of a complete file
	 * @returns The raw response of the upload slice result
	 */
	public async uploadSliceGetRawResponse(fileSlice: unknown, range: Range, totalSize: number): Promise<Response> {
		return await this.client
			.api(this.uploadSession.url)
			.headers({
				"Content-Length": `${range.maxValue - range.minValue + 1}`,
				"Content-Range": `bytes ${range.minValue}-${range.maxValue}/${totalSize}`,
				"Content-Type": "application/octet-stream",
			})
			.responseType(ResponseType.RAW)
			.put(fileSlice);
	}

	/**
	 * @public
	 * @async
	 * Deletes upload session in the server
	 * @returns The promise resolves to cancelled response
	 */
	public async cancel(): Promise<unknown> {
		const cancelResponse = await this.client
			.api(this.uploadSession.url)
			.responseType(ResponseType.RAW)
			.delete();
		if (cancelResponse.status === 204) {
			this.uploadSession.isCancelled = true;
		}
		return cancelResponse;
	}

	/**
	 * @public
	 * @async
	 * Gets status for the upload session
	 * @returns The promise resolves to the status enquiry response
	 */
	public async getStatus(): Promise<unknown> {
		const response = await this.client.api(this.uploadSession.url).get();
		this.updateTaskStatus(response);
		return response;
	}

	/**
	 * @public
	 * @async
	 * Resumes upload session and continue uploading the file from the last sent range
	 * @returns The promise resolves to the uploaded response
	 */
	public async resume(): Promise<unknown> {
		await this.getStatus();
		return await this.upload();
	}

	/**
	 * @public
	 * @async
	 * Get the upload session information
	 * @returns The large file upload session
	 */
	public getUploadSession(): LargeFileUploadSession {
		return this.uploadSession;
	}
}
