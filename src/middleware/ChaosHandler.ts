/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module ChaosHandler
 */

import { RequestOption } from "@microsoft/kiota-abstractions";
import { Middleware } from "@microsoft/kiota-http-fetchlibrary";

import { RequestMethod } from "../RequestMethod";
import { generateUUID } from "./MiddlewareUtil";
import { httpStatusCode, methodStatusCode } from "./options/ChaosHandlerData";
import { ChaosHandlerOptions } from "./options/ChaosHandlerOptions";
import { ChaosStrategy } from "./options/ChaosStrategy";

export const ChaosHandlerOptionKey = "ChaosHandlerOptionKey";
/**
 * Class representing ChaosHandler
 * @class
 * Class
 * @implements Middleware
 */
export class ChaosHandler implements Middleware {
	next: Middleware | undefined;

	/**
	 * @public
	 * @constructor
	 * To create an instance of Testing Handler
	 * @param {ChaosHandlerOptions} [options = new ChaosHandlerOptions()] - The testing handler options instance
	 * @param manualMap - The Map passed by user containing url-statusCode info
	 * @returns An instance of Testing Handler
	 */
	public constructor(private chaosHandlerOptions: ChaosHandlerOptions = new ChaosHandlerOptions(), private manualMap?: Map<string, Map<string, number>>) {}

	execute(url: string, requestInit: RequestInit, requestOptions?: Record<string, RequestOption>): Promise<Response> {
		if (requestOptions && requestOptions[ChaosHandlerOptionKey]) {
			this.chaosHandlerOptions = requestOptions[ChaosHandlerOptionKey] as ChaosHandlerOptions;
		}
		return this.sendRequest(url, requestInit, requestOptions);
	}

	/**
	 * Generates responseHeader
	 * @private
	 * @param {ChaosHandlerOptions} chaosHandlerOptions - The ChaosHandlerOptions object
	 * @param {string} requestID - request id
	 * @param {string} requestDate - date of the request
	 * @returns response Header
	 */
	private createResponseHeaders(requestID: string, requestDate: string) {
		const responseHeader: Headers = this.chaosHandlerOptions.headers ? new Headers(this.chaosHandlerOptions.headers) : new Headers();
		responseHeader.append("Cache-Control", "no-store");
		responseHeader.append("request-id", requestID);
		responseHeader.append("client-request-id", requestID);
		responseHeader.append("x-ms-ags-diagnostic", "");
		responseHeader.append("Date", requestDate);
		responseHeader.append("Strict-Transport-Security", "");

		if (this.chaosHandlerOptions.statusCode === 429) {
			// throttling case has to have a timeout scenario
			responseHeader.append("retry-after", "3");
		}

		return responseHeader;
	}

