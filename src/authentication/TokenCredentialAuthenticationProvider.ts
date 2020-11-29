/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { TokenCredential } from "@azure/identity";

import { AuthenticationProvider } from "../IAuthenticationProvider";

import { TokenCredentialAuthenticationProviderOptions } from "./ITokenCredentialAuthenticationProviderOptions";

/**
 * @module ImplicitMSALAuthenticationProvider
 */

/**
 * @class
 * Class representing TokenCredentialAuthenticationProvider
 * @extends AuthenticationProvider
 */
export class TokenCredentialAuthenticationProvider implements AuthenticationProvider {
	/**
	 * @private
	 * A member holding an instance of @azure/identity TokenCredential
	 */
	private tokenCredential: TokenCredential;

	/**
	 * @private
	 * A member holding an instance of TokenCredentialAuthenticationProviderOptions
	 */
	private authenticationProviderOptions: TokenCredentialAuthenticationProviderOptions;

	/**
	 * @public
	 * @constructor
	 * Creates an instance of TokenCredentialAuthenticationProvider
	 * @param {TokenCredential} tokenCredential - An instance of @azure/identity TokenCredential
	 * @param {TokenCredentialAuthenticationProviderOptions} authenticationProviderOptions - An instance of TokenCredentialAuthenticationProviderOptions
	 * @returns An instance of TokenCredentialAuthenticationProvider
	 */
	public constructor(tokenCredential: TokenCredential, authenticationProviderOptions: TokenCredentialAuthenticationProviderOptions) {
		this.authenticationProviderOptions = authenticationProviderOptions;
		this.tokenCredential = tokenCredential;
	}

	/**
	 * @public
	 * @async
	 * To get the access token
	 * @param {TokenCredentialAuthenticationProviderOptions} authenticationProviderOptions - The authentication provider options object
	 * @returns The promise that resolves to an access token
	 */
	public async getAccessToken(): Promise<string> {
		let scopes: string[] = [];
		const error = new Error();
		if (this.authenticationProviderOptions && this.authenticationProviderOptions.scopes) {
			scopes = this.authenticationProviderOptions.scopes;
		}
		if (scopes === undefined || scopes === null || scopes.length === 0) {
			error.name = "Empty Scopes";
			error.message = "Scopes cannot be empty, Please provide scopes";
			throw error;
		}
		const response = await this.tokenCredential.getToken(scopes, this.authenticationProviderOptions.getTokenoptions);
		if (response) {
			return response.token;
		}
		error.message = "Cannot retrieve accessToken";
		error.name = "Access token is undefined";
		throw error;
	}
}
