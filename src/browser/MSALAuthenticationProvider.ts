/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module MSALAuthenticationProvider
 */

import { AuthenticationProvider } from "../IAuthenticationProvider";
import { AuthenticationProviderOptions } from "../IAuthenticationProviderOptions";
import { MSALAuthenticationProviderOptions } from "../MSALAuthenticationProviderOptions";

/**
 * @constant
 * A declaration of a Msal library
 */
declare const Msal: any;

/**
 * @class
 * Class representing MSALAuthenticationProvider
 * @extends AuthenticationProvider
 */
export class MSALAuthenticationProvider implements AuthenticationProvider {
	/**
	 * @private
	 * A member holding an instance of MSALAuthenticationProviderOptions
	 */
	private options: MSALAuthenticationProviderOptions;

	/**
	 * @private
	 * A member holding an instance of UserAgentApplication
	 */
	private userAgentApplication: any;

	/**
	 * @public
	 * @constructor
	 * Creates an instance of MSALAuthenticationProvider
	 * @param {any} userAgentApplication - An instance of UserAgentApplication
	 * @param {MSALAuthenticationProviderOptions} options - An instance of MSALAuthenticationProviderOptions
	 * @returns An instance of MSALAuthenticationProvider
	 */
	public constructor(userAgentApplication: any, options: MSALAuthenticationProviderOptions) {
		this.options = options;
		this.userAgentApplication = userAgentApplication;
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
		try {
			const accessToken: string = await this.userAgentApplication.acquireTokenSilent(scopes);
			return accessToken;
		} catch (errorMsg) {
			try {
				const idToken: string = await this.userAgentApplication.loginPopup(scopes);
				try {
					const accessToken: string = await this.userAgentApplication.acquireTokenSilent(scopes);
					return accessToken;
				} catch (error) {
					const accessToken: string = await this.userAgentApplication.acquireTokenPopup(scopes);
					return accessToken;
				}
			} catch (errorMsg) {
				throw new Error(errorMsg);
			}
		}
	}
}
