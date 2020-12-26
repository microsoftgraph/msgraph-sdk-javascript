/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import * as tslib_1 from "tslib";
/**
 * @module ImplicitMSALAuthenticationProvider
 */
import { InteractionRequiredAuthError } from "msal";
/**
 * @class
 * Class representing ImplicitMSALAuthenticationProvider
 * @extends AuthenticationProvider
 */
export class ImplicitMSALAuthenticationProvider {
	/**
	 * @public
	 * @constructor
	 * Creates an instance of ImplicitMSALAuthenticationProvider
	 * @param {UserAgentApplication} msalApplication - An instance of MSAL UserAgentApplication
	 * @param {MSALAuthenticationProviderOptions} options - An instance of MSALAuthenticationProviderOptions
	 * @returns An instance of ImplicitMSALAuthenticationProvider
	 */
	constructor(msalApplication, options) {
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
	getAccessToken(authenticationProviderOptions) {
		return tslib_1.__awaiter(this, void 0, void 0, function*() {
			const options = authenticationProviderOptions;
			let scopes;
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
				const tokenRequest = {
					scopes,
				};
				try {
					const authResponse = yield this.msalApplication.acquireTokenSilent(tokenRequest);
					return authResponse.accessToken;
				} catch (error) {
					if (error instanceof InteractionRequiredAuthError) {
						try {
							const authResponse = yield this.msalApplication.acquireTokenPopup(tokenRequest);
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
					const tokenRequest = {
						scopes,
					};
					yield this.msalApplication.loginPopup(tokenRequest);
					const authResponse = yield this.msalApplication.acquireTokenSilent(tokenRequest);
					return authResponse.accessToken;
				} catch (error) {
					throw error;
				}
			}
		});
	}
}
//# sourceMappingURL=ImplicitMSALAuthenticationProvider.js.map
