/**
 * @module OneDriveLargeFileUploadTask
 */

import { Client } from "../index";
import { FileObject, LargeFileUploadSession, LargeFileUploadTask, LargeFileUploadTaskOptions } from "./LargeFileUploadTask";
import { getValidRangeSize } from "./OneDriveLargeFileUploadTaskUtil";

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
};

/**
 * Class representing OneDriveLargeFileUploadTask
 */
export class OneDriveLargeFileUploadTask extends LargeFileUploadTask {
    
    /**
     * Default path for the file being uploaded
     */
    static DEFAULT_UPLOAD_PATH: string = "/";

    /**
     * Constructs a OneDriveLargeFileUploadTask
     * @param {Client} client - The GraphClient instance
     * @param {FileObject} file - The FileObject holding details of a file that needs to be uploaded
     * @param {LargeFileUploadSession} uploadSession - The upload session to which the upload has to be done
     * @param {LargeFileUploadTaskOptions} options - The upload task options
     */
    constructor(client: Client, file: FileObject, uploadSession: LargeFileUploadSession, options: LargeFileUploadTaskOptions) {
        super(client, file, uploadSession, options);
    }

    /**
     * @static
     * @async
     * Creates a OneDriveLargeFileUploadTask
     * @param {Client} client - The GraphClient instance
     * @param {Blob | Buffer | File} file - File represented as Blob, Buffer or File
     * @param {OneDriveLargeFileUploadOptions} options - The options for upload task
     * @return The promise that will be resolves to OneDriveLargeFileUploadTask instance
     */
    static async create(client: Client, file: Blob | Buffer | File, options: OneDriveLargeFileUploadOptions): Promise<any> {
        let fileObj: FileObject = <FileObject>{};
        fileObj.name = options.fileName;
        switch (file.constructor.name) {
            case "Blob":
                fileObj.content = new File([<Blob>file], fileObj.name);
                fileObj.size = fileObj.content.size;
                break;
            case "File":
                let _file = <File>file;
                fileObj.content = _file;
                fileObj.size = _file.size;
                break;
            case "Buffer":
                let b = <Buffer>file;
                fileObj.size = b.byteLength - b.byteOffset;
                fileObj.content = b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength);
                break;
        }
        try {
            let requestUrl = OneDriveLargeFileUploadTask.constructCreateSessionUrl(options.fileName, options.path);
            let session = await OneDriveLargeFileUploadTask.createUploadSession(client, requestUrl, options.fileName);
            let rangeSize = getValidRangeSize(options.rangeSize);
            return new OneDriveLargeFileUploadTask(client, fileObj, session, {rangeSize});
        } catch (err) {
            throw err;
        }
    }

    /**
     * @static
     * Constructs the create session url for Onedrive
     * @param {string} fileName - The name of the file
     * @param {path} [path = OneDriveLargeFileUploadTask.DEFAULT_UPLOAD_PATH] - The path for the upload
     * @return The constructed create session url
     */
    static constructCreateSessionUrl(fileName: string, path: string = OneDriveLargeFileUploadTask.DEFAULT_UPLOAD_PATH): string {
        fileName = fileName.trim();
        path = path.trim();
        if (path === "") {
            path = "/";
        }
        if (path[0] !== "/") {
            path = `/${path}`;
        }
        if (path[path.length - 1] !== "/") {
            path = `${path}/`;
        }
        return encodeURI(`/me/drive/root:${path}${fileName}:/createUploadSession`);
    }

    /**
     * @static
     * @async
     * Makes request to the server to create an upload session
     * @param {Client} client - The GraphClient instance
     * @param {string} requestUrl - The URL to create the upload session
     * @param {string} fileName - The name of a file to upload, (with extension)
     * @return The promise that resolves to LargeFileUploadSession
     */
    static async createUploadSession(client: Client, requestUrl: string, fileName: string): Promise<any> {
        let payload = {
            item: {
                "@microsoft.graph.conflictBehavior": "rename",
                name: fileName
            }
        };
        try {
            let session = await client.api(requestUrl).post(payload);
            return <LargeFileUploadSession>{
                url: session.uploadUrl,
                expiry: new Date(session.expirationDateTime)
            };
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
