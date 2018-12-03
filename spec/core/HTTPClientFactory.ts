/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";
import { CustomHTTPHandler } from "../CustomHTTPHandler";
import { DummyAuthenticationProvider } from "../DummyAuthenticationProvider";
import { HTTPClientFactory } from "../../src/HTTPClientFactory";
import { HTTPClient } from "../../src/HTTPClient";

describe("HTTPClientFactory.ts", function () {
    describe("createWithAuthenticationProvider", () => {

        const dummyAuthProvider = new DummyAuthenticationProvider(),
            customHTTPHandler = new CustomHTTPHandler();

        it("Should create an HTTPClient instance with default middleware chain", () => {
            let client: HTTPClient = HTTPClientFactory.createWithAuthenticationProvider(dummyAuthProvider);
            assert.isTrue(client instanceof HTTPClient);
            assert.isDefined(client["middleware"]);
        });

        it("Should create an HTTPClient with given middleware chain", () => {
            let client: HTTPClient = HTTPClientFactory.createWithMiddleware(customHTTPHandler);
            assert.isTrue(client instanceof HTTPClient);
            assert.isDefined(client["middleware"]);
        });
    });
});