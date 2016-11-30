/// <reference path="../../typings/index.d.ts" />
export declare const oDataQueryNames: string[];
export declare const DEFAULT_VERSION: string;
export declare const GRAPH_BASE_URL: string;
export interface Options {
    debugLogging?: boolean;
    defaultVersion?: string;
    authProvider?: (done) => void;
    baseUrl?: string;
}
export interface URLComponents {
    host: string;
    version: string;
    path?: string;
    oDataQueryParams: {
        [key: string]: string | number;
    };
    otherURLQueryParams: {
        [key: string]: string | number;
    };
}
export interface GraphRequestCallback {
    (error: GraphError, response: any, rawResponse?: any): void;
}
export interface GraphError {
    statusCode: number;
    code: string;
    message: string;
    requestId: string;
    date: Date;
    body: string;
}
