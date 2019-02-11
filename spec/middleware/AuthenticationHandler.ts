/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { AuthenticationHandler } from "../../src/middleware/AuthenticationHandler";
import { assert } from "chai";
import { DummyAuthenticationProvider } from "../DummyAuthenticationProvider";

const dummyAuthProvider = new DummyAuthenticationProvider(),
    authHandler = new AuthenticationHandler(dummyAuthProvider);

describe("AuthenticationHandler.ts", async () => {
    describe("Constructor", () => {
        it("Should return an AuthenticationHandler for given AuthenticationProvider", () => {
            assert.isTrue(authHandler instanceof AuthenticationHandler);
            assert.equal(authHandler["authProvider"], dummyAuthProvider);
        });
    });
});