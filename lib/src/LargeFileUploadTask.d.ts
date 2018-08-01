import { Client } from "./index";
import { Range } from "./Range";
interface LargeFileUploadTaskOptions {
    sessionRequestUrl: string;
    rangeSize?: number;
    maxTries?: number;
}
interface LargeFileUploadSession {
    url: string;
    expiry: Date;
}
export declare class LargeFileUploadTask {
    client: Client;
    file: File;
    options: LargeFileUploadTaskOptions;
    uploadSession: LargeFileUploadSession;
    nextRange: Range;
    constructor(client: Client, file: File, uploadSession: LargeFileUploadSession, options: LargeFileUploadTaskOptions);
    static create(client: Client, file: File | Blob, options: LargeFileUploadTaskOptions): Promise<any>;
    static createUploadSession(client: Client, requestUrl: string, requestPayload: any): Promise<any>;
    private parseRange;
    private updateTaskStatus;
    getNextRange(): Range;
    sliceFile(range: Range): Blob;
    upload(): Promise<any>;
    uploadSlice(fileSlice: Blob | File, range: Range, totalSize: number): Promise<any>;
    cancel(): Promise<any>;
    getStatus(): Promise<any>;
    resume(): Promise<any>;
    commit(requestUrl: string): Promise<any>;
}
export {};
