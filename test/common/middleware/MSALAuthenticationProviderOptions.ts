/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";

import { MSALAuthenticationProviderOptions } from "../../../src/authentication/msal/MSALAuthenticationProviderOptions";

describe("MSALAuthenticationProviderOptions.ts", () => {
	it("Should create an instance with all the given options", () => {
		const scopes = ["dummy.scope"];
		const options = new MSALAuthenticationProviderOptions(scopes);
		assert.isDefined(options.scopes);
		assert.equal(options.scopes, scopes);
	});
});
