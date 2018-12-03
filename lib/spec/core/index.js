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
var index_1 = require("../../src/index");
describe("index.ts", function () {
    describe("init", function () {
        var dummyAuthProvider = new DummyAuthenticationProvider_1.DummyAuthenticationProvider(), customHTTPHandler = new CustomHTTPHandler_1.CustomHTTPHandler();
        it("Should return client instance for an authentication provider", function () {
            var options = {
                authProvider: dummyAuthProvider
            };
            var client = index_1.Client.init(options);
            chai_1.assert.isTrue(client instanceof index_1.Client);
            chai_1.assert.isDefined(client["httpClient"]);
        });
        it("Should return client instance for a custom middleware chain", function () {
            var options = {
                middleware: customHTTPHandler
            };
            var client = index_1.Client.init(options);
            chai_1.assert.isTrue(client instanceof index_1.Client);
            chai_1.assert.isDefined(client["httpClient"]);
        });
        it("Should throw error in case of neither auth provider nor custom middleware is passed", function () {
            try {
                var options = {};
                index_1.Client.init(options);
                throw new Error("Something wrong with the client initialization check");
            }
            catch (error) {
                chai_1.assert.equal(error.name, "InvalidMiddlewareChain");
            }
        });
    });
});
//# sourceMappingURL=index.js.map