/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module ImplicitMSALAuthenticationProvider
 */

import { AuthenticationParameters, AuthResponse, InteractionRequiredAuthError, UserAgentApplication } from "msal";

import { AuthenticationProvider } from "./IAuthenticationProvider";
import { AuthenticationProviderOptions } from "./IAuthenticationProviderOptions";
import { MSALAuthenticationProviderOptions } from "./MSALAuthenticationProviderOptions";

/**
 * @class
 * Class representing ImplicitMSALAuthenticationProvider
 * @extends AuthenticationProvider
 */
export class ImplicitMSALAuthenticationProvider implements AuthenticationProvider {
	/**
	 * @private
	 * A member holding an instance of MSALAuthenticationProviderOptions
	 */
	private options: MSALAuthenticationProviderOptions;

	/**
	 * @private
	 * A member holding an instance of MSAL UserAgentApplication
	 */
	private msalApplication: UserAgentApplication;

	/**
	 * @public
	 * @constructor
	 * Creates an instance of ImplicitMSALAuthenticationProvider
	 * @param {UserAgentApplication} msalApplication - An instance of MSAL UserAgentApplication
	 * @param {MSALAuthenticationProviderOptions} options - An instance of MSALAuthenticationProviderOptions
	 * @returns An instance of ImplicitMSALAuthenticationProvider
	 */
	public constructor(msalApplication: UserAgentApplication, options: MSALAuthenticationProviderOptions) {
		this.options = options;
		this.msalApplication = msalApplication;
	}

	/**
	 * @public
	 * @async
	 * To get the access token
	 * @param {AuthenticationProviderOptions} authenticationProviderOptions - The authentication provider options object
	 * @returns The promise that resolves to an access token
	 */
	public async getAccessToken(authenticationProviderOptions?: AuthenticationProviderOptions): Promise<string> {
		const options: MSALAuthenticationProviderOptions = authenticationProviderOptions as MSALAuthenticationProviderOptions;
		let scopes: string[];
		if (typeof options !== "undefined") {
			scopes = options.scopes;
		}
		if (typeof scopes === "undefined" || scopes.length === 0) {
			scopes = this.options.scopes;
		}
		if (scopes.length === 0) {
			const error = new Error();
			error.name = "EmptyScopes";
			error.message = "Scopes cannot be empty, Please provide a scopes";
			throw error;
		}
		if (this.msalApplication.getAccount()) {
			const tokenRequest: AuthenticationParameters = {
				scopes,
			};
			try {
				const authResponse: AuthResponse = await this.msalApplication.acquireTokenSilent(tokenRequest);
				return authResponse.accessToken;
			} catch (error) {
				if (error instanceof InteractionRequiredAuthError) {
					try {
						const authResponse: AuthResponse = await this.msalApplication.acquireTokenPopup(tokenRequest);
						return authResponse.accessToken;
					} catch (error) {
						throw error;
					}
				} else {
					throw error;
				}
			}
		} else {
			try {
				const tokenRequest: AuthenticationParameters = {
					scopes,
				};
				await this.msalApplication.loginPopup(tokenRequest);
				const authResponse: AuthResponse = await this.msalApplication.acquireTokenSilent(tokenRequest);
				return authResponse.accessToken;
			} catch (error) {
				throw error;
			}
		}
	}
}
