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
import { setRequestHeader } from "./MiddlewareUtil";

/**
 * @class
 * Class representing AuthenticationHandler
 * @implements Middleware
 */
export class AuthenticationHandler implements Middleware {
	/**
	 * @private
	 * A member representing the authorization header name
	 */
	private static AUTHORIZATION_HEADER: string = "Authorization";

	/**
	 * @private
	 * A member to hold an AuthenticationProvider instance
	 */
	private authProvider: AuthenticationProvider;

	/**
	 * @private
	 * A member to hold next middleware in the middleware chain
	 */
	private nextMiddleware: Middleware;

	/**
	 * @public
	 * @constructor
	 * Creates an instance of AuthenticationHandler
	 * @param {AuthenticationProvider} authProvider - The authentication provider for the authentication handler
	 */
	public constructor(authProvider: AuthenticationProvider) {
		this.authProvider = authProvider;
	}

	/**
	 * @public
	 * @async
	 * To execute the current middleware
	 * @param {context} context - The context object of the request
	 * @returns A Promise that resolves to nothing
	 */
	public async execute(context: Context): Promise<void> {
		try {
			const token = await this.authProvider.getAccessToken();
			const bearerKey = `Bearer ${token}`;
			setRequestHeader(context.request, context.options, AuthenticationHandler.AUTHORIZATION_HEADER, bearerKey);
			return await this.nextMiddleware.execute(context);
		} catch (error) {
			throw error;
		}
	}

	/**
	 * @public
	 * To set the next middleware in the chain
	 * @param {Middleware} next - The middleware instance
	 * @returns Nothing
	 */
	public setNext(next: Middleware): void {
		this.nextMiddleware = next;
	}
}
