"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var CustomHTTPHandler_1 = require("../CustomHTTPHandler");
var DummyAuthenticationProvider_1 = require("../DummyAuthenticationProvider");
var HTTPClient_1 = require("../../src/HTTPClient");
var HTTPClientFactory_1 = require("../../src/HTTPClientFactory");
describe("HTTPClientFactory.ts", function () {
    describe("createWithAuthenticationProvider", function () {
        var dummyAuthProvider = new DummyAuthenticationProvider_1.DummyAuthenticationProvider(), customHTTPHandler = new CustomHTTPHandler_1.CustomHTTPHandler();
        it("Should create an HTTPClient instance with default middleware chain", function () {
            var client = HTTPClientFactory_1.HTTPClientFactory.createWithAuthenticationProvider(dummyAuthProvider);
            chai_1.assert.isTrue(client instanceof HTTPClient_1.HTTPClient);
            chai_1.assert.isDefined(client["middleware"]);
        });
        it("Should create an HTTPClient with given middleware chain", function () {
            var client = HTTPClientFactory_1.HTTPClientFactory.createWithMiddleware(customHTTPHandler);
            chai_1.assert.isTrue(client instanceof HTTPClient_1.HTTPClient);
            chai_1.assert.isDefined(client["middleware"]);
        });
    });
});
//# sourceMappingURL=HTTPClientFactory.js.map