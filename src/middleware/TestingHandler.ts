/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module TestingHandler
 */

import { Context } from "../IContext";
import { RequestMethod } from "../RequestMethod";

import { Middleware } from "./IMiddleware";
import { MiddlewareControl } from "./MiddlewareControl";
import { generateUUID } from "./MiddlewareUtil";
import { httpStatusCode, methodStatusCode } from "./options/TestingHandlerData";
import { TestingHandlerOptions } from "./options/TestingHandlerOptions";
import { TestingStrategy } from "./options/TestingStrategy";

/**
 * Class representing TestingHandler
 * @class
 * Class
 * @implements Middleware
 */
export class TestingHandler implements Middleware {
	/**
	 * A member holding options to customize the handler behavior
	 *
	 * @private
	 */
	private options: TestingHandlerOptions;

	/**
	 * container for the manual map that has been written by the client
	 *
	 * @private
	 */
	private manualMap: Map<string, Map<string, number>>;

	/**
	 * dummy url that we are using, randomly generated everytime
	 *
	 * @private
	 */
	private redirectURL: string;

	/**
	 * @public
	 * @constructor
	 * To create an instance of Testing Handler
	 * @param {TestingHandlerOptions} [options = new TestingHandlerOptions()] - The testing handler options instance
	 * @param manualMap - The Map passed by user containing url-statusCode info
	 * @returns An instance of Testing Handler
	 */
	public constructor(options: TestingHandlerOptions = new TestingHandlerOptions(), manualMap?: Map<string, Map<string, number>>) {
		this.options = options;
		this.manualMap = manualMap;
		this.redirectURL = "https://graph.microsoft.com/" + generateUUID();
	}

	/**
	 * Generates responseHeader
	 * @private
	 * @param {number} statusCode - the status code to be returned for the request
	 * @param {string} requestID - request id
	 * @param {string} requestDate - date of the request
	 * @returns response Header
	 */
	private createResponseHeaders(statusCode: number, requestID: string, requestDate: string) {
		const responseHeader: Headers = new Headers();

		responseHeader.append("Cache-Control", "no-store");
		responseHeader.append("request-id", requestID);
		responseHeader.append("client-request-id", requestID);
		responseHeader.append("x-ms-ags-diagnostic", "");
		responseHeader.append("Date", requestDate);
		responseHeader.append("Strict-Transport-Security", "");

		if (statusCode === 301 || statusCode === 302 || statusCode === 303 || statusCode === 307 || statusCode === 308) {
			// adding location header for only these cases as done for the redirect handler
			responseHeader.append("Location", this.redirectURL);
		}

		if (statusCode === 429) {
			// throttling case has to have a timeout scenario
			responseHeader.append("retry-after", "300");
		}
		return responseHeader;
	}

	/**
	 * Generates responseBody
	 * @private
	 * @param {number} statusCode - the status code to be returned for the request
	 * @param {string} statusMessage - the status message to be returned for the request
	 * @param {string} requestID - request id
	 * @param {string} requestDate - date of the request
	 * @returns response body
	 */
	private createResponseBody(statusCode: number, statusMessage: string, requestID: string, requestDate: string) {
		let responseBody: any;
		if (statusCode >= 400) {
			const codeMessage: string = httpStatusCode[statusCode];
			const errMessage: string = statusMessage;

			responseBody = {
				error: {
					code: codeMessage,
					message: errMessage,
					innerError: {
						"request-id": requestID,
						date: requestDate,
					},
				},
			};
		} else {
			responseBody = {};
		}
		return responseBody;
	}

