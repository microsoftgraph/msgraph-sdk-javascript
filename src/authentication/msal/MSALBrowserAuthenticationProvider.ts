/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module ImplicitMSALAuthenticationProvider
 */

import { InteractionRequiredAuthError, PublicClientApplication, SilentRequest } from "@azure/msal-browser";

import { GraphClientError } from "../../GraphClientError";
import { AuthenticationProvider } from "../../IAuthenticationProvider";
import { LoginType, MSALBrowserAuthenticationProviderOptions } from "./MSALAuthenticationProviderOptions";

/**
 * @deprecated Use of ImplicitMSALAuthenticationProvider, that is,
 * using the implicit authorization flow is not recommended.
 * Use the TokenCredentialAuthenticationProvider with azure/identity library or
 * a CustomAuthenticationProvider with msal-browser library instead.
 * @class
 * Class representing ImplicitMSALAuthenticationProvider
 * @extends AuthenticationProvider
 */
export class ImplicitMSALAuthenticationProvider implements AuthenticationProvider {
	/**
	 * @private
	 * A member holding an instance of MSALAuthenticationProviderOptions
	 */
	private options: MSALBrowserAuthenticationProviderOptions;

	/**
	 * @public
	 * @constructor
	 * Creates an instance of ImplicitMSALAuthenticationProvider
	 * @param {UserAgentApplication} msalApplication - An instance of MSAL UserAgentApplication
	 * @param {MSALAuthenticationProviderOptions} options - An instance of MSALAuthenticationProviderOptions
	 * @returns An instance of ImplicitMSALAuthenticationProvider
	 */
	public constructor(private readonly publicClientApplication: PublicClientApplication, options: MSALBrowserAuthenticationProviderOptions) {
		this.options = options;
		this.publicClientApplication = publicClientApplication;
	}

	/**
	 * @public
	 * @async
	 * To get the access token
	 * @param {AuthenticationProviderOptions} authenticationProviderOptions - The authentication provider options object
	 * @returns The promise that resolves to an access token
	 */
	public async getAccessToken(options?: MSALBrowserAuthenticationProviderOptions): Promise<string> {
		const scopes = options && options.scopes;
		const accessTokenRequest: SilentRequest = {
			scopes,
			account: this.getAccount(),
		};
		try {
			const response = await this.publicClientApplication.acquireTokenSilent(accessTokenRequest);
			return response.accessToken;
		} catch (e) {
			if (e instanceof InteractionRequiredAuthError) {
				if (this.options.loginType === LoginType.Redirect) {
					this.publicClientApplication.acquireTokenRedirect(accessTokenRequest);
				} else {
					try {
						const response = await this.publicClientApplication.acquireTokenPopup(accessTokenRequest);
						return response.accessToken;
					} catch (e) {
						throw new GraphClientError("");
					}
				}
			}
		}
	}
	private getAccount() {
		if (this.options.getAccount) {
			return this.options.getAccount();
		}
		const allAccounts = this.publicClientApplication.getAllAccounts();
		return allAccounts[0];
	}
}
