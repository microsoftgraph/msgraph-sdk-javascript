import { Client } from "./index";
import { Range } from "./Range";
import { getValidRangeSize } from "./LargeFileUploadUtil";

interface LargeFileUploadTaskOptions {
    sessionRequestUrl: string;
    rangeSize?: number;
    maxTries?: number;
};

interface LargeFileUploadSession {
    url: string;
    expiry: Date;
}

interface UploadStatusResponse {
    expirationDateTime: string,
    nextExpectedRanges: string[]
}

export class LargeFileUploadTask {

    client: Client
    file: File
    options: LargeFileUploadTaskOptions
    uploadSession: LargeFileUploadSession
    nextRange: Range

    constructor(client: Client, file: File, uploadSession: LargeFileUploadSession, options: LargeFileUploadTaskOptions) {
        let self = this;
        self.client = client;
        self.file = file;
        options.rangeSize = getValidRangeSize(options.rangeSize);
        self.options = options;
        self.uploadSession = uploadSession;
        self.nextRange = new Range(0, self.options.rangeSize - 1);
    }

    static async create(client: Client, file: File | Blob, options: LargeFileUploadTaskOptions): Promise<any> {
        let _file: File;
        if (file.constructor.name === "Blob") {
            let randomFileName = `Upload_${new Date().toDateString().replace(/ /g, "_")}`;
            _file = new File([file], randomFileName);
        } else {
            _file = <File>file;
        }
        let payload = {
            item: {
                "@microsoft.graph.conflictBehavior": "rename",
                name: _file.name
            }
        };
        try {
            let session = await LargeFileUploadTask.createUploadSession(client, options.sessionRequestUrl, payload);
            return new LargeFileUploadTask(client, _file, session, options);
        } catch(err) {
            throw err;
        }
    }

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

    private parseRange(ranges: string[]): Range {
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

    private updateTaskStatus(response: UploadStatusResponse): void {
        let self = this;
        self.uploadSession.expiry = new Date(response.expirationDateTime);
        self.nextRange = self.parseRange(response.nextExpectedRanges);
    }

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

    sliceFile(range: Range): Blob {
        let blob = this.file.slice(range.minValue, range.maxValue + 1);
        return blob;
    }

    async upload(): Promise<any> {
        let self = this;
        try {
            while (true) {
                let nextRange = self.getNextRange();
                if (nextRange.maxValue === -1) {
                    throw new Error("Invalid session: Uploading completed");
                }
                let fileSlice = self.sliceFile(nextRange),
                    response = await self.uploadSlice(fileSlice, nextRange, self.file.size);
                // Upon completion of upload process driveItem is returned, which contains id
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

    async uploadSlice(fileSlice: Blob | File, range: Range, totalSize: number): Promise<any> {
        let self = this;
        try {
            if (self.uploadSession.expiry.getTime() <= Date.now()) {
                throw new Error("Upload Session Expired.");
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

    async resume(): Promise<any> {
        let self = this;
        try {
            await self.getStatus();
            return await self.upload();
        } catch (err) {
            throw err;
        }
    }
    
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