/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module GraphRequest
 */

import { GraphError } from "./GraphError";
import { GraphErrorHandler } from "./GraphErrorHandler";
import { oDataQueryNames, serializeContent, urlJoin } from "./GraphRequestUtil";
import { GraphResponseHandler } from "./GraphResponseHandler";
import { HTTPClient } from "./HTTPClient";
import { ClientOptions } from "./IClientOptions";
import { Context } from "./IContext";
import { FetchOptions } from "./IFetchOptions";
import { GraphRequestCallback } from "./IGraphRequestCallback";
import { MiddlewareControl } from "./middleware/MiddlewareControl";
import { MiddlewareOptions } from "./middleware/options/IMiddlewareOptions";
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

	/* tslint:disable: variable-name */
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
	 * A member to hold the array of middleware options for a request
	 */
	private _middlewareOptions: MiddlewareOptions[];

	/**
	 * @private
	 * A member to hold custom response type for a request
	 */
	private _responseType: ResponseType;
	/* tslint:enable: variable-name */

	/**
	 * @public
	 * @constructor
	 * Creates an instance of GraphRequest
	 * @param {HTTPClient} httpClient - The HTTPClient instance
	 * @param {ClientOptions} config - The options for making request
	 * @param {string} path - A path string
	 */
	public constructor(httpClient: HTTPClient, config: ClientOptions, path: string) {
		this.httpClient = httpClient;
		this.config = config;
		this.urlComponents = {
			host: this.config.baseUrl,
			version: this.config.defaultVersion,
			oDataQueryParams: {},
			otherURLQueryParams: {},
		};
		this._headers = {};
		this._options = {};
		this._middlewareOptions = [];
		this.parsePath(path);
	}

	/**
	 * @private
	 * Parses the path string and creates URLComponents out of it
	 * @param {string} path - The request path string
	 * @returns Nothing
	 */
	private parsePath = (path: string): void => {
		// Strips out the base of the url if they passed in
		if (path.indexOf("https://") !== -1) {
			path = path.replace("https://", "");

			// Find where the host ends
			const endOfHostStrPos = path.indexOf("/");
			if (endOfHostStrPos !== -1) {
				// Parse out the host
				this.urlComponents.host = "https://" + path.substring(0, endOfHostStrPos);
				// Strip the host from path
				path = path.substring(endOfHostStrPos + 1, path.length);
			}

			// Remove the following version
			const endOfVersionStrPos = path.indexOf("/");
			if (endOfVersionStrPos !== -1) {
				// Parse out the version
				this.urlComponents.version = path.substring(0, endOfVersionStrPos);
				// Strip version from path
				path = path.substring(endOfVersionStrPos + 1, path.length);
			}
		}

		// Strip out any leading "/"
		if (path.charAt(0) === "/") {
			path = path.substr(1);
		}

		const queryStrPos = path.indexOf("?");
		if (queryStrPos === -1) {
			// No query string
			this.urlComponents.path = path;
		} else {
			this.urlComponents.path = path.substr(0, queryStrPos);

			// Capture query string into oDataQueryParams and otherURLQueryParams
			const queryParams = path.substring(queryStrPos + 1, path.length).split("&");
			for (const queryParam of queryParams) {
				const qParams = queryParam.split("=");
				const key = qParams[0];
				const value = qParams[1];
				if (oDataQueryNames.indexOf(key) !== -1) {
					this.urlComponents.oDataQueryParams[key] = value;
				} else {
					this.urlComponents.otherURLQueryParams[key] = value;
				}
			}
		}
	};

	/**
	 * @private
	 * Adds the query parameter as comma separated values
	 * @param {string} propertyName - The name of a property
	 * @param {string|string[]} propertyValue - The vale of a property
	 * @param {IArguments} additionalProperties - The additional properties
	 * @returns Nothing
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
	 * @private
	 * Builds the full url from the URLComponents to make a request
	 * @returns The URL string that is qualified to make a request to graph endpoint
	 */
	private buildFullUrl(): string {
		const url = urlJoin([this.urlComponents.host, this.urlComponents.version, this.urlComponents.path]) + this.createQueryString();

		if (this.config.debugLogging) {
			console.log(url); // tslint:disable-line: no-console
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
		const urlComponents = this.urlComponents;
		const query: string[] = [];
		if (Object.keys(urlComponents.oDataQueryParams).length !== 0) {
			for (const property in urlComponents.oDataQueryParams) {
				if (urlComponents.oDataQueryParams.hasOwnProperty(property)) {
					query.push(property + "=" + urlComponents.oDataQueryParams[property]);
				}
			}
		}
		if (Object.keys(urlComponents.otherURLQueryParams).length !== 0) {
			for (const property in urlComponents.otherURLQueryParams) {
				if (urlComponents.otherURLQueryParams.hasOwnProperty(property)) {
					query.push(property + "=" + urlComponents.otherURLQueryParams[property]);
				}
			}
		}
		return query.length > 0 ? "?" + query.join("&") : "";
	}

	/**
	 * @private
	 * Updates the custom headers and options for a request
	 * @param {FetchOptions} options - The request options object
	 * @returns Nothing
	 */
	private updateRequestOptions(options: FetchOptions): void {
		const optionsHeaders: HeadersInit = { ...options.headers };
		if (this.config.fetchOptions !== undefined) {
			const fetchOptions: FetchOptions = { ...this.config.fetchOptions };
			Object.assign(options, fetchOptions);
			if (typeof this.config.fetchOptions.headers !== undefined) {
				options.headers = { ...this.config.fetchOptions.headers };
			}
		}
		Object.assign(options, this._options);
		if (options.headers !== undefined) {
			Object.assign(optionsHeaders, options.headers);
		}
		Object.assign(optionsHeaders, this._headers);
		options.headers = optionsHeaders;
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
		let rawResponse: Response;
		const middlewareControl = new MiddlewareControl(this._middlewareOptions);
		this.updateRequestOptions(options);
		try {
			const context: Context = await this.httpClient.sendRequest({
				request,
				options,
				middlewareControl,
			});
			rawResponse = context.response;
			const response: any = await GraphResponseHandler.getResponse(rawResponse, this._responseType, callback);
			return response;
		} catch (error) {
			let statusCode: number;
			if (typeof rawResponse !== "undefined") {
				statusCode = rawResponse.status;
			}
			const gError: GraphError = await GraphErrorHandler.getError(error, statusCode, callback);
			throw gError;
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
		this._headers[headerKey] = headerValue;
		return this;
	}

	/**
	 * @public
	 * Sets the custom headers for a request
	 * @param {KeyValuePairObjectStringNumber} headers - The headers key value pair object
	 * @returns The same GraphRequest instance that is being called with
	 */
	public headers(headers: KeyValuePairObjectStringNumber): GraphRequest {
		for (const key in headers) {
			if (headers.hasOwnProperty(key)) {
				this._headers[key] = headers[key] as string;
			}
		}
		return this;
	}

	/**
	 * @public
	 * Sets the option for making a request
	 * @param {string} key - The key value
	 * @param {any} value - The value
	 * @returns The same GraphRequest instance that is being called with
	 */
	public option(key: string, value: any): GraphRequest {
		this._options[key] = value;
		return this;
	}

	/**
	 * @public
	 * Sets the options for making a request
	 * @param {{ [key: string]: any }} options - The options key value pair
	 * @returns The same GraphRequest instance that is being called with
	 */
	public options(options: { [key: string]: any }): GraphRequest {
		for (const key in options) {
			if (options.hasOwnProperty(key)) {
				this._options[key] = options[key];
			}
		}
		return this;
	}

	/**
	 * @public
	 * Sets the middleware options for a request
	 * @param {MiddlewareOptions[]} options - The array of middleware options
	 * @returns The same GraphRequest instance that is being called with
	 */
	public middlewareOptions(options: MiddlewareOptions[]): GraphRequest {
		this._middlewareOptions = options;
		return this;
	}

	/**
	 * @public
	 * Sets the api endpoint version for a request
	 * @param {string} version - The version value
	 * @returns The same GraphRequest instance that is being called with
	 */
	public version(version: string): GraphRequest {
		this.urlComponents.version = version;
		return this;
	}

	/**
	 * @public
	 * Sets the api endpoint version for a request
	 * @param {ResponseType} responseType - The response type value
	 * @returns The same GraphRequest instance that is being called with
	 */
	public responseType(responseType: ResponseType): GraphRequest {
		this._responseType = responseType;
		return this;
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
		this.addCsvQueryParameter("$select", properties, arguments);
		return this;
	}

	/**
	 * @public
	 * To add properties for expand OData Query param
	 * @param {string|string[]} properties - The Properties value
	 * @returns The same GraphRequest instance that is being called with
	 */
	public expand(properties: string | string[]): GraphRequest {
		this.addCsvQueryParameter("$expand", properties, arguments);
		return this;
	}

	/**
	 * @public
	 * To add properties for orderby OData Query param
	 * @param {string|string[]} properties - The Properties value
	 * @returns The same GraphRequest instance that is being called with
	 */
	public orderby(properties: string | string[]): GraphRequest {
		this.addCsvQueryParameter("$orderby", properties, arguments);
		return this;
	}

	/**
	 * @public
	 * To add query string for filter OData Query param
	 * @param {string} filterStr - The filter query string
	 * @returns The same GraphRequest instance that is being called with
	 */
	public filter(filterStr: string): GraphRequest {
		this.urlComponents.oDataQueryParams.$filter = filterStr;
		return this;
	}

	/**
	 * @public
	 * To add criterion for search OData Query param
	 * @param {string} searchStr - The search criterion string
	 * @returns The same GraphRequest instance that is being called with
	 */
	public search(searchStr: string): GraphRequest {
		this.urlComponents.oDataQueryParams.$search = searchStr;
		return this;
	}

	/**
	 * @public
	 * To add number for top OData Query param
	 * @param {number} n - The number value
	 * @returns The same GraphRequest instance that is being called with
	 */
	public top(n: number): GraphRequest {
		this.urlComponents.oDataQueryParams.$top = n;
		return this;
	}

	/**
	 * @public
	 * To add number for skip OData Query param
	 * @param {number} n - The number value
	 * @returns The same GraphRequest instance that is being called with
	 */
	public skip(n: number): GraphRequest {
		this.urlComponents.oDataQueryParams.$skip = n;
		return this;
	}

	/**
	 * @public
	 * To add token string for skipToken OData Query param
	 * @param {string} token - The token value
	 * @returns The same GraphRequest instance that is being called with
	 */
	public skipToken(token: string): GraphRequest {
		this.urlComponents.oDataQueryParams.$skipToken = token;
		return this;
	}

	/**
	 * @public
	 * To add boolean for count OData Query param
	 * @param {boolean} isCount - The count boolean
	 * @returns The same GraphRequest instance that is being called with
	 */
	public count(isCount: boolean): GraphRequest {
		this.urlComponents.oDataQueryParams.$count = isCount.toString();
		return this;
	}

	/**
	 * @public
	 * Appends query string to the urlComponent
	 * @param {string|KeyValuePairObjectStringNumber} queryDictionaryOrString - The query value
	 * @returns The same GraphRequest instance that is being called with
	 */
	public query(queryDictionaryOrString: string | KeyValuePairObjectStringNumber): GraphRequest {
		const otherURLQueryParams = this.urlComponents.otherURLQueryParams;
		if (typeof queryDictionaryOrString === "string") {
			const querySplit = queryDictionaryOrString.split("=");
			const queryKey = querySplit[0];
			const queryValue = querySplit[1];
			otherURLQueryParams[queryKey] = queryValue;
		} else {
			for (const key in queryDictionaryOrString) {
				if (queryDictionaryOrString.hasOwnProperty(key)) {
					otherURLQueryParams[key] = queryDictionaryOrString[key];
				}
			}
		}
		return this;
	}

	/**
	 * @public
	 * @async
	 * Makes a http request with GET method
	 * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
	 * @returns A promise that resolves to the get response
	 */
	public async get(callback?: GraphRequestCallback): Promise<any> {
		const url = this.buildFullUrl();
		const options: FetchOptions = {
			method: RequestMethod.GET,
		};
		try {
			const response = await this.send(url, options, callback);
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
		const url = this.buildFullUrl();
		const options: FetchOptions = {
			method: RequestMethod.POST,
			body: serializeContent(content),
			headers:
				typeof FormData !== "undefined" && content instanceof FormData
					? {}
					: {
							"Content-Type": "application/json",
					  },
		};
		try {
			const response = await this.send(url, options, callback);
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
		try {
			return await this.post(content, callback);
		} catch (error) {
			throw error;
		}
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
		const url = this.buildFullUrl();
		const options: FetchOptions = {
			method: RequestMethod.PUT,
			body: serializeContent(content),
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const response = await this.send(url, options, callback);
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
		const url = this.buildFullUrl();
		const options: FetchOptions = {
			method: RequestMethod.PATCH,
			body: serializeContent(content),
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const response = await this.send(url, options, callback);
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
		try {
			return await this.patch(content, callback);
		} catch (error) {
			throw error;
		}
	}

	/**
	 * @public
	 * @async
	 * Makes http request with DELETE method
	 * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
	 * @returns A promise that resolves to the delete response
	 */
	public async delete(callback?: GraphRequestCallback): Promise<any> {
		const url = this.buildFullUrl();
		const options: FetchOptions = {
			method: RequestMethod.DELETE,
		};
		try {
			const response = await this.send(url, options, callback);
			return response;
		} catch (error) {
			throw error;
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
		try {
			return await this.delete(callback);
		} catch (error) {
			throw error;
		}
	}

	/**
	 * @public
	 * @async
	 * Makes a http request with GET method to read response as a stream.
	 * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
	 * @returns A promise that resolves to the getStream response
	 */
	public async getStream(callback?: GraphRequestCallback): Promise<any> {
		const url = this.buildFullUrl();
		const options = {
			method: RequestMethod.GET,
		};
		this.responseType(ResponseType.STREAM);
		try {
			const stream = await this.send(url, options, callback);
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
		const url = this.buildFullUrl();
		const options = {
			method: RequestMethod.PUT,
			headers: {
				"Content-Type": "application/octet-stream",
			},
			body: stream,
		};
		try {
			const response = await this.send(url, options, callback);
			return response;
		} catch (error) {
			throw error;
		}
	}
}
