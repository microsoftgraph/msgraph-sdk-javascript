/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module TestingHandlerOptions
 */

import { FetchOptions } from "../../IFetchOptions";

import { MiddlewareOptions } from "./IMiddlewareOptions";
// import * as data from "./MethodStatusCode"
import { TestingStrategy } from "./TestingStrategy";

export class TestingHandlerOptions implements MiddlewareOptions {
	private apiMethod: string;

	private apiURL: string;

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

	public testingStrategy: TestingStrategy;

	public statusCode: number;

	public statusText: string;

	public methodStatusCode = {
		GET: [200, 301, 307, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504],
		POST: [200, 201, 204, 307, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504, 507],
		PUT: [200, 201, 400, 401, 403, 404, 405, 409, 429, 500, 502, 503, 504, 507],
		PATCH: [200, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504],
		DELETE: [200, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504, 507],
	};

	public constructor(testingStrategy: TestingStrategy = TestingStrategy.RANDOM, statusCode?: number) {
		this.testingStrategy = testingStrategy;
		this.statusCode = statusCode;
		// console.log("In testingHandlerOptions Constructor");
		// console.log(statusCode);
		// console.log(testingStrategy);

		// console.log("Out of Constructor");
	}

	private async setStatusCode(): Promise<any> {
		try {
			if (this.testingStrategy === TestingStrategy.MANUAL) {
				// this.statusCode = statusCode;
				this.statusText = "Status Message here";
				// console.log("Inside the if condition");
			} else if (this.testingStrategy === TestingStrategy.RANDOM) {
				await this.getStatusCode().then((res) => {
					this.statusCode = res;
				});
				this.statusText = "Status Message here";
			}
			/* else {

            }
            */
			// console.log(this.statusCode, this.apiMethod);
			return this.createResponse();
		} catch (error) {
			throw error;
		}
	}

	private async createResponse(): Promise<any> {
		try {
			let statusCodeKey: string;
			let responseBody: string;
			let responseHeader: string;

			// console.log(this.apiMethod, this.apiURL);
			// console.log(statusCode, "statusCode");
			// console.log(context.options.method);

			statusCodeKey = (await this.statusCode) === 429 ? "429" : `${Math.floor(this.statusCode / 100)}xx`;
			responseHeader = this.responseMap.get(statusCodeKey).get("responseHeader");
			responseBody = this.responseMap.get(statusCodeKey).get("responseBody");

			// console.log(responseHeader);
			// console.log(JSON.parse(responseBody));

			// responseBody = this.responseMap[statusCodeKey].responseBody;

			const init = { url: this.apiURL, status: this.statusCode, statusText: this.statusText, header: JSON.parse(responseHeader) };
			const response = new Response(JSON.parse(responseBody), init);
			// console.log(response);
			return response;
		} catch (error) {
			throw error;
		}
	}

	private async getStatusCode(): Promise<number> {
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

			const container: number[] = this.methodStatusCode[this.apiMethod] as number[];
			const containerLength: number = this.methodStatusCode[this.apiMethod].length;
			// console.log(containerLength);
			// console.log(container[Math.floor(Math.random() * containerLength)]);

			return container[Math.floor(Math.random() * containerLength)];
			// return 200;
		} catch (error) {
			throw error;
		}
	}

	public async sendMethod(apiMethod: string, url: string): Promise<any> {
		// console.log(apiMethod, "hey");
		this.apiMethod = apiMethod;
		this.apiURL = url;
		return this.setStatusCode();
	}
}
