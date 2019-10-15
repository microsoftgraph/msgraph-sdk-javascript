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
	 * @public
	 * @async
	 * To execute the current middleware
	 * @param {Context} context - The request context object
	 * @returns A promise that resolves to nothing
	 */
	public async execute(context: Context): Promise<void> {
		try {
			context.response = await fetch(context.request, context.options);
			return;
		} catch (error) {
			throw error;
		}
	}
}
