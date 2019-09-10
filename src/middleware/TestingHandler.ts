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
// import { RequestMethod } from "../RequestMethod";

// import { FetchOptions } from "../../IFetchOptions";

// import { FeatureUsageFlag, TelemetryHandlerOptions } from "./options/TelemetryHandlerOptions";

export class TestingHandler implements Middleware {
	/**
	 * @private
	 * A member holding options to customize the handler behavior
	 */

	private options: TestingHandlerOptions;

	public statusCode: number;

	public statusMessage: string;

	public testingStrategy: TestingStrategy;

	public manualMap: Map<string, Map<string, number>>;

	public constructor(options: TestingHandlerOptions = new TestingHandlerOptions(), manualMap?: Map<string, Map<string, number>>) {
		// console.log("declaring through testing Handler");
		this.options = options;

		this.manualMap = manualMap;
		// console.log("declared");
	}

	private createResponseHeader(statusCode: number, statusMessage: string, requestID: string, requestDate: Date) {
		const responseHeader: any = {};

		responseHeader["Cache-Control"] = "private";
		responseHeader["Transfer-Encoding"] = "chunked";
		responseHeader["request-id"] = requestID;
		responseHeader["client-request-id"] = requestID;
		responseHeader["x-ms-ags-diagnostic"] = "";
		responseHeader.Date = requestDate;
		responseHeader["Strict-Transport-Security"] = "";

		if (statusCode === 301 || statusCode === 302 || statusCode === 303 || statusCode === 307 || statusCode === 308) {
			responseHeader.Location = "https://dummylocation.microsoft.com";
		}

		if (statusCode === 429) {
			// throttling case has to have a timeout scenario
			responseHeader.timeout = 300;
		}

		return responseHeader;
	}

	private createResponseBody(statusCode: number, statusMessage: string, requestID: string, errDate: Date) {
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
						date: errDate,
					},
				},
			};
		} else {
			responseBody = {};
		}

		return responseBody;
	}

	private createResponse(testingHandlerOptions: TestingHandlerOptions, requestURL: string): Response {
		try {
			let statusCodeKey: string;
			let responseBody;
			let responseHeader;
			let requestID: string;
			let requestDate: Date;
			// console.log(this.apiMethod, this.apiURL);
			// console.log(statusCode, "statusCode");
			// console.log(context.options.method);

			statusCodeKey = testingHandlerOptions.statusCode === 429 ? "429" : `${Math.floor(testingHandlerOptions.statusCode / 100)}xx`;
			requestID = generateUUID();
			requestDate = new Date();
			responseHeader = this.createResponseHeader(testingHandlerOptions.statusCode, testingHandlerOptions.statusMessage, requestID, requestDate);
			responseBody = this.createResponseBody(testingHandlerOptions.statusCode, testingHandlerOptions.statusMessage, requestID, requestDate);

			// console.log(responseHeader);
			// console.log(JSON.parse(responseBody));

			// responseBody = this.responseMap[statusCodeKey].responseBody;

			const init = { url: requestURL, status: testingHandlerOptions.statusCode, statusText: testingHandlerOptions.statusMessage, headers: responseHeader };
			const response = new Response(responseBody, init);
			// console.log(response);
			return response;
		} catch (error) {
			throw error;
		}
	}

	private getStatusCode(requestMethod: string): number {
		try {
			// const fs = require("fs");
			/* let methodStatusCode;
        methodStatusCode = data.methodStatusCode;
        */
			/* const handleJSONFile = function (err, data) {
            if(err) {
                throw err;
            }

            methodStatusCode = JSON.parse(data);
            console.log(methodStatusCode);
        }

        await fs.readFile('./MethodStatusCode.json', handleJSONFile);
        */

			// const methodStatusCode = require('./MethodStatusCode.json');
			// await console.log(this.methodStatusCode[this.apiMethod], "hey");

			const container: number[] = methodStatusCode[requestMethod] as number[];
			const containerLength: number = container.length;
			// console.log(containerLength);
			// console.log(container[Math.floor(Math.random() * containerLength)]);

			return container[Math.floor(Math.random() * containerLength)];
			// return 200;
		} catch (error) {
			throw error;
		}
	}

	private getRelativeURL(pattern: RegExp, urlMethod: string): string {
		urlMethod = urlMethod.replace(pattern, "");
		return urlMethod;
	}

	private setStatusCode(testingHandlerOptions: TestingHandlerOptions, requestURL: string, requestMethod: string): Response {
		try {
			testingHandlerOptions.statusMessage = "Some error happened";
			if (testingHandlerOptions.testingStrategy === TestingStrategy.MANUAL) {
				// this.statusCode = statusCode;
				// testingHandlerOptions.statusMessage = "Status Message here MANUAL";
				// console.log("Inside the if condition");

				if (testingHandlerOptions.statusCode === undefined) {
					try {
						const urlMethod = this.getRelativeURL(new RegExp("http(s)://graph.microsoft.com/[^/]*", "g"), requestURL);
						// console.log(this.manualMap.get(urlMethod).get(context.options.method as string));
						// console.log(urlMethod, "urlMethod");
						testingHandlerOptions.statusCode = this.manualMap.get(urlMethod).get(requestMethod);
					} catch (error) {
						// console.log(this.manualMap.get(urlMethod).get(context.options.method as string));
						const urlMethod = this.getRelativeURL(new RegExp("http(s)://graph.microsoft.com/[^/]*", "g"), requestURL);
						// console.log(urlMethod, "urlMethod");
						this.manualMap.forEach((value: Map<string, number>, key: string) => {
							const regexUrl = new RegExp(key);
							// console.log(regexUrl, "!!!!!!");
							if (regexUrl.test(urlMethod)) {
								testingHandlerOptions.statusCode = this.manualMap.get(key).get(requestMethod);
							}
							// console.log(key);
						});
						/*for(const tempurl in this.manualMap){
								if(tempurl.match(urlMethod))
								{
									testingHandlerOptions.statusCode = this.manualMap.get(tempurl).get(context.options.method as string);
								}
								console.log(tempurl);
							}*/

						if (testingHandlerOptions.statusCode === undefined) {
							// const urlMethod = this.getRelativeURL(new RegExp("http(s)://graph.microsoft.com/[^/]*", "g"), requestURL);
							throw new Error("error in retrieving map or you have been redirected to " + urlMethod);
						}
					}
				}
			} else if (testingHandlerOptions.testingStrategy === TestingStrategy.RANDOM) {
				testingHandlerOptions.statusCode = this.getStatusCode(requestMethod);
				// testingHandlerOptions.statusMessage = "Status Message here RANDOM";
			}
			/* else {

            }
            */
			// console.log(this.statusCode, this.apiMethod);
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
			// console.log(options);
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
			// write the things to be executed in testing Handler
			// Have to create a map for the purpose of Headers and body
			const testingHandlerOptions = this.getOptions(context);
			// console.log(this.options, "hey");
			context.response = this.setStatusCode(testingHandlerOptions, context.request as string, context.options.method as string);
			// context.response = new Response("");
			return;
		} catch (error) {
			throw error;
		}
	}
}
