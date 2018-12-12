/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";
import { Options } from "../../src/Common";
import { CustomHTTPHandler } from "../CustomHTTPHandler";
import { DummyAuthenticationProvider } from "../DummyAuthenticationProvider";
import { Client } from "../../src/Client";

describe("Client.ts", function () {
    describe("init", function () {

        const dummyAuthProvider = new DummyAuthenticationProvider(),
            customHTTPHandler = new CustomHTTPHandler();

        it("Should return client instance for an authentication provider", () => {
            let options: Options = {
                authProvider: dummyAuthProvider
            };
            let client: Client = Client.init(options);
            assert.isTrue(client instanceof Client);
            assert.isDefined(client["httpClient"]);
        });

        it("Should return client instance for a custom middleware chain", () => {
            let options: Options = {
                middleware: customHTTPHandler
            };
            let client: Client = Client.init(options);
            assert.isTrue(client instanceof Client);
            assert.isDefined(client["httpClient"]);
        });

        it("Should throw error in case of neither auth provider nor custom middleware is passed", () => {
            try {
                let options: Options = {};
                Client.init(options);
                throw new Error("Something wrong with the client initialization check");
            } catch (error) {
                assert.equal(error.name, "InvalidMiddlewareChain");
            }
        });
    });
});