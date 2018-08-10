/**
 * @module LargeFileUploadTask
 */
/// <reference types="node" />
import { Client } from "./index";
import { Range } from "./Range";
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
}
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
export declare class LargeFileUploadTask {
    /** The GraphClient instance */
    client: Client;
    /** The object holding file details */
    file: FileObject;
    /** The object holding options for the task  */
    options: LargeFileUploadTaskOptions;
    /** The object for upload session */
    uploadSession: LargeFileUploadSession;
    /** The next range needs to be uploaded */
    nextRange: Range;
    /**
     * Constructs a LargeFileUploadTask
     * @param {Client} client - The GraphClient instance
     * @param {FileObject} file - The FileObject holding file needs to be uploaded
     * @param {LargeFileUploadSession} uploadSession - The upload session to which the upload has to be done
     * @param {LargeFileUploadTaskOptions} options - The upload task option
     */
    constructor(client: Client, file: FileObject, uploadSession: LargeFileUploadSession, options: LargeFileUploadTaskOptions);
    /**
     * @static
     * @async
     * Creates a LargeFileUploadTask
     * @param {Client} client - The GraphClient instance
     * @param {Blob | Buffer | File} file - File represented as Blob, File or Buffer
     * @param {LargeFileUploadTaskOptions} options - The options for upload task
     * @return The promise that will be resolves to LargeFileUploadTask instance
     */
    static create(client: Client, file: Blob | Buffer | File, options: LargeFileUploadTaskOptions): Promise<any>;
    /**
     * @static
     * @async
     * Makes request to the server to create an upload session
     * @param {Client} client - The GraphClient instance
     * @param {string} requestUrl - The URL to create the upload session
     * @param {any} requestPayload - The payload to be sent with the request
     * @return The promise that resolves to LargeFileUploadSession
     */
    static createUploadSession(client: Client, requestUrl: string, requestPayload: any): Promise<any>;
    /**
     * Parses given range string to the Range instance
     * @param {string[]} ranges - The ranges value
     * @return The range instance
     */
    parseRange(ranges: string[]): Range;
    /**
     * Updates the expiration date and the next range
     * @param {UploadStatusResponse} response - The response of the upload status
     */
    updateTaskStatus(response: UploadStatusResponse): void;
    /**
     * Gets next range that needs to be uploaded
     * @return - The range instance
     */
    getNextRange(): Range;
    /**
     * Slices the file content to the given range
     * @param {Range} range - The range value
     * @return The sliced ArrayBuffer or Blob
     */
    sliceFile(range: Range): ArrayBuffer | Blob;
    /**
     * @async
     * Uploads file to the server in a sequential order by slicing the file
     * @return The promise resolves to uploaded response
     */
    upload(): Promise<any>;
    /**
     * @async
     * Uploads given slice to the server
     * @param {ArrayBuffer | Blob | File} fileSlice - The file slice
     * @param {Range} range - The range value
     * @param {number} totalSize - The total size of a complete file
     */
    uploadSlice(fileSlice: ArrayBuffer | Blob | File, range: Range, totalSize: number): Promise<any>;
    /**
     * @async
     * Deletes upload session in the server
     * @return The promise resolves to cancelled response
     */
    cancel(): Promise<any>;
    /**
     * @async
     * Gets status for the upload session
     * @return The promise resolves to the status enquiry response
     */
    getStatus(): Promise<any>;
    /**
     * @async
     * Resumes upload session and continue uploading the file from the last sent range
     * @return The promise resolves to the uploaded response
     */
    resume(): Promise<any>;
    /**
     * Commits upload session to end uploading
     * @param {string} requestUrl - The URL to commit the upload session
     * @return The promise resolves to committed response
     */
    commit(requestUrl: string): Promise<any>;
}
export {};
