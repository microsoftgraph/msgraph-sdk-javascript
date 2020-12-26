/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import * as tslib_1 from "tslib";
import { RequestMethod } from "../RequestMethod";
import { MiddlewareControl } from "./MiddlewareControl";
import { getRequestHeader, setRequestHeader } from "./MiddlewareUtil";
import { RetryHandlerOptions } from "./options/RetryHandlerOptions";
import { FeatureUsageFlag, TelemetryHandlerOptions } from "./options/TelemetryHandlerOptions";
/**
 * @class
 * @implements Middleware
 * Class for RetryHandler
 */
export class RetryHandler {
	/**
	 * @public
	 * @constructor
	 * To create an instance of RetryHandler
	 * @param {RetryHandlerOptions} [options = new RetryHandlerOptions()] - The retry handler options value
	 * @returns An instance of RetryHandler
	 */
	constructor(options = new RetryHandlerOptions()) {
		this.options = options;
	}
	/**
	 *
	 * @private
	 * To check whether the response has the retry status code
	 * @param {Response} response - The response object
	 * @returns Whether the response has retry status code or not
	 */
	isRetry(response) {
		return RetryHandler.RETRY_STATUS_CODES.indexOf(response.status) !== -1;
	}
	/**
	 * @private
	 * To check whether the payload is buffered or not
	 * @param {RequestInfo} request - The url string or the request object value
	 * @param {FetchOptions} options - The options of a request
	 * @returns Whether the payload is buffered or not
	 */
	isBuffered(request, options) {
		const method = typeof request === "string" ? options.method : request.method;
		const isPutPatchOrPost = method === RequestMethod.PUT || method === RequestMethod.PATCH || method === RequestMethod.POST;
		if (isPutPatchOrPost) {
			const isStream = getRequestHeader(request, options, "Content-Type") === "application/octet-stream";
			if (isStream) {
				return false;
			}
		}
		return true;
	}
	/**
	 * @private
	 * To get the delay for a retry
	 * @param {Response} response - The response object
	 * @param {number} retryAttempts - The current attempt count
	 * @param {number} delay - The delay value in seconds
	 * @returns A delay for a retry
	 */
	getDelay(response, retryAttempts, delay) {
		const getRandomness = () => Number(Math.random().toFixed(3));
		const retryAfter = response.headers !== undefined ? response.headers.get(RetryHandler.RETRY_AFTER_HEADER) : null;
		let newDelay;
		if (retryAfter !== null) {
			// tslint:disable: prefer-conditional-expression
			if (Number.isNaN(Number(retryAfter))) {
				newDelay = Math.round((new Date(retryAfter).getTime() - Date.now()) / 1000);
			} else {
				newDelay = Number(retryAfter);
			}
			// tslint:enable: prefer-conditional-expression
		} else {
			// Adding randomness to avoid retrying at a same
			newDelay = retryAttempts >= 2 ? this.getExponentialBackOffTime(retryAttempts) + delay + getRandomness() : delay + getRandomness();
		}
		return Math.min(newDelay, this.options.getMaxDelay() + getRandomness());
	}
	/**
	 * @private
	 * To get an exponential back off value
	 * @param {number} attempts - The current attempt count
	 * @returns An exponential back off value
	 */
	getExponentialBackOffTime(attempts) {
		return Math.round((1 / 2) * (Math.pow(2, attempts) - 1));
	}
	/**
	 * @private
	 * @async
	 * To add delay for the execution
	 * @param {number} delaySeconds - The delay value in seconds
	 * @returns Nothing
	 */
	sleep(delaySeconds) {
		return tslib_1.__awaiter(this, void 0, void 0, function*() {
			const delayMilliseconds = delaySeconds * 1000;
			return new Promise((resolve) => setTimeout(resolve, delayMilliseconds));
		});
	}
	getOptions(context) {
		let options;
		if (context.middlewareControl instanceof MiddlewareControl) {
			options = context.middlewareControl.getMiddlewareOptions(this.options.constructor);
		}
		if (typeof options === "undefined") {
			options = Object.assign(new RetryHandlerOptions(), this.options);
		}
		return options;
	}
	/**
	 * @private
	 * @async
	 * To execute the middleware with retries
	 * @param {Context} context - The context object
	 * @param {number} retryAttempts - The current attempt count
	 * @param {RetryHandlerOptions} options - The retry middleware options instance
	 * @returns A Promise that resolves to nothing
	 */
	executeWithRetry(context, retryAttempts, options) {
		return tslib_1.__awaiter(this, void 0, void 0, function*() {
			try {
				yield this.nextMiddleware.execute(context);
				if (retryAttempts < options.maxRetries && this.isRetry(context.response) && this.isBuffered(context.request, context.options) && options.shouldRetry(options.delay, retryAttempts, context.request, context.options, context.response)) {
					++retryAttempts;
					setRequestHeader(context.request, context.options, RetryHandler.RETRY_ATTEMPT_HEADER, retryAttempts.toString());
					const delay = this.getDelay(context.response, retryAttempts, options.delay);
					yield this.sleep(delay);
					return yield this.executeWithRetry(context, retryAttempts, options);
				} else {
					return;
				}
			} catch (error) {
				throw error;
			}
		});
	}
	/**
	 * @public
	 * @async
	 * To execute the current middleware
	 * @param {Context} context - The context object of the request
	 * @returns A Promise that resolves to nothing
	 */
	execute(context) {
		return tslib_1.__awaiter(this, void 0, void 0, function*() {
			try {
				const retryAttempts = 0;
				const options = this.getOptions(context);
				TelemetryHandlerOptions.updateFeatureUsageFlag(context, FeatureUsageFlag.RETRY_HANDLER_ENABLED);
				return yield this.executeWithRetry(context, retryAttempts, options);
			} catch (error) {
				throw error;
			}
		});
	}
	/**
	 * @public
	 * To set the next middleware in the chain
	 * @param {Middleware} next - The middleware instance
	 * @returns Nothing
	 */
	setNext(next) {
		this.nextMiddleware = next;
	}
}
/**
 * @private
 * @static
 * A list of status codes that needs to be retried
 */
RetryHandler.RETRY_STATUS_CODES = [429, 503, 504];
/**
 * @private
 * @static
 * A member holding the name of retry attempt header
 */
RetryHandler.RETRY_ATTEMPT_HEADER = "Retry-Attempt";
/**
 * @private
 * @static
 * A member holding the name of retry after header
 */
RetryHandler.RETRY_AFTER_HEADER = "Retry-After";
//# sourceMappingURL=RetryHandler.js.map
