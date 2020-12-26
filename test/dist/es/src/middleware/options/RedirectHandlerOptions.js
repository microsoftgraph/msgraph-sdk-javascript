/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * @class
 * @implements MiddlewareOptions
 * A class representing RedirectHandlerOptions
 */
export class RedirectHandlerOptions {
	/**
	 * @public
	 * @constructor
	 * To create an instance of RedirectHandlerOptions
	 * @param {number} [maxRedirects = RedirectHandlerOptions.DEFAULT_MAX_REDIRECTS] - The max redirects value
	 * @param {ShouldRedirect} [shouldRedirect = RedirectHandlerOptions.DEFAULT_SHOULD_RETRY] - The should redirect callback
	 * @returns An instance of RedirectHandlerOptions
	 */
	constructor(maxRedirects = RedirectHandlerOptions.DEFAULT_MAX_REDIRECTS, shouldRedirect = RedirectHandlerOptions.DEFAULT_SHOULD_RETRY) {
		if (maxRedirects > RedirectHandlerOptions.MAX_MAX_REDIRECTS) {
			const error = new Error(`MaxRedirects should not be more than ${RedirectHandlerOptions.MAX_MAX_REDIRECTS}`);
			error.name = "MaxLimitExceeded";
			throw error;
		}
		if (maxRedirects < 0) {
			const error = new Error(`MaxRedirects should not be negative`);
			error.name = "MinExpectationNotMet";
			throw error;
		}
		this.maxRedirects = maxRedirects;
		this.shouldRedirect = shouldRedirect;
	}
}
/**
 * @private
 * @static
 * A member holding default max redirects value
 */
RedirectHandlerOptions.DEFAULT_MAX_REDIRECTS = 5;
/**
 * @private
 * @static
 * A member holding maximum max redirects value
 */
RedirectHandlerOptions.MAX_MAX_REDIRECTS = 20;
/**
 * @private
 * A member holding default shouldRedirect callback
 */
RedirectHandlerOptions.DEFAULT_SHOULD_RETRY = () => true;
//# sourceMappingURL=RedirectHandlerOptions.js.map
