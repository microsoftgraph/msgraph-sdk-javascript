/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * @module RedirectHandler
 */
import { Context } from "../IContext";
import { Middleware } from "./IMiddleware";
import { RedirectHandlerOptions } from "./options/RedirectHandlerOptions";
/**
 * @class
 * Class
 * @implements Middleware
 * Class representing RedirectHandler
 */
export declare class RedirectHandler implements Middleware {
	/**
	 * @private
	 * @static
	 * A member holding the array of redirect status codes
	 */
	private static REDIRECT_STATUS_CODES;
	/**
	 * @private
	 * @static
	 * A member holding SeeOther status code
	 */
	private static STATUS_CODE_SEE_OTHER;
	/**
	 * @private
	 * @static
	 * A member holding the name of the location header
	 */
	private static LOCATION_HEADER;
	/**
	 * @private
	 * @static
	 * A member representing the authorization header name
	 */
	private static AUTHORIZATION_HEADER;
	/**
	 * @private
	 * @static
	 * A member holding the manual redirect value
	 */
	private static MANUAL_REDIRECT;
	/**
	 * @private
	 * A member holding options to customize the handler behavior
	 */
	private options;
	/**
	 * @private
	 * A member to hold next middleware in the middleware chain
	 */
	private nextMiddleware;
	/**
	 * @public
	 * @constructor
	 * To create an instance of RedirectHandler
	 * @param {RedirectHandlerOptions} [options = new RedirectHandlerOptions()] - The redirect handler options instance
	 * @returns An instance of RedirectHandler
	 */
	constructor(options?: RedirectHandlerOptions);
	/**
	 * @private
	 * To check whether the response has the redirect status code or not
	 * @param {Response} response - The response object
	 * @returns A boolean representing whether the response contains the redirect status code or not
	 */
	private isRedirect;
	/**
	 * @private
	 * To check whether the response has location header or not
	 * @param {Response} response - The response object
	 * @returns A boolean representing the whether the response has location header or not
	 */
	private hasLocationHeader;
	/**
	 * @private
	 * To get the redirect url from location header in response object
	 * @param {Response} response - The response object
	 * @returns A redirect url from location header
	 */
	private getLocationHeader;
	/**
	 * @private
	 * To check whether the given url is a relative url or not
	 * @param {string} url - The url string value
	 * @returns A boolean representing whether the given url is a relative url or not
	 */
	private isRelativeURL;
	/**
	 * @private
	 * To check whether the authorization header in the request should be dropped for consequent redirected requests
	 * @param {string} requestUrl - The request url value
	 * @param {string} redirectUrl - The redirect url value
	 * @returns A boolean representing whether the authorization header in the request should be dropped for consequent redirected requests
	 */
	private shouldDropAuthorizationHeader;
	/**
	 * @private
	 * @async
	 * To update a request url with the redirect url
	 * @param {string} redirectUrl - The redirect url value
	 * @param {Context} context - The context object value
	 * @returns Nothing
	 */
	private updateRequestUrl;
	/**
	 * @private
	 * To get the options for execution of the middleware
	 * @param {Context} context - The context object
	 * @returns A options for middleware execution
	 */
	private getOptions;
	/**
	 * @private
	 * @async
	 * To execute the next middleware and to handle in case of redirect response returned by the server
	 * @param {Context} context - The context object
	 * @param {number} redirectCount - The redirect count value
	 * @param {RedirectHandlerOptions} options - The redirect handler options instance
	 * @returns A promise that resolves to nothing
	 */
	private executeWithRedirect;
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
