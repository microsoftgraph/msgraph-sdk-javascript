/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { AuthenticationProvider } from "./IAuthenticationProvider";
import { FetchOptions } from "./IFetchOptions";
import { Middleware } from "./middleware/IMiddleware";

/**
 * @interface
 * Options for initializing the Graph Client
 * @property {Function} [authProvider] - The authentication provider instance
 * @property {string} [baseUrl] - Base url that needs to be appended to every request
 * @property {boolean} [debugLogging] - The boolean to enable/disable debug logging
 * @property {string} [defaultVersion] - The default version that needs to be used while making graph api request
 * @property {FetchOptions} [fetchOptions] - The options for fetch request
 * @property {Middleware| Middleware[]} [middleware] - The first middleware of the middleware chain or an array of the Middleware handlers
 * @property {Set<string>}[customHosts] - A set of custom host names. Should contain hostnames only.
 */

export interface ClientOptions {
	authProvider?: AuthenticationProvider;
	baseUrl?: string;
	debugLogging?: boolean;
	defaultVersion?: string;
	fetchOptions?: FetchOptions;
	middleware?: Middleware | Middleware[];
	/**
	 * Example - If URL is "https://test_host/v1.0", then set property "customHosts" as "customHosts: Set<string>(["test_host"])"
	 */
	customHosts?: Set<string>;
}
