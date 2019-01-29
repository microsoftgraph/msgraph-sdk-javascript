/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import { HTTPClient } from "./HTTPClient";
import { AuthenticationProvider } from "./IAuthenticationProvider";
import { Middleware } from "./IMiddleware";
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
     */
    static createWithAuthenticationProvider(authProvider: AuthenticationProvider): HTTPClient;
    /**
     * @public
     * @static
     * Creates a middleware chain with the given one
     * @param {Middleware} middleware - The first middleware of the middleware chain
     * @returns A HTTPClient instance
     */
    static createWithMiddleware(middleware: Middleware): HTTPClient;
}
