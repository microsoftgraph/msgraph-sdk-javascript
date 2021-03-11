/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import "isomorphic-fetch";

import { assert } from "chai";
import * as fs from "fs";

import { getClient } from "../test-helper";
const client = getClient();

import { OneDriveLargeFileUploadOptions, OneDriveLargeFileUploadTask, Progress, Range, StreamUpload, UploadResult } from "../../../src/index";

describe("LargeFileUpload", () => {
	const fileName = "sample_image.jpg";
	const stats = fs.statSync(`./test/sample_files/${fileName}`);
	const totalsize = stats.size;
	it("Test OneDrive stream upload with progress callback options", async () => {
		let isProgressReportCalled = false;
		let isProgressCompletedCalled = false;
		let isProgressFailureCalled = false;

		const progress = (range?: Range, extraCallBackParams?: unknown) => {
			assert.isTrue(extraCallBackParams);
			assert.isDefined(range);
			isProgressReportCalled = true;
		};
		const completed = (result?: UploadResult, extraCallBackParams?: unknown) => {
			assert.isTrue(extraCallBackParams);
			assert.isDefined(result.responseBody);
			isProgressCompletedCalled = true;
		};
		const failure = () => {
			isProgressFailureCalled = true;
		};

		const progressCallBack: Progress = {
			progress,
			completed,
			failure,
			extraCallBackParams: true,
		};

		const options: OneDriveLargeFileUploadOptions = {
			path: "/Documents",
			fileName,
			rangeSize: 1024 * 1024,
			progressCallBack,
		};
		const readStream = fs.createReadStream(`./test/sample_files/${fileName}`);
		const file = new StreamUpload(readStream, fileName, totalsize);
		const uploadTask = await OneDriveLargeFileUploadTask.createTaskWithFileObject(client, file, options);
		const response = await uploadTask.upload();
		assert.isDefined(response.responseBody["id"]);
		assert.isTrue(isProgressReportCalled);
		assert.isTrue(isProgressCompletedCalled);
		assert.isFalse(isProgressFailureCalled);
	}).timeout(30 * 1000);

	it("Test OneDrive File Upload", async () => {
		const options: OneDriveLargeFileUploadOptions = {
			path: "/Documents",
			fileName,
			rangeSize: 1024 * 1024,
		};
		const file = fs.readFileSync(`./test/sample_files/${fileName}`);
		const uploadTask = await OneDriveLargeFileUploadTask.create(client, file, options);
		const response = await uploadTask.upload();
		assert.isDefined(response.responseBody["id"]);
	}).timeout(30 * 1000);
});