	/**
	 * creates a response object out of responseHeader and responseBody
	 * @private
	 * @param {TestingHandlerOptions} testingHandlerOptions - The TestingHandlerOptions object
	 * @param {string} requestURL - the URL for the request
	 * @param {RequestMethod} requestMethod - enum for request method
	 * @returns Response object
	 */
	private createResponse(testingHandlerOptions: TestingHandlerOptions, requestURL: string, requestMethod: RequestMethod): Response {
		try {
			let responseBody: any;
			let responseHeader: Headers;
			let requestID: string;
			let requestDate: Date;

			this.setStatusCode(testingHandlerOptions, requestURL, requestMethod);
			requestID = generateUUID();
			requestDate = new Date();
			responseHeader = this.createResponseHeaders(testingHandlerOptions.statusCode, requestID, requestDate.toString());
			responseBody = this.createResponseBody(testingHandlerOptions.statusCode, testingHandlerOptions.statusMessage, requestID, requestDate.toString());
			const init: any = { url: requestURL, status: testingHandlerOptions.statusCode, statusText: testingHandlerOptions.statusMessage, headers: responseHeader };
			const response: Response = new Response(responseBody, init);

			return response;
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Fetches a random status code for the RANDOM mode from the predefined array
	 * @private
	 * @param {string} requestMethod - the API method for the request
	 * @returns a random status code from a given set of status codes
	 */
	private getRandomStatusCode(requestMethod: RequestMethod): number {
		try {
			const statusCodeArray: number[] = methodStatusCode[requestMethod] as number[];
			return statusCodeArray[Math.floor(Math.random() * statusCodeArray.length)];
		} catch (error) {
			throw error;
		}
	}

	/**
	 * To fetch the relative URL out of the complete URL using a predefined regex pattern
	 * @private
	 * @param {string} urlMethod - the complete URL
	 * @returns the string as relative URL
	 */
	private getRelativeURL(urlMethod: string): string {
		const pattern: RegExp = /https?:\/\/graph\.microsoft\.com\/[^/]+(.+?)(\?|$)/;
		let relativeURL: string;
		if (pattern.exec(urlMethod) !== null) {
			relativeURL = pattern.exec(urlMethod)[1];
		}
		return relativeURL;
	}

	/**
	 * To fetch the status code from the map(if needed), then returns response by calling createResponse
	 * @private
	 * @param {TestingHandlerOptions} testingHandlerOptions - The TestingHandlerOptions object
	 * @param {string} requestURL - the URL for the request
	 * @param {string} requestMethod - the API method for the request
	 */
	private setStatusCode(testingHandlerOptions: TestingHandlerOptions, requestURL: string, requestMethod: RequestMethod): void {
		try {
			if (testingHandlerOptions.testingStrategy === TestingStrategy.MANUAL) {
				if (testingHandlerOptions.statusCode === undefined) {
					// manual mode with no status code, can be a global level or request level without statusCode
					if (requestURL === this.redirectURL) {
						// we send a 404 after a single redirect if it's done (chain contains redirect Handler)
						testingHandlerOptions.statusCode = 404;
					}
					const relativeURL: string = this.getRelativeURL(requestURL);
					if (this.manualMap.get(relativeURL) !== undefined) {
						// checking Manual Map for exact match
						if (this.manualMap.get(relativeURL).get(requestMethod) !== undefined) {
							testingHandlerOptions.statusCode = this.manualMap.get(relativeURL).get(requestMethod);
						} else {
							throw new Error("API not available in map");
						}
					} else {
						// checking for regex match if exact match doesn't work
						this.manualMap.forEach((value: Map<string, number>, key: string) => {
							const regexURL: RegExp = new RegExp(key + "$");
							if (regexURL.test(relativeURL)) {
								if (this.manualMap.get(key).get(requestMethod) !== undefined) {
									testingHandlerOptions.statusCode = this.manualMap.get(key).get(requestMethod);
								} else {
									throw new Error("API not available in map");
								}
							}
						});
					}

					// Case of redirection or request url not in map
					if (testingHandlerOptions.statusCode === undefined) {
						throw new Error("API not available in map");
					}
				} else {
					// if we have got redirection
					if (requestURL === this.redirectURL) {
						const statusCode: number = testingHandlerOptions.statusCode;
						if (statusCode === 301 || statusCode === 302 || statusCode === 303 || statusCode === 307 || statusCode === 308) {
							// we send a 404 after a single redirect if it's done (chain contains redirect Handler)
							testingHandlerOptions.statusCode = 404;
						}
					}
				}
			} else {
				// Handling the case of Random here
				testingHandlerOptions.statusCode = this.getRandomStatusCode(requestMethod);
			}
		} catch (error) {
			throw error;
		}
	}

	/**
	 * To get the options for execution of the middleware
	 * @private
	 * @param {Context} context - The context object
	 * @returns options for middleware execution
	 */
	private getOptions(context: Context): TestingHandlerOptions {
		let options: TestingHandlerOptions;
		if (context.middlewareControl instanceof MiddlewareControl) {
			options = context.middlewareControl.getMiddlewareOptions(TestingHandlerOptions) as TestingHandlerOptions;
		}
		if (typeof options === "undefined") {
			options = Object.assign(new TestingHandlerOptions(), this.options);
		}

		return options;
	}

	/**
	 * To execute the current middleware
	 * @public
	 * @async
	 * @param {Context} context - The context object of the request
	 * @returns A Promise that resolves to nothing
	 */
	public async execute(context: Context): Promise<void> {
		try {
			const testingHandlerOptions: TestingHandlerOptions = this.getOptions(context);
			context.response = this.createResponse(testingHandlerOptions, context.request as string, context.options.method as RequestMethod);
			return;
		} catch (error) {
			throw error;
		}
	}

	/**
	 * @public
	 * To get the next middleware in the chain
	 * @returns next Middleware instance
	 */
	public getNext(): Middleware {
		return undefined;
	}
}
