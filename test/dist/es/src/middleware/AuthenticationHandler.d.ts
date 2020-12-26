/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * @module AuthenticationHandler
 */
import { AuthenticationProvider } from "../IAuthenticationProvider";
import { Context } from "../IContext";
import { Middleware } from "./IMiddleware";
/**
 * @class
 * @implements Middleware
 * Class representing AuthenticationHandler
 */
export declare class AuthenticationHandler implements Middleware {
	/**
	 * @private
	 * A member representing the authorization header name
	 */
	private static AUTHORIZATION_HEADER;
	/**
	 * @private
	 * A member to hold an AuthenticationProvider instance
	 */
	private authenticationProvider;
	/**
	 * @private
	 * A member to hold next middleware in the middleware chain
	 */
	private nextMiddleware;
	/**
	 * @public
	 * @constructor
	 * Creates an instance of AuthenticationHandler
	 * @param {AuthenticationProvider} authenticationProvider - The authentication provider for the authentication handler
	 */
	constructor(authenticationProvider: AuthenticationProvider);
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
