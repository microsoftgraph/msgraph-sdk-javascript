/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/* eslint-disable @typescript-eslint/no-unused-vars */
import { assert } from "chai";
import * as sinon from "sinon";

import { Range } from ".../../../src/tasks/FileUploadTask/Range";
import { FileUpload, LargeFileUploadTaskOptions } from "../../../src";
import { UploadEventHandlers } from "../../../src/tasks/FileUploadTask/Interfaces/IUploadEventHandlers";
import { UploadResult } from "../../../src/tasks/FileUploadTask/UploadResult";
import { LargeFileUploadTask } from "../../../src/tasks/LargeFileUploadTask";
import { getClient } from "../../test-helper";

describe("LargeFileUploadTask.ts", () => {
	const rangeSize = 327680;
	const uploadSession = {
		url: "test url",
		expiry: new Date(),
	};
	describe("Parsing Range", () => {
		const name = "sample_image.jpg";
		const arrayBuffer = new ArrayBuffer(80000);
		const size = 100000;
		const options = {};
		const fileObj = new FileUpload(arrayBuffer, name, size);
		const uploadTask = new LargeFileUploadTask(getClient(), fileObj, uploadSession, options);
		it("Should return default range for given undefined range", (done) => {
			const range = uploadTask["parseRange"]([]);
			assert.equal(range.minValue, -1);
			assert.equal(range.maxValue, -1);
			done();
		});

		it("Should return default range for given empty range", (done) => {
			const range = uploadTask["parseRange"]([""]);
			assert.equal(range.minValue, -1);
			assert.equal(range.maxValue, -1);
			done();
		});

		it("Should return valid range for given range with from and to values", (done) => {
			const range = uploadTask["parseRange"](["100-200"]);
			assert.equal(range.minValue, 100);
			assert.equal(range.maxValue, 200);
			done();
		});

		it("Should return valid range for given range without to value", (done) => {
			const range = uploadTask["parseRange"](["0-"]);
			assert.equal(range.minValue, 0);
			assert.equal(range.maxValue, 99999);
			done();
		});
	});
	describe("Update Task Status", () => {
		const name = "sample_image.jpg";
		const arrayBuffer = new ArrayBuffer(80000);
		const size = 100000;
		const options = {};
		const fileObj = new FileUpload(arrayBuffer, name, size);
		const uploadTask = new LargeFileUploadTask(getClient(), fileObj, uploadSession, options);
		it("Should update status with expiration date and next expected ranges as given", (done) => {
			const statusResponse = {
				expirationDateTime: "2018-08-06T09:05:45.195Z",
				nextExpectedRanges: ["100-2000"],
			};
			uploadTask["updateTaskStatus"](statusResponse);
			assert.equal(uploadTask["nextRange"].minValue, 100);
			assert.equal(uploadTask["nextRange"].maxValue, 2000);
			done();
		});
		it("Should update status with given expiration date and (fileSize - 1) for next expected range maxValue", (done) => {
			const statusResponse = {
				expirationDateTime: "2018-08-06T09:05:45.195Z",
				nextExpectedRanges: ["100-"],
			};
			uploadTask["updateTaskStatus"](statusResponse);
			assert.equal(uploadTask["nextRange"].minValue, 100);
			assert.equal(uploadTask["nextRange"].maxValue, 99999);
			done();
		});
	});

	describe("GetNextRange", () => {
		const name = "sample_image.jpg";
		const arrayBuffer = new ArrayBuffer(80000);
		const size = 328680;
		const options = {
			rangeSize,
		};
		const fileObj = new FileUpload(arrayBuffer, name, size);
		const uploadTask = new LargeFileUploadTask(getClient(), fileObj, uploadSession, options);

		it("Should return proper next range well within the file size", (done) => {
			const nextRange = uploadTask.getNextRange();
			assert.equal(nextRange.minValue, 0);
			assert.equal(nextRange.maxValue, 327679);
			done();
		});

		it("Should return next range maxValue equal to the file size", (done) => {
			const statusResponse = {
				expirationDateTime: "2018-08-06T09:05:45.195Z",
				nextExpectedRanges: ["327680-"],
			};
			uploadTask["updateTaskStatus"](statusResponse);
			const nextRange = uploadTask.getNextRange();
			assert.equal(nextRange.minValue, 327680);
			assert.equal(nextRange.maxValue, 328679);
			done();
		});

		it("Should return next range as default(empty) range, this is for the upload task completed", (done) => {
			const statusResponse = {
				expirationDateTime: "2018-08-06T09:05:45.195Z",
				nextExpectedRanges: [],
			};
			uploadTask["updateTaskStatus"](statusResponse);
			const nextRange = uploadTask.getNextRange();
			assert.equal(nextRange.minValue, -1);
			assert.equal(nextRange.maxValue, -1);
			done();
		});
	});

	describe("Upload File", () => {
		const name = "sample_image.jpg";
		const arrayBuffer = new ArrayBuffer(80000);
		const size = 328680;
		const options = {
			rangeSize: 327680,
		};
		const fileObj = new FileUpload(arrayBuffer, name, size);
		const location = "TEST_URL";
		const body = {
			id: "TEST_ID",
		};

		it("Should return a Upload Result object after a completed task with 201 status", () => {
			const location = "TEST_URL";
			it("Test with progressCallback", async () => {
				let isProgressReportCalled = false;

				const progress = (range?: Range) => {
					isProgressReportCalled = true;
				};

				const uploadEventHandlers: UploadEventHandlers = {
					progress,
				};

				const optionsWithProgress: LargeFileUploadTaskOptions = {
					rangeSize,
					uploadEventHandlers,
				};

				const emptyBody = {};
				const uploadTask = new LargeFileUploadTask(getClient(), fileObj, uploadSession, optionsWithProgress);
				const status201 = {
					status: 201,
					statusText: "OK",
					headers: {
						"Content-Type": "application/json",
						location,
					},
				};
				const rawResponse = new Response(JSON.stringify(emptyBody), status201);

				const moq = sinon.mock(uploadTask);
				moq.expects("uploadSliceGetRawResponse").resolves(rawResponse);
				const result = await uploadTask.upload();
				assert.isDefined(result);
				assert.instanceOf(result, UploadResult);
				assert.equal(result["location"], location);
				assert.isFalse(isProgressReportCalled);
			});

			it("Test without progress callback", async () => {
				const uploadTask = new LargeFileUploadTask(getClient(), fileObj, uploadSession, options);
				const status201 = {
					status: 201,
					statusText: "OK",
					headers: {
						"Content-Type": "application/json",
						location,
					},
				};

				const rawResponse = new Response(JSON.stringify(body), status201);
				const moq = sinon.mock(uploadTask);
				moq.expects("uploadSliceGetRawResponse").resolves(rawResponse);
				const result = await uploadTask.upload();
				assert.isDefined(result);
				assert.instanceOf(result, UploadResult);
				assert.equal(result["location"], location);
				const responseBody = result["responseBody"];
				assert.isDefined(responseBody);
				assert.equal(responseBody["id"], "TEST_ID");
			});
		});

		it("Should return a Upload Result object after a completed task with 200 status and body", () => {
			it("Test with progress callback", async () => {
				let isProgressReportCalled = false;

				const progress = (range?: Range) => {
					isProgressReportCalled = true;
				};
				const uploadEventHandlers: UploadEventHandlers = {
					progress,
				};

				const optionsWithProgress: LargeFileUploadTaskOptions = {
					rangeSize,
					uploadEventHandlers,
				};

				const uploadTask = new LargeFileUploadTask(getClient(), fileObj, uploadSession, optionsWithProgress);
				const status200 = {
					status: 200,
					statusText: "OK",
					headers: {
						"Content-Type": "application/json",
						location,
					},
				};
				const rawResponse = new Response(JSON.stringify(body), status200);

				const moq = sinon.mock(uploadTask);
				moq.expects("uploadSliceGetRawResponse").resolves(rawResponse);
				const result = await uploadTask.upload();
				assert.isDefined(result);
				assert.instanceOf(result, UploadResult);
				assert.equal(result["location"], location);
				const responseBody = result["responseBody"];
				assert.isDefined(responseBody);
				assert.equal(responseBody["id"], "TEST_ID");
				assert.isFalse(isProgressReportCalled);
			});
			it("Test without progress callback", async () => {
				const uploadTask = new LargeFileUploadTask(getClient(), fileObj, uploadSession, options);

				const status200 = {
					status: 200,
					statusText: "OK",
					headers: {
						"Content-Type": "application/json",
						location,
					},
				};
				const rawResponse = new Response(JSON.stringify(body), status200);

				const moq = sinon.mock(uploadTask);
				moq.expects("uploadSliceGetRawResponse").resolves(rawResponse);
				const result = await uploadTask.upload();
				assert.isDefined(result);
				assert.instanceOf(result, UploadResult);
				assert.equal(result["location"], location);
				const responseBody = result["responseBody"];
				assert.isDefined(responseBody);
				assert.equal(responseBody["id"], "TEST_ID");
			});
		});
		it("Should return an exception while trying to upload the file upload completed task", (done) => {
			const statusResponse = {
				expirationDateTime: "2018-08-06T09:05:45.195Z",
				nextExpectedRanges: [],
			};
			const uploadTask = new LargeFileUploadTask(getClient(), fileObj, uploadSession, options);
			uploadTask["updateTaskStatus"](statusResponse);
			uploadTask
				.upload()
				.then(() => {
					throw new Error("Test Failed - Upload is working for upload completed task");
				})
				.catch((err) => {
					assert.equal(err.name, "Invalid Session");
					assert.equal(err.message, "Task with which you are trying to upload is already completed, Please check for your uploaded file");
					done();
				});
		});
	});
});
