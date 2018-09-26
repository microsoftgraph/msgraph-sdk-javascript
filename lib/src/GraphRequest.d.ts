import { Promise } from 'es6-promise';
import 'isomorphic-fetch';
import { Options, URLComponents, GraphRequestCallback, FetchOptions } from "./common";
export declare class GraphRequest {
    config: Options;
    urlComponents: URLComponents;
    _options: FetchOptions;
    _headers: {
        [key: string]: string;
    };
    _responseType: string;
    constructor(config: Options, path: string);
    header(headerKey: string, headerValue: string): this;
    headers(headers: {
        [key: string]: string | number;
    }): this;
    option(key: string, value: any): this;
    options(options: {
        [key: string]: any;
    }): this;
    parsePath(rawPath: string): void;
    private urlJoin;
    buildFullUrl(): string;
    version(v: string): GraphRequest;
    select(properties: string | string[]): GraphRequest;
    expand(properties: string | string[]): GraphRequest;
    orderby(properties: string | string[]): GraphRequest;
    search(searchStr: string): GraphRequest;
    filter(filterStr: string): GraphRequest;
    top(n: number): GraphRequest;
    skip(n: number): GraphRequest;
    skipToken(token: string): GraphRequest;
    count(count: boolean): GraphRequest;
    responseType(responseType: string): GraphRequest;
    private addCsvQueryParameter;
    delete(callback?: GraphRequestCallback): Promise<any>;
    /**
     * Alias for delete call
     */
    del(callback?: GraphRequestCallback): Promise<any>;
    patch(content: any, callback?: GraphRequestCallback): Promise<any>;
    post(content: any, callback?: GraphRequestCallback): Promise<any>;
    /**
     * Alias for Post call
     */
    create(content: any, callback?: GraphRequestCallback): Promise<any>;
    put(content: any, callback?: GraphRequestCallback): Promise<any>;
    /**
     * Alias for update call
     */
    update(content: any, callback?: GraphRequestCallback): Promise<any>;
    get(callback?: GraphRequestCallback): Promise<any>;
    getStream(callback: GraphRequestCallback): Promise<any>;
    putStream(stream: any, callback: GraphRequestCallback): Promise<any>;
    /**
     * @private
     * Sends request and routes response to the callback or resolves to promise
     * @param {RequestInfo} request - The Request object or url string value
     * @param {FetchOptions} options - The options for the fetch api request
     * @param {GraphRequestCallback} callback - The callback that needs to be called on response
     * @return The promise in case if the callback param is empty
     */
    private sendRequestAndRouteResponse;
    /**
     * @private
     * Gets the Promise that will resolve or reject with fetch api request
     * @param {RequestInfo} request - The Request object or url string value
     * @param {FetchOptions} options - The options for the fetch api request
     * @return The Promise that resolves with Response
     */
    private routeResponseToPromise;
    /**
     * @private
     * Makes request to the service by getting auth token from the auth provider
     * @param {RequestInfo} request - The Request object or url string value
     * @param {FetchOptions} options - The options for the fetch api request
     * @param {GraphRequestCallback} callback - The callback function
     */
    private routeResponseToCallback;
    /**
     * @private
     * Customizes the fetch options with the Auth token, SDKVersion header and customization applied via init, .header, .headers, .option, .options etc
     * @param {FetchOptions} options - The options for the fetch api request
     * @param {string} accessToken - The access token value
     * @return The fetch options with customization
     */
    private configureRequestOptions;
    query(queryDictionaryOrString: string | {
        [key: string]: string | number;
    }): GraphRequest;
    private createQueryString;
    private parseDocumentResponse;
    private convertResponseType;
}
