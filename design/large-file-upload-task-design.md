##### LargeFileUpload Task Design Changes

This document proposes high-level design modifications to the `LargeFileUploadTask` implementation. Reasons for change -

-   Enhancement - Support Node.js Stream upload. Issue [#320](https://github.com/microsoftgraph/msgraph-sdk-javascript/issues/320).
-   Bug Fix - Support large file uploads to Outlook API. Issue [#359](https://github.com/microsoftgraph/msgraph-sdk-javascript/issues/359).

Outline of the current implementation -

```
interface FileObject {
	content: ArrayBuffer | File;
	name: string;
	size: number;
}

// Create a LargeFileUploadTask object with the file object
constructor(client: Client, file: FileObject, uploadSession: LargeFileUploadSession, options: LargeFileUploadTaskOptions = {})

// Call the LargeFileUploadTask.upload() function to upload large file to the API in ranges.
upload() {
	while (true) {
		const fileSlice = this.sliceFile(nextRange);
		const response = await this.uploadSlice(fileSlice, nextRange, this.file.size);
		// Upon completion of upload process incase of onedrive, driveItem is returned, which contains id
		if (response.id !== undefined) {
			return response;
		} else {
			this.updateTaskStatus(response);
		}
	}
}

// Function to slice the file as per the "Next Expected Ranges".
sliceFile(range: Range): ArrayBuffer | Blob {
	const blob = this.file.content.slice(range.minValue, range.maxValue + 1);
	return blob;
}
```

###### 1. Support Node.js Stream upload

-   The requirement is to allow a `FileObject` with content of type [Readable Stream](https://nodejs.org/api/stream.html#stream_class_stream_readable)
-   The `file.slice()` function is not applicable to `Readable Stream` and logic for splitting and handling `Stream` varies.
-   Note - Chunk uploading is not supported by the Graph API and the stream will be split into multiple ranges and each range will uploaded sequentially.

-   Proposed changes in the current design -
    -   Move `sliceFlice()` in the FileObject Interface
    ```
    interface FileObject{
        sliceFile(range: Range): ArrayBuffer | Blob
    }
    ```
    -   Introduce new classes implementing the `FileObject` interface. Example - `StreamLargeFile.ts` will contain the `sliceFile` function and logic to handle stream classes.
    -   Change in the upload function will look like
    ```
    upload() {
        // current : const fileSlice = this.sliceFile(nextRange);
        // proposed change is as follows -
        const fileSlice = this.fileObject.sliceFile(Range);
    }
    ```
    -   This change is based on idea of Dependency Inversion principle. The goal is to depend on abstractions so that we can easily add or modify support for different file formats in the future or allow customized `FileObject` implementations.
-   For browser support, take a dependency on [stream-browserify](https://www.npmjs.com/package/stream-browserify) - the stream module from node core, for browsers and make necessary updates to the rollup or bundling process.

###### 2. Support large file uploads to Outlook API

-   Bug in the current implemenation - `response.id !== undefined` this condition to mark the completion of an upload does not work for Outlook API since the final response does not contain a response body.
-   An upload task should be marked as completed if the response status is a 201. [SDK-design document](https://github.com/microsoftgraph/msgraph-sdk-design/blob/master/tasks/FileUploadTask.md).
-   The LargeFileUploadTask should allow uploads to OneDrive API, Outlook API and PrintDocument API.
-   Proposed changes-
    -   Add class `OutlookLargeFileUploadTask.ts` extending the `LargeFileUploadTask` similar to `OneDriveLargeFileUploadTask.ts`. This allows to handle Outlook API specific file upload customizations.
    -   Currently the `upload` function in the `LargeFileUploadTask` returns only the response body. This can be changed to return the raw response received from the API which can filtered in the child class implementations.
