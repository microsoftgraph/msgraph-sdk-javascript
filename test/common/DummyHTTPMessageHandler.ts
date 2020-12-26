/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module DummyHTTPMessageHandler
 */

import { Context } from "../../src/IContext";
import { Middleware } from "../../src/middleware/IMiddleware";

/**
 * @class
 * @implements Middleware
 * Class representing DummyHTTPMessageHandler
 */
export class DummyHTTPMessageHandler implements Middleware {
	/**
	 * @private
	 * A member holding the array of response objects
	 */
	private responses: Response[];

	/**
	 * @public
	 * @constructor
	 * To create an instance of DummyHTTPMessageHandler
	 * @param {Response[]} [responses = []] - The array of response objects
	 * @returns An instance of DummyHTTPMessageHandler
	 */
	public constructor(responses: Response[] = []) {
		this.responses = responses;
	}

	/**
	 * @public
	 * To set the array of responses
	 * @param {Response[]} response - The array of responses
	 * @returns Nothing
	 */
	public setResponses(responses: Response[]): void {
		this.responses = responses;
	}

	/**
	 * @public
	 * @async
	 * To execute the current middleware
	 * @param {Context} context - The request context object
	 * @returns A promise that resolves to nothing
	 */
	public async execute(context: Context) {
		context.response = this.responses.shift();
		return;
	}
}
