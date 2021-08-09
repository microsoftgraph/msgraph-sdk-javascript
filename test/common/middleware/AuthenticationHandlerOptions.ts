/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";

import { AuthenticationHandlerOptions } from "../../../src/middleware/options/AuthenticationHandlerOptions";
import { DummyAuthenticationProvider } from "../../DummyAuthenticationProvider";

describe("AuthenticationHandlerOptions.ts", () => {
	const dummyAuthProvider = new DummyAuthenticationProvider();
	const authOptions = { scopes: ["test"] };
	it("Should create an instance with all the given options", () => {
		const options = new AuthenticationHandlerOptions(dummyAuthProvider, authOptions);
		assert.equal(options.authenticationProvider, dummyAuthProvider);
		assert.equal(options.authenticationProviderOptions, authOptions);
	});

	it("Should be undefined value if no value is passed", () => {
		const options = new AuthenticationHandlerOptions(undefined, authOptions);
		assert.isUndefined(options.authenticationProvider);
		assert.equal(options.authenticationProviderOptions, authOptions);
	});
});
