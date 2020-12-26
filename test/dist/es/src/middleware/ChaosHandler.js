/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import * as tslib_1 from "tslib";
import { MiddlewareControl } from "./MiddlewareControl";
import { generateUUID } from "./MiddlewareUtil";
import { httpStatusCode, methodStatusCode } from "./options/ChaosHandlerData";
import { ChaosHandlerOptions } from "./options/ChaosHandlerOptions";
import { ChaosStrategy } from "./options/ChaosStrategy";
/**
 * Class representing ChaosHandler
 * @class
 * Class
 * @implements Middleware
 */
export class ChaosHandler {
	/**
	 * @public
	 * @constructor
	 * To create an instance of Testing Handler
	 * @param {ChaosHandlerOptions} [options = new ChaosHandlerOptions()] - The testing handler options instance
	 * @param manualMap - The Map passed by user containing url-statusCode info
	 * @returns An instance of Testing Handler
	 */
	constructor(options = new ChaosHandlerOptions(), manualMap) {
		this.options = options;
		this.manualMap = manualMap;
	}
	/**
	 * Generates responseHeader
	 * @private
	 * @param {number} statusCode - the status code to be returned for the request
	 * @param {string} requestID - request id
	 * @param {string} requestDate - date of the request
	 * @returns response Header
	 */
	createResponseHeaders(statusCode, requestID, requestDate) {
		const responseHeader = new Headers();
		responseHeader.append("Cache-Control", "no-store");
		responseHeader.append("request-id", requestID);
		responseHeader.append("client-request-id", requestID);
		responseHeader.append("x-ms-ags-diagnostic", "");
		responseHeader.append("Date", requestDate);
		responseHeader.append("Strict-Transport-Security", "");
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
	 * @param {any?} requestBody - the request body to be returned for the request
	 * @returns response body
	 */
	createResponseBody(statusCode, statusMessage, requestID, requestDate, responseBody) {
		if (responseBody) {
			return responseBody;
		}
		let body;
		if (statusCode >= 400) {
			const codeMessage = httpStatusCode[statusCode];
			const errMessage = statusMessage;
			body = {
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
			body = {};
		}
		return body;
	}
	/**
	 * creates a response
	 * @private
	 * @param {ChaosHandlerOptions} ChaosHandlerOptions - The ChaosHandlerOptions object
	 * @param {Context} context - Contains the context of the request
	 */
	createResponse(chaosHandlerOptions, context) {
		try {
			let responseBody;
			let responseHeader;
			let requestID;
			let requestDate;
			const requestURL = context.request;
			requestID = generateUUID();
			requestDate = new Date();
			responseHeader = this.createResponseHeaders(chaosHandlerOptions.statusCode, requestID, requestDate.toString());
			responseBody = this.createResponseBody(chaosHandlerOptions.statusCode, chaosHandlerOptions.statusMessage, requestID, requestDate.toString(), chaosHandlerOptions.responseBody);
			const init = { url: requestURL, status: chaosHandlerOptions.statusCode, statusText: chaosHandlerOptions.statusMessage, headers: responseHeader };
			context.response = new Response(responseBody, init);
		} catch (error) {
			throw error;
		}
	}
	/**
	 * Decides whether to send the request to the graph or not
	 * @private
	 * @param {ChaosHandlerOptions} chaosHandlerOptions - A ChaosHandlerOptions object
	 * @param {Context} context - Contains the context of the request
	 * @returns nothing
	 */
	sendRequest(chaosHandlerOptions, context) {
		return tslib_1.__awaiter(this, void 0, void 0, function*() {
			try {
				this.setStatusCode(chaosHandlerOptions, context.request, context.options.method);
				if (!chaosHandlerOptions.statusCode) {
					yield this.nextMiddleware.execute(context);
				} else {
					this.createResponse(chaosHandlerOptions, context);
				}
			} catch (error) {
				throw error;
			}
		});
	}
	/**
	 * Fetches a random status code for the RANDOM mode from the predefined array
	 * @private
	 * @param {string} requestMethod - the API method for the request
	 * @returns a random status code from a given set of status codes
	 */
	getRandomStatusCode(requestMethod) {
		try {
			const statusCodeArray = methodStatusCode[requestMethod];
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
	getRelativeURL(urlMethod) {
		const pattern = /https?:\/\/graph\.microsoft\.com\/[^/]+(.+?)(\?|$)/;
		let relativeURL;
		if (pattern.exec(urlMethod) !== null) {
			relativeURL = pattern.exec(urlMethod)[1];
		}
		return relativeURL;
	}
	/**
	 * To fetch the status code from the map(if needed), then returns response by calling createResponse
	 * @private
	 * @param {ChaosHandlerOptions} ChaosHandlerOptions - The ChaosHandlerOptions object
	 * @param {string} requestURL - the URL for the request
	 * @param {string} requestMethod - the API method for the request
	 */
	setStatusCode(chaosHandlerOptions, requestURL, requestMethod) {
		try {
			if (chaosHandlerOptions.chaosStrategy === ChaosStrategy.MANUAL) {
				if (chaosHandlerOptions.statusCode === undefined) {
					// manual mode with no status code, can be a global level or request level without statusCode
					const relativeURL = this.getRelativeURL(requestURL);
					if (this.manualMap.get(relativeURL) !== undefined) {
						// checking Manual Map for exact match
						if (this.manualMap.get(relativeURL).get(requestMethod) !== undefined) {
							chaosHandlerOptions.statusCode = this.manualMap.get(relativeURL).get(requestMethod);
						}
						// else statusCode would be undefined
					} else {
						// checking for regex match if exact match doesn't work
						this.manualMap.forEach((value, key) => {
							const regexURL = new RegExp(key + "$");
							if (regexURL.test(relativeURL)) {
								if (this.manualMap.get(key).get(requestMethod) !== undefined) {
									chaosHandlerOptions.statusCode = this.manualMap.get(key).get(requestMethod);
								}
								// else statusCode would be undefined
							}
						});
					}
					// Case of redirection or request url not in map ---> statusCode would be undefined
				}
			} else {
				// Handling the case of Random here
				if (Math.floor(Math.random() * 100) < chaosHandlerOptions.chaosPercentage) {
					chaosHandlerOptions.statusCode = this.getRandomStatusCode(requestMethod);
				}
				// else statusCode would be undefined
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
	getOptions(context) {
		let options;
		if (context.middlewareControl instanceof MiddlewareControl) {
			options = context.middlewareControl.getMiddlewareOptions(ChaosHandlerOptions);
		}
		if (typeof options === "undefined") {
			options = Object.assign(new ChaosHandlerOptions(), this.options);
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
	execute(context) {
		return tslib_1.__awaiter(this, void 0, void 0, function*() {
			try {
				const chaosHandlerOptions = this.getOptions(context);
				return yield this.sendRequest(chaosHandlerOptions, context);
			} catch (error) {
				throw error;
			}
		});
	}
	/**
	 * @public
	 * To set the next middleware in the chain
	 * @param {Middleware} next - The middleware instance
	 * @returns Nothing
	 */
	setNext(next) {
		this.nextMiddleware = next;
	}
}
//# sourceMappingURL=ChaosHandler.js.map
