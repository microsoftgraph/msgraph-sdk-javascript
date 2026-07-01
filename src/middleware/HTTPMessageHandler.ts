/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module HTTPMessageHandler
 */

import { Context } from "../IContext";
import { Middleware } from "./IMiddleware";

/**
 * @class
 * @implements Middleware
 * Class for HTTPMessageHandler
 */
export class HTTPMessageHandler implements Middleware {
	/**
	 * @private
	 * A member to hold next middleware in the middleware chain
	 */
	private nextMiddleware?: Middleware;

	/**
	 * @public
	 * @async
	 * To execute the current middleware
	 * @param {Context} context - The request context object
	 * @returns A promise that resolves to nothing
	 */
	public async execute(context: Context): Promise<void> {
		context.response = await fetch(context.request, context.options);
		if (!this.nextMiddleware) return;
		return await this.nextMiddleware.execute(context);
	}

	/**
	 * @public
	 * To set the next middleware in the chain
	 * @param {Middleware} next - The middleware instance
	 * @returns Nothing
	 */
	public setNext(next: Middleware): void {
		this.nextMiddleware = next;
	}
}
