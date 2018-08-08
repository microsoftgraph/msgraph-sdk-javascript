/**
 * @module LargeFileUploadTask
 */

import { Client } from "./index";
import { Range } from "./Range";
import { getValidRangeSize } from "./LargeFileUploadUtil";

/**
 * User Options to create the upload task
 */
interface LargeFileUploadTaskOptions {
    sessionRequestUrl: string;
    fileName?: string;
    rangeSize?: number;
    maxTries?: number;
};

/**
 * Signature for upload session resulting from the session creation in the server
 */
interface LargeFileUploadSession {
    url: string;
    expiry: Date;
}

/**
 * Signature for the response results in the status enquiry request
 */
interface UploadStatusResponse {
    expirationDateTime: string;
    nextExpectedRanges: string[];
}

/**
 * Holds the details of file required
 */
interface FileObject {
    content: File | ArrayBuffer;
    name: string;
    size: number;
}

/**
 * Class representing LargeFileUploadTask
 */
export class LargeFileUploadTask {
    /** The GraphClient instance */
    client: Client

    /** The object holding file details */
    file: FileObject

    /** The object holding options for the task  */
    options: LargeFileUploadTaskOptions

    /** The object for upload session */
    uploadSession: LargeFileUploadSession

    /** The next range needs to be uploaded */
    nextRange: Range

    /**
     * Contructs a LargeFileUploadTask
     * @param client - The GraphClient instance
     * @param file - The FileObject holding file needs to be uploaded
     * @param uploadSession - The upload session to which the upload has to be done
     * @param options - The upload task option
     */
    constructor(client: Client, file: FileObject, uploadSession: LargeFileUploadSession, options: LargeFileUploadTaskOptions) {
        let self = this;
        self.client = client;
        self.file = file;
        options.rangeSize = getValidRangeSize(options.rangeSize);
        self.options = options;
        self.uploadSession = uploadSession;
        self.nextRange = new Range(0, self.options.rangeSize - 1);
    }

