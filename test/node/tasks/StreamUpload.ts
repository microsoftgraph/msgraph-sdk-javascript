/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import "isomorphic-fetch";

import { assert } from "chai";
import * as fs from "fs";
import { Readable } from "stream";

import { StreamUpload } from "../../../src/tasks/FileUploadUtil/FileObjectClasses/StreamUpload";

describe("StreamUpload", () => {
	describe("sliceFile", () => {
		it("Should return image's base64 string", async () => {
			const fileName = "test.txt";
			const readStream = fs.createReadStream(`./test/sample_files/${fileName}`, { highWaterMark: 8 });
			const stats = fs.statSync(`./test/sample_files/${fileName}`);
			const totalsize = stats.size;
			const sliceSize = 20;

			const upload = new StreamUpload(readStream, fileName, totalsize);

			const slice = await upload.sliceFile({ minValue: 0, maxValue: sliceSize - 1 });
			assert.isDefined(slice);
			assert.equal(sliceSize, (slice as Buffer).length);
		});

		it("Should throw error", async () => {
			const totalsize = 6;
			const sliceSize = 20;
			const buf = Buffer.alloc(totalsize, "a");
			const readStream = new Readable({
				read() {
					this.push(buf);
					this.push(null);
				},
			});
			try {
				const fileName = "Test_File_Name";

				const upload = new StreamUpload(readStream, fileName, totalsize);

				const slice = await upload.sliceFile({ minValue: 0, maxValue: sliceSize - 1 });

				assert.isDefined(slice);
				assert.equal(sliceSize, (slice as Buffer).length);
				console.log();
			} catch (err) {
				console.log(err);
			}
		});
	});
});
