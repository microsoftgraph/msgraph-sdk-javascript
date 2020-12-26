/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";

import { HTTPClient } from "../../../src/HTTPClient";
import { HTTPClientFactory } from "../../../src/HTTPClientFactory";
import { DummyAuthenticationProvider } from "../DummyAuthenticationProvider";
import { DummyHTTPMessageHandler } from "../DummyHTTPMessageHandler";

describe("HTTPClientFactory.ts", () => {
	/* tslint:disable: no-string-literal */
	describe("createWithAuthenticationProvider", () => {
		const dummyAuthProvider = new DummyAuthenticationProvider();
		const dummyHTTPHandler = new DummyHTTPMessageHandler();
		it("Should create an HTTPClient instance with default middleware chain", () => {
			const client: HTTPClient = HTTPClientFactory.createWithAuthenticationProvider(dummyAuthProvider);
			assert.isTrue(client instanceof HTTPClient);
			assert.isDefined(client["middleware"]);
		});

		it("Should create an HTTPClient with given middleware chain", () => {
			const client: HTTPClient = HTTPClientFactory.createWithMiddleware(dummyHTTPHandler);
			assert.isTrue(client instanceof HTTPClient);
			assert.isDefined(client["middleware"]);
		});
	});
	/* tslint:enable: no-string-literal */
});
