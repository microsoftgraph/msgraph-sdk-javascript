/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import "isomorphic-fetch";

import { assert } from "chai";
import { Readable } from "stream";

import { StreamUpload } from "../../../src/tasks/FileUploadUtil/FileObjectClasses/StreamUpload";

describe("StreamUpload.test", () => {
	describe("getContent", () => {
		it("Should return slice with defined size", async () => {
			const totalsize = 36;
			const sliceSize = 20;
			const buf = Buffer.alloc(totalsize, "a");
			const readStream = new Readable({
				read() {
					this.push(buf);
					this.push(null);
				},
			});
			const fileName = "Test_File_Name";

			const upload = new StreamUpload(readStream, fileName, totalsize);

			const slice = await upload.sliceFile({ minValue: 0, maxValue: sliceSize - 1 });

			assert.isDefined(slice);
			assert.equal(sliceSize, (slice as Buffer).length);
			//console.log((slice as Buffer).length + " slice length");
			//console.log(readStream.readableLength);
		});
	});

	it("Should return slice with total size", async () => {
		const totalsize = 36;
		const sliceSize = 36;
		const buf = Buffer.alloc(totalsize, "a");
		const readStream = new Readable({
			read() {
				this.push(buf);
				this.push(null);
			},
		});
		const fileName = "Test_File_Name";

		const upload = new StreamUpload(readStream, fileName, totalsize);

		const slice = await upload.sliceFile({ minValue: 0, maxValue: totalsize - 1 });

		assert.isDefined(slice);
		assert.equal(sliceSize, (slice as Buffer).length);
		console.log((slice as Buffer).length + " slice length");
		console.log(readStream.readableLength);
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
		} catch (err) {
			console.log(err);
		}
	});
});
