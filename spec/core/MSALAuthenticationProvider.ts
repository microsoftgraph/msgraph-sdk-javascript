/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";
import * as Window from "window";

import { MSALAuthenticationProvider } from "../../src/MSALAuthenticationProvider";

describe("MSALAuthenticationProvider.ts", () => {
	/* tslint:disable: no-string-literal*/
	const clientId = "dummy_client_id";
	let globalWindow;
	before(() => {
		globalWindow = global["window"];
		global["window"] = new Window();
		try {
			const authProvider = new MSALAuthenticationProvider(clientId, []);
		} catch (error) {
			// tslint:disable-line: no-empty
		}
	});

	after(() => {
		global["window"] = globalWindow;
	});

	describe("constructor", () => {
		it("Should return an instance of MSALAuthenticationProvider", () => {
			const authProvider = new MSALAuthenticationProvider(clientId, []);
			assert.isDefined(authProvider["scopes"]);
			assert.isDefined(authProvider["clientId"]);
			assert.isDefined(authProvider["userAgentApplication"]);
		});
	});

	describe("getAccessToken", () => {
		it("Should throw an error for getting access token with empty scopes", async () => {
			const authProvider = new MSALAuthenticationProvider(clientId, []);
			try {
				const token = await authProvider.getAccessToken();
				throw new Error("Something went wrong, Should not provide access token for empty scopes");
			} catch (error) {
				assert.equal(error.name, "EmptyScopes");
			}
		});
	});

	describe("addScopes", () => {
		const userRead = "user.read";
		const userReadWrite = "user.readWrite";
		it("Should throw an error for empty scopes array", () => {
			const authProvider = new MSALAuthenticationProvider(clientId, [userRead]);
			try {
				authProvider.addScopes([]);
				throw new Error("Something wrong with the empty array validation, Should not be allowed to add empty array");
			} catch (error) {
				assert.equal(error.name, "EmptyScopes");
			}
		});

		it("Should add scopes to empty scopes", () => {
			const authProvider = new MSALAuthenticationProvider(clientId, []);
			authProvider.addScopes([userRead]);
			assert.equal(authProvider["scopes"][0], userRead);
		});

		it("Should add scopes to non-empty scopes", () => {
			const authProvider = new MSALAuthenticationProvider(clientId, [userRead]);
			authProvider.addScopes([userReadWrite]);
			assert.equal(authProvider["scopes"].length, 2);
		});

		it("Should not add duplicate scopes", () => {
			const authProvider = new MSALAuthenticationProvider(clientId, [userRead]);
			authProvider.addScopes([userRead]);
			assert.equal(authProvider["scopes"].length, 1);
		});
	});

	describe("clearScopes", () => {
		const userRead = "user.read";
		it("Should clear the scopes array", () => {
			const authProvider = new MSALAuthenticationProvider(clientId, [userRead]);
			authProvider.clearScopes();
			assert.equal(authProvider["scopes"].length, 0);
		});
	});
	/* tslint:enable: no-string-literal*/
});
