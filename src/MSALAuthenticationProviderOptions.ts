/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module MSALAuthenticationProviderOptions
 */

import { AuthenticationProviderOptions } from "./IAuthenticationProviderOptions";

/**
 * @class
 * @implements AuthenticationProviderOptions
 * Class representing MSALAuthenticationProviderOptions
 */
export class MSALAuthenticationProviderOptions implements AuthenticationProviderOptions {
	/**
	 * @public
	 * A member holding array of scopes
	 */
	public scopes: string[];

	/**
	 * @public
	 * @constructor
	 * To create an instance of MSALAuthenticationProviderOptions
	 * @param {string[]} scopes - An array of scopes
	 * @returns An instance of MSALAuthenticationProviderOptions
	 */
	public constructor(scopes: string[]) {
		this.scopes = scopes;
	}
}
