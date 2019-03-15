/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { AuthenticationProviderOptions } from "./IAuthenticationProviderOptions";

/**
 * @interface
 * A signature representing Authentication provider
 * @property {Function} getAccessToken - The function to get the access token from the authentication provider
 */
export interface AuthenticationProvider {
	/**
	 * To get access token from the authentication provider
	 * @param {AuthenticationProviderOptions} [authenticationProviderOptions] - The authentication provider options instance
	 * @returns A promise that resolves to an access token
	 */
	getAccessToken: (authenticationProviderOptions?: AuthenticationProviderOptions) => Promise<string>;
}
