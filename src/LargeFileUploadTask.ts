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
    expirationDateTime: string;
    nextExpectedRanges: string[];
}

interface NodeFile {
    name?: string,
    buffer: Buffer
}

interface FileObject {
    content: File | ArrayBuffer;
    name: string;
    size: number;
}

export class LargeFileUploadTask {

    client: Client
    file: FileObject
    options: LargeFileUploadTaskOptions
    uploadSession: LargeFileUploadSession
    nextRange: Range

    constructor(client: Client, file: FileObject, uploadSession: LargeFileUploadSession, options: LargeFileUploadTaskOptions) {
        let self = this;
        self.client = client;
        self.file = file;
        options.rangeSize = getValidRangeSize(options.rangeSize);
        self.options = options;
        self.uploadSession = uploadSession;
        self.nextRange = new Range(0, self.options.rangeSize - 1);
    }

    // This method should be called to create an LargeFileUploadTask
    // To create this uploadTask in node user has to provide the file in the NodeFile format

    // retuns the instance of LargeFileUploadTask by making request to the sessionCreationUrl that is provided
    static async create(client: Client, file: Blob | File | NodeFile, options: LargeFileUploadTaskOptions): Promise<any> {
        let self = LargeFileUploadTask,
            _fileObject: FileObject = <FileObject>{};
        switch(file.constructor.name) {
            case "Blob":
                _fileObject.name = self.getRandomFileName();
                _fileObject.content = new File([<Blob>file], _fileObject.name);
                _fileObject.size = _fileObject.content.size;
                break;
            case "File":
                let _file = <File>file;
                _fileObject.content = _file;
                _fileObject.name = _file.name;
                _fileObject.size = _file.size;
                break;
            case "Object":
                let nodeFile = <NodeFile>file;
                if (nodeFile.buffer !== undefined) {
                    let b = (<NodeFile>file).buffer;
                    _fileObject.name = (nodeFile.name !== undefined) ? nodeFile.name : self.getRandomFileName();
                    _fileObject.size = b.byteLength - b.byteOffset;
                    _fileObject.content = b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength);
                }
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

    // Makes call to server to create an uploadsession
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

    // Returns random filename created from the current time
    static getRandomFileName(): string {
        return `Upload_${new Date().toDateString().replace(/ /g, "_")}`;
    }

    // Parses the range given as the array of string and returns the first range as a Range Object
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

    // updates the task's exipration date and the next expected range
    updateTaskStatus(response: UploadStatusResponse): void {
        let self = this;
        self.uploadSession.expiry = new Date(response.expirationDateTime);
        self.nextRange = self.parseRange(response.nextExpectedRanges);
    }

    // Returns the next range that needs to be sent based on the rangeSize of the rask
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

    // Slices the file to the given range offset
    sliceFile(range: Range): ArrayBuffer | Blob {
        let blob = this.file.content.slice(range.minValue, range.maxValue + 1);
        return blob;
    }

    // Uploads the file by slicing and uploadin each slice in a sequential manner
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

    // Uploads the given slice by setting the appropriate range and length headers
    async uploadSlice(fileSlice: ArrayBuffer | Blob | File, range: Range, totalSize: number): Promise<any> {
        let self = this;
        try {
            if (self.uploadSession.expiry.getTime() <= Date.now()) {
                throw new Error("Upload Session Expired");
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

    // Delets the upload current upload task in the server
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

    // Fetches the status of the task and updates it in this task instance
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

    // Updates the task status and depending upon the status uploads the file or throws error 
    async resume(): Promise<any> {
        let self = this;
        try {
            await self.getStatus();
            return await self.upload();
        } catch (err) {
            throw err;
        }
    }
    
    // Commits the session that has been rejected after upload for reasons such as name conflict etc
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
