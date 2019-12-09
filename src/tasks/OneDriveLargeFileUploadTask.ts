/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module OneDriveLargeFileUploadTask
 */

import { Client } from "../index";

import { FileObject, LargeFileUploadSession, LargeFileUploadTask, LargeFileUploadTaskOptions } from "./LargeFileUploadTask";
import { getValidRangeSize } from "./OneDriveLargeFileUploadTaskUtil";

/**
 * @interface
 * Signature to define options when creating an upload task
 * @property {string} fileName - Specifies the name of a file to be uploaded (with extension)
 * @property {string} [path] - The path to which the file needs to be uploaded
 * @property {number} [rangeSize] - Specifies the range chunk size
 */
interface OneDriveLargeFileUploadOptions {
	fileName: string;
	path?: string;
	rangeSize?: number;
}

/**
 * @class
 * Class representing OneDriveLargeFileUploadTask
 */
export class OneDriveLargeFileUploadTask extends LargeFileUploadTask {
	/**
	 * @private
	 * @static
	 * Default path for the file being uploaded
	 */
	private static DEFAULT_UPLOAD_PATH: string = "/";

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
		return encodeURI(`/me/drive/root:${path}${fileName}:/createUploadSession`);
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
	public static async create(client: Client, file: Blob | Buffer | File, options: OneDriveLargeFileUploadOptions): Promise<any> {
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

		try {
			const requestUrl = OneDriveLargeFileUploadTask.constructCreateSessionUrl(options.fileName, options.path);
			const session = await OneDriveLargeFileUploadTask.createUploadSession(client, requestUrl, options.fileName);
			const rangeSize = getValidRangeSize(options.rangeSize);
			const fileObj: FileObject = {
				name,
				content,
				size,
			};
			return new OneDriveLargeFileUploadTask(client, fileObj, session, {
				rangeSize,
			});
		} catch (err) {
			throw err;
		}
	}

	/**
	 * @public
	 * @static
	 * @async
	 * Makes request to the server to create an upload session
	 * @param {Client} client - The GraphClient instance
	 * @param {string} requestUrl - The URL to create the upload session
	 * @param {string} fileName - The name of a file to upload, (with extension)
	 * @returns The promise that resolves to LargeFileUploadSession
	 */
	public static async createUploadSession(client: Client, requestUrl: string, fileName: string): Promise<any> {
		const payload = {
			item: {
				"@microsoft.graph.conflictBehavior": "rename",
				name: fileName,
			},
		};
		try {
			return super.createUploadSession(client, requestUrl, payload);
		} catch (err) {
			throw err;
		}
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
	public constructor(client: Client, file: FileObject, uploadSession: LargeFileUploadSession, options: LargeFileUploadTaskOptions) {
		super(client, file, uploadSession, options);
	}

	/**
	 * @public
	 * Commits upload session to end uploading
	 * @param {string} requestUrl - The URL to commit the upload session
	 * @returns The promise resolves to committed response
	 */
	public async commit(requestUrl: string): Promise<any> {
		try {
			const payload = {
				name: this.file.name,
				"@microsoft.graph.conflictBehavior": "rename",
				"@microsoft.graph.sourceUrl": this.uploadSession.url,
			};
			return await this.client.api(requestUrl).put(payload);
		} catch (err) {
			throw err;
		}
	}
}