	/**
	 * Generates responseBody
	 * @private
	 * @param {ChaosHandlerOptions} chaosHandlerOptions - The ChaosHandlerOptions object
	 * @param {string} requestID - request id
	 * @param {string} requestDate - date of the request
	 *  * @returns response body
	 */
	private createResponseBody(requestID: string, requestDate: string) {
		if (this.chaosHandlerOptions.responseBody) {
			return this.chaosHandlerOptions.responseBody;
		}
		let body: any;
		if (this.chaosHandlerOptions.statusCode >= 400) {
			const codeMessage: string = httpStatusCode[this.chaosHandlerOptions.statusCode];
			const errMessage: string = this.chaosHandlerOptions.statusMessage;

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
	 * @param {ChaosHandlerOptions} chaosHandlerOptions - The ChaosHandlerOptions object
	 * @param {Context} context - Contains the context of the request
	 */
	private createResponse(requestURL: string): Response {
		const requestID = generateUUID();
		const requestDate = new Date();
		const responseHeader = this.createResponseHeaders(requestID, requestDate.toString());
		const responseBody = this.createResponseBody(requestID, requestDate.toString());
		const init: any = { url: requestURL, status: this.chaosHandlerOptions.statusCode, statusText: this.chaosHandlerOptions.statusMessage, headers: responseHeader };
		return new Response(typeof responseBody === "string" ? responseBody : JSON.stringify(responseBody), init);
	}

	/**
	 * Decides whether to send the request to the graph or not
	 * @private
	 * @param {ChaosHandlerOptions} chaosHandlerOptions - A ChaosHandlerOptions object
	 * @param {Context} context - Contains the context of the request
	 * @returns nothing
	 */
	private async sendRequest(url: string, requestInit?: RequestInit, requestOptions?: Record<string, RequestOption>): Promise<Response> {
		this.setStatusCode(url, requestInit?.method as RequestMethod);
		if ((this.chaosHandlerOptions.chaosStrategy === ChaosStrategy.MANUAL && !this.next) || Math.floor(Math.random() * 100) < this.chaosHandlerOptions.chaosPercentage) {
			return this.createResponse(url);
		} else if (this.next) {
			await this.next.execute(url, requestInit, requestOptions);
		}
	}

	/**
	 * Fetches a random status code for the RANDOM mode from the predefined array
	 * @private
	 * @param {string} requestMethod - the API method for the request
	 * @returns a random status code from a given set of status codes
	 */
	private getRandomStatusCode(requestMethod: RequestMethod): number {
		const statusCodeArray: number[] = methodStatusCode[requestMethod] as number[];
		return statusCodeArray[Math.floor(Math.random() * statusCodeArray.length)];
	}

	/**
	 * To fetch the relative URL out of the complete URL using a predefined regex pattern
	 * @private
	 * @param {string} urlMethod - the complete URL
	 * @returns the string as relative URL
	 */
	private getRelativeURL(urlMethod: string): string {
		const pattern = /https?:\/\/graph\.microsoft\.com\/[^/]+(.+?)(\?|$)/;
		let relativeURL: string;
		if (pattern.exec(urlMethod) !== null) {
			relativeURL = pattern.exec(urlMethod)[1];
		}
		return relativeURL;
	}

	/**
	 * To fetch the status code from the map(if needed), then returns response by calling createResponse
	 * @private
	 * @param {ChaosHandlerOptions} chaosHandlerOptions - The ChaosHandlerOptions object
	 * @param {string} requestURL - the URL for the request
	 * @param {string} requestMethod - the API method for the request
	 */
	private setStatusCode(requestURL: string, requestMethod: RequestMethod) {
		if (this.chaosHandlerOptions.chaosStrategy === ChaosStrategy.MANUAL) {
			if (this.chaosHandlerOptions.statusCode === undefined) {
				// manual mode with no status code, can be a global level or request level without statusCode
				const relativeURL: string = this.getRelativeURL(requestURL);
				if (this.manualMap.get(relativeURL) !== undefined) {
					// checking Manual Map for exact match
					if (this.manualMap.get(relativeURL).get(requestMethod) !== undefined) {
						this.chaosHandlerOptions.statusCode = this.manualMap.get(relativeURL).get(requestMethod);
					}
					// else statusCode would be undefined
				} else {
					// checking for regex match if exact match doesn't work
					this.manualMap.forEach((value: Map<string, number>, key: string) => {
						const regexURL = new RegExp(key + "$");
						if (regexURL.test(relativeURL)) {
							if (this.manualMap.get(key).get(requestMethod) !== undefined) {
								this.chaosHandlerOptions.statusCode = this.manualMap.get(key).get(requestMethod);
							}
							// else statusCode would be undefined
						}
					});
				}

				// Case of redirection or request url not in map ---> statusCode would be undefined
			}
		} else {
			// Handling the case of Random here
			this.chaosHandlerOptions.statusCode = this.getRandomStatusCode(requestMethod);
			// else statusCode would be undefined
		}
	}

	/**
	 * @public
	 * To set the next middleware in the chain
	 * @param {Middleware} next - The middleware instance
	 * @returns Nothing
	 */
	public setNext(next: Middleware): void {
		this.next = next;
	}
}
