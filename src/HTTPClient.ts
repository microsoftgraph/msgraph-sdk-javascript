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
	 * @param {Middleware} middleware - The first middleware of the middleware chain
	 */
	public constructor(middleware: Middleware) {
		this.middleware = middleware;
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
