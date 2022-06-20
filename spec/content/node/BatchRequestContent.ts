/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";
import * as fs from "fs";
import "isomorphic-fetch";

import { BatchRequestContent } from "../../../src/content/BatchRequestContent";
import { randomString } from "../../test-helper";

const folderName = randomString();
const folderDetails = {
	name: folderName,
	folder: {},
};

describe("BatchRequestContent.ts", () => {
	describe("getContent", () => {
		it("Should return image's base64 string", async () => {
			const fileName = "sample_image.jpg";
			fs.readFile(`./spec/sample_files/${fileName}`, {}, async (err, file) => {
				if (err) {
					throw err;
				}
				const uploadOneDriveFile = {
					id: "1",
					request: new Request(`/me/drive/root:/Documents/${fileName}:/content`, {
						method: "PUT",
						headers: {
							"Content-type": "image/jpg",
						},
						body: file,
					}),
				};
				const batchReq = new BatchRequestContent([uploadOneDriveFile]);
				try {
					const content = await batchReq.getContent();
					assert.isDefined(content.requests[0].body);
				} catch (error) {
					throw error;
				}
			});
		});
	});
});
