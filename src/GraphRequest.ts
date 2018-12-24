/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module GraphRequest
 */

import { PACKAGE_VERSION } from "./Constants";
import { oDataQueryNames, urlJoin, serializeContent } from "./GraphRequestUtil";
import { HTTPClient } from "./HTTPClient";
import { ClientOptions } from "./IClientOptions";
import { GraphRequestCallback } from "./IGraphRequestCallback";
import { FetchOptions } from "./IFetchOptions";
import { RequestMethod } from "./RequestMethod";
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
export class GraphRequest {

    /**
     * @private
     * A member variable to hold HTTPClient instance
     */
    private httpClient: HTTPClient;

    /**
     * @private
     * A member variable to hold client options
     */
    private config: ClientOptions;

    /**
     * @private
     * A member to hold URL Components data
     */
    private urlComponents: URLComponents;

    /**
     * @private
     * A member to hold custom header options for a request
     */
    private _headers: {
        [key: string]: string;
    };

    /**
     * @private
     * A member to hold custom options for a request
     */
    private _options: FetchOptions;

    /**
     * @private
     * A member to hold custom response type for a request
     */
    private _responseType: string;

    /**
     * @private
     * A member to hold the rawResponse for a request
     */
    private _rawResponse: Response;

    /**
     * Creates an instance of GraphRequest
     * @param {HTTPClient} httpClient - The HTTPClient instance 
     * @param {ClientOptions} config - The options for making request
     * @param {string} path - A path string 
     */
    constructor(httpClient: HTTPClient, config: ClientOptions, path: string) {
        let self = this;
        self.httpClient = httpClient;
        self.config = config;
        self.urlComponents = {
            host: self.config.baseUrl,
            version: self.config.defaultVersion,
            oDataQueryParams: {},
            otherURLQueryParams: {}
        };
        self._options = {};
        self._headers = {};
        self.parsePath(path);
    }

    /**
     * @private
     * Parses the path string and creates URLComponents out of it
     * @param {string} path - The request path string
     * @returns nothing
     */
    private parsePath = (path: string): void => {
        let self = this;

        //Strips out the base of the url if they passed in
        if (path.indexOf("https://") !== -1) {
            path = path.replace("https://", "");

            // Find where the host ends
            let endOfHostStrPos = path.indexOf("/");
            // Parse out the host
            self.urlComponents.host = "https://" + path.substring(0, endOfHostStrPos);
            // Strip the host from path
            path = path.substring(endOfHostStrPos + 1, path.length);

            // Remove the following version
            let endOfVersionStrPos = path.indexOf("/");
            // Parse out the version
            self.urlComponents.version = path.substring(0, endOfVersionStrPos);
            // Strip version from path
            path = path.substring(endOfVersionStrPos + 1, path.length);
        }

        // Strip out any leading "/"
        if (path.charAt(0) === "/") {
            path = path.substr(1);
        }

        let queryStrPos = path.indexOf("?");
        if (queryStrPos === -1) {
            // No query string
            self.urlComponents.path = path;
        } else {
            self.urlComponents.path = path.substr(0, queryStrPos);

            // Capture query string into oDataQueryParams and otherURLQueryParams
            let queryParams = path.substring(queryStrPos + 1, path.length).split("&");
            for (let queryParam of queryParams) {
                let queryParams = queryParam.split("="),
                    key = queryParams[0],
                    value = queryParams[1];
                if (oDataQueryNames.indexOf(key)) {
                    self.urlComponents.oDataQueryParams[key] = value;
                } else {
                    self.urlComponents.otherURLQueryParams[key] = value;
                }
            }
        }
    }

    /**
     * @public
     * Sets the custom header for a request
     * @param {string} headerKey - A header key
     * @param {string} headerValue - A header value
     * @returns The same GraphRequest instance that is being called with
     */
    public header(headerKey: string, headerValue: string): GraphRequest {
        let self = this;
        self._headers[headerKey] = headerValue;
        return self;
    }

    /**
     * @public
     * Sets the custom headers for a request
     * @param {KeyValuePairObjectStringNumber} headers - The headers key value pair object
     * @returns The same GraphRequest instance that is being called with
     */
    public headers(headers: KeyValuePairObjectStringNumber): GraphRequest {
        let self = this;
        for (let key in headers) {
            self._headers[key] = <string>headers[key];
        }
        return self;
    }

    /**
     * @public
     * Sets the option for making a request
     * @param {string} key - The key value
     * @param {any} value - The value
     * @returns The same GraphRequest instance that is being called with
     */
    public option(key: string, value: any): GraphRequest {
        let self = this;
        self._options[key] = value;
        return self;
    }

