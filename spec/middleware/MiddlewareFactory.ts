/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";

import { AuthenticationHandler, CustomAuthenticationProvider, HTTPMessageHandler, RedirectHandler, RetryHandler, TelemetryHandler } from "../../src";
import { AuthProvider } from "../../src/IAuthProvider";
import { MiddlewareFactory } from "../../src/middleware/MiddlewareFactory";

describe("MiddlewareFactory", () => {
	it("Should return the default pipeline", () => {
		const provider: AuthProvider = (done) => {
			done(null, "dummy_token");
		};
		const defaultMiddleWareArray = MiddlewareFactory.getDefaultMiddlewareChain(new CustomAuthenticationProvider(provider));

		assert.isTrue(defaultMiddleWareArray[0] instanceof AuthenticationHandler);
		assert.isTrue(defaultMiddleWareArray[1] instanceof RetryHandler);
		assert.isTrue(defaultMiddleWareArray[2] instanceof RedirectHandler);
		assert.isTrue(defaultMiddleWareArray[3] instanceof TelemetryHandler);
		assert.isTrue(defaultMiddleWareArray[4] instanceof HTTPMessageHandler);
	});
});
