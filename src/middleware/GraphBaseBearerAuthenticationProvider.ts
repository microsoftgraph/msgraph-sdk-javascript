/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module AuthenticationHandler
 */

import { BaseBearerTokenAuthenticationProvider, RequestInformation } from "@microsoft/kiota-abstractions";

import { isCustomHost, isGraphURL } from "../GraphRequestUtil";

/**
 * @class
 * @implements Middleware
 * Class representing AuthenticationHandler
 */
export abstract class GraphBaseBearerTokenAuthenticationProvider extends BaseBearerTokenAuthenticationProvider {
	/**
	 * @private
	 * A member representing the authorization header name
	 */
	private static AUTHORIZATION_HEADER = "Authorization";

	/**
	 *
	 * @param customHosts
	 *
	 */
	// add a Graph object at this point and in context
	public constructor(private customHosts: Set<string>) {
		super();
	}

	/**
	 * @public
	 * @async
	 * To execute the current middleware
	 * @param {Context} context - The context object of the request
	 * @returns A Promise that resolves to nothing
	 */
	//public async authenticateRequest (request: RequestInformation): Promise<void> {
	public authenticateRequest = async (request: RequestInformation): Promise<void> => {
		const url = request.URL.toString();
		if (isGraphURL(url) || (this.customHosts && isCustomHost(url, this.customHosts))) {
			if (!request) {
				throw new Error("request info cannot be null");
			}
			if (!request.headers[GraphBaseBearerTokenAuthenticationProvider.AUTHORIZATION_HEADER]) {
				const token = await this.getAuthorizationToken(request);
				if (!token) {
					throw new Error("Could not get an authorization token");
				}
				if (!request.headers) {
					request.headers = {};
				}
				request.headers[GraphBaseBearerTokenAuthenticationProvider.AUTHORIZATION_HEADER] = `Bearer ${token}`;
			}

			//Append telemetry Feature Flag;
		} else {
			delete request.headers[GraphBaseBearerTokenAuthenticationProvider.AUTHORIZATION_HEADER];
		}
	};

	/**
	 * This method is called by the BaseBearerTokenAuthenticationProvider class to authenticate the request via the returned access token.
	 * @param requestUrl the request to authenticate.
	 * @return a Promise that holds the access token to use for the request.
	 */
	public abstract getAuthorizationToken: (request: RequestInformation) => Promise<string>;
}
