/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * @module RetryHandler
 */
import { Context } from "../IContext";
import { Middleware } from "./IMiddleware";
import { RetryHandlerOptions } from "./options/RetryHandlerOptions";
/**
 * @class
 * @implements Middleware
 * Class for RetryHandler
 */
export declare class RetryHandler implements Middleware {
	/**
	 * @private
	 * @static
	 * A list of status codes that needs to be retried
	 */
	private static RETRY_STATUS_CODES;
	/**
	 * @private
	 * @static
	 * A member holding the name of retry attempt header
	 */
	private static RETRY_ATTEMPT_HEADER;
	/**
	 * @private
	 * @static
	 * A member holding the name of retry after header
	 */
	private static RETRY_AFTER_HEADER;
	/**
	 * @private
	 * A member to hold next middleware in the middleware chain
	 */
	private nextMiddleware;
	/**
	 * @private
	 * A member holding the retry handler options
	 */
	private options;
	/**
	 * @public
	 * @constructor
	 * To create an instance of RetryHandler
	 * @param {RetryHandlerOptions} [options = new RetryHandlerOptions()] - The retry handler options value
	 * @returns An instance of RetryHandler
	 */
	constructor(options?: RetryHandlerOptions);
	/**
	 *
	 * @private
	 * To check whether the response has the retry status code
	 * @param {Response} response - The response object
	 * @returns Whether the response has retry status code or not
	 */
	private isRetry;
	/**
	 * @private
	 * To check whether the payload is buffered or not
	 * @param {RequestInfo} request - The url string or the request object value
	 * @param {FetchOptions} options - The options of a request
	 * @returns Whether the payload is buffered or not
	 */
	private isBuffered;
	/**
	 * @private
	 * To get the delay for a retry
	 * @param {Response} response - The response object
	 * @param {number} retryAttempts - The current attempt count
	 * @param {number} delay - The delay value in seconds
	 * @returns A delay for a retry
	 */
	private getDelay;
	/**
	 * @private
	 * To get an exponential back off value
	 * @param {number} attempts - The current attempt count
	 * @returns An exponential back off value
	 */
	private getExponentialBackOffTime;
	/**
	 * @private
	 * @async
	 * To add delay for the execution
	 * @param {number} delaySeconds - The delay value in seconds
	 * @returns Nothing
	 */
	private sleep;
	private getOptions;
	/**
	 * @private
	 * @async
	 * To execute the middleware with retries
	 * @param {Context} context - The context object
	 * @param {number} retryAttempts - The current attempt count
	 * @param {RetryHandlerOptions} options - The retry middleware options instance
	 * @returns A Promise that resolves to nothing
	 */
	private executeWithRetry;
	/**
	 * @public
	 * @async
	 * To execute the current middleware
	 * @param {Context} context - The context object of the request
	 * @returns A Promise that resolves to nothing
	 */
	execute(context: Context): Promise<void>;
	/**
	 * @public
	 * To set the next middleware in the chain
	 * @param {Middleware} next - The middleware instance
	 * @returns Nothing
	 */
	setNext(next: Middleware): void;
}
