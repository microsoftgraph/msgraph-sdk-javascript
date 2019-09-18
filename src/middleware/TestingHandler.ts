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

import { Middleware } from "./IMiddleware";
import { MiddlewareControl } from "./MiddlewareControl";
import { generateUUID } from "./MiddlewareUtil";
import { httpStatusCode, methodStatusCode } from "./options/TestingHandlerData";
import { TestingHandlerOptions } from "./options/TestingHandlerOptions";
import { TestingStrategy } from "./options/TestingStrategy";

export class TestingHandler implements Middleware {
	/**
	 * @private
	 * A member holding options to customize the handler behavior
	 */

	private options: TestingHandlerOptions;

	public statusCode: number;

	public statusMessage: string;

	// the mode of testing handler
	public testingStrategy: TestingStrategy;

	// container for the manual map that has been written by the client
	public manualMap: Map<string, Map<string, number>>;

	// dummy url that we are using
	public redirectURL: string = "https://dummylocation.microsoft.com";

	public constructor(options: TestingHandlerOptions = new TestingHandlerOptions(), manualMap?: Map<string, Map<string, number>>) {
		this.options = options;
		this.manualMap = manualMap;
	}

	/**
	 * @private
	 * Generates responseHeader
	 * @param {number} statusCode - the status code to be returned for the request
	 * @param {string} statusMessage - the status message to be returned for the request
	 * @param {string} requestID - request id
	 * @param {Date} requestDate - date of the request
	 * @returns response Header
	 */
	private createResponseHeaders(statusCode: number, statusMessage: string, requestID: string, requestDate: Date) {
		// creates a responseHeader based on the status code
		const responseHeader: any = {};

		responseHeader["Cache-Control"] = "private";
		responseHeader["Transfer-Encoding"] = "";
		responseHeader["request-id"] = requestID;
		responseHeader["client-request-id"] = requestID;
		responseHeader["x-ms-ags-diagnostic"] = "";
		responseHeader.Date = requestDate;
		responseHeader["Strict-Transport-Security"] = "";

		if (statusCode === 301 || statusCode === 302 || statusCode === 303 || statusCode === 307 || statusCode === 308) {
			// adding location header for only these cases as done for the redirect handler
			responseHeader.Location = this.redirectURL;
		}

		if (statusCode === 429) {
			// throttling case has to have a timeout scenario
			responseHeader["retry-after"] = 300;
		}
		return responseHeader;
	}

	/**
	 * @private
	 * Generates responseBody
	 * @param {number} statusCode - the status code to be returned for the request
	 * @param {string} statusMessage - the status message to be returned for the request
	 * @param {string} requestID - request id
	 * @param {Date} errDate - date of the request
	 * @returns response body
	 */
	private createResponseBody(statusCode: number, statusMessage: string, requestID: string, requestDate: Date) {
		// response body gets created as empty for passed cases
		// response body contains error field for failure scenarios
		let responseBody;
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
	 * @private
	 * creates a response object out of responseHeader and responseBody
	 * @param {TestingHandlerOptions} testingHandlerOptions - The TestingHandlerOptions object
	 * @param {string} requestURL - the URL for the request
	 * @returns Response object
	 */
	private createResponse(testingHandlerOptions: TestingHandlerOptions, requestURL: string): Response {
		try {
			// creates a response Object out of responseHeader and responseBody
			let responseBody;
			let responseHeader;
			let requestID: string;
			let requestDate: Date;

			requestID = generateUUID();
			requestDate = new Date();
			responseHeader = this.createResponseHeaders(testingHandlerOptions.statusCode, testingHandlerOptions.statusMessage, requestID, requestDate);
			responseBody = this.createResponseBody(testingHandlerOptions.statusCode, testingHandlerOptions.statusMessage, requestID, requestDate);
			const init = { url: requestURL, status: testingHandlerOptions.statusCode, statusText: testingHandlerOptions.statusMessage, headers: responseHeader };
			const response = new Response(responseBody, init);

			return response;
		} catch (error) {
			throw error;
		}
	}

	/**
	 * @private
	 * Fetches a random status code for the RANDOM mode from the predefined array
	 * @param {string} requestMethod - the API method for the request
	 * @returns the random status code
	 */
	private getRandomStatusCode(requestMethod: string): number {
		try {
			// returns random status code for the random method from the array present
			const statusCodeArray: number[] = methodStatusCode[requestMethod] as number[];
			return statusCodeArray[Math.floor(Math.random() * statusCodeArray.length)];
		} catch (error) {
			throw error;
		}
	}

	/**
	 * @private
	 * To fetch the relative URL out of the complete URL
	 * @param {RegExp} pattern - the regex pattern for the URL
	 * @param {string} urlMethod - the complete URL
	 * @returns the relative URL
	 */
	private getRelativeURL(pattern: RegExp, urlMethod: string): string {
		// just helps in getting the relative URL from the complete url, just to match the url as in manual map
		const relativeURL = urlMethod.replace(pattern, "");
		return relativeURL;
	}

	/**
	 * @private
	 * To fetch the status code from the map(if needed), then returns response by calling createResponse
	 * @param {TestingHandlerOptions} testingHandlerOptions - The TestingHandlerOptions object
	 * @param {string} requestURL - the URL for the request
	 * @param {string} requestMethod - the API method for the request
	 * @returns Response object
	 */
	private setStatusCode(testingHandlerOptions: TestingHandlerOptions, requestURL: string, requestMethod: string): Response {
		try {
			// setting some random status code
			testingHandlerOptions.statusMessage = "Some error happened";
			if (testingHandlerOptions.testingStrategy === TestingStrategy.MANUAL) {
				// inside the Manual mode
				if (testingHandlerOptions.statusCode === undefined) {
					// manual mode with no status code, can be a global level or request level without statusCode
					try {
						// chacking Manual Map for exact match
						const urlMethod = this.getRelativeURL(new RegExp("http(s)://graph.microsoft.com/[^/]*", "g"), requestURL);
						testingHandlerOptions.statusCode = this.manualMap.get(urlMethod).get(requestMethod);
					} catch (error) {
						// checking for regex match if exact match doesn't work
						const urlMethod = this.getRelativeURL(new RegExp("http(s)://graph.microsoft.com/[^/]*", "g"), requestURL);
						this.manualMap.forEach((value: Map<string, number>, key: string) => {
							const regexUrl = new RegExp(key);
							if (regexUrl.test(urlMethod)) {
								testingHandlerOptions.statusCode = this.manualMap.get(key).get(requestMethod);
							}
						});

						// Case of redirection or request url not in map
						if (testingHandlerOptions.statusCode === undefined) {
							if (requestURL === this.redirectURL) {
								// we send a 404 after a single redirect if it's done (chain contains redirect Handler)
								testingHandlerOptions.statusCode = 404;
							} else {
								throw new Error("API not available in map");
							}
						}
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

			return this.createResponse(testingHandlerOptions, requestURL);
		} catch (error) {
			throw error;
		}
	}

	/**
	 * @private
	 * To get the options for execution of the middleware
	 * @param {Context} context - The context object
	 * @returns A options for middleware execution
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
	 * @public
	 * @async
	 * To execute the current middleware
	 * @param {Context} context - The context object of the request
	 * @returns A Promise that resolves to nothing
	 */
	public async execute(context: Context): Promise<void> {
		try {
			const testingHandlerOptions = this.getOptions(context);
			context.response = this.setStatusCode(testingHandlerOptions, context.request as string, context.options.method as string);
			return;
		} catch (error) {
			throw error;
		}
	}
}
