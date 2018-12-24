/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import { HTTPClient } from "./HTTPClient";
import { ClientOptions } from "./IClientOptions";
import { ResponseType } from "./ResponseType";
/**
 * @interface
 * Signature to representing key value pairs
 * @property {[key: string] : string | number} - The Key value pair
 */
interface KeyValuePairObjectStringNumber {
    [key: string]: string | number;
}
/**
 * @interface
 * Signature to define URL components
 * @template http://graph.microsoft.com/VERSION/PATH?QUERYSTRING&OTHER_QUERY_PARAMS
 *
 * @property {string} host - The host to which the request needs to be made
 * @property {string} version - Version of the graph endpoint
 * @property {string} [path] - The path of the resource request
 * @property {KeyValuePairObjectStringNumber} oDataQueryParams - The oData Query Params
 * @property {KeyValuePairObjectStringNumber} otherURLQueryParams - The other query params for a request
 */
export interface URLComponents {
    host: string;
    version: string;
    path?: string;
    oDataQueryParams: KeyValuePairObjectStringNumber;
    otherURLQueryParams: KeyValuePairObjectStringNumber;
}
/**
 * @class
 * A Class representing GraphRequest
 */
export declare class GraphRequest {
    /**
     * @private
     * A member variable to hold HTTPClient instance
     */
    private httpClient;
    /**
     * @private
     * A member variable to hold client options
     */
    private config;
    /**
     * @private
     * A member to hold URL Components data
     */
    private urlComponents;
    /**
     * @private
     * A member to hold custom header options for a request
     */
    private _headers;
    /**
     * @private
     * A member to hold custom options for a request
     */
    private _options;
    /**
     * @private
     * A member to hold custom response type for a request
     */
    private _responseType;
    /**
     * @private
     * A member to hold the rawResponse for a request
     */
    private _rawResponse;
    /**
     * Creates an instance of GraphRequest
     * @param {HTTPClient} httpClient - The HTTPClient instance
     * @param {ClientOptions} config - The options for making request
     * @param {string} path - A path string
     */
    constructor(httpClient: HTTPClient, config: ClientOptions, path: string);
    /**
     * @private
     * Parses the path string and creates URLComponents out of it
     * @param {string} path - The request path string
     * @returns nothing
     */
    private parsePath;
    /**
     * @public
     * Sets the custom header for a request
     * @param {string} headerKey - A header key
     * @param {string} headerValue - A header value
     * @returns The same GraphRequest instance that is being called with
     */
    header(headerKey: string, headerValue: string): GraphRequest;
    /**
     * @public
     * Sets the custom headers for a request
     * @param {KeyValuePairObjectStringNumber} headers - The headers key value pair object
     * @returns The same GraphRequest instance that is being called with
     */
    headers(headers: KeyValuePairObjectStringNumber): GraphRequest;
    /**
     * @public
     * Sets the option for making a request
     * @param {string} key - The key value
     * @param {any} value - The value
     * @returns The same GraphRequest instance that is being called with
     */
    option(key: string, value: any): GraphRequest;
    /**
     * @public
     * Sets the options for making a request
     * @param {{ [key: string]: any }} options - The options key value pair
     * @returns The same GraphRequest instance that is being called with
     */
    options(options: {
        [key: string]: any;
    }): GraphRequest;
    /**
     * @public
     * Sets the api endpoint version for a request
     * @param {string} version - The version value
     * @returns The same GraphRequest instance that is being called with
     */
    version(version: string): GraphRequest;
    /**
     * @public
     * Sets the api endpoint version for a request
     * @param {ResponseType} responseType - The response type value
     * @returns The same GraphRequest instance that is being called with
     */
    responseType(responseType: ResponseType): GraphRequest;
    /**
     * @private
     * Adds the query parameter as comma separated values
     * @param {string} propertyName - The name of a property
     * @param {string|string[]} propertyValue - The vale of a property
     * @param {IArguments} additionalProperties - The additional properties
     * @returns nothing
     */
    private addCsvQueryParameter;
    /**
     * @public
     * To add properties for select OData Query param
     * @param {string|string[]} properties - The Properties value
     * @returns The same GraphRequest instance that is being called with
     */
    select(properties: string | string[]): GraphRequest;
    /**
     * @public
     * To add properties for expand OData Query param
     * @param {string|string[]} properties - The Properties value
     * @returns The same GraphRequest instance that is being called with
     */
    expand(properties: string | string[]): GraphRequest;
    /**
     * @public
     * To add properties for orderby OData Query param
     * @param {string|string[]} properties - The Properties value
     * @returns The same GraphRequest instance that is being called with
     */
    orderby(properties: string | string[]): GraphRequest;
    /**
     * @public
     * To add query string for filter OData Query param
     * @param {string} filterStr - The filter query string
     * @returns The same GraphRequest instance that is being called with
     */
    filter(filterStr: string): GraphRequest;
    /**
     * @public
     * To add criterion for search OData Query param
     * @param {string} searchStr - The search criterion string
     * @returns The same GraphRequest instance that is being called with
     */
    search(searchStr: string): GraphRequest;
    /**
     * @public
     * To add number for top OData Query param
     * @param {number} n - The number value
     * @returns The same GraphRequest instance that is being called with
     */
    top(n: number): GraphRequest;
    /**
     * @public
     * To add number for skip OData Query param
     * @param {number} n - The number value
     * @returns The same GraphRequest instance that is being called with
     */
    skip(n: number): GraphRequest;
    /**
     * @public
     * To add token string for skipToken OData Query param
     * @param {string} token - The token value
     * @returns The same GraphRequest instance that is being called with
     */
    skipToken(token: string): GraphRequest;
    /**
     * @public
     * To add boolean for count OData Query param
     * @param {boolean} isCount - The count boolean
     * @returns The same GraphRequest instance that is being called with
     */
    count(isCount: boolean): GraphRequest;
    /**
     * @public
     * Appends query string to the urlComponent
     * @param {string|KeyValuePairObjectStringNumber} queryDictionaryOrString - The query value
     * @returns The same GraphRequest instance that is being called with
     */
    query(queryDictionaryOrString: string | KeyValuePairObjectStringNumber): GraphRequest;
    /**
     * @private
     * Builds the full url from the URLComponents to make a request
     * @returns The URL string that is qualified to make a request to graph endpoint
     */
    private buildFullUrl;
    /**
     * @private
     * Builds the query string from the URLComponents
     * @returns The Constructed query string
     */
    private createQueryString;
    /**
     * @private
     * Adds the custom headers and options for the request
     * @returns The options of a request
     */
    private getRequestOptions;
    /**
     * @private
     * @async
     * Adds the custom headers and options to the request and makes the HTTPClient send request call
     * @param {RequestInfo} request - The request url string or the Request object value
     * @param {FetchOptions} options - The options to make a request
     * @returns A promise that resolves to the response content
     */
    private send;
    /**
     * @public
     * @async
     * Makes a http request with GET method
     * @returns A promise that resolves to the get response
     */
    get(): Promise<any>;
    /**
     * @public
     * @async
     * Makes a http request with POST method
     * @param {any} content - The content that needs to be sent with the request
     * @returns A promise that resolves to the post response
     */
    post(content: any): Promise<any>;
    /**
     * @public
     * @async
     * Alias for Post request call
     * @param {any} content - The content that needs to be sent with the request
     * @returns A promise that resolves to the post response
     */
    create(content: any): Promise<any>;
    /**
     * @public
     * @async
     * Makes http request with PUT method
     * @param {any} content - The content that needs to be sent with the request
     * @returns A promise that resolves to the put response
     */
    put(content: any): Promise<any>;
    /**
     * @public
     * @async
     * Makes http request with PATCH method
     * @param {any} content - The content that needs to be sent with the request
     * @returns A promise that resolves to the patch response
     */
    patch(content: any): Promise<any>;
    /**
     * @public
     * @async
     * Alias for PATCH request
     * @param {any} content - The content that needs to be sent with the request
     * @returns A promise that resolves to the patch response
     */
    update(content: any): Promise<any>;
    /**
     * @public
     * @async
     * Makes http request with DELETE method
     * @returns A promise that resolves to the delete response
     */
    delete(): Promise<any>;
    /**
     * @public
     * @async
     * Alias for delete request call
     * @returns A promise that resolves to the delete response
     */
    del(): Promise<any>;
    /**
     * @public
     * @async
     * Makes a http request with GET method to read response as a stream.
     * @returns A promise that resolves to the getStream response
     */
    getStream(): Promise<any>;
    /**
     * @public
     * @async
     * Makes a http request with GET method to read response as a stream.
     * @param {any} stream - The stream instance
     * @returns A promise that resolves to the putStream response
     */
    putStream(stream: any): Promise<any>;
    /**
     * @public
     * To get the raw response for a request
     * @returns The raw response instance
     */
    getRawResponse(): Response;
}
export {};
