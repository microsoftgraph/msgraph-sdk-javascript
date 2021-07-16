/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module MSALBrowserAuthenticationProvider
 */

import { AuthenticationResult, InteractionRequiredAuthError, InteractionType, PublicClientApplication } from "@azure/msal-browser";

import { GraphClientError } from "../../GraphClientError";
import { AuthenticationProvider } from "../../IAuthenticationProvider";
import { MSALBrowserAuthenticationProviderOptions } from "../msalOptions/MSALAuthenticationProviderOptions";

/**
 * a AuthenticationProvider implementation supporting msal-browser library instead.
 * @class
 * @extends AuthenticationProvider
 */
export class MSALBrowserAuthenticationProvider implements AuthenticationProvider {
	/**
	 * @public
	 * @constructor
	 * Creates an instance of ImplicitMSALAuthenticationProvider
	 * @param {PublicClientApplication} msalApplication - An instance of MSAL PublicClientApplication
	 * @param {MSALBrowserAuthenticationProviderOptions} options - An instance of MSALAuthenticationProviderOptions
	 * @returns An instance of ImplicitMSALAuthenticationProvider
	 */
	public constructor(private publicClientApplication: PublicClientApplication, private options: MSALBrowserAuthenticationProviderOptions) {
		if (!this.options || !this.publicClientApplication) {
			throw new GraphClientError("Please pass valid PublicClientApplication instance and MSALBrowserAuthenticationProviderOptions instance to instantiate MSALBrowserAuthenticationProvider");
		}
		this.options = options;
		this.publicClientApplication = publicClientApplication;
	}

	/**
	 * @public
	 * @async
	 * To get the access token for the request
	 * @returns The promise that resolves to an access token
	 */
	public async getAccessToken(): Promise<string> {
		const scopes = this.options && this.options.scopes;
		const account = this.options && this.options.account;
		const error = new GraphClientError();
		if (!scopes || scopes.length === 0) {
			error.name = "Empty Scopes";
			error.message = "Scopes cannot be empty, Please provide scopes";
			throw error;
		}
		try {
			const response: AuthenticationResult = await this.publicClientApplication.acquireTokenSilent({
				scopes,
				account,
			});
			return response.accessToken;
		} catch (error) {
			if (error instanceof InteractionRequiredAuthError) {
				if (this.options.interactionType === InteractionType.Redirect) {
					this.publicClientApplication.acquireTokenRedirect({ scopes });
				} else if (this.options.interactionType === InteractionType.Popup) {
					const response: AuthenticationResult = await this.publicClientApplication.acquireTokenPopup({ scopes });
					return response.accessToken;
				}
			}
		}
	}
}
