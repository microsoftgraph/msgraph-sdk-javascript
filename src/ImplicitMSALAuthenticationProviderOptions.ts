/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module ImplicitMSALAuthenticationProviderOptions
 */

import { AuthenticationProviderOptions } from "./IAuthenticationProviderOptions";

/**
 * @class
 * @implements AuthenticationProviderOptions
 * Class representing ImplicitMSALAuthenticationProviderOptions
 */
export class ImplicitMSALAuthenticationProviderOptions implements AuthenticationProviderOptions {
	/**
	 * @public
	 * A member holding array of scopes
	 */
	public scopes: string[];

	/**
	 * @public
	 * @constructor
	 * To create an instance of ImplicitMSALAuthenticationProviderOptions
	 * @param {string[]} scopes - An array of scopes
	 * @returns An instance of ImplicitMSALAuthenticationProviderOptions
	 */
	public constructor(scopes: string[]) {
		this.scopes = scopes;
	}
}
