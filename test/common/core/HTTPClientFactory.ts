/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";

import { SimpleAuthenticationProvider } from "../../../src/authentication/SimpleAuthentication/SimpleAuthenticationProvider";
import { HTTPClient } from "../../../src/HTTPClient";
import { HTTPClientFactory } from "../../../src/HTTPClientFactory";
import { DummyHTTPMessageHandler } from "../../DummyHTTPMessageHandler";

describe("HTTPClientFactory.ts", () => {
	const authProvider = new SimpleAuthenticationProvider(async () => {
		return "DUMMY_ACCESS_TOKEN";
	}, ["scope1", "scope2"]);
    
	describe("createWithAuthenticationProvider", () => {
		const dummyHTTPHandler = new DummyHTTPMessageHandler();
		it("Should create an HTTPClient instance with default middleware chain", () => {
			const client: HTTPClient = HTTPClientFactory.createWithDefaultMiddleware(authProvider);
			assert.isTrue(client instanceof HTTPClient);
			assert.isDefined(client["middleware"]);
		});

		it("Should create an HTTPClient with given middleware chain", () => {
			const client: HTTPClient = HTTPClientFactory.createWithMiddleware(dummyHTTPHandler);
			assert.isTrue(client instanceof HTTPClient);
			assert.isDefined(client["middleware"]);
		});
	});
});
