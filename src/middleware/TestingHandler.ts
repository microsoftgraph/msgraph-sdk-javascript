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
import { methodStatusCode, responseMap } from "./options/TestingHandlerData";
// import { cloneRequestWithNewUrl, setRequestHeader } from "./MiddlewareUtil";
import { TestingHandlerOptions } from "./options/TestingHandlerOptions";
import { TestingStrategy } from "./options/TestingStrategy";
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

	public constructor(options: TestingHandlerOptions = new TestingHandlerOptions()) {
		// console.log("declaring through testing Handler");
		this.options = options;
		// console.log("declared");
	}

	private createResponse(context: Context, testingHandlerOptions: TestingHandlerOptions): Response {
		try {
			let statusCodeKey: string;
			let responseBody: string;
			let responseHeader: string;

			// console.log(this.apiMethod, this.apiURL);
			// console.log(statusCode, "statusCode");
			// console.log(context.options.method);

			statusCodeKey = testingHandlerOptions.statusCode === 429 ? "429" : `${Math.floor(testingHandlerOptions.statusCode / 100)}xx`;
			responseHeader = responseMap.get(statusCodeKey).get("responseHeader");
			responseBody = responseMap.get(statusCodeKey).get("responseBody");

			// console.log(responseHeader);
			// console.log(JSON.parse(responseBody));

			// responseBody = this.responseMap[statusCodeKey].responseBody;

			const init = { url: context.request as string, status: testingHandlerOptions.statusCode, statusText: testingHandlerOptions.statusMessage, header: JSON.parse(responseHeader) };
			const response = new Response(JSON.parse(responseBody), init);
			// console.log(response);
			return response;
		} catch (error) {
			throw error;
		}
	}

	private getStatusCode(context: Context): number {
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

			const container: number[] = methodStatusCode[context.options.method as string] as number[];
			const containerLength: number = container.length;
			// console.log(containerLength);
			// console.log(container[Math.floor(Math.random() * containerLength)]);

			return container[Math.floor(Math.random() * containerLength)];
			// return 200;
		} catch (error) {
			throw error;
		}
	}

	private setStatusCode(context: Context, testingHandlerOptions: TestingHandlerOptions): Response {
		try {
			if (testingHandlerOptions.testingStrategy === TestingStrategy.MANUAL) {
				// this.statusCode = statusCode;
				testingHandlerOptions.statusMessage = "Status Message here MANUAL";
				// console.log("Inside the if condition");
			} else if (testingHandlerOptions.testingStrategy === TestingStrategy.RANDOM) {
				testingHandlerOptions.statusCode = this.getStatusCode(context);
				testingHandlerOptions.statusMessage = "Status Message here RANDOM";
			}
			/* else {

            }
            */
			// console.log(this.statusCode, this.apiMethod);
			return this.createResponse(context, testingHandlerOptions);
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
			context.response = this.setStatusCode(context, testingHandlerOptions);
			// context.response = new Response("");
			return;
		} catch (error) {
			throw error;
		}
	}
}