    /**
     * @static
     * @async
     * Creates a LargeFilUploadTask
     * @param client - The GraphClient instance
     * @param file - File representated as Blob, File or NodeFile object
     * @param options - The options for upload task
     * @return The promise that will be resolves to LargeFileUploadTask instance
     */
    static async create(client: Client, file: Blob | File | Buffer, options: LargeFileUploadTaskOptions): Promise<any> {
        let self = LargeFileUploadTask,
            _fileObject: FileObject = <FileObject>{};
        console.log(file.constructor.name);
        debugger;
        switch(file.constructor.name) {
            case "Blob":
                _fileObject.name = (options.fileName !== undefined) ? options.fileName : self.getRandomFileName();
                _fileObject.content = new File([<Blob>file], _fileObject.name);
                _fileObject.size = _fileObject.content.size;
                break;
            case "File":
                let _file = <File>file;
                _fileObject.content = _file;
                _fileObject.name = _fileObject.name = (options.fileName !== undefined) ? options.fileName : _file.name;
                _fileObject.size = _file.size;
                break;
            case "Buffer":
                let b = <Buffer>file;
                _fileObject.name = _fileObject.name = (options.fileName !== undefined) ? options.fileName : self.getRandomFileName();
                _fileObject.size = b.byteLength - b.byteOffset;
                _fileObject.content = b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength);
                break;
        }
        let payload = {
            item: {
                "@microsoft.graph.conflictBehavior": "rename",
                name: _fileObject.name
            }
        };
        try {
            let session = await LargeFileUploadTask.createUploadSession(client, options.sessionRequestUrl, payload);
            return new LargeFileUploadTask(client, _fileObject, session, options);
        } catch(err) {
            throw err;
        }
    }

    /**
     * @static
     * @async
     * Makes request to the server to create an upload session
     * @param client - The GraphClient instance
     * @param requestUrl - The URL to create the upload session
     * @param requestPayload - The payload to be sent with the request
     * @return The promise that resolves to LargeFileUploadSession
     */
    static async createUploadSession(client: Client, requestUrl: string, requestPayload: any): Promise<any> {
        try {
            let createSession = await client.api(requestUrl).post(requestPayload);
            return <LargeFileUploadSession>{
                url: createSession.uploadUrl,
                expiry: new Date(createSession.expirationDateTime)
            };
        } catch(err) {
            throw err;
        }
    }

    /**
     * @static
     * Get the random filename for the blob object
     * @return The random filename
     */
    static getRandomFileName(): string {
        return `Upload_${new Date().toDateString().replace(/ /g, "_")}`;
    }

    /**
     * To parse the given range string to the Range instance
     * @param ranges - The ranges value
     * @return The range instance
     */
    parseRange(ranges: string[]): Range {
        let rangeStr = ranges[0];
        if (typeof rangeStr === "undefined" || rangeStr === "") {
            return new Range();
        }
        let firstRange = rangeStr.split("-"),
            minVal = parseInt(firstRange[0]),
            maxVal = parseInt(firstRange[1]);
        if (Number.isNaN(maxVal)) {
            maxVal = this.file.size - 1;
        }
        return new Range(minVal, maxVal);
    }

    /**
     * To update the exipiration date and the next range
     * @param response - The response of the upload status
     */
    updateTaskStatus(response: UploadStatusResponse): void {
        let self = this;
        self.uploadSession.expiry = new Date(response.expirationDateTime);
        self.nextRange = self.parseRange(response.nextExpectedRanges);
    }

    /**
     * Get next range that needs to be uploaded
     * @return - The range instance
     */
    getNextRange(): Range {
        let self = this;
        if (self.nextRange.minValue === -1) {
            return self.nextRange;
        }
        let minVal = self.nextRange.minValue,
            maxValue = minVal + self.options.rangeSize - 1;
        if (maxValue >= self.file.size) {
            maxValue = self.file.size - 1;
        }
        return new Range(minVal, maxValue);
    }

    /**
     * Slice the file content to the given range
     * @param range - The range value
     * @return The sliced arraybuffer or blob
     */
    sliceFile(range: Range): ArrayBuffer | Blob {
        let blob = this.file.content.slice(range.minValue, range.maxValue + 1);
        return blob;
    }

    /**
     * @async
     * Upload the file to the server by slicing it in a sequential order
     * @return The promise resolves to uploaded response
     */
    async upload(): Promise<any> {
        let self = this;
        try {
            while (true) {
                let nextRange = self.getNextRange();
                if (nextRange.maxValue === -1) {
                    let err = new Error("Task with which you are trying to upload is already completed, Please check for your uploaded file");
                    err.name = "Invalid Session";
                    throw err;
                }
                let fileSlice = self.sliceFile(nextRange),
                    response = await self.uploadSlice(fileSlice, nextRange, self.file.size);
                // Upon completion of upload process incaseof onedrive, driveItem is returned, which contains id
                if (response.id !== undefined) {
                    return response;
                } else {
                    self.updateTaskStatus(response);
                }
            }
        } catch(err) {
            throw err;
        }
    }

    /**
     * @async
     * Upload the particular slice to the server
     * @param fileSlice - The file slice
     * @param range - The range value
     * @param totalSize - The size of the complete file
     */
    async uploadSlice(fileSlice: ArrayBuffer | Blob | File, range: Range, totalSize: number): Promise<any> {
        let self = this;
        try {
            if (self.uploadSession.expiry.getTime() <= Date.now()) {
                let err = new Error("Task with which you are uploading is no longer valid, Please create new task to upload");
                err.name = "Invalid Session";
                throw err;
            }
            return await self.client
                .api(self.uploadSession.url)
                .headers({
                    "Content-Length": `${range.maxValue - range.minValue + 1}`,
                    "Content-Range": `bytes ${range.minValue}-${range.maxValue}/${totalSize}`
                })
                .put(fileSlice);
        } catch(err) {
            throw err;
        }
    }

    /**
     * @async
     * Deletes the upload session in the server
     * @return The promise resolves to cancelled response
     */
    async cancel (): Promise<any> {
        let self = this;
        try {
            return await self.client
                .api(self.uploadSession.url)
                .delete();
        } catch (err) {
            throw err;
        }
    }

    /**
     * @async
     * Get the status for the upload session
     * @return The promise resolves to the status enquiry response
     */
    async getStatus(): Promise<any> {
        let self = this;
        try {
            let response = await self.client
                            .api(self.uploadSession.url)
                            .get();
            self.updateTaskStatus(response);
            return response;
        } catch (err) {
            throw err;
        }
    }

    /**
     * @async
     * Resume the upload session and continue uploading the file from the place where it left
     * @return The promise resolves to the uploaded response
     */
    async resume(): Promise<any> {
        let self = this;
        try {
            await self.getStatus();
            return await self.upload();
        } catch (err) {
            throw err;
        }
    }
    
    /**
     * Commit the upload session to end uploading
     * @param requestUrl - The URL to commit the upload session
     * @return The promise resolves to committed response
     */
    async commit(requestUrl: string): Promise<any> {
        let self = this;
        try {
            let payload = {
                name: self.file.name,
                "@microsoft.graph.conflictBehavior": "rename",
                "@microsoft.graph.sourceUrl": self.uploadSession.url
            }
            return await self.client
                .api(requestUrl)
                .put(payload)
        } catch (err) {
            throw err;
        }
    }
}
