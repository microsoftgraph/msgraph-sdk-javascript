/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * @module ImplicitMSALAuthenticationProvider
 */
import { UserAgentApplication } from "msal";
import { AuthenticationProvider } from "./IAuthenticationProvider";
import { AuthenticationProviderOptions } from "./IAuthenticationProviderOptions";
import { MSALAuthenticationProviderOptions } from "./MSALAuthenticationProviderOptions";
/**
 * @class
 * Class representing ImplicitMSALAuthenticationProvider
 * @extends AuthenticationProvider
 */
export declare class ImplicitMSALAuthenticationProvider implements AuthenticationProvider {
	/**
	 * @private
	 * A member holding an instance of MSALAuthenticationProviderOptions
	 */
	private options;
	/**
	 * @private
	 * A member holding an instance of MSAL UserAgentApplication
	 */
	private msalApplication;
	/**
	 * @public
	 * @constructor
	 * Creates an instance of ImplicitMSALAuthenticationProvider
	 * @param {UserAgentApplication} msalApplication - An instance of MSAL UserAgentApplication
	 * @param {MSALAuthenticationProviderOptions} options - An instance of MSALAuthenticationProviderOptions
	 * @returns An instance of ImplicitMSALAuthenticationProvider
	 */
	constructor(msalApplication: UserAgentApplication, options: MSALAuthenticationProviderOptions);
	/**
	 * @public
	 * @async
	 * To get the access token
	 * @param {AuthenticationProviderOptions} authenticationProviderOptions - The authentication provider options object
	 * @returns The promise that resolves to an access token
	 */
	getAccessToken(authenticationProviderOptions?: AuthenticationProviderOptions): Promise<string>;
}
