import { Options } from "./common";
import { GraphRequest } from "./GraphRequest";
export declare class Client {
    config: Options;
    static init(clientOptions?: Options): Client;
    api(path: string): GraphRequest;
}
export * from "./GraphRequest";
export * from "./common";
export * from "./ResponseType";
export * from "./ResponseHandler";
export * from "./tasks/OneDriveLargeFileUploadTask";
export * from "./tasks/PageIterator";
export * from "./content/BatchRequestContent";
export * from "./content/BatchResponseContent";
