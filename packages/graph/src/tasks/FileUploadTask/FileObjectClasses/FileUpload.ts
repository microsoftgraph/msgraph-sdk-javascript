/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { GraphClientError } from "../../../GraphClientError";
import { FileObject, SliceType } from "../../LargeFileUploadTask";
import { Range } from "../Range";

/**
 * @class
 * Class used for creating LargeFileUploadTask fileobject.
 * This class accepts files of type ArrayBuffer, Blob, Uint8Array.
 */
export class FileUpload implements FileObject<SliceType> {
	/**
	 * @public
	 * @constructor
	 * @param {ArrayBuffer | Blob | Uint8Array} content - The file to be uploaded
	 * @param {string} name - The name of the file to be uploaded
	 * @param {number} size - The total size of the file to be uploaded
	 * @returns An instance of the FileUpload class
	 */
	public constructor(public content: ArrayBuffer | Blob | Uint8Array, public name: string, public size: number) {
		if (!content || !name || !size) {
			throw new GraphClientError("Please provide the upload content, name of the file and size of the file");
		}
	}

	/**
	 * @public
	 * Slices the file content to the given range
	 * @param {Range} range - The range value
	 * @returns The sliced file part
	 */
	public sliceFile(range: Range): ArrayBuffer | Blob | Uint8Array {
		return this.content.slice(range.minValue, range.maxValue + 1);
	}
}
