"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
var DummyAuthenticationProvider_1 = require("./DummyAuthenticationProvider");
var index_1 = require("../src/index");
var PolyFill = require("../src/PolyFill");
function getClient() {
    /**
     * PolyFill fetch and promise before initializing client, otherwise error will be thrown
     */
    PolyFill.init();
    return index_1.Client.initWithMiddleware({
        authProvider: new DummyAuthenticationProvider_1.DummyAuthenticationProvider()
    });
}
exports.getClient = getClient;
function randomString() {
    return Math.random().toString(36).substring(7);
}
exports.randomString = randomString;
//# sourceMappingURL=test-helper.js.map