/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
import "isomorphic-fetch";

import { assert } from "chai";
import { Readable } from "stream";

import { GraphClientError } from "../../../src";
import { StreamUpload } from "../../../src/tasks/FileUploadUtil/FileObjectClasses/StreamUpload";

const fileName = "Test_File_Name";
describe("StreamUpload.test", () => {
	it("Should return slice with defined size less than complete range size", async () => {
		const totalRangesize = 36;
		const sliceSize = 20;
		const buf = Buffer.alloc(totalRangesize, "a");
		const readStream = new Readable({
			read() {
				this.push(buf);
				this.push(null);
			},
		});

		const upload = new StreamUpload(readStream, fileName, totalRangesize);

		const slice = await upload.sliceFile({ minValue: 0, maxValue: sliceSize - 1 });

		assert.isDefined(slice);
		assert.equal(sliceSize, (slice as Buffer).length);
		assert.equal(readStream.readableLength, 16);
	});
});

it("Should return slice ", async () => {
	const totalRangesize = 36;
	const buf = Buffer.alloc(totalRangesize, "a");
	const readStream = new Readable({
		read() {
			this.push(buf);
			this.push(null);
		},
	});
	const upload = new StreamUpload(readStream, fileName, totalRangesize);
	const slice = await upload.sliceFile({ minValue: 0, maxValue: totalRangesize - 1 });
	assert.isDefined(slice);
	assert.equal(totalRangesize, (slice as Buffer).length);
	assert.equal(readStream.readableLength, 0);
});

it("Should throw error if stream  ends before complete range size is read", async () => {
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
		const upload = new StreamUpload(readStream, fileName, totalsize);
		const slice = await upload.sliceFile({ minValue: 0, maxValue: sliceSize - 1 });
	} catch (err) {
		assert.instanceOf(err, GraphClientError);
		assert.equal(err.message, "Stream ended before reading required range size");
	}
});
