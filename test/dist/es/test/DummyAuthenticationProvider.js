/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import * as tslib_1 from "tslib";
/**
 * @class
 * @implements AuthenticationProvider
 * Class representing DummyAuthenticationProvider
 */
export class DummyAuthenticationProvider {
	/**
	 * @public
	 * @async
	 * To get the access token
	 * @returns The promise that resolves to an access token
	 */
	getAccessToken() {
		return tslib_1.__awaiter(this, void 0, void 0, function*() {
			const token = "DUMMY_TOKEN";
			return Promise.resolve(token);
		});
	}
}
//# sourceMappingURL=DummyAuthenticationProvider.js.map
