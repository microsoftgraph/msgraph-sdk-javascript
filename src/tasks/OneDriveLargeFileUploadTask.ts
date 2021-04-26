/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module OneDriveLargeFileUploadTask
 */

import { GraphClientError } from "../GraphClientError";
import { Client } from "../index";
import { FileUpload } from "./FileUploadTask/FileObjectClasses/FileUpload";
import { UploadEventHandlers } from "./FileUploadTask/Interfaces/IUploadEventHandlers";
import { FileObject, LargeFileUploadSession, LargeFileUploadTask, LargeFileUploadTaskOptions } from "./LargeFileUploadTask";
import { getValidRangeSize } from "./OneDriveLargeFileUploadTaskUtil";

/**
 * @interface
 * Signature to define options when creating an upload task
 * @property {string} fileName - Specifies the name of a file to be uploaded (with extension)
 * @property {string} [path] - The path to which the file needs to be uploaded
 * @property {number} [rangeSize] - Specifies the range chunk size
 */
export interface OneDriveLargeFileUploadOptions {
	fileName: string;
	path?: string;
	rangeSize?: number;
	conflictBehavior?: string;
	uploadEventHandlers?: UploadEventHandlers;
}

/**
 * @interface
 * Signature to define options when creating an upload task
 * @property {string} fileName - Specifies the name of a file to be uploaded (with extension)
 * @property {string} [path] - The path to which the file needs to be uploaded
 * @property {number} [rangeSize] - Specifies the range chunk size
 */
interface OneDriveFileUploadSessionPayLoad {
	fileName: string;
	conflictBehavior?: string;
}

/**
 * @class
 * Class representing OneDriveLargeFileUploadTask
 */
export class OneDriveLargeFileUploadTask<T> extends LargeFileUploadTask<T> {
	/**
	 * @private
	 * @static
	 * Default path for the file being uploaded
	 */
	private static DEFAULT_UPLOAD_PATH = "/";

	/**
	 * @private
	 * @static
	 * Constructs the create session url for Onedrive
	 * @param {string} fileName - The name of the file
	 * @param {path} [path = OneDriveLargeFileUploadTask.DEFAULT_UPLOAD_PATH] - The path for the upload
	 * @returns The constructed create session url
	 */
	private static constructCreateSessionUrl(fileName: string, path: string = OneDriveLargeFileUploadTask.DEFAULT_UPLOAD_PATH): string {
		fileName = fileName.trim();
		path = path.trim();
		if (path === "") {
			path = "/";
		}
		if (path[0] !== "/") {
			path = `/${path}`;
		}
		if (path[path.length - 1] !== "/") {
			path = `${path}/`;
		}
		// we choose to encode each component of the file path separately because when encoding full URI
		// with encodeURI, special characters like # or % in the file name doesn't get encoded as desired
		return `/me/drive/root:${path
			.split("/")
			.map((p) => encodeURIComponent(p))
			.join("/")}${encodeURIComponent(fileName)}:/createUploadSession`;
	}

