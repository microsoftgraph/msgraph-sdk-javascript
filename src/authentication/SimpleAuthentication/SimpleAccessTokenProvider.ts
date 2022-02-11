/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module CustomAuthenticationProvider
 */

import { AccessTokenProvider, AllowedHostsValidator } from "@microsoft/kiota-abstractions";

import { GraphClientError } from "../../GraphClientError";

/**
 * @class
 * Class representing CustomAuthenticationProvider
 * @extends AuthenticationProvider
 */
export class SimpleAccessTokenProvider implements AccessTokenProvider {
	/**
	 * @public
	 * @constructor
	 * Creates an instance of CustomAuthenticationProvider
	 * @param {AuthProviderCallback} provider - An authProvider function
	 * @returns An instance of CustomAuthenticationProvider
	 */
	public constructor(private getAccessTokenCallback: (scopes?: string[]) => Promise<string>, private scopes: string[]) {}
	getAllowedHostsValidator: () => AllowedHostsValidator;

	/**
	 * @public
	 * @async
	 * To get the access token
	 * @returns The promise that resolves to an access token
	 */
	public async getAuthorizationToken(): Promise<string> {
		let token = "";
		if (this.getAccessTokenCallback) {
			token = await this.getAccessTokenCallback(this.scopes);
		}
		if (!token) {
			throw new GraphClientError("Please provide a valid access token");
		}

		console.log(token);
		return token;
	}
}
