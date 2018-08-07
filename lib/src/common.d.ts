export declare let oDataQueryNames: string[];
export declare const DEFAULT_VERSION = "v1.0";
export declare const GRAPH_BASE_URL = "https://graph.microsoft.com/";
export declare const PACKAGE_VERSION = "1.0.0";
export interface AuthProviderCallback {
    (error: any, accessToken: string): void;
}
export interface Options {
    debugLogging?: boolean;
    defaultVersion?: string;
    authProvider?: (done: AuthProviderCallback) => void;
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
export interface DefaultRequestHeaders {
    Authorization: string;
    SdkVersion: string;
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
