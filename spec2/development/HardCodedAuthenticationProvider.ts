/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module HardCodedAuthenticationProvider
 */

import { AuthenticationProvider } from "../../src/IAuthenticationProvider";

import { AccessToken } from "./secrets";

/**
 * @class
 * @implements AuthenticationProvider
 * Class representing HardCodedAuthenticationProvider
 */
export class HardCodedAuthenticationProvider implements AuthenticationProvider {
	/**
	 * @public
	 * @async
	 * To get the access token
	 * @returns The promise that resolves to an access token
	 */
	public async getAccessToken(): Promise<any> {
		return Promise.resolve(AccessToken);
	}
}
