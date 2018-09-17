import { Options } from "./common";
import { GraphRequest } from "./GraphRequest";
export declare class Client {
    config: Options;
    static init(clientOptions?: Options): Client;
    api(path: string): GraphRequest;
}
export * from "./GraphRequest";
export * from "./common";
export * from "./ResponseHandler";
export * from "./OneDriveLargeFileUploadTask";
export * from "./ResponseType";
export * from "./BatchRequestContent";
export * from "./BatchResponseContent";
