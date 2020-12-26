/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * @module HTTPClientFactory
 */
import { HTTPClient } from "./HTTPClient";
import { AuthenticationProvider } from "./IAuthenticationProvider";
import { Middleware } from "./middleware/IMiddleware";
/**
 * @class
 * Class representing HTTPClientFactory
 */
export declare class HTTPClientFactory {
	/**
	 * @public
	 * @static
	 * Creates HTTPClient with default middleware chain
	 * @param {AuthenticationProvider} authProvider - The authentication provider instance
	 * @returns A HTTPClient instance
	 *
	 * NOTE: These are the things that we need to remember while doing modifications in the below default pipeline.
	 * 		* HTTPMessageHander should be the last one in the middleware pipeline, because this makes the actual network call of the request
	 * 		* TelemetryHandler should be the one prior to the last middleware in the chain, because this is the one which actually collects and appends the usage flag and placing this handler 	*		  before making the actual network call ensures that the usage of all features are recorded in the flag.
	 * 		* The best place for AuthenticationHandler is in the starting of the pipeline, because every other handler might have to work for multiple times for a request but the auth token for
	 * 		  them will remain same. For example, Retry and Redirect handlers might be working multiple times for a request based on the response but their auth token would remain same.
	 */
	static createWithAuthenticationProvider(authProvider: AuthenticationProvider): HTTPClient;
	/**
	 * @public
	 * @static
	 * Creates a middleware chain with the given one
	 * @property {...Middleware} middleware - The first middleware of the middleware chain or a sequence of all the Middleware handlers
	 * @returns A HTTPClient instance
	 */
	static createWithMiddleware(...middleware: Middleware[]): HTTPClient;
}
