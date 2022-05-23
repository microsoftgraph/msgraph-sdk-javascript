/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { CustomFetchHandler, ParametersNameDecodingHandler, RedirectHandler, RetryHandler, TelemetryHandler } from "@microsoft/kiota-http-fetchlibrary";
import { assert } from "chai";

import { ClientOptions, SimpleAuthenticationProvider } from "../../../src";
import { GRAPH_URLS } from "../../../src/Constants";
import { AuthenticationHandler } from "../../../src/middleware/AuthenticationHandler";
import { getDefaultMiddlewareChain } from "../../../src/MiddlewareFactory";

describe("MiddlewareFactory", () => {
	it("Should return the default pipeline", () => {
		const clientOptions: ClientOptions = {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			authProvider: new SimpleAuthenticationProvider(async (scopes?: string[]) => {
				return "TEST_TOKEN";
			}),
		};
		const defaultMiddleWareArray = getDefaultMiddlewareChain(clientOptions, GRAPH_URLS);

		assert.isTrue(defaultMiddleWareArray[0] instanceof AuthenticationHandler);
		assert.isTrue(defaultMiddleWareArray[1] instanceof RetryHandler);
		assert.isTrue(defaultMiddleWareArray[2] instanceof ParametersNameDecodingHandler);
		assert.isTrue(defaultMiddleWareArray[3] instanceof TelemetryHandler);
		assert.isTrue(defaultMiddleWareArray[4] instanceof CustomFetchHandler);
	});
});
