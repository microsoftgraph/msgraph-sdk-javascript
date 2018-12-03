/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import { AuthenticationProvider } from "./IAuthenticationProvider";
import { Middleware } from "./IMiddleware";
import { MiddlewareOptions } from "./IMiddlewareOptions";
/**
* @interface
* Options for initializing the Graph Client
* @property {Function} [authProvider] - The authentication provider instance
* @property {Function} [middleware] - The first middleware of the middleware chain
* @property {string} [baseUrl] - Base url that needs to be appended to every request
* @property {string} [defaultVersion] - The default version that needs to be used while making graph api request
* @property {FetchOptions} [fetchOptions] - The options for fetch request
* @property {boolean} [debugLogging] - The boolean to enable/disable debug logging
*/
export interface Options {
    authProvider?: AuthenticationProvider;
    middleware?: Middleware;
    middlewareOptions?: MiddlewareOptions;
    baseUrl?: string;
    defaultVersion?: string;
    debugLogging?: boolean;
}
