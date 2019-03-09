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
	 * A member holding the clientId of an application
	 */
	private clientId: string;

	/**
	 * @private
	 * A member holding the list of graph scopes
	 */
	private scopes: string[];

	/**
	 * @public
	 * A member holding an instance of UserAgentApplication returned from MSAL
	 */
	public userAgentApplication: any;

	/**
	 * @public
	 * @constructor
	 * Creates an instance of MSALAuthenticationProvider
	 * @param {string} clientId - The clientId value of an application
	 * @param {string[]} scopes - An array of graph scopes
	 * @param {any} [options] - An options object for MSAL initialization
	 * @returns An instance of MSALAuthenticationProvider
	 */
	public constructor(clientId: string, scopes: string[], options?: any) {
		const callback = (errorDesc, token, error, tokenType) => {
			// tslint:disable-line: no-empty
		};
		this.clientId = clientId;
		this.scopes = scopes;
		this.userAgentApplication = new Msal.UserAgentApplication(this.clientId, undefined, callback, options);
	}

	/**
	 * @public
	 * @async
	 * To get the access token
	 * @param {AuthenticationProviderOptions} authenticationProviderOptions - The authentication provider options object
	 * @returns The promise that resolves to an access token
	 */
	public async getAccessToken(authenticationProviderOptions?: AuthenticationProviderOptions): Promise<string> {
		const options = authenticationProviderOptions as MSALAuthenticationProviderOptions;
		let scopes: string[];
		if (typeof options !== "undefined") {
			scopes = options.scopes;
		}
		if (typeof scopes === "undefined" || scopes.length === 0) {
			scopes = this.scopes;
		}
		if (scopes.length === 0) {
			const error = new Error();
			error.name = "EmptyScopes";
			error.message = "Scopes cannot be empty, Please provide a scope";
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

	/**
	 * @public
	 * To add the scopes to the existing set of scopes
	 * @param {string[]} scopes - The array of graph scope values
	 * @returns Nothing
	 */
	public addScopes(scopes: string[]): void {
		if (scopes.length === 0) {
			const error = new Error();
			error.name = "EmptyScopes";
			error.message = "Scopes array cannot be empty";
			throw error;
		}
		this.scopes = Array.from(new Set(this.scopes.concat(scopes)));
	}

	/**
	 * @public
	 * To clear the graph scopes
	 * @returns Nothing
	 */
	public clearScopes(): void {
		this.scopes = [];
	}
}
