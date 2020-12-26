/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import { HTTPClient } from "./HTTPClient";
import { ClientOptions } from "./IClientOptions";
import { GraphRequestCallback } from "./IGraphRequestCallback";
import { MiddlewareOptions } from "./middleware/options/IMiddlewareOptions";
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
 * @property {string[]} otherURLQueryOptions - The non key-value query parameters. Example- '/me?$whatif'
 */
export interface URLComponents {
	host: string;
	version: string;
	path?: string;
	oDataQueryParams: KeyValuePairObjectStringNumber;
	otherURLQueryParams: KeyValuePairObjectStringNumber;
	otherURLQueryOptions?: string[];
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
	 * A member to hold the array of middleware options for a request
	 */
	private _middlewareOptions;
	/**
	 * @private
	 * A member to hold custom response type for a request
	 */
	private _responseType;
	/**
	 * @public
	 * @constructor
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
	 * @returns Nothing
	 */
	private parsePath;
	/**
	 * @private
	 * Adds the query parameter as comma separated values
	 * @param {string} propertyName - The name of a property
	 * @param {string|string[]} propertyValue - The vale of a property
	 * @param {IArguments} additionalProperties - The additional properties
	 * @returns Nothing
	 */
	private addCsvQueryParameter;
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
	 * Parses the query parameters to set the urlComponents property of the GraphRequest object
	 * @param {string|KeyValuePairObjectStringNumber} queryDictionaryOrString - The query parameter
	 * @returns The same GraphRequest instance that is being called with
	 */
	private parseQueryParameter;
	/**
	 * @private
	 * Parses the query parameter of string type to set the urlComponents property of the GraphRequest object
	 * @param {string} queryParameter - the query parameters
	 * returns nothing
	 */
	private parseQueryParamenterString;
	/**
	 * @private
	 * Sets values into the urlComponents property of GraphRequest object.
	 * @param {string} paramKey - the query parameter key
	 * @param {string} paramValue - the query paramter value
	 * @returns nothing
	 */
	private setURLComponentsQueryParamater;
	/**
	 * @private
	 * Check if the query parameter string has a valid key-value structure
	 * @param {string} queryString - the query parameter string. Example -> "name=value"
	 * #returns true if the query string has a valid key-value structure else false
	 */
	private isValidQueryKeyValuePair;
	/**
	 * @private
	 * Updates the custom headers and options for a request
	 * @param {FetchOptions} options - The request options object
	 * @returns Nothing
	 */
	private updateRequestOptions;
	/**
	 * @private
	 * @async
	 * Adds the custom headers and options to the request and makes the HTTPClient send request call
	 * @param {RequestInfo} request - The request url string or the Request object value
	 * @param {FetchOptions} options - The options to make a request
	 * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
	 * @returns A promise that resolves to the response content
	 */
	private send;
	/**
	 * @private
	 * Checks if the content-type is present in the _headers property. If not present, defaults the content-type to application/json
	 * @param none
	 * @returns nothing
	 */
	private setHeaderContentType;
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
	 * @param {KeyValuePairObjectStringNumber | HeadersInit} headers - The request headers
	 * @returns The same GraphRequest instance that is being called with
	 */
	headers(headers: KeyValuePairObjectStringNumber | HeadersInit): GraphRequest;
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
	options(options: { [key: string]: any }): GraphRequest;
	/**
	 * @public
	 * Sets the middleware options for a request
	 * @param {MiddlewareOptions[]} options - The array of middleware options
	 * @returns The same GraphRequest instance that is being called with
	 */
	middlewareOptions(options: MiddlewareOptions[]): GraphRequest;
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
	 * @public
	 * To add properties for select OData Query param
	 * @param {string|string[]} properties - The Properties value
	 * @returns The same GraphRequest instance that is being called with, after adding the properties for $select query
	 */
	select(properties: string | string[]): GraphRequest;
	/**
	 * @public
	 * To add properties for expand OData Query param
	 * @param {string|string[]} properties - The Properties value
	 * @returns The same GraphRequest instance that is being called with, after adding the properties for $expand query
	 */
	expand(properties: string | string[]): GraphRequest;
	/**
	 * @public
	 * To add properties for orderby OData Query param
	 * @param {string|string[]} properties - The Properties value
	 * @returns The same GraphRequest instance that is being called with, after adding the properties for $orderby query
	 */
	orderby(properties: string | string[]): GraphRequest;
	/**
	 * @public
	 * To add query string for filter OData Query param. The request URL accepts only one $filter Odata Query option and its value is set to the most recently passed filter query string.
	 * @param {string} filterStr - The filter query string
	 * @returns The same GraphRequest instance that is being called with, after adding the $filter query
	 */
	filter(filterStr: string): GraphRequest;
	/**
	 * @public
	 * To add criterion for search OData Query param. The request URL accepts only one $search Odata Query option and its value is set to the most recently passed search criterion string.
	 * @param {string} searchStr - The search criterion string
	 * @returns The same GraphRequest instance that is being called with, after adding the $search query criteria
	 */
	search(searchStr: string): GraphRequest;
	/**
	 * @public
	 * To add number for top OData Query param. The request URL accepts only one $top Odata Query option and its value is set to the most recently passed number value.
	 * @param {number} n - The number value
	 * @returns The same GraphRequest instance that is being called with, after adding the number for $top query
	 */
	top(n: number): GraphRequest;
	/**
	 * @public
	 * To add number for skip OData Query param. The request URL accepts only one $skip Odata Query option and its value is set to the most recently passed number value.
	 * @param {number} n - The number value
	 * @returns The same GraphRequest instance that is being called with, after adding the number for the $skip query
	 */
	skip(n: number): GraphRequest;
	/**
	 * @public
	 * To add token string for skipToken OData Query param. The request URL accepts only one $skipToken Odata Query option and its value is set to the most recently passed token value.
	 * @param {string} token - The token value
	 * @returns The same GraphRequest instance that is being called with, after adding the token string for $skipToken query option
	 */
	skipToken(token: string): GraphRequest;
	/**
	 * @public
	 * To add boolean for count OData Query param. The URL accepts only one $count Odata Query option and its value is set to the most recently passed boolean value.
	 * @param {boolean} isCount - The count boolean
	 * @returns The same GraphRequest instance that is being called with, after adding the boolean value for the $count query option
	 */
	count(isCount?: boolean): GraphRequest;
	/**
	 * @public
	 * Appends query string to the urlComponent
	 * @param {string|KeyValuePairObjectStringNumber} queryDictionaryOrString - The query value
	 * @returns The same GraphRequest instance that is being called with, after appending the query string to the url component
	 */
	query(queryDictionaryOrString: string | KeyValuePairObjectStringNumber): GraphRequest;
	/**
	 * @public
	 * @async
	 * Makes a http request with GET method
	 * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
	 * @returns A promise that resolves to the get response
	 */
	get(callback?: GraphRequestCallback): Promise<any>;
	/**
	 * @public
	 * @async
	 * Makes a http request with POST method
	 * @param {any} content - The content that needs to be sent with the request
	 * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
	 * @returns A promise that resolves to the post response
	 */
	post(content: any, callback?: GraphRequestCallback): Promise<any>;
	/**
	 * @public
	 * @async
	 * Alias for Post request call
	 * @param {any} content - The content that needs to be sent with the request
	 * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
	 * @returns A promise that resolves to the post response
	 */
	create(content: any, callback?: GraphRequestCallback): Promise<any>;
	/**
	 * @public
	 * @async
	 * Makes http request with PUT method
	 * @param {any} content - The content that needs to be sent with the request
	 * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
	 * @returns A promise that resolves to the put response
	 */
	put(content: any, callback?: GraphRequestCallback): Promise<any>;
	/**
	 * @public
	 * @async
	 * Makes http request with PATCH method
	 * @param {any} content - The content that needs to be sent with the request
	 * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
	 * @returns A promise that resolves to the patch response
	 */
	patch(content: any, callback?: GraphRequestCallback): Promise<any>;
	/**
	 * @public
	 * @async
	 * Alias for PATCH request
	 * @param {any} content - The content that needs to be sent with the request
	 * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
	 * @returns A promise that resolves to the patch response
	 */
	update(content: any, callback?: GraphRequestCallback): Promise<any>;
	/**
	 * @public
	 * @async
	 * Makes http request with DELETE method
	 * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
	 * @returns A promise that resolves to the delete response
	 */
	delete(callback?: GraphRequestCallback): Promise<any>;
	/**
	 * @public
	 * @async
	 * Alias for delete request call
	 * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
	 * @returns A promise that resolves to the delete response
	 */
	del(callback?: GraphRequestCallback): Promise<any>;
	/**
	 * @public
	 * @async
	 * Makes a http request with GET method to read response as a stream.
	 * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
	 * @returns A promise that resolves to the getStream response
	 */
	getStream(callback?: GraphRequestCallback): Promise<any>;
	/**
	 * @public
	 * @async
	 * Makes a http request with GET method to read response as a stream.
	 * @param {any} stream - The stream instance
	 * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
	 * @returns A promise that resolves to the putStream response
	 */
	putStream(stream: any, callback?: GraphRequestCallback): Promise<any>;
}
export {};
