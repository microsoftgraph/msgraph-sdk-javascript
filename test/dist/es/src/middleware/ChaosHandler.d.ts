/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * @module ChaosHandler
 */
import { Context } from "../IContext";
import { Middleware } from "./IMiddleware";
import { ChaosHandlerOptions } from "./options/ChaosHandlerOptions";
/**
 * Class representing ChaosHandler
 * @class
 * Class
 * @implements Middleware
 */
export declare class ChaosHandler implements Middleware {
	/**
	 * A member holding options to customize the handler behavior
	 *
	 * @private
	 */
	private options;
	/**
	 * container for the manual map that has been written by the client
	 *
	 * @private
	 */
	private manualMap;
	/**
	 * @private
	 * A member to hold next middleware in the middleware chain
	 */
	private nextMiddleware;
	/**
	 * @public
	 * @constructor
	 * To create an instance of Testing Handler
	 * @param {ChaosHandlerOptions} [options = new ChaosHandlerOptions()] - The testing handler options instance
	 * @param manualMap - The Map passed by user containing url-statusCode info
	 * @returns An instance of Testing Handler
	 */
	constructor(options?: ChaosHandlerOptions, manualMap?: Map<string, Map<string, number>>);
	/**
	 * Generates responseHeader
	 * @private
	 * @param {number} statusCode - the status code to be returned for the request
	 * @param {string} requestID - request id
	 * @param {string} requestDate - date of the request
	 * @returns response Header
	 */
	private createResponseHeaders;
	/**
	 * Generates responseBody
	 * @private
	 * @param {number} statusCode - the status code to be returned for the request
	 * @param {string} statusMessage - the status message to be returned for the request
	 * @param {string} requestID - request id
	 * @param {string} requestDate - date of the request
	 * @param {any?} requestBody - the request body to be returned for the request
	 * @returns response body
	 */
	private createResponseBody;
	/**
	 * creates a response
	 * @private
	 * @param {ChaosHandlerOptions} ChaosHandlerOptions - The ChaosHandlerOptions object
	 * @param {Context} context - Contains the context of the request
	 */
	private createResponse;
	/**
	 * Decides whether to send the request to the graph or not
	 * @private
	 * @param {ChaosHandlerOptions} chaosHandlerOptions - A ChaosHandlerOptions object
	 * @param {Context} context - Contains the context of the request
	 * @returns nothing
	 */
	private sendRequest;
	/**
	 * Fetches a random status code for the RANDOM mode from the predefined array
	 * @private
	 * @param {string} requestMethod - the API method for the request
	 * @returns a random status code from a given set of status codes
	 */
	private getRandomStatusCode;
	/**
	 * To fetch the relative URL out of the complete URL using a predefined regex pattern
	 * @private
	 * @param {string} urlMethod - the complete URL
	 * @returns the string as relative URL
	 */
	private getRelativeURL;
	/**
	 * To fetch the status code from the map(if needed), then returns response by calling createResponse
	 * @private
	 * @param {ChaosHandlerOptions} ChaosHandlerOptions - The ChaosHandlerOptions object
	 * @param {string} requestURL - the URL for the request
	 * @param {string} requestMethod - the API method for the request
	 */
	private setStatusCode;
	/**
	 * To get the options for execution of the middleware
	 * @private
	 * @param {Context} context - The context object
	 * @returns options for middleware execution
	 */
	private getOptions;
	/**
	 * To execute the current middleware
	 * @public
	 * @async
	 * @param {Context} context - The context object of the request
	 * @returns A Promise that resolves to nothing
	 */
	execute(context: Context): Promise<void>;
	/**
	 * @public
	 * To set the next middleware in the chain
	 * @param {Middleware} next - The middleware instance
	 * @returns Nothing
	 */
	setNext(next: Middleware): void;
}
