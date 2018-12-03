/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module HTTPClientFactory
 */

import { AuthenticationHandler } from "./middleware/AuthenticationHandler";
import { HTTPMessageHandler } from "./middleware/HTTPMessageHandler";
import { HTTPClient } from "./HTTPClient";
import { AuthenticationProvider } from "./IAuthenticationProvider";
import { Middleware } from "./IMiddleware";

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
     * @return A HTTPClient instance
     */
    public static createWithAuthenticationProvider(authProvider: AuthenticationProvider): HTTPClient {
        let authenticationHandler = new AuthenticationHandler(authProvider);
        let httpMessageHandler = new HTTPMessageHandler();
        authenticationHandler.setNext(httpMessageHandler);
        return HTTPClientFactory.createWithMiddleware(authenticationHandler);
    }

    /**
     * @public
     * @static
     * Creates a middleware chain with the given one
     * @param {Middleware} middleware - The first middleware of the middleware chain
     * @return A HTTPClient instance 
     */
    static createWithMiddleware(middleware: Middleware): HTTPClient {
        return new HTTPClient(middleware);
    }
}