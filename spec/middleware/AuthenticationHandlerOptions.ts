/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";

import { ImplicitMSALAuthenticationProviderOptions } from "../../src/ImplicitMSALAuthenticationProviderOptions";
import { AuthenticationHandlerOptions } from "../../src/middleware/options/AuthenticationHandlerOptions";
import { DummyAuthenticationProvider } from "../DummyAuthenticationProvider";

describe("AuthenticationHandlerOptions.ts", () => {
	const dummyAuthProvider = new DummyAuthenticationProvider();
	const msalAuthProviderOptions = new ImplicitMSALAuthenticationProviderOptions([]);
	it("Should create an instance with all the given options", () => {
		const options = new AuthenticationHandlerOptions(dummyAuthProvider, msalAuthProviderOptions);
		assert.equal(options.authenticationProvider, dummyAuthProvider);
		assert.equal(options.authenticationProviderOptions, msalAuthProviderOptions);
	});

	it("Should be undefined value if no value is passed", () => {
		const options = new AuthenticationHandlerOptions(undefined, msalAuthProviderOptions);
		assert.isUndefined(options.authenticationProvider);
		assert.equal(options.authenticationProviderOptions, msalAuthProviderOptions);
	});
});
