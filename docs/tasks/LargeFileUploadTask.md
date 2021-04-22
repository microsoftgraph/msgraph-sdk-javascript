# Large File Upload Task - Uploading large files to OneDrive, Outlook, Print API.

References -

-   [Outlook's large file attachment](https://docs.microsoft.com/en-us/graph/outlook-large-attachments)
-   [OneDrive's resumable upload](https://docs.microsoft.com/en-us/graph/api/driveitem-createuploadsession?view=graph-rest-1.0&preserve-view=true)
-   [Print API's large file upload](https://docs.microsoft.com/en-us/graph/upload-data-to-upload-session)

## Creating the client instance

Refer [this documentation](../CreatingClientInstance.md) for initializing the client.

## Using the LargeFileUpload Task

#### Create an upload session

First step for any upload task is the creation of the upload session.

**Example of a payload for Outlook**

```typescript
const payload = {
	AttachmentItem: {
		attachmentType: "file",
		name: "<FILE_NAME>",
		size: FILE_SIZE,
	},
};
```

**Example of a payload for OneDrive**

```typescript
const payload = {
	item: {
		"@microsoft.graph.conflictBehavior": "rename",
		name: "<FILE_NAME>",
	},
};
```

**Create the upload session**

```typescript
const uploadSession = LargeFileUploadTask.createUploadSession(client, "REQUEST_URL", payload);
```

#### Creating the LargeFileUploadTask object

-   To create the LargeFileUploadTask object you need to create -
-   An upload session as shown above.
-   A `FileObject` instance.

**FileObject Interface**

```typescript
export interface FileObject<T> {
	content: T;
	name: string;
	size: number;
	sliceFile(range: Range): Promise<ArrayBuffer | Blob | Buffer>;
}
```

The Microsoft Graph JavaScript Client SDK provides two implementions -

1. StreamUpload - Supports Node.js stream upload

```typescript
import StreamUpload from "@microsoft/microsoft-graph-client";
import * as fs from "fs";

const fileName = "<FILE_NAME>";
const stats = fs.statSync(`./test/sample_files/${fileName}`);
const totalsize = stats.size;
const readStream = fs.createReadStream(`./test/sample_files/${fileName}`);
const fileObject = new StreamUpload(readStream, fileName, totalsize);
```

Note - In case of a browser application, you can use [stream-browserify](https://www.npmjs.com/package/stream-browserify) and [buffer](https://www.npmjs.com/package/buffer).

2. FileUpload - Supports upload of file formats - ArrayBuffer, Blob, Buffer

```typescript
import FileUpload from "@microsoft/microsoft-graph-client";
import * as fs from "fs";

const fileName = "<FILE_NAME>";
const stats = fs.statSync(`./test/sample_files/${fileName}`);
const totalsize = stats.size;
const readStream = fs.readFileSync(`./test/sample_files/${fileName}`);
const fileObject = new FileUpload(readStream, fileName, totalsize);
```

**_Note_** - You can also have a customized `FileObject` implementation which contains the `sliceFile(range: Range)` function which implements the logic to split the file into ranges.

**Initiate the LargefileUploadTask options with Progress Handler and Range Size**

```typescript
const progress = (range?: Range, extraCallBackParam?: unknown) => {
	// Handle progress event
};

const uploadEventHandlers: UploadEventHandlers = {
	progress,
	extraCallBackParam, // additional parameters to the callback
};

const options: LargeFileUploadTaskOptions = {
	rangeSize: 327680,
	uploadEventHandlers: UploadEventHandlers,
};
```

**Create a LargefileUploadTask object**

```typescript
const uploadTask = new LargeFileUploadTask(client, fileObj, uploadSession, optionsWithProgress);
const uploadResult: UploadResult = await uploadTask.upload();
```

`UploadResult` contains the `location`(received in the Outlook API response headers) and the `responseBody` (responseBody received after successful upload.) properties.

## OneDriveLargeFileUploadTask.

_You can also use `OneDriveLargeFileUploadTask` which provides easier access to upload to OneDrive API_

Example -

```typescript
const uploadEventHandlers: UploadEventHandlers = {
	progress,
	extraCallBackParam: true,
};

const options: OneDriveLargeFileUploadOptions = {
	path: "/Documents",
	fileName,
	rangeSize: 1024 * 1024,
	uploadEventHandlers,
};
const readStream = fs.createReadStream(`./fileName`);
const fileObject = new StreamUpload(readStream, fileName, totalsize);
or
const readFile = fs.readFileSync(`./fileName`);
const fileObject = new FileUpload(readStream, fileName, totalsize);

const uploadTask = await OneDriveLargeFileUploadTask.createTaskWithFileObject(client, fileObject, options);
const uploadResult:UploadResult = await uploadTask.upload();
}
```

> Note: The `OneDriveLargeFileUploadTask.createTaskWithFileObject` also handles the upload session creation.\*\*

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

## Cancelling a largeFileUpload task

_Cancelling an upload session sends a DELETE request to the upload session URL_

```typescript
const cancelResponse = await uploadTask.cancel();
```

## Get the largeFileUpload session

_Returns the largeFileUpload session information containing the URL, expiry date and cancellation status of the task_

```typescript
const uploadsession: LargeFileUploadSession = uploadTask.getUploadSession();
```
