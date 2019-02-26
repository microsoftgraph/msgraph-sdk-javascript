/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module DummyAuthenticationProvider
 */

import { AuthenticationProvider } from "../src/IAuthenticationProvider";

/**
 * @class
 * @implements AuthenticationProvider
 * Class representing DummyAuthenticationProvider
 */
export class DummyAuthenticationProvider implements AuthenticationProvider {
	/**
	 * @public
	 * @async
	 * To get the access token
	 * @returns The promise that resolves to an access token
	 */
	public async getAccessToken(): Promise<string> {
		const token = "DUMMY_TOKEN";
		return Promise.resolve(token);
	}
}
