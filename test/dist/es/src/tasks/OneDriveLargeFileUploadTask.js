/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import * as tslib_1 from "tslib";
import { LargeFileUploadTask } from "./LargeFileUploadTask";
import { getValidRangeSize } from "./OneDriveLargeFileUploadTaskUtil";
/**
 * @class
 * Class representing OneDriveLargeFileUploadTask
 */
export class OneDriveLargeFileUploadTask extends LargeFileUploadTask {
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
	constructor(client, file, uploadSession, options) {
		super(client, file, uploadSession, options);
	}
	/**
	 * @private
	 * @static
	 * Constructs the create session url for Onedrive
	 * @param {string} fileName - The name of the file
	 * @param {path} [path = OneDriveLargeFileUploadTask.DEFAULT_UPLOAD_PATH] - The path for the upload
	 * @returns The constructed create session url
	 */
	static constructCreateSessionUrl(fileName, path = OneDriveLargeFileUploadTask.DEFAULT_UPLOAD_PATH) {
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
	static create(client, file, options) {
		return tslib_1.__awaiter(this, void 0, void 0, function*() {
			const name = options.fileName;
			let content;
			let size;
			if (typeof Blob !== "undefined" && file instanceof Blob) {
				content = new File([file], name);
				size = content.size;
			} else if (typeof File !== "undefined" && file instanceof File) {
				content = file;
				size = content.size;
			} else if (typeof Buffer !== "undefined" && file instanceof Buffer) {
				const b = file;
				size = b.byteLength - b.byteOffset;
				content = b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength);
			}
			try {
				const requestUrl = OneDriveLargeFileUploadTask.constructCreateSessionUrl(options.fileName, options.path);
				const session = yield OneDriveLargeFileUploadTask.createUploadSession(client, requestUrl, options.fileName);
				const rangeSize = getValidRangeSize(options.rangeSize);
				const fileObj = {
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
	 * @returns The promise that resolves to LargeFileUploadSession
	 */
	static createUploadSession(client, requestUrl, fileName) {
		const _super = Object.create(null, {
			createUploadSession: { get: () => super.createUploadSession },
		});
		return tslib_1.__awaiter(this, void 0, void 0, function*() {
			const payload = {
				item: {
					"@microsoft.graph.conflictBehavior": "rename",
					name: fileName,
				},
			};
			try {
				return _super.createUploadSession.call(this, client, requestUrl, payload);
			} catch (err) {
				throw err;
			}
		});
	}
	/**
	 * @public
	 * Commits upload session to end uploading
	 * @param {string} requestUrl - The URL to commit the upload session
	 * @returns The promise resolves to committed response
	 */
	commit(requestUrl) {
		return tslib_1.__awaiter(this, void 0, void 0, function*() {
			try {
				const payload = {
					name: this.file.name,
					"@microsoft.graph.conflictBehavior": "rename",
					"@microsoft.graph.sourceUrl": this.uploadSession.url,
				};
				return yield this.client.api(requestUrl).put(payload);
			} catch (err) {
				throw err;
			}
		});
	}
}
/**
 * @private
 * @static
 * Default path for the file being uploaded
 */
OneDriveLargeFileUploadTask.DEFAULT_UPLOAD_PATH = "/";
//# sourceMappingURL=OneDriveLargeFileUploadTask.js.map
