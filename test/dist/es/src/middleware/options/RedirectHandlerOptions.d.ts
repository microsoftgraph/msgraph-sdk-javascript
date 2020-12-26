/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * @module RedirectHandlerOptions
 */
import { MiddlewareOptions } from "./IMiddlewareOptions";
/**
 * @type
 * A type declaration for shouldRetry callback
 */
export declare type ShouldRedirect = (response: Response) => boolean;
/**
 * @class
 * @implements MiddlewareOptions
 * A class representing RedirectHandlerOptions
 */
export declare class RedirectHandlerOptions implements MiddlewareOptions {
	/**
	 * @private
	 * @static
	 * A member holding default max redirects value
	 */
	private static DEFAULT_MAX_REDIRECTS;
	/**
	 * @private
	 * @static
	 * A member holding maximum max redirects value
	 */
	private static MAX_MAX_REDIRECTS;
	/**
	 * @public
	 * A member holding max redirects value
	 */
	maxRedirects: number;
	/**
	 * @public
	 * A member holding shouldRedirect callback
	 */
	shouldRedirect: ShouldRedirect;
	/**
	 * @private
	 * A member holding default shouldRedirect callback
	 */
	private static DEFAULT_SHOULD_RETRY;
	/**
	 * @public
	 * @constructor
	 * To create an instance of RedirectHandlerOptions
	 * @param {number} [maxRedirects = RedirectHandlerOptions.DEFAULT_MAX_REDIRECTS] - The max redirects value
	 * @param {ShouldRedirect} [shouldRedirect = RedirectHandlerOptions.DEFAULT_SHOULD_RETRY] - The should redirect callback
	 * @returns An instance of RedirectHandlerOptions
	 */
	constructor(maxRedirects?: number, shouldRedirect?: ShouldRedirect);
}
