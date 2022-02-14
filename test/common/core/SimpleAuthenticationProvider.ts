/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { RequestInformation } from "@microsoft/kiota-abstractions";
import { assert } from "chai";

import { SimpleAuthenticationProvider } from "../../../src";
import { GRAPH_BASE_URL } from "../../../src/Constants";

describe("SimpleAuthenticationProvider.ts", async () => {
	describe("Auth Headers", () => {
		// TODO : Check in case of redirection
		it("Should delete Auth header when Request object is passed with non Graph URL", () => {});

		it("Should contain Auth header when Request object is passed with custom URL", async () => {
			const accessToken = "Bearer DUMMY_TOKEN";
			const requestInfo = new RequestInformation();

			requestInfo.URL = "https://custom.host.com/test_url";
			requestInfo.headers = {};
			const customHost = "custom.host.com";
			const customHosts = new Set<string>([customHost]);
			const simpleAuthProvider = new SimpleAuthenticationProvider(
				async () => {
					return "DUMMY_TOKEN";
				},
				["scope1", "scope2"],
				customHosts,
			);

			await simpleAuthProvider.authenticateRequest(requestInfo);
			assert.equal(requestInfo.headers["Authorization"], accessToken);
		});

		it("Should contain Auth header when Request object is passed with a valid Graph URL", async () => {
			const accessToken = "Bearer DUMMY_TOKEN";
			const requestInfo = new RequestInformation();
			requestInfo.URL = GRAPH_BASE_URL;
			requestInfo.headers = {};
			const simpleAuthProvider = new SimpleAuthenticationProvider(async () => {
				return "DUMMY_TOKEN";
			}, ["scope1", "scope2"]);

			await simpleAuthProvider.authenticateRequest(requestInfo);
			assert.equal(requestInfo.headers["Authorization"], accessToken);
		});

		it("Verify if scopes are passed as parameters", async () => {
			const requestInfo = new RequestInformation();

			requestInfo.URL = "https://custom.host.com/test_url";
			requestInfo.headers = {};
			const customHost = "custom.host.com";
			const customHosts = new Set<string>([customHost]);
			const scopes = ["scope1", "scope2"];
			const simpleAuthProvider = new SimpleAuthenticationProvider(
				async (scopes: string[]) => {
					return scopes[0] + scopes[1];
				},
				scopes,
				customHosts,
			);

			await simpleAuthProvider.authenticateRequest(requestInfo);
			assert.equal(requestInfo.headers["Authorization"], "Bearer " + scopes[0] + scopes[1]);
		});
	});
});
