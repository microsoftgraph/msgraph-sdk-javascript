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
import { cloneRequestWithNewUrl, setRequestHeader } from "./MiddlewareUtil";
import { TestingHandlerOptions } from "./options/TestingHandlerOptions";
// import { FeatureUsageFlag, TelemetryHandlerOptions } from "./options/TelemetryHandlerOptions";

export class TestingHandler implements Middleware {
	/**
	 * @private
	 * A member holding options to customize the handler behavior
	 */
	private options: TestingHandlerOptions;

	private responseMap: Map<string, Map<string, string>> = new Map([
		[
			"2xx",
			new Map([
				[
					"responseHeader",
					`{
					"Cache-Control" : "",
					"Transfer-Encoding" : "",
					"Content-Type" : "",
					"Content-Encoding" : "",
					"Vary" : "",
					"request-id" : "",
					"client-request-id" : "",
					"x-ms-ags-diagnostic" : "",
					"OData-Version" : 4.0,
					"Duration" : 103.8879,
					"Strict-Transport-Security" : "",
					"Date" : ""
					}`,
				],
				["responseBody", "{}"],
			]),
		],
		[
			"3xx",
			new Map([
				[
					"responseHeader",
					`{
					"Cache-Control" : "",
					"Transfer-Encoding" : "",
					"Content-Type" : "",
					"Content-Encoding" : "",
					"Vary" : "",
					"request-id" : "",
					"client-request-id" : "",
					"x-ms-ags-diagnostic" : "",
					"OData-Version" : 4.0,
					"Duration" : 103.8879,
					"Strict-Transport-Security" : "",
					"Date" : ""
					}`,
				],

				["responseBody", "{}"],
			]),
		],
		[
			"4xx",
			new Map([
				[
					"responseHeader",
					`{
					"Cache-Control" : "",
					"Transfer-Encoding" : "",
					"Content-Type" : "",
					"request-id" : "",
					"client-request-id" : "",
					"x-ms-ags-diagnostic" : "",
					"Duration" : 103.8879,
					"Strict-Transport-Security" : "",
					"Date" : ""
				}`,
				],

				[
					"responseBody",
					`{
					"error": {
						"code": "BadRequest",
						"message": "",
						"innerError": {
							"request-id": "c1e7bf3f-74e9-4ba7-a0f6-835e065f8f45",
							"date": "2019-08-20T10:41:33"
						}
					}
				}`,
				],
			]),
		],
		[
			"429",
			new Map([
				[
					"responseHeader",
					`{
					"Cache-Control" : "",
					"Transfer-Encoding" : "",
					"Content-Type" : "",
					"request-id" : "",
					"client-request-id" : "",
					"x-ms-ags-diagnostic" : "",
					"Duration" : 103.8879,
					"Strict-Transport-Security" : "",
					"timeout": 300,
					"Date" : ""
				}`,
				],

				[
					"responseBody",
					`{
					"error": {
						"code": "BadRequest",
						"message": "",
						"innerError": {
							"request-id": "c1e7bf3f-74e9-4ba7-a0f6-835e065f8f45",
							"date": "2019-08-20T10:41:33"
						}
					}
				}`,
				],
			]),
		],
		[
			"5xx",
			new Map([
				[
					"responseHeader",
					`{
					"Cache-Control" : "",
					"Transfer-Encoding" : "",
					"Content-Type" : "",
					"request-id" : "",
					"client-request-id" : "",
					"x-ms-ags-diagnostic" : "",
					"Duration" : 103.8879,
					"Strict-Transport-Security" : "",
					"Date" : ""
				}`,
				],

				[
					"responseBody",
					`{
					"error": {
						"code": "BadRequest",
						"message": "",
						"innerError": {
							"request-id": "c1e7bf3f-74e9-4ba7-a0f6-835e065f8f45",
							"date": "2019-08-20T10:41:33"
						}
					}
				}`,
				],
			]),
		],
	]);

	// private map2xx: Map<string, string> = ;

	// private map3xx: Map<string, string> = ;

	public constructor(options: TestingHandlerOptions = new TestingHandlerOptions()) {
		// console.log("declaring through testing Handler");
		this.options = options;
		// console.log("declared");
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

	private async createResponse(context: Context): Promise<any> {
		try {
			const statusCode: number = this.options.statusCode;
			const statusMessage: string = this.options.statusText;
			let statusCodeKey: string;
			let responseBody: string;
			let responseHeader: string;

			// console.log(statusCode, "statusCode");
			// console.log(context.options.method);

			statusCodeKey = statusCode === 429 ? "429" : `${Math.floor(statusCode / 100)}xx`;
			responseHeader = this.responseMap.get(statusCodeKey).get("responseHeader");
			responseBody = this.responseMap.get(statusCodeKey).get("responseBody");

			// console.log(responseHeader);
			// console.log(JSON.parse(responseBody));

			// responseBody = this.responseMap[statusCodeKey].responseBody;

			const init = { url: context.request as string, status: statusCode, statusText: statusMessage, header: JSON.parse(responseHeader) };
			const response = new Response(JSON.parse(responseBody), init);
			// console.log(response);
			return response;
		} catch (error) {
			throw error;
		}
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
			this.options = this.getOptions(context);
			// console.log(context.options.method);
			await this.options.sendMethod(context.options.method as string);
			context.response = await this.createResponse(context);
			return;
		} catch (error) {
			throw error;
		}
	}
}
