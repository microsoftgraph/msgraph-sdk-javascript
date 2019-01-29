/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";
import { MSALAuthenticationProvider } from "../../src/browser/MSALAuthenticationProvider";
import * as Msal from "msal";
import * as Window from "window";

describe("MSALAuthenticationProvider.ts", () => {
    let clientId = "dummy_client_id";
    let globalWindow;
    before(() => {
        globalWindow = global["window"];
        global["window"] = new Window();
        global["Msal"] = Msal;
        try {
            let authProvider = new MSALAuthenticationProvider(clientId, []);
        } catch(error) {
            
        }
    });

    after(() => {
        global["window"] = globalWindow;
    });

    describe("constructor", () => {
        it("Should return an instance of MSALAuthenticationProvider", () => {
            let authProvider = new MSALAuthenticationProvider(clientId, []);
            assert.isDefined(authProvider["scopes"]);
            assert.isDefined(authProvider["clientId"]);
            assert.isDefined(authProvider["userAgentApplication"]);
        });
    });

    describe("getAccessToken", () => {
        it("Should throw an error for getting access token with empty scopes", async () => {
            let authProvider = new MSALAuthenticationProvider(clientId, []);
            try {
                let token = await authProvider.getAccessToken();
                throw new Error("Something went wrong, Should not provide access token for empty scopes");
            } catch (error) {
                assert.equal(error.name, "EmptyScopes");
            }
        });
    });

    describe("addScopes", () => {
        let user_read = "user.read",
            user_readWrite = "user.readWrite";
        it("Should throw an error for empty scopes array", () => {
            let authProvider = new MSALAuthenticationProvider(clientId, [user_read]);
            try {
                authProvider.addScopes([]);
                throw new Error("Something wrong with the empty array validation, Should not be allowed to add empty array");
            } catch (error) {
                assert.equal(error.name, "EmptyScopes");
            }
        });

        it("Should add scopes to empty scopes", () => {
            let authProvider = new MSALAuthenticationProvider(clientId, []);
            authProvider.addScopes([user_read]);
            assert.equal(authProvider["scopes"][0], user_read);
        });

        it("Should add scopes to non-empty scopes", () => {
            let authProvider = new MSALAuthenticationProvider(clientId, [user_read]);
            authProvider.addScopes([user_readWrite]);
            assert.equal(authProvider["scopes"].length, 2);
        });

        it("Should not add duplicate scopes", () => {
            let authProvider = new MSALAuthenticationProvider(clientId, [user_read]);
            authProvider.addScopes([user_read]);
            assert.equal(authProvider["scopes"].length, 1);
        });
    });

    describe("clearScopes", () => {
        let user_read = "user.read";
        it("Should clear the scopes array", () => {
            let authProvider = new MSALAuthenticationProvider(clientId, [user_read]);
            authProvider.clearScopes();
            assert.equal(authProvider["scopes"].length, 0);
        });
    });
});
