/**
 * @module LargeFileUploadTask
 */
import { Client } from "../index";
import { Range } from "../Range";
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
 * Signature to define options for upload task
 * @property {number} [rangeSize = LargeFileUploadTask.DEFAULT_FILE_SIZE] - Specifies the range chunk size
 */
export interface LargeFileUploadTaskOptions {
    rangeSize?: number;
}
/**
 * @interface
 * Signature to represent upload session resulting from the session creation in the server
 * @property {string} url - The URL to which the file upload is made
 * @property {Date} expiry - The expiration of the time of the upload session
 */
export interface LargeFileUploadSession {
    url: string;
    expiry: Date;
}
/**
 * @interface
 * Signature to define the properties and content of the file in upload task
 * @property {ArrayBuffer | File} content - The actual file content
 * @property {string} name - Specifies the file name with extension
 * @property {number} size - Specifies size of the file
 */
export interface FileObject {
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
    * Default value for the rangeSize
    */
    private DEFAULT_FILE_SIZE;
    /**
     * Constructs a LargeFileUploadTask
     * @param {Client} client - The GraphClient instance
     * @param {FileObject} file - The FileObject holding details of a file that needs to be uploaded
     * @param {LargeFileUploadSession} uploadSession - The upload session to which the upload has to be done
     * @param {LargeFileUploadTaskOptions} options - The upload task options
     */
    constructor(client: Client, file: FileObject, uploadSession: LargeFileUploadSession, options: LargeFileUploadTaskOptions);
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
     * @return The range instance
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
}
export {};