	/**
	 * @public
	 * @static
	 * @async
	 * Creates a OneDriveLargeFileUploadTask
	 * @param {Client} client - The GraphClient instance
	 * @param {Blob | Buffer | File} file - File represented as Blob, Buffer or File
	 * @param {OneDriveLargeFileUploadOptions} options - The options for upload task
	 * @returns The promise that will be resolves to OneDriveLargeFileUploadTask instance
	 */
	public static async create(client: Client, file: Blob | Buffer | File, options: OneDriveLargeFileUploadOptions): Promise<OneDriveLargeFileUploadTask<Blob | ArrayBuffer | Buffer>> {
		if (!client || !file || !options) {
			throw new GraphClientError("Please provide the Graph client instance, file object and OneDriveLargeFileUploadOptions value");
		}
		const name: string = options.fileName;
		let content;
		let size;
		if (typeof Blob !== "undefined" && file instanceof Blob) {
			content = new File([file as Blob], name);
			size = content.size;
		} else if (typeof File !== "undefined" && file instanceof File) {
			content = file as File;
			size = content.size;
		} else if (typeof Buffer !== "undefined" && file instanceof Buffer) {
			const b = file as Buffer;
			size = b.byteLength - b.byteOffset;
			content = b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength);
		}
		const fileObj = new FileUpload(content, name, size);
		return this.createTaskWithFileObject<Blob | ArrayBuffer | Buffer>(client, fileObj, options);
	}

	/**
	 * @public
	 * @static
	 * @async
	 * Creates a OneDriveLargeFileUploadTask
	 * @param {Client} client - The GraphClient instance
	 * @param {FileObject} file - FileObject instance
	 * @param {OneDriveLargeFileUploadOptions} options - The options for upload task
	 * @returns The promise that will be resolves to OneDriveLargeFileUploadTask instance
	 */
	public static async createTaskWithFileObject<T>(client: Client, fileObject: FileObject<T>, options: OneDriveLargeFileUploadOptions): Promise<OneDriveLargeFileUploadTask<T>> {
		if (!client || !fileObject || !options) {
			throw new GraphClientError("Please provide the Graph client instance, FileObject interface implementation and OneDriveLargeFileUploadOptions value");
		}
		const requestUrl = OneDriveLargeFileUploadTask.constructCreateSessionUrl(options.fileName, options.path);
		const uploadSessionPayload: OneDriveFileUploadSessionPayLoad = {
			fileName: options.fileName,
			conflictBehavior: options.conflictBehavior,
		};
		const session = await OneDriveLargeFileUploadTask.createUploadSession(client, requestUrl, uploadSessionPayload);
		const rangeSize = getValidRangeSize(options.rangeSize);
		return new OneDriveLargeFileUploadTask(client, fileObject, session, {
			rangeSize,
			uploadEventHandlers: options.uploadEventHandlers,
		});
	}

	/**
	 * @public
	 * @static
	 * @async
	 * Makes request to the server to create an upload session
	 * @param {Client} client - The GraphClient instance
	 * @param {string} requestUrl - The URL to create the upload session
	 * @param {string} fileName - The name of a file to upload, (with extension)
	 * @param {string} conflictBehavior - Conflict behaviour option. Default is 'rename'
	 * @returns The promise that resolves to LargeFileUploadSession
	 */
	public static async createUploadSession(client: Client, requestUrl: string, payloadOptions: OneDriveFileUploadSessionPayLoad): Promise<LargeFileUploadSession> {
		const payload = {
			item: {
				"@microsoft.graph.conflictBehavior": payloadOptions?.conflictBehavior || "rename",
				name: payloadOptions?.fileName,
			},
		};
		return super.createUploadSession(client, requestUrl, payload);
	}

	/**
	 * @public
	 * @constructor
	 * Constructs a OneDriveLargeFileUploadTask
	 * @param {Client} client - The GraphClient instance
	 * @param {FileObject} file - The FileObject holding details of a file that needs to be uploaded
	 * @param {LargeFileUploadSession} uploadSession - The upload session to which the upload has to be done
	 * @param {LargeFileUploadTaskOptions} options - The upload task options
	 * @returns An instance of OneDriveLargeFileUploadTask
	 */
	public constructor(client: Client, file: FileObject<T>, uploadSession: LargeFileUploadSession, options: LargeFileUploadTaskOptions) {
		super(client, file, uploadSession, options);
	}

	/**
	 * @public
	 * Commits upload session to end uploading
	 * @param {string} requestUrl - The URL to commit the upload session
	 * @param {string} conflictBehavior - Conflict behaviour option. Default is 'rename'
	 * @returns The promise resolves to committed response
	 */
	public async commit(requestUrl: string, conflictBehavior = "rename"): Promise<unknown> {
		const payload = {
			name: this.file.name,
			"@microsoft.graph.conflictBehavior": conflictBehavior,
			"@microsoft.graph.sourceUrl": this.uploadSession.url,
		};
		return await this.client.api(requestUrl).put(payload);
	}
}
