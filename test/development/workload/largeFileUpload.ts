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

import { OneDriveLargeFileUploadOptions, OneDriveLargeFileUploadTask, Range, StreamUpload, UploadEventHandlers } from "../../../src/index";

describe("LargeFileUpload", () => {
	const fileName = "sample_image.jpg";
	const stats = fs.statSync(`./test/sample_files/${fileName}`);
	const totalsize = stats.size;
	it("Test OneDrive stream upload with progress callback options", async () => {
		let isProgressReportCalled = false;

		const progress = (range?: Range, extraCallBackParams?: unknown) => {
			assert.isTrue(extraCallBackParams);
			assert.isDefined(range);
			isProgressReportCalled = true;
		};

		const uploadEventHandlers: UploadEventHandlers = {
			progress,
			extraCallbackParam: true,
		};

		const options: OneDriveLargeFileUploadOptions = {
			path: "/Documents",
			fileName,
			rangeSize: 1024 * 1024,
			uploadEventHandlers,
		};
		const readStream = fs.createReadStream(`./test/sample_files/${fileName}`);
		const file = new StreamUpload(readStream, fileName, totalsize);
		const uploadTask = await OneDriveLargeFileUploadTask.createTaskWithFileObject(client, file, options);
		const response = await uploadTask.upload();
		assert.isDefined(response.responseBody["id"]);
		assert.isTrue(isProgressReportCalled);
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

    it("Test OneDrive File Upload to custom url", async () => {
		const options: OneDriveLargeFileUploadOptions = {
			path: "/Documents",
			fileName,
			rangeSize: 1024 * 1024,
            uploadSessionURL: `https://graph.microsoft.com/v1.0/me/drive/special/createUploadSession`
		};
		const file = fs.readFileSync(`./test/sample_files/${fileName}`);
		const uploadTask = await OneDriveLargeFileUploadTask.create(client, file, options);
		const response = await uploadTask.upload();
		assert.isDefined(response.responseBody["id"]);
	}).timeout(30 * 1000);
});