    /**
     * @public
     * Sets the options for making a request
     * @param {{ [key: string]: any }} options - The options key value pair
     * @returns The same GraphRequest instance that is being called with
     */
    public options(options: { [key: string]: any }): GraphRequest {
        let self = this;
        for (let key in options) {
            self._options[key] = options[key];
        }
        return self;
    }

    /**
     * @public
     * Sets the api endpoint version for a request
     * @param {string} version - The version value
     * @returns The same GraphRequest instance that is being called with
     */
    public version(version: string): GraphRequest {
        let self = this;
        self.urlComponents.version = version;
        return self;
    }

    /**
     * @public
     * Sets the api endpoint version for a request
     * @param {ResponseType} responseType - The response type value
     * @returns The same GraphRequest instance that is being called with
     */
    public responseType(responseType: ResponseType): GraphRequest {
        let self = this;
        self._responseType = responseType;
        return self;
    }

    /**
     * @private
     * Adds the query parameter as comma separated values
     * @param {string} propertyName - The name of a property
     * @param {string|string[]} propertyValue - The vale of a property
     * @param {IArguments} additionalProperties - The additional properties
     * @returns nothing
     */
    private addCsvQueryParameter(propertyName: string, propertyValue: string | string[], additionalProperties: IArguments): void {
        // If there are already $propertyName value there, append a ","
        this.urlComponents.oDataQueryParams[propertyName] = this.urlComponents.oDataQueryParams[propertyName] ? this.urlComponents.oDataQueryParams[propertyName] + "," : "";

        let allValues: string[] = [];

        if (additionalProperties.length > 1 && typeof propertyValue === "string") {
            allValues = Array.prototype.slice.call(additionalProperties);
        } else if (typeof propertyValue === "string") {
            allValues.push(propertyValue);
        } else {
            allValues = allValues.concat(propertyValue);
        }

        this.urlComponents.oDataQueryParams[propertyName] += allValues.join(",");
    }

    /**
     * @public
     * To add properties for select OData Query param
     * @param {string|string[]} properties - The Properties value
     * @returns The same GraphRequest instance that is being called with
     */
    /*
    * Accepts .select("displayName,birthday")
    *     and .select(["displayName", "birthday"])
    *     and .select("displayName", "birthday")
    * 
    */
    public select(properties: string | string[]): GraphRequest {
        let self = this;
        self.addCsvQueryParameter("$select", properties, arguments);
        return self;
    }

    /**
     * @public
     * To add properties for expand OData Query param
     * @param {string|string[]} properties - The Properties value
     * @returns The same GraphRequest instance that is being called with
     */
    public expand(properties: string | string[]): GraphRequest {
        let self = this;
        self.addCsvQueryParameter("$expand", properties, arguments);
        return self;
    }

    /**
     * @public
     * To add properties for orderby OData Query param
     * @param {string|string[]} properties - The Properties value
     * @returns The same GraphRequest instance that is being called with
     */
    public orderby(properties: string | string[]): GraphRequest {
        let self = this;
        self.addCsvQueryParameter("$orderby", properties, arguments);
        return self;
    }

    /**
     * @public
     * To add query string for filter OData Query param
     * @param {string} filterStr - The filter query string
     * @returns The same GraphRequest instance that is being called with
     */
    public filter(filterStr: string): GraphRequest {
        let self = this;
        self.urlComponents.oDataQueryParams["$filter"] = filterStr;
        return self;
    }

    /**
     * @public
     * To add criterion for search OData Query param
     * @param {string} searchStr - The search criterion string
     * @returns The same GraphRequest instance that is being called with
     */
    public search(searchStr: string): GraphRequest {
        let self = this;
        self.urlComponents.oDataQueryParams["$search"] = searchStr;
        return self;
    }

    /**
     * @public
     * To add number for top OData Query param
     * @param {number} n - The number value
     * @returns The same GraphRequest instance that is being called with
     */
    public top(n: number): GraphRequest {
        let self = this;
        self.urlComponents.oDataQueryParams["$top"] = n;
        return self;
    }

    /**
     * @public
     * To add number for skip OData Query param
     * @param {number} n - The number value
     * @returns The same GraphRequest instance that is being called with
     */
    public skip(n: number): GraphRequest {
        let self = this;
        self.urlComponents.oDataQueryParams["$skip"] = n;
        return self;
    }

    /**
     * @public
     * To add token string for skipToken OData Query param
     * @param {string} token - The token value
     * @returns The same GraphRequest instance that is being called with
     */
    public skipToken(token: string): GraphRequest {
        let self = this;
        self.urlComponents.oDataQueryParams["$skipToken"] = token;
        return self;
    }

