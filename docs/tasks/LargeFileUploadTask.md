# Large File Upload Task - Uploading large files to OneDrive

This task simplifies the implementation of OneDrive's [resumable upload](https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/driveitem_createuploadsession).

## Creating the client instance

Refer [this documentation](../CreatingClientInstance.md) for initializing the client.

## Uploading from browser

HTML to select the file for uploading.

```HTML
<input id="fileUpload" type="file" onchange="fileUpload(this)" />
```

Get files from the input element and start uploading.

```typescript
async function fileUpload(elem) {
	let file = elem.files[0];
	try {
		let response = await largeFileUpload(client, file, file.name);
		console.log(response);
		console.log("File Uploaded Successfully.!!");
	} catch (error) {
		console.error(error);
	}
}

async function largeFileUpload(client, file) {
	try {
		let options = {
			path: "/Documents",
			fileName: file.name,
			rangeSize: 1024 * 1024,
		};
		const uploadTask = await MicrosoftGraph.OneDriveLargeFileUploadTask.create(client, file, options);
		const response = await uploadTask.upload();
		return response;
	} catch (err) {
		throw err;
	}
}
```

## Uploading from NodeJS

```typescript
function uploadFile() {
	fs.readFile("<PATH_OF_THE_FILE>", {}, function(err, file) {
		if (err) {
			throw err;
		}
		let fileName = "<NAME_OF_THE_FILE_WITH_EXTN>";
		oneDriveLargeFileUpload(client, file, fileName)
			.then((response) => {
				console.log(response);
				console.log("File Uploaded Successfully.!!");
			})
			.catch((error) => {
				throw err;
			});
	});
}

async function oneDriveLargeFileUpload(client, file, fileName) {
	try {
		let options = {
			path: "/Documents",
			fileName,
			rangeSize: 1024 * 1024,
		};
		const uploadTask = await OneDriveLargeFileUploadTask.create(client, file, options);
		const response = await uploadTask.upload();
		return response;
	} catch (err) {
		console.log(err);
	}
}
```

## We can just resume the broken upload

_Lets consider some break down happens in the middle of uploading, with the uploadTask object in hand you can resume easily._

```typescript
uploadTask.resume();
```

## Even you can control the whole upload process

_You can create the upload task, and play with it by using **sliceFile** and **uploadSlice** methods_

```typescript
let range = uploadTask.getNextRange();
let slicedFile = uploadTask.sliceFile(range);
uploadTask.uploadSlice(slicedFile, range, uploadTask.file.size);
```

## Uploading with custom options

_You can pass in the customized options using LargeFileUploadTask_

```typescript
async function largeFileUpload(client, file) {
	const filename = file.name;
	const driveId = "<YOUR_DRIVE_ID>";
	const path = "<LOCATION_TO_STORE_FILE>";
	try {
		const requestUrl = `/drives/${driveId}/root:${path}/${fileName}:/createUploadSession`;
		const payload = {
			item: {
				"@microsoft.graph.conflictBehavior": "fail",
				name: fileName,
			},
		};
		const fileObject = {
			size: file.size,
			content: file,
			name: fileName,
		};
		const uploadSession = await LargeFileUploadTask.createUploadSession(client, requestUrl, payload);
		const uploadTask = await new LargeFileUploadTask(client, fileObject, uploadSession);
		const response = await uploadTask.upload();
		return response;
	} catch (err) {
		throw err;
	}
}
```
