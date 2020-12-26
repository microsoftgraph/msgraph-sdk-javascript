/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import * as tslib_1 from "tslib";
import { RequestMethod } from "../RequestMethod";
import { MiddlewareControl } from "./MiddlewareControl";
import { cloneRequestWithNewUrl, setRequestHeader } from "./MiddlewareUtil";
import { RedirectHandlerOptions } from "./options/RedirectHandlerOptions";
import { FeatureUsageFlag, TelemetryHandlerOptions } from "./options/TelemetryHandlerOptions";
/**
 * @class
 * Class
 * @implements Middleware
 * Class representing RedirectHandler
 */
export class RedirectHandler {
	/**
	 * @public
	 * @constructor
	 * To create an instance of RedirectHandler
	 * @param {RedirectHandlerOptions} [options = new RedirectHandlerOptions()] - The redirect handler options instance
	 * @returns An instance of RedirectHandler
	 */
	constructor(options = new RedirectHandlerOptions()) {
		this.options = options;
	}
	/**
	 * @private
	 * To check whether the response has the redirect status code or not
	 * @param {Response} response - The response object
	 * @returns A boolean representing whether the response contains the redirect status code or not
	 */
	isRedirect(response) {
		return RedirectHandler.REDIRECT_STATUS_CODES.indexOf(response.status) !== -1;
	}
	/**
	 * @private
	 * To check whether the response has location header or not
	 * @param {Response} response - The response object
	 * @returns A boolean representing the whether the response has location header or not
	 */
	hasLocationHeader(response) {
		return response.headers.has(RedirectHandler.LOCATION_HEADER);
	}
	/**
	 * @private
	 * To get the redirect url from location header in response object
	 * @param {Response} response - The response object
	 * @returns A redirect url from location header
	 */
	getLocationHeader(response) {
		return response.headers.get(RedirectHandler.LOCATION_HEADER);
	}
	/**
	 * @private
	 * To check whether the given url is a relative url or not
	 * @param {string} url - The url string value
	 * @returns A boolean representing whether the given url is a relative url or not
	 */
	isRelativeURL(url) {
		return url.indexOf("://") === -1;
	}
	/**
	 * @private
	 * To check whether the authorization header in the request should be dropped for consequent redirected requests
	 * @param {string} requestUrl - The request url value
	 * @param {string} redirectUrl - The redirect url value
	 * @returns A boolean representing whether the authorization header in the request should be dropped for consequent redirected requests
	 */
	shouldDropAuthorizationHeader(requestUrl, redirectUrl) {
		const schemeHostRegex = /^[A-Za-z].+?:\/\/.+?(?=\/|$)/;
		const requestMatches = schemeHostRegex.exec(requestUrl);
		let requestAuthority;
		let redirectAuthority;
		if (requestMatches !== null) {
			requestAuthority = requestMatches[0];
		}
		const redirectMatches = schemeHostRegex.exec(redirectUrl);
		if (redirectMatches !== null) {
			redirectAuthority = redirectMatches[0];
		}
		return typeof requestAuthority !== "undefined" && typeof redirectAuthority !== "undefined" && requestAuthority !== redirectAuthority;
	}
	/**
	 * @private
	 * @async
	 * To update a request url with the redirect url
	 * @param {string} redirectUrl - The redirect url value
	 * @param {Context} context - The context object value
	 * @returns Nothing
	 */
	updateRequestUrl(redirectUrl, context) {
		return tslib_1.__awaiter(this, void 0, void 0, function*() {
			context.request = typeof context.request === "string" ? redirectUrl : yield cloneRequestWithNewUrl(redirectUrl, context.request);
		});
	}
	/**
	 * @private
	 * To get the options for execution of the middleware
	 * @param {Context} context - The context object
	 * @returns A options for middleware execution
	 */
	getOptions(context) {
		let options;
		if (context.middlewareControl instanceof MiddlewareControl) {
			options = context.middlewareControl.getMiddlewareOptions(RedirectHandlerOptions);
		}
		if (typeof options === "undefined") {
			options = Object.assign(new RedirectHandlerOptions(), this.options);
		}
		return options;
	}
	/**
	 * @private
	 * @async
	 * To execute the next middleware and to handle in case of redirect response returned by the server
	 * @param {Context} context - The context object
	 * @param {number} redirectCount - The redirect count value
	 * @param {RedirectHandlerOptions} options - The redirect handler options instance
	 * @returns A promise that resolves to nothing
	 */
	executeWithRedirect(context, redirectCount, options) {
		return tslib_1.__awaiter(this, void 0, void 0, function*() {
			try {
				yield this.nextMiddleware.execute(context);
				const response = context.response;
				if (redirectCount < options.maxRedirects && this.isRedirect(response) && this.hasLocationHeader(response) && options.shouldRedirect(response)) {
					++redirectCount;
					if (response.status === RedirectHandler.STATUS_CODE_SEE_OTHER) {
						context.options.method = RequestMethod.GET;
						delete context.options.body;
					} else {
						const redirectUrl = this.getLocationHeader(response);
						if (!this.isRelativeURL(redirectUrl) && this.shouldDropAuthorizationHeader(response.url, redirectUrl)) {
							setRequestHeader(context.request, context.options, RedirectHandler.AUTHORIZATION_HEADER, undefined);
						}
						yield this.updateRequestUrl(redirectUrl, context);
					}
					yield this.executeWithRedirect(context, redirectCount, options);
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
				const redirectCount = 0;
				const options = this.getOptions(context);
				context.options.redirect = RedirectHandler.MANUAL_REDIRECT;
				TelemetryHandlerOptions.updateFeatureUsageFlag(context, FeatureUsageFlag.REDIRECT_HANDLER_ENABLED);
				return yield this.executeWithRedirect(context, redirectCount, options);
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
 * A member holding the array of redirect status codes
 */
RedirectHandler.REDIRECT_STATUS_CODES = [301, 302, 303, 307, 308];
/**
 * @private
 * @static
 * A member holding SeeOther status code
 */
RedirectHandler.STATUS_CODE_SEE_OTHER = 303;
/**
 * @private
 * @static
 * A member holding the name of the location header
 */
RedirectHandler.LOCATION_HEADER = "Location";
/**
 * @private
 * @static
 * A member representing the authorization header name
 */
RedirectHandler.AUTHORIZATION_HEADER = "Authorization";
/**
 * @private
 * @static
 * A member holding the manual redirect value
 */
RedirectHandler.MANUAL_REDIRECT = "manual";
//# sourceMappingURL=RedirectHandler.js.map
