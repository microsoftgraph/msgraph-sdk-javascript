/// <reference types="node" />
import { Client } from "./index";
import { Range } from "./Range";
interface LargeFileUploadTaskOptions {
    sessionRequestUrl: string;
    fileName?: string;
    rangeSize?: number;
    maxTries?: number;
}
interface LargeFileUploadSession {
    url: string;
    expiry: Date;
}
interface UploadStatusResponse {
    expirationDateTime: string;
    nextExpectedRanges: string[];
}
interface FileObject {
    content: File | ArrayBuffer;
    name: string;
    size: number;
}
export declare class LargeFileUploadTask {
    client: Client;
    file: FileObject;
    options: LargeFileUploadTaskOptions;
    uploadSession: LargeFileUploadSession;
    nextRange: Range;
    constructor(client: Client, file: FileObject, uploadSession: LargeFileUploadSession, options: LargeFileUploadTaskOptions);
    static create(client: Client, file: Blob | File | Buffer, options: LargeFileUploadTaskOptions): Promise<any>;
    static createUploadSession(client: Client, requestUrl: string, requestPayload: any): Promise<any>;
    static getRandomFileName(): string;
    parseRange(ranges: string[]): Range;
    updateTaskStatus(response: UploadStatusResponse): void;
    getNextRange(): Range;
    sliceFile(range: Range): ArrayBuffer | Blob;
    upload(): Promise<any>;
    uploadSlice(fileSlice: ArrayBuffer | Blob | File, range: Range, totalSize: number): Promise<any>;
    cancel(): Promise<any>;
    getStatus(): Promise<any>;
    resume(): Promise<any>;
    commit(requestUrl: string): Promise<any>;
}
export {};
