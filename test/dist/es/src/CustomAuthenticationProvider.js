/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import * as tslib_1 from "tslib";
/**
 * @class
 * Class representing CustomAuthenticationProvider
 * @extends AuthenticationProvider
 */
export class CustomAuthenticationProvider {
	/**
	 * @public
	 * @constructor
	 * Creates an instance of CustomAuthenticationProvider
	 * @param {AuthProviderCallback} provider - An authProvider function
	 * @returns An instance of CustomAuthenticationProvider
	 */
	constructor(provider) {
		this.provider = provider;
	}
	/**
	 * @public
	 * @async
	 * To get the access token
	 * @returns The promise that resolves to an access token
	 */
	getAccessToken() {
		return tslib_1.__awaiter(this, void 0, void 0, function*() {
			return new Promise((resolve, reject) => {
				this.provider((error, accessToken) => {
					if (accessToken) {
						resolve(accessToken);
					} else {
						reject(error);
					}
				});
			});
		});
	}
}
//# sourceMappingURL=CustomAuthenticationProvider.js.map
