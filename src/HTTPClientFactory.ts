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
import { AuthenticationHandler } from "./middleware/AuthenticationHandler";
import { HTTPMessageHandler } from "./middleware/HTTPMessageHandler";
import { Middleware } from "./middleware/IMiddleware";
import { RedirectHandlerOptions } from "./middleware/options/RedirectHandlerOptions";
import { RetryHandlerOptions } from "./middleware/options/RetryHandlerOptions";
import { RedirectHandler } from "./middleware/RedirectHandler";
import { RetryHandler } from "./middleware/RetryHandler";

/**
 * @private
 * To check whether the environment is node or not
 * @returns A boolean representing the environment is node or not
 */
const isNodeEnvironment = (): boolean => {
	return new Function("try {return this === global;}catch(e){return false;}")(); // tslint:disable-line: function-constructor
};

/**
 * @class
 * Class representing HTTPClientFactory
 */
export class HTTPClientFactory {
	/**
	 * @public
	 * @static
	 * Creates HTTPClient with default middleware chain
	 * @param {AuthenticationProvider} authProvider - The authentication provider instance
	 * @returns A HTTPClient instance
	 */
	public static createWithAuthenticationProvider(authProvider: AuthenticationProvider): HTTPClient {
		const authenticationHandler = new AuthenticationHandler(authProvider);
		const retryHandler = new RetryHandler(new RetryHandlerOptions());
		const httpMessageHandler = new HTTPMessageHandler();
		authenticationHandler.setNext(retryHandler);
		if (isNodeEnvironment()) {
			const redirectHandler = new RedirectHandler(new RedirectHandlerOptions());
			retryHandler.setNext(redirectHandler);
			redirectHandler.setNext(httpMessageHandler);
		} else {
			retryHandler.setNext(httpMessageHandler);
		}
		return HTTPClientFactory.createWithMiddleware(authenticationHandler);
	}

	/**
	 * @public
	 * @static
	 * Creates a middleware chain with the given one
	 * @param {Middleware} middleware - The first middleware of the middleware chain
	 * @returns A HTTPClient instance
	 */
	public static createWithMiddleware(middleware: Middleware): HTTPClient {
		return new HTTPClient(middleware);
	}
}
