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

	public statusCode: number;

	public statusMessage: string;

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
			this.options = await this.getOptions(context);
			// console.log(context.options.method);
			context.response = await this.options.sendMethod(context.options.method as string, context.request as string);
			return;
		} catch (error) {
			throw error;
		}
	}
}