    /**
     * @public
     * To add boolean for count OData Query param
     * @param {boolean} isCount - The count boolean
     * @returns The same GraphRequest instance that is being called with
     */
    public count(isCount: boolean): GraphRequest {
        let self = this;
        self.urlComponents.oDataQueryParams["$count"] = isCount.toString();
        return self;
    }

    /**
     * @public
     * Appends query string to the urlComponent
     * @param {string|KeyValuePairObjectStringNumber} queryDictionaryOrString - The query value
     * @returns The same GraphRequest instance that is being called with
     */
    public query(queryDictionaryOrString: string | KeyValuePairObjectStringNumber): GraphRequest {
        let self = this,
            otherURLQueryParams = self.urlComponents.otherURLQueryParams;
        if (typeof queryDictionaryOrString === "string") {
            let querySplit = queryDictionaryOrString.split("="),
                queryKey = querySplit[0],
                queryValue = querySplit[1];
            otherURLQueryParams[queryKey] = queryValue;
        } else {
            for (let key in queryDictionaryOrString) {
                otherURLQueryParams[key] = queryDictionaryOrString[key];
            }
        }
        return self;
    }

    /**
     * @private
     * Builds the full url from the URLComponents to make a request
     * @returns The URL string that is qualified to make a request to graph endpoint
     */
    private buildFullUrl(): string {
        let self = this;
        let url = urlJoin([self.urlComponents.host,
        self.urlComponents.version,
        self.urlComponents.path])
            + self.createQueryString()

        if (self.config.debugLogging) {
            console.log(url)
        }
        return url;
    }

    /**
     * @private
     * Builds the query string from the URLComponents
     * @returns The Constructed query string
     */
    private createQueryString(): string {
        // Combining query params from oDataQueryParams and otherURLQueryParams
        let urlComponents = this.urlComponents,
            query: string[] = [];
        if (Object.keys(urlComponents.oDataQueryParams).length !== 0) {
            for (let property in urlComponents.oDataQueryParams) {
                query.push(property + "=" + urlComponents.oDataQueryParams[property]);
            }
        }
        if (Object.keys(urlComponents.otherURLQueryParams).length !== 0) {
            for (let property in urlComponents.otherURLQueryParams) {
                query.push(property + "=" + urlComponents.otherURLQueryParams[property]);
            }
        }
        return (query.length > 0) ? "?" + query.join("&") : "";
    }

    /**
     * @private
     * Adds the custom headers and options for the request
     * @returns The options of a request 
     */
    private getRequestOptions(): FetchOptions {
        let self = this,
            defaultHeaders = {
                SdkVersion: `graph-js-${PACKAGE_VERSION}`
            },
            customizedOptions: FetchOptions = {
                headers: {}
            };
        if (self.config.middlewareOptions !== undefined) {
            Object.assign(customizedOptions, self.config.middlewareOptions.requestOptions);
        }
        Object.assign(customizedOptions, self._options);
        Object.assign(customizedOptions.headers, defaultHeaders, self._headers);
        return customizedOptions;
    }

    /**
     * @private
     * @async
     * Adds the custom headers and options to the request and makes the HTTPClient send request call
     * @param {RequestInfo} request - The request url string or the Request object value
     * @param {FetchOptions} options - The options to make a request
     * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
     * @returns A promise that resolves to the response content
     */
    private async send(request: RequestInfo, options: FetchOptions, callback?: GraphRequestCallback): Promise<any> {
        let self = this,
            requestOptions = self.getRequestOptions();
        if (self.config.middlewareOptions !== undefined) {
            if (self.config.middlewareOptions.requestOptions !== undefined) {
                requestOptions.headers = Object.assign({}, self.config.middlewareOptions.requestOptions.headers, requestOptions.headers);
            }
            requestOptions = Object.assign({}, self.config.middlewareOptions.requestOptions, requestOptions);
        }
        let middlewareOptions = Object.assign({}, self.config.middlewareOptions, { requestOptions });
        middlewareOptions.responseType = self._responseType;
        try {
            let context = await self.httpClient.sendRequest(request, options, middlewareOptions);
            self._rawResponse = context.rawResponse;
            if (typeof callback !== "undefined") {
                callback(null, context.response, context.rawResponse);
            } else {
                return context.response;
            }
        } catch (error) {
            if (typeof callback !== "undefined") {
                callback(error, null);
            } else {
                throw error;
            }
        }
    }

    /**
     * @public
     * @async
     * Makes a http request with GET method
     * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
     * @returns A promise that resolves to the get response
     */
    public async get(callback?: GraphRequestCallback): Promise<any> {
        let self = this,
            url = self.buildFullUrl(),
            options: FetchOptions = {
                method: RequestMethod.GET
            };
        try {
            let response = await self.send(url, options, callback);
            return response;
        } catch (error) {
            throw error;
        }
    }

