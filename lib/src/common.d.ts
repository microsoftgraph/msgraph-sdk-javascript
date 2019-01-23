export declare let oDataQueryNames: string[];
export declare const DEFAULT_VERSION = "v1.0";
export declare const GRAPH_BASE_URL = "https://graph.microsoft.com/";
/**
 * @constant
 * A package version
 * @NOTE: This should be kept up to date with the version used in package.json.
 * If you are changing this please ensure you are also changing it in package.json.
 */
export declare const PACKAGE_VERSION = "1.4.0";
/**
 * @interface
 * Signature that defines callback for an authentication provider
 * @callback - The anonymous callback function
 */
export interface AuthProviderCallback {
    (error: any, accessToken: string | null): void;
}
/**
 * @interface {@link https://github.com/bitinn/node-fetch/#options}
 * Signature to define the fetch request options for node environment
 * @property {number} [follow] - Maximum redirect count. 0 to not follow redirect
 * @property {number} [timeout] - Request/Response timeout in milliseconds, it resets on redirect. 0 to disable (OS limit applies)
 * @property {number} [compress] - Support gzip/deflate content encoding. false to disable
 * @property {number} [size] - Maximum response body size in bytes. 0 to disable
 * @property {any} [agent] - HTTP(S).Agent instance, allows custom proxy, certificate, lookup, family etc.
 */
export interface NodeFetchInit {
    follow?: number;
    timeout?: number;
    compress?: boolean;
    size?: number;
    agent?: any;
}
/**
 * @interface
 * Signature to define the fetch api options which includes both fetch standard options and also the extended node fetch options
 * @extends RequestInit @see {@link https://fetch.spec.whatwg.org/#requestinit}
 * @extends NodeFetchInit
 */
export interface FetchOptions extends RequestInit, NodeFetchInit {
}
/**
 * @interface
 * Options for initializing the Graph Client
 * @property {boolean} [debugLogging] - The boolean to enable/disable debug logging
 * @property {string} [defaultVersion] - The default version that needs to be used while making graph api request
 * @property {Function} [authProvider] - The function to get the authentication token
 * @property {string} [baseUrl] - Base url that needs to be appended to every request
 * @property {FetchOptions} [fetchOptions] - The options for fetch request
 */
export interface Options {
    debugLogging?: boolean;
    defaultVersion?: string;
    authProvider?: (done: AuthProviderCallback) => void;
    baseUrl?: string;
    fetchOptions?: FetchOptions;
}
/**
 * @interface
 * Signature to define URL components
 * @template http://graph.microsoft.com/VERSION/PATH?QUERYSTRING&OTHER_QUERY_PARAMS
 *
 * @property {string} host - The host to which the request needs to be made
 * @property {string} version - Version of the graph endpoint
 * @property {string} [path] - The path of the resource request
 * @property {[key: string] : string|number} oDataQueryParams - The oData Query Params
 * @property {[key: string] : string|number} otherURLQueryParams - The other query params for a request
 */
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
/**
 * @interface
 * Signature to define Default request headers
 * @property {string} Authorization - The authorization header
 * @property {string} SdkVersion - The sdk version header
 */
export interface DefaultRequestHeaders {
    Authorization: string;
    SdkVersion: string;
}
/**
 * @interface
 * Signature to define the GraphRequest callback
 * @callback - The anonymous callback function
 */
export interface GraphRequestCallback {
    (error: GraphError, response: any, rawResponse?: any): void;
}
/**
 * @interface
 * Signature to represent the Graph error object
 * @NOTE: This is NOT what is returned from the Graph
 * GraphError is created from parsing JSON errors returned from the graph
 * Some fields are renamed ie, "request-id" => requestId so you can use dot notation
 *
 * @property {number} statusCode - The status code of the error
 * @property {string} code - The code to represent the request
 * @property {string} message - The error message
 * @property {string} requestId - The identifier for the request
 * @property {Date} date - The request processed date and time
 * @property {string} body - The original error response by the graph
 */
export interface GraphError {
    statusCode: number;
    code: string;
    message: string;
    requestId: string;
    date: Date;
    body: string;
}
