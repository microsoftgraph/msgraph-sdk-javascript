/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module AuthenticationHandler
 */

import { BaseBearerTokenAuthenticationProvider, RequestOption } from "@microsoft/kiota-abstractions";
import { appendRequestHeader, FetchRequestInit, Middleware } from "@microsoft/kiota-http-fetchlibrary";

/**
 * @class
 * @implements Middleware
 * Class representing AuthenticationHandler
 */
export class AuthenticationHandler implements Middleware {
	/**
	 * @private
	 * A member representing the authorization header name
	 */
	private static AUTHORIZATION_HEADER = "Authorization";

	/**
	 * @private
	 * A member to hold next middleware in the middleware chain
	 */
	next: Middleware;

	/**
	 * @public
	 * @constructor
	 * Creates an instance of AuthenticationHandler
	 * @param {AuthenticationProvider} authenticationProvider - The authentication provider for the authentication handler
	 */
	public constructor(private authenticationProvider: BaseBearerTokenAuthenticationProvider) {}

	/**
	 * @public
	 * @async
	 * To execute the current middleware
	 * @param {Context} context - The context object of the request
	 * @returns A Promise that resolves to nothing
	 */
	public async execute(url: string, requestInit: RequestInit, requestOptions?: Record<string, RequestOption>): Promise<Response> {
		if (this.authenticationProvider.accessTokenProvider.getAllowedHostsValidator().isUrlHostValid(url)) {
			if (requestInit?.headers && !requestInit.headers[AuthenticationHandler.AUTHORIZATION_HEADER]) {
				const token: string = await this.authenticationProvider.accessTokenProvider.getAuthorizationToken(url);
				const bearerKey = `Bearer ${token}`;
				appendRequestHeader(requestInit as FetchRequestInit, AuthenticationHandler.AUTHORIZATION_HEADER, bearerKey);
			}
		} else {
			/**
			 * deleting auth headers because the tasks such as LargeFileUpload use client.api() to upload to redirected url
			 * delete the auth header and allow the request to go through with the rest of the middleware chain
			 **/
			delete requestInit.headers[AuthenticationHandler.AUTHORIZATION_HEADER];
		}
		return await this.next.execute(url, requestInit, requestOptions);
	}
}
