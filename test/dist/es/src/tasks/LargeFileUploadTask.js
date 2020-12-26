/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import * as tslib_1 from "tslib";
import { Range } from "../Range";
/**
 * @class
 * Class representing LargeFileUploadTask
 */
export class LargeFileUploadTask {
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
	constructor(client, file, uploadSession, options = {}) {
		/**
		 * @private
		 * Default value for the rangeSize
		 */
		this.DEFAULT_FILE_SIZE = 5 * 1024 * 1024;
		this.client = client;
		this.file = file;
		if (options.rangeSize === undefined) {
			options.rangeSize = this.DEFAULT_FILE_SIZE;
		}
		this.options = options;
		this.uploadSession = uploadSession;
		this.nextRange = new Range(0, this.options.rangeSize - 1);
	}
	/**
	 * @public
	 * @static
	 * @async
	 * Makes request to the server to create an upload session
	 * @param {Client} client - The GraphClient instance
	 * @param {any} payload - The payload that needs to be sent
	 * @param {KeyValuePairObjectStringNumber} headers - The headers that needs to be sent
	 * @returns The promise that resolves to LargeFileUploadSession
	 */
	static createUploadSession(client, requestUrl, payload, headers = {}) {
		return tslib_1.__awaiter(this, void 0, void 0, function*() {
			try {
				const session = yield client
					.api(requestUrl)
					.headers(headers)
					.post(payload);
				const largeFileUploadSession = {
					url: session.uploadUrl,
					expiry: new Date(session.expirationDateTime),
				};
				return largeFileUploadSession;
			} catch (err) {
				throw err;
			}
		});
	}
	/**
	 * @private
	 * Parses given range string to the Range instance
	 * @param {string[]} ranges - The ranges value
	 * @returns The range instance
	 */
	parseRange(ranges) {
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
	updateTaskStatus(response) {
		this.uploadSession.expiry = new Date(response.expirationDateTime);
		this.nextRange = this.parseRange(response.nextExpectedRanges);
	}
	/**
	 * @public
	 * Gets next range that needs to be uploaded
	 * @returns The range instance
	 */
	getNextRange() {
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
	 * @public
	 * Slices the file content to the given range
	 * @param {Range} range - The range value
	 * @returns The sliced ArrayBuffer or Blob
	 */
	sliceFile(range) {
		const blob = this.file.content.slice(range.minValue, range.maxValue + 1);
		return blob;
	}
	/**
	 * @public
	 * @async
	 * Uploads file to the server in a sequential order by slicing the file
	 * @returns The promise resolves to uploaded response
	 */
	upload() {
		return tslib_1.__awaiter(this, void 0, void 0, function*() {
			try {
				while (true) {
					const nextRange = this.getNextRange();
					if (nextRange.maxValue === -1) {
						const err = new Error("Task with which you are trying to upload is already completed, Please check for your uploaded file");
						err.name = "Invalid Session";
						throw err;
					}
					const fileSlice = this.sliceFile(nextRange);
					const response = yield this.uploadSlice(fileSlice, nextRange, this.file.size);
					// Upon completion of upload process incase of onedrive, driveItem is returned, which contains id
					if (response.id !== undefined) {
						return response;
					} else {
						this.updateTaskStatus(response);
					}
				}
			} catch (err) {
				throw err;
			}
		});
	}
	/**
	 * @public
	 * @async
	 * Uploads given slice to the server
	 * @param {ArrayBuffer | Blob | File} fileSlice - The file slice
	 * @param {Range} range - The range value
	 * @param {number} totalSize - The total size of a complete file
	 */
	uploadSlice(fileSlice, range, totalSize) {
		return tslib_1.__awaiter(this, void 0, void 0, function*() {
			try {
				return yield this.client
					.api(this.uploadSession.url)
					.headers({
						"Content-Length": `${range.maxValue - range.minValue + 1}`,
						"Content-Range": `bytes ${range.minValue}-${range.maxValue}/${totalSize}`,
					})
					.put(fileSlice);
			} catch (err) {
				throw err;
			}
		});
	}
	/**
	 * @public
	 * @async
	 * Deletes upload session in the server
	 * @returns The promise resolves to cancelled response
	 */
	cancel() {
		return tslib_1.__awaiter(this, void 0, void 0, function*() {
			try {
				return yield this.client.api(this.uploadSession.url).delete();
			} catch (err) {
				throw err;
			}
		});
	}
	/**
	 * @public
	 * @async
	 * Gets status for the upload session
	 * @returns The promise resolves to the status enquiry response
	 */
	getStatus() {
		return tslib_1.__awaiter(this, void 0, void 0, function*() {
			try {
				const response = yield this.client.api(this.uploadSession.url).get();
				this.updateTaskStatus(response);
				return response;
			} catch (err) {
				throw err;
			}
		});
	}
	/**
	 * @public
	 * @async
	 * Resumes upload session and continue uploading the file from the last sent range
	 * @returns The promise resolves to the uploaded response
	 */
	resume() {
		return tslib_1.__awaiter(this, void 0, void 0, function*() {
			try {
				yield this.getStatus();
				return yield this.upload();
			} catch (err) {
				throw err;
			}
		});
	}
}
//# sourceMappingURL=LargeFileUploadTask.js.map
