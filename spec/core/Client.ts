/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";
import { Client } from "../../src/Client";
import { CustomHTTPHandler } from "../CustomHTTPHandler";
import { DummyAuthenticationProvider } from "../DummyAuthenticationProvider";
import { ClientOptions } from "../../src/IClientOptions";
import { Options, AuthProvider } from "../../src/IOptions";

describe("Client.ts", function () {
    describe("constructor", function () {

        const dummyAuthProvider = new DummyAuthenticationProvider(),
            customHTTPHandler = new CustomHTTPHandler();

        it("Should return client instance for an authentication provider", () => {
            let options: ClientOptions = {
                authProvider: dummyAuthProvider
            };
            let client: Client = new Client(options);
            assert.isTrue(client instanceof Client);
            assert.isDefined(client["httpClient"]);
        });

        it("Should return client instance for a custom middleware chain", () => {
            let options: ClientOptions = {
                middleware: customHTTPHandler
            };
            let client: Client = new Client(options);
            assert.isTrue(client instanceof Client);
            assert.isDefined(client["httpClient"]);
        });

        it("Should throw error in case of neither auth provider nor custom middleware is passed", () => {
            try {
                let options: ClientOptions = {};
                new Client(options);
                throw new Error("Something wrong with the client initialization check");
            } catch (error) {
                assert.equal(error.name, "InvalidMiddlewareChain");
            }
        });
    });

    describe("init", () => {
        it("Should return a client instance with default authentication provider and default middleware chain", () => {
            const provider: AuthProvider = function (done) {
                done(null, "dummy_token");
            };
            let options: Options = {
                authProvider: provider
            };
            let client: Client = Client.init(options);
            assert.isDefined(client["httpClient"]);
        });
    });
});