    /**
     * @public
     * @async
     * Makes a http request with POST method
     * @param {any} content - The content that needs to be sent with the request
     * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
     * @returns A promise that resolves to the post response
     */
    public async post(content: any, callback?: GraphRequestCallback): Promise<any> {
        let self = this,
            url = self.buildFullUrl(),
            options: FetchOptions = {
                method: RequestMethod.POST,
                body: serializeContent(content),
                headers: (content.constructor !== undefined && content.constructor.name === "FormData") ? {} : {
                    "Content-Type": "application/json"
                }
            };
        try {
            let response = await self.send(url, options, callback);
            return response;
        } catch (error) {
            throw error;
        }
    }

    /**
     * @public
     * @async
     * Alias for Post request call
     * @param {any} content - The content that needs to be sent with the request
     * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
     * @returns A promise that resolves to the post response
     */
    public async create(content: any, callback?: GraphRequestCallback): Promise<any> {
        return await this.post(content, callback);
    }

    /**
     * @public
     * @async
     * Makes http request with PUT method
     * @param {any} content - The content that needs to be sent with the request
     * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
     * @returns A promise that resolves to the put response
     */
    public async put(content: any, callback?: GraphRequestCallback): Promise<any> {
        let self = this,
            url = self.buildFullUrl(),
            options: FetchOptions = {
                method: RequestMethod.PUT,
                body: serializeContent(content),
                headers: {
                    "Content-Type": "application/octet-stream"
                }
            };
        try {
            let response = self.send(url, options, callback);
            return response;
        } catch (error) {
            throw error;
        }
    }

    /**
     * @public
     * @async
     * Makes http request with PATCH method
     * @param {any} content - The content that needs to be sent with the request
     * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
     * @returns A promise that resolves to the patch response
     */
    public async patch(content: any, callback?: GraphRequestCallback): Promise<any> {
        let self = this,
            url = self.buildFullUrl(),
            options: FetchOptions = {
                method: RequestMethod.PATCH,
                body: serializeContent(content),
                headers: {
                    "Content-Type": "application/json"
                }
            };
        try {
            let response = await self.send(url, options, callback);
            return response;
        } catch (error) {
            throw error;
        }
    }

    /**
     * @public
     * @async
     * Alias for PATCH request
     * @param {any} content - The content that needs to be sent with the request
     * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
     * @returns A promise that resolves to the patch response
     */
    public async update(content: any, callback?: GraphRequestCallback): Promise<any> {
        return await this.patch(content, callback);
    }

    /**
     * @public
     * @async
     * Makes http request with DELETE method
     * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
     * @returns A promise that resolves to the delete response
     */
    public async delete(callback?: GraphRequestCallback): Promise<any> {
        let self = this,
            url = self.buildFullUrl(),
            options: FetchOptions = {
                method: RequestMethod.DELETE
            };
        try {
            let response = await self.send(url, options, callback);
            return response;
        } catch (error) {
            throw error
        }
    }

    /**
     * @public
     * @async
     * Alias for delete request call
     * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
     * @returns A promise that resolves to the delete response
     */
    public async del(callback?: GraphRequestCallback): Promise<any> {
        return await this.delete(callback);
    }

    /**
     * @public
     * @async
     * Makes a http request with GET method to read response as a stream.
     * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
     * @returns A promise that resolves to the getStream response
     */
    public async getStream(callback?: GraphRequestCallback): Promise<any> {
        let self = this,
            url = self.buildFullUrl(),
            options = {
                method: RequestMethod.GET
            };
        self.responseType(ResponseType.STREAM);
        try {
            let stream = await self.send(url, options, callback);
            return stream;
        } catch (error) {
            throw error;
        }
    }

    /**
     * @public
     * @async
     * Makes a http request with GET method to read response as a stream.
     * @param {any} stream - The stream instance
     * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
     * @returns A promise that resolves to the putStream response
     */
    public async putStream(stream: any, callback?: GraphRequestCallback): Promise<any> {
        let self = this,
            url = self.buildFullUrl(),
            options = {
                method: RequestMethod.PUT,
                headers: {
                    "Content-Type": "application/octet-stream",
                },
                body: stream
            };
        try {
            let response = await self.send(url, options, callback);
            return response;
        } catch (error) {
            throw error;
        }
    }

    /**
     * @public
     * To get the raw response for a request
     * @returns The raw response instance
     */
    public getRawResponse(): Response {
        return this._rawResponse;
    }
}
