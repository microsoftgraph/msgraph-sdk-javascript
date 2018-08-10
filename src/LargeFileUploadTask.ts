/**
 * @module LargeFileUploadTask
 */

import { Client } from "./index";
import { Range } from "./Range";
import { getValidRangeSize } from "./LargeFileUploadUtil";

/**
 * @interface
 * Signature to define options when creating an upload task
 * @property {string} sessionRequestUrl - The default values for parties
 * @property {string} fileName - Specifies the file name of the file to upload
 * @property {number} [rangeSize = LargeFileUploadUtil.DEFAULT_FILE_SIZE] - Specifies the range chunk size
 */
interface LargeFileUploadTaskOptions {
    sessionRequestUrl: string;
    fileName: string;
    rangeSize?: number;
};

/**
 * @interface
 * Signature to represent upload session resulting from the session creation in the server
 * @property {string} url - The URL to which the file upload is made
 * @property {Date} expiry - The expiration of the time of the upload session
 */
interface LargeFileUploadSession {
    url: string;
    expiry: Date;
}

/**
 * @interface
 * Signature to represent the resulting response in the status enquiry request
 * @property {string} expirationDateTime - The expiration of the time of the upload session
 * @property {string[]} nextExpectedRanges - The ranges expected in next consecutive request in the upload
 */
interface UploadStatusResponse {
    expirationDateTime: string;
    nextExpectedRanges: string[];
}

/**
 * @interface
 * Signature to define the properties and content of the file in upload task
 * @property {ArrayBuffer | File} content - The actual file content
 * @property {string} name - Specifies the file name with extension
 * @property {number} size - Specifies size of the file
 */
interface FileObject {
    content: ArrayBuffer | File;
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
     * Constructs a LargeFileUploadTask
     * @param {Client} client - The GraphClient instance
     * @param {FileObject} file - The FileObject holding file needs to be uploaded
     * @param {LargeFileUploadSession} uploadSession - The upload session to which the upload has to be done
     * @param {LargeFileUploadTaskOptions} options - The upload task option
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
     * Creates a LargeFileUploadTask
     * @param {Client} client - The GraphClient instance
     * @param {Blob | Buffer | File} file - File represented as Blob, File or Buffer
     * @param {LargeFileUploadTaskOptions} options - The options for upload task
     * @return The promise that will be resolves to LargeFileUploadTask instance
     */
    static async create(client: Client, file: Blob | Buffer | File, options: LargeFileUploadTaskOptions): Promise<any> {
        let _fileObject: FileObject = <FileObject>{};
        switch(file.constructor.name) {
            case "Blob":
                _fileObject.content = new File([<Blob>file], _fileObject.name);
                _fileObject.size = _fileObject.content.size;
                break;
            case "File":
                let _file = <File>file;
                _fileObject.content = _file;
                _fileObject.size = _file.size;
                break;
            case "Buffer":
                let b = <Buffer>file;
                _fileObject.size = b.byteLength - b.byteOffset;
                _fileObject.content = b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength);
                break;
        }
        _fileObject.name = options.fileName;
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
     * @param {Client} client - The GraphClient instance
     * @param {string} requestUrl - The URL to create the upload session
     * @param {any} requestPayload - The payload to be sent with the request
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
     * Parses given range string to the Range instance
     * @param {string[]} ranges - The ranges value
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
     * Updates the expiration date and the next range
     * @param {UploadStatusResponse} response - The response of the upload status
     */
    updateTaskStatus(response: UploadStatusResponse): void {
        let self = this;
        self.uploadSession.expiry = new Date(response.expirationDateTime);
        self.nextRange = self.parseRange(response.nextExpectedRanges);
    }

    /**
     * Gets next range that needs to be uploaded
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
     * Slices the file content to the given range
     * @param {Range} range - The range value
     * @return The sliced ArrayBuffer or Blob
     */
    sliceFile(range: Range): ArrayBuffer | Blob {
        let blob = this.file.content.slice(range.minValue, range.maxValue + 1);
        return blob;
    }

    /**
     * @async
     * Uploads file to the server in a sequential order by slicing the file
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
                // Upon completion of upload process incase of onedrive, driveItem is returned, which contains id
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
     * Uploads given slice to the server
     * @param {ArrayBuffer | Blob | File} fileSlice - The file slice
     * @param {Range} range - The range value
     * @param {number} totalSize - The total size of a complete file
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
     * Deletes upload session in the server
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
     * Gets status for the upload session
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
     * Resumes upload session and continue uploading the file from the last sent range
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
     * Commits upload session to end uploading
     * @param {string} requestUrl - The URL to commit the upload session
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
