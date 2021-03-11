/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { GraphClientError } from "../../../GraphClientError";
import { Range } from "../../../Range";
import { FileObject } from "../../LargeFileUploadTask";

/**
 * @class
 * Class used for creating LargeFileUploadTask fileobject.
 * This class accepts files of type ArrayBuffer, Blob, Buffer.
 */
export class FileUpload implements FileObject {
	/**
	 * @public
	 * The file to be uploaded
	 */
	public content: ArrayBuffer | Blob | Buffer;

	/**
	 * @public
	 * The name of the file to be uploaded
	 */
	public name: string;

	/**
	 * @public
	 * The total size of the file to be uploaded
	 */
	public size: number;

	/**
	 * @public
	 * @constructor
	 * @param {ArrayBuffer | Blob | Buffer} content - The file to be uploaded
	 * @param {string} name - The name of the file to be uploaded
	 * @param {number} size - The total size of the file to be uploaded
	 * @returns An instance of the FileUpload class
	 */
	public constructor(content: ArrayBuffer | Blob | Buffer, name: string, size: number) {
		if (!content || !name || !size) {
			throw new GraphClientError("Please provide the Readable Stream content, name of the file and size of the file");
		}
		this.content = content;
		this.name = name;
		this.size = size;
	}

	/**
	 * @public
	 * Slices the file content to the given range
	 * @param {Range} range - The range value
	 * @returns The sliced file part
	 */
	public async sliceFile(range: Range): Promise<ArrayBuffer | Blob | Buffer> {
		return this.content.slice(range.minValue, range.maxValue + 1);
	}
}
