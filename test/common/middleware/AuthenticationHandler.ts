/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";

import { ChaosHandler, ChaosHandlerOptions, ChaosStrategy } from "../../../src";
import { GRAPH_BASE_URL } from "../../../src/Constants";
import { Context } from "../../../src/IContext";
import { AuthenticationHandler } from "../../../src/middleware/AuthenticationHandler";
import { DummyAuthenticationProvider } from "../../DummyAuthenticationProvider";
import { DUMMY_BASE_URL } from "../../test-helper";

const dummyAuthProvider = new DummyAuthenticationProvider();
const authHandler = new AuthenticationHandler(dummyAuthProvider);
const chaosHandler = new ChaosHandler(new ChaosHandlerOptions(ChaosStrategy.MANUAL, "TEST_MESSAGE", 200));

describe("AuthenticationHandler.ts", async () => {
	describe("Constructor", () => {
		it("Should return an AuthenticationHandler for given AuthenticationProvider", () => {
			assert.isTrue(authHandler instanceof AuthenticationHandler);
			assert.equal(authHandler["authenticationProvider"], dummyAuthProvider);
		});
	});
	describe("Auth Headers", () => {
		it("Should delete Auth header when Request object is passed with non Graph URL", async () => {
			const request = new Request(DUMMY_BASE_URL + "/test_url");
			const context: Context = {
				request,
				options: {
					headers: {
						Authorization: "TEST_VALUE",
					},
				},
			};
			authHandler.setNext(chaosHandler);
			await authHandler.execute(context);
			assert.equal(context.options.headers["Authorization"], undefined);
		});

		it("Should contain Auth header when Request object is passed with custom URL", async () => {
			const request = new Request("https://custom/");
			const context: Context = {
				request,
				customHosts: new Set<string>(["custom"]),
				options: {
					headers: {},
				},
			};
			const accessToken = "Bearer DUMMY_TOKEN";

			await authHandler.execute(context);
			assert.equal((request as Request).headers.get("Authorization"), accessToken);
		});

		it("Should contain Auth header when Request object is passed with a valid Graph URL", async () => {
			const request = new Request(GRAPH_BASE_URL);
			const context: Context = {
				request,
				customHosts: new Set<string>(["custom"]),
				options: {
					headers: {},
				},
			};
			const accessToken = "Bearer DUMMY_TOKEN";
			await authHandler.execute(context);
			assert.equal((request as Request).headers.get("Authorization"), accessToken);
		});
	});
});
