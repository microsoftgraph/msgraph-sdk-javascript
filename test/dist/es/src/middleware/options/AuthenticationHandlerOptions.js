/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * @class
 * @implements MiddlewareOptions
 * Class representing AuthenticationHandlerOptions
 */
export class AuthenticationHandlerOptions {
	/**
	 * @public
	 * @constructor
	 * To create an instance of AuthenticationHandlerOptions
	 * @param {AuthenticationProvider} [authenticationProvider] - The authentication provider instance
	 * @param {AuthenticationProviderOptions} [authenticationProviderOptions] - The authentication provider options instance
	 * @returns An instance of AuthenticationHandlerOptions
	 */
	constructor(authenticationProvider, authenticationProviderOptions) {
		this.authenticationProvider = authenticationProvider;
		this.authenticationProviderOptions = authenticationProviderOptions;
	}
}
//# sourceMappingURL=AuthenticationHandlerOptions.js.map
