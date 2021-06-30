/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

// First, create an instance of the Microsoft Graph JS SDK Client class.

const { client } = require("../clientInitialization/ClientWithOptions");
/**
 * OR
 * const { client } = require("../clientInitialization/TokenCredentialAuthenticationProvider");
 * OR
 * require or import client created using an custom authentication provider
 */

const fs = require("fs");
const { OneDriveLargeFileUploadTask, StreamUpload } = require("@microsoft/microsoft-graph-client");
require("isomorphic-fetch");

async function upload() {
	const fileName = "FILE_NAME";
	const file = fs.createReadStream(`./${fileName}`);
	const totalsize = stats.size;

	const progress = (range, extraCallbackParam) => {
		// implement the progress callback here
		console.log("uploading range: ", range);
		console.log(extraCallbackParam);
		return true;
	};

	const uploadEventHandlers = {
		progress,
		extraCallbackParam: "any paramater needed by the callback implementation",
	};

	const options = {
		fileName,
		conflictBehavior: "rename",
		rangeSize: 1024 * 1024,
		uploadEventHandlers,
	};

	const fileObject = new StreamUpload(file, fileName, totalsize);
	//OR
	// You can also use a FileUpload instance
	//const file = fs.readFileSync();
	//const fileObject = new FileUpload(file, fileName, totalsize);

	//OR
	// You can also create an object from a custom implementation of the FileObject interface
	const task = await OneDriveLargeFileUploadTask.createTaskWithFileObject(client, fileObject, options);
	const uploadResult = await task.upload();
	return uploadResult;
}

upload()
	.then((uploadResult) => console.log(uploadResult))
	.catch((error) => console.log(error));
