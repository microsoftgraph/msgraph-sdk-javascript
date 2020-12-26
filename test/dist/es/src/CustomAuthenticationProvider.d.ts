/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * @module CustomAuthenticationProvider
 */
import { AuthenticationProvider } from "./IAuthenticationProvider";
import { AuthProvider } from "./IAuthProvider";
/**
 * @class
 * Class representing CustomAuthenticationProvider
 * @extends AuthenticationProvider
 */
export declare class CustomAuthenticationProvider implements AuthenticationProvider {
	/**
	 * @private
	 * A member to hold authProvider callback
	 */
	private provider;
	/**
	 * @public
	 * @constructor
	 * Creates an instance of CustomAuthenticationProvider
	 * @param {AuthProviderCallback} provider - An authProvider function
	 * @returns An instance of CustomAuthenticationProvider
	 */
	constructor(provider: AuthProvider);
	/**
	 * @public
	 * @async
	 * To get the access token
	 * @returns The promise that resolves to an access token
	 */
	getAccessToken(): Promise<any>;
}
