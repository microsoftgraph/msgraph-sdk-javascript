export declare let oDataQueryNames: string[];
export declare const DEFAULT_VERSION = "v1.0";
export declare const GRAPH_BASE_URL = "https://graph.microsoft.com/";
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
