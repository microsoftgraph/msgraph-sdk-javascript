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
	 * @param {...Middleware} middleware - The first middleware of the middleware chain or a sequence of all the Middleware handlers
	 */
	public constructor(...middleware: Middleware[]) {
		if (!middleware || !middleware.length) {
			const error = new Error();
			error.name = "InvalidMiddlewareChain";
			error.message = "Please provide a default middleware chain or custom middleware chain";
			throw error;
		}
		this.setMiddleware(...middleware);
	}

	/**
	 * @private
	 * Processes the middleware parameter passed to set this.middleware property
	 * The calling function should validate if middleware is not undefined or not empty.
	 * @param {...Middleware} middleware - The middleware passed
	 * @returns Nothing
	 */
	private setMiddleware(...middleware: Middleware[]): void {
		if (middleware.length > 1) {
			this.parseMiddleWareArray(middleware);
		} else {
			this.middleware = middleware[0];
		}
	}

	/**
	 * @private
	 * Processes the middleware array to construct the chain
	 * and sets this.middleware property to the first middleware handler of the array
	 * The calling function should validate if middleware is not undefined or not empty
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
		if (typeof context.request === "string" && context.options === undefined) {
			const error = new Error();
			error.name = "InvalidRequestOptions";
			error.message = "Unable to execute the middleware, Please provide valid options for a request";
			throw error;
		}
		await this.middleware.execute(context);
		return context;
	}
}
