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
export declare class HTTPClient {
	/**
	 * @private
	 * A member holding first middleware of the middleware chain
	 */
	private middleware;
	/**
	 * @public
	 * @constructor
	 * Creates an instance of a HTTPClient
	 * @param {...Middleware} middleware - The first middleware of the middleware chain or a sequence of all the Middleware handlers
	 */
	constructor(...middleware: Middleware[]);
	/**
	 * @private
	 * Processes the middleware parameter passed to set this.middleware property
	 * The calling function should validate if middleware is not undefined or not empty.
	 * @param {...Middleware} middleware - The middleware passed
	 * @returns Nothing
	 */
	private setMiddleware;
	/**
	 * @private
	 * Processes the middleware array to construct the chain
	 * and sets this.middleware property to the first middlware handler of the array
	 * The calling function should validate if middleware is not undefined or not empty
	 * @param {Middleware[]} middlewareArray - The array of middleware handlers
	 * @returns Nothing
	 */
	private parseMiddleWareArray;
	/**
	 * @public
	 * @async
	 * To send the request through the middleware chain
	 * @param {Context} context - The context of a request
	 * @returns A promise that resolves to the Context
	 */
	sendRequest(context: Context): Promise<Context>;
}
