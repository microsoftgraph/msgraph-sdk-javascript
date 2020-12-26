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
export declare class DummyHTTPMessageHandler implements Middleware {
	/**
	 * @private
	 * A member holding the array of response objects
	 */
	private responses;
	/**
	 * @public
	 * @constructor
	 * To create an instance of DummyHTTPMessageHandler
	 * @param {Response[]} [responses = []] - The array of response objects
	 * @returns An instance of DummyHTTPMessageHandler
	 */
	constructor(responses?: Response[]);
	/**
	 * @public
	 * To set the array of responses
	 * @param {Response[]} response - The array of responses
	 * @returns Nothing
	 */
	setResponses(responses: Response[]): void;
	/**
	 * @public
	 * @async
	 * To execute the current middleware
	 * @param {Context} context - The request context object
	 * @returns A promise that resolves to nothing
	 */
	execute(context: Context): Promise<void>;
}
