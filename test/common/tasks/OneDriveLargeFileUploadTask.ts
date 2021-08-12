/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";

import { OneDriveLargeFileUploadTask } from "../../../src/tasks/OneDriveLargeFileUploadTask";

describe("OneDriveLargeFileUploadTask.ts", () => {
	describe("constructCreateSessionUrl", () => {
		const spaceFileName = " test.png ";
		const fileName = "test.png";
		const specialFileName = "test file.png";
		const encodedFileName = "test%20file.png";

		it("Should trim the extra spaces in the filename", () => {
			assert.equal(`/me/drive/root:/${fileName}:/createUploadSession`, OneDriveLargeFileUploadTask["constructCreateSessionUrl"](spaceFileName));
		});

		it("Should encode space in the filename", () => {
			assert.equal(`/me/drive/root:/${encodedFileName}:/createUploadSession`, OneDriveLargeFileUploadTask["constructCreateSessionUrl"](specialFileName));
		});

		it("Should return url with default root value", () => {
			assert.equal(`/me/drive/root:/${fileName}:/createUploadSession`, OneDriveLargeFileUploadTask["constructCreateSessionUrl"](fileName));
		});

		it("Should return url with default root value for an empty path string", () => {
			assert.equal(`/me/drive/root:/${fileName}:/createUploadSession`, OneDriveLargeFileUploadTask["constructCreateSessionUrl"](fileName, ""));
		});

		it("Should add / in front of the path", () => {
			assert.equal(`/me/drive/root:/Documents/${fileName}:/createUploadSession`, OneDriveLargeFileUploadTask["constructCreateSessionUrl"](fileName, "Documents/"));
		});

		it("Should add / in back of the path", () => {
			assert.equal(`/me/drive/root:/Documents/${fileName}:/createUploadSession`, OneDriveLargeFileUploadTask["constructCreateSessionUrl"](fileName, "/Documents"));
		});

		it("Should trim the extra spaces in the path", () => {
			assert.equal(`/me/drive/root:/Documents/${fileName}:/createUploadSession`, OneDriveLargeFileUploadTask["constructCreateSessionUrl"](fileName, " /Documents/ "));
		});
	});

	describe("getFileInfo", () => {
		/* tslint:disable: no-string-literal */
		it("Should return file content info for Buffer", () => {
			const bytes = [1, 2, 3, 4, 5];
			const buffer = Buffer.from(bytes);
			const fileContent = OneDriveLargeFileUploadTask["getFileInfo"](buffer, "test.png");
			const arrayBuffer = new ArrayBuffer(bytes.length);
			const typedArray = new Uint8Array(arrayBuffer);
			for (let i = 0; i < bytes.length; i++) {
				typedArray[i] = bytes[i];
			}
			assert.deepEqual(fileContent, { content: arrayBuffer as Buffer, size: bytes.length });
		});
		/* tslint:enable: no-string-literal */
	});
});
