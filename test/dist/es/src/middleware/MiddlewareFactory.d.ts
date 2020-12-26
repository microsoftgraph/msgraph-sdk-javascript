/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * @module MiddlewareFactory
 */
import { AuthenticationProvider } from "../IAuthenticationProvider";
import { Middleware } from "./IMiddleware";
/**
 * @class
 * Class containing function(s) related to the middleware pipelines.
 */
export declare class MiddlewareFactory {
	/**
	 * @public
	 * @static
	 * Returns the default middleware chain an array with the  middleware handlers
	 * @param {AuthenticationProvider} authProvider - The authentication provider instance
	 * @returns an array of the middleware handlers of the default middleware chain
	 */
	static getDefaultMiddlewareChain(authProvider: AuthenticationProvider): Middleware[];
}
