/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";
import { DummyHTTPMessageHandler } from "../DummyHTTPMessageHandler";
import { DummyAuthenticationProvider } from "../DummyAuthenticationProvider";
import { HTTPClient } from "../../src/HTTPClient";
import { HTTPClientFactory } from "../../src/HTTPClientFactory";

describe("HTTPClientFactory.ts", function () {
    describe("createWithAuthenticationProvider", () => {

        const dummyAuthProvider = new DummyAuthenticationProvider(),
            dummyHTTPHandler = new DummyHTTPMessageHandler();

        it("Should create an HTTPClient instance with default middleware chain", () => {
            let client: HTTPClient = HTTPClientFactory.createWithAuthenticationProvider(dummyAuthProvider);
            assert.isTrue(client instanceof HTTPClient);
            assert.isDefined(client["middleware"]);
        });

        it("Should create an HTTPClient with given middleware chain", () => {
            let client: HTTPClient = HTTPClientFactory.createWithMiddleware(dummyHTTPHandler);
            assert.isTrue(client instanceof HTTPClient);
            assert.isDefined(client["middleware"]);
        });
    });
});
