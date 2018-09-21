/**
 * @module OneDriveLargeFileUploadTask
 */
/// <reference types="node" />
import { Client } from "../index";
import { FileObject, LargeFileUploadSession, LargeFileUploadTask, LargeFileUploadTaskOptions } from "./LargeFileUploadTask";
/**
 * @interface
 * Signature to define options when creating an upload task
 * @property {string} fileName - Specifies the name of a file to be uploaded (with extension)
 * @property {string} [path] - The path to which the file needs to be uploaded
 * @property {number} [rangeSize] - Specifies the range chunk size
 */
interface OneDriveLargeFileUploadOptions {
    fileName: string;
    path?: string;
    rangeSize?: number;
}
/**
 * Class representing OneDriveLargeFileUploadTask
 */
export declare class OneDriveLargeFileUploadTask extends LargeFileUploadTask {
    /**
     * Default path for the file being uploaded
     */
    static DEFAULT_UPLOAD_PATH: string;
    /**
     * Constructs a OneDriveLargeFileUploadTask
     * @param {Client} client - The GraphClient instance
     * @param {FileObject} file - The FileObject holding details of a file that needs to be uploaded
     * @param {LargeFileUploadSession} uploadSession - The upload session to which the upload has to be done
     * @param {LargeFileUploadTaskOptions} options - The upload task options
     */
    constructor(client: Client, file: FileObject, uploadSession: LargeFileUploadSession, options: LargeFileUploadTaskOptions);
    /**
     * @static
     * @async
     * Creates a OneDriveLargeFileUploadTask
     * @param {Client} client - The GraphClient instance
     * @param {Blob | Buffer | File} file - File represented as Blob, Buffer or File
     * @param {OneDriveLargeFileUploadOptions} options - The options for upload task
     * @return The promise that will be resolves to OneDriveLargeFileUploadTask instance
     */
    static create(client: Client, file: Blob | Buffer | File, options: OneDriveLargeFileUploadOptions): Promise<any>;
    /**
     * @static
     * Constructs the create session url for Onedrive
     * @param {string} fileName - The name of the file
     * @param {path} [path = OneDriveLargeFileUploadTask.DEFAULT_UPLOAD_PATH] - The path for the upload
     * @return The constructed create session url
     */
    static constructCreateSessionUrl(fileName: string, path?: string): string;
    /**
     * @static
     * @async
     * Makes request to the server to create an upload session
     * @param {Client} client - The GraphClient instance
     * @param {string} requestUrl - The URL to create the upload session
     * @param {string} fileName - The name of a file to upload, (with extension)
     * @return The promise that resolves to LargeFileUploadSession
     */
    static createUploadSession(client: Client, requestUrl: string, fileName: string): Promise<any>;
    /**
     * Commits upload session to end uploading
     * @param {string} requestUrl - The URL to commit the upload session
     * @return The promise resolves to committed response
     */
    commit(requestUrl: string): Promise<any>;
}
export {};
