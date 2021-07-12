/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/* eslint-disable simple-import-sort/imports */

// First, create an instance of the Microsoft Graph JS SDK Client class
import { client } from "../clientInitialization/ClientWithOptions";
/**
 * OR
 * import { client } from ("../clientInitialization/TokenCredentialAuthenticationProvider");
 * OR
 * require or import client created using an custom authentication provider
 */
import { OneDriveLargeFileUploadOptions, OneDriveLargeFileUploadTask, Range, StreamUpload, UploadEventHandlers, UploadResult } from "@microsoft/microsoft-graph-client";
import * as fs from "fs";
import { Readable } from "stream";

async function upload() {
	const file = fs.createReadStream("./test.pdf");
	const fileName = "FILENAME";
	const stats = fs.statSync(`./test.pdf`);
	const totalsize = stats.size;

	const progress = (range?: Range, extraCallBackParam?: unknown) => {
		console.log("uploading range: ", range);
		console.log(extraCallBackParam);
		return true;
	};

	const uploadEventHandlers: UploadEventHandlers = {
		progress,
		extraCallbackParam: "any paramater needed by the callback implementation",
	};

	const options: OneDriveLargeFileUploadOptions = {
		fileName,
		conflictBehavior: "rename",
		rangeSize: 1024 * 1024,
		uploadEventHandlers,
	};

	const stream = new StreamUpload(file, "test.pdf", totalsize);
	const task = await OneDriveLargeFileUploadTask.createTaskWithFileObject<Readable>(client, stream, options);
	const uploadResult: UploadResult = await task.upload();
	return uploadResult;
}

upload()
	.then((uploadResult) => console.log(uploadResult))
	.catch((error) => console.log(error));
