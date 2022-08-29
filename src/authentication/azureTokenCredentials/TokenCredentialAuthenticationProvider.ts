/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { TokenCredential } from "@azure/identity";

import { GraphClientError } from "../../GraphClientError";
import { AuthenticationProvider } from "../../IAuthenticationProvider";
import { TokenCredentialAuthenticationProviderOptions } from "./ITokenCredentialAuthenticationProviderOptions";

/**
 * @module TokenCredentialAuthenticationProvider
 */

/**
 * @class
 * Class representing TokenCredentialAuthenticationProvider
 * This feature is introduced in Version 3.0.0
 * @extends AuthenticationProvider
 * Reference - https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/identity/identity/README.md
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
		if (!tokenCredential) {
			throw new GraphClientError("Please pass a token credential object to the TokenCredentialAuthenticationProvider class constructor");
		}
		if (!authenticationProviderOptions) {
			throw new GraphClientError("Please pass the TokenCredentialAuthenticationProviderOptions with scopes to the TokenCredentialAuthenticationProvider class constructor");
		}
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
		const scopes = this.authenticationProviderOptions.scopes;
		const error = new GraphClientError();

		if (!scopes || scopes.length === 0) {
			error.name = "Empty Scopes";
			error.message = "Scopes cannot be empty, Please provide scopes";
			throw error;
		}
		const response = await this.tokenCredential.getToken(scopes, this.authenticationProviderOptions.getTokenOptions);
		if (response) {
			return response.token;
		}
		error.message = "Cannot retrieve accessToken from the Token Credential object";
		error.name = "Access token is undefined";
		throw error;
	}
}
