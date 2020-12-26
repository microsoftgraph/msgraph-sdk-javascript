/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * @module RetryHandlerOptions
 */
import { FetchOptions } from "../../IFetchOptions";
import { MiddlewareOptions } from "./IMiddlewareOptions";
/**
 * @type
 * A type declaration for shouldRetry callback
 */
export declare type ShouldRetry = (delay: number, attempt: number, request: RequestInfo, options: FetchOptions | undefined, response: Response) => boolean;
/**
 * @class
 * @implements MiddlewareOptions
 * Class for RetryHandlerOptions
 */
export declare class RetryHandlerOptions implements MiddlewareOptions {
	/**
	 * @private
	 * @static
	 * A member holding default delay value in seconds
	 */
	private static DEFAULT_DELAY;
	/**
	 * @private
	 * @static
	 * A member holding default maxRetries value
	 */
	private static DEFAULT_MAX_RETRIES;
	/**
	 * @private
	 * @static
	 * A member holding maximum delay value in seconds
	 */
	private static MAX_DELAY;
	/**
	 * @private
	 * @static
	 * A member holding maximum maxRetries value
	 */
	private static MAX_MAX_RETRIES;
	/**
	 * @public
	 * A member holding delay value in seconds
	 */
	delay: number;
	/**
	 * @public
	 * A member holding maxRetries value
	 */
	maxRetries: number;
	/**
	 * @public
	 * A member holding shouldRetry callback
	 */
	shouldRetry: ShouldRetry;
	/**
	 * @private
	 * A member holding default shouldRetry callback
	 */
	private static DEFAULT_SHOULD_RETRY;
	/**
	 * @public
	 * @constructor
	 * To create an instance of RetryHandlerOptions
	 * @param {number} [delay = RetryHandlerOptions.DEFAULT_DELAY] - The delay value in seconds
	 * @param {number} [maxRetries = RetryHandlerOptions.DEFAULT_MAX_RETRIES] - The maxRetries value
	 * @param {ShouldRetry} [shouldRetry = RetryHandlerOptions.DEFAULT_SHOULD_RETRY] - The shouldRetry callback function
	 * @returns An instance of RetryHandlerOptions
	 */
	constructor(delay?: number, maxRetries?: number, shouldRetry?: ShouldRetry);
	/**
	 * @public
	 * To get the maximum delay
	 * @returns A maximum delay
	 */
	getMaxDelay(): number;
}
