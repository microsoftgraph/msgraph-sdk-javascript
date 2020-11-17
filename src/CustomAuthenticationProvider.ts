/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module CustomAuthenticationProvider
 */

import { GraphClientError } from "./GraphClientError";
import { AuthenticationProvider } from "./IAuthenticationProvider";
import { AuthProvider } from "./IAuthProvider";

/**
 * @class
 * Class representing CustomAuthenticationProvider
 * @extends AuthenticationProvider
 */
export class CustomAuthenticationProvider implements AuthenticationProvider {
	/**
	 * @private
	 * A member to hold authProvider callback
	 */
	private provider: AuthProvider;

	/**
	 * @public
	 * @constructor
	 * Creates an instance of CustomAuthenticationProvider
	 * @param {AuthProviderCallback} provider - An authProvider function
	 * @returns An instance of CustomAuthenticationProvider
	 */
	public constructor(provider: AuthProvider) {
		this.provider = provider;
	}

	/**
	 * @public
	 * @async
	 * To get the access token
	 * @returns The promise that resolves to an access token
	 */
	public async getAccessToken(): Promise<any> {
		return new Promise((resolve: (accessToken: string) => void, reject: (error: any) => void) => {
			this.provider(async (error: any, accessToken: string | null) => {
				if (accessToken) {
					resolve(accessToken);
				} else {
					if (!error) {
						const invalidTokenMessage = "Access token is undefined or empty.\
						Please provide a valid token.\
						For more help - https://github.com/microsoftgraph/msgraph-sdk-javascript/blob/dev/docs/CustomAuthenticationProvider.md";
						error = new GraphClientError(invalidTokenMessage);
					}
					const err = await GraphClientError.setGraphClientError(error);
					reject(err);
				}
			});
		});
	}
}
