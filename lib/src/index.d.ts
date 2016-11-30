/// <reference path="../../typings/index.d.ts" />
import { Options } from "./CommonObj";
import { GraphRequest } from "./GraphRequest";
export declare class Client {
    config: Options;
    static init(clientOptions?: Options): Client;
    api(path: string): GraphRequest;
}
