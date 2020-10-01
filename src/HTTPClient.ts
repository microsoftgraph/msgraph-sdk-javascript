/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module HTTPClient
 */

import { Context } from "./IContext";
import { Middleware } from "./middleware/IMiddleware";

/**
 * @class
 * Class representing HTTPClient
 */
export class HTTPClient {
	/**
	 * @private
	 * A member holding first middleware of the middleware chain
	 */
	private middleware: Middleware;

	/**
	 * @public
	 * @constructor
	 * Creates an instance of a HTTPClient
	 * @param {Middleware| Middleware[]} middleware - The first middleware of the middleware chain or the array of middleware handlers
	 */
	public constructor(middleware: Middleware | Middleware[]) {
		this.setMiddleware(middleware);
	}

	/**
	 * @private
	 * Verifies if the middleware passed is an array or not before setting this.middleware property
	 * @param {any} middleware - The middleware passed
	 * @returns Nothing
	 */

	private setMiddleware(middleware: any): void {
		if (Object.prototype.toString.call(middleware) === "[object Array]") {
			this.parseMiddleWareArray(middleware);
		} else {
			this.middleware = middleware;
		}
	}

	/**
	 * @private
	 * Processes the middleware array to construct the chain
	 * and sets this.middleware property to the first middlware handler of the array
	 * @param {Middleware[]} middlewareArray - The array of middleware handlers
	 * @returns Nothing
	 */
	private parseMiddleWareArray(middlewareArray: Middleware[]) {
		middlewareArray.forEach((element, index) => {
			if (index < middlewareArray.length - 1) {
				element.setNext(middlewareArray[index + 1]);
			}
		});
		this.middleware = middlewareArray[0];
	}

	/**
	 * @public
	 * @async
	 * To send the request through the middleware chain
	 * @param {Context} context - The context of a request
	 * @returns A promise that resolves to the Context
	 */
	public async sendRequest(context: Context): Promise<Context> {
		try {
			if (typeof context.request === "string" && context.options === undefined) {
				const error = new Error();
				error.name = "InvalidRequestOptions";
				error.message = "Unable to execute the middleware, Please provide valid options for a request";
				throw error;
			}
			await this.middleware.execute(context);
			return context;
		} catch (error) {
			throw error;
		}
	}
}
