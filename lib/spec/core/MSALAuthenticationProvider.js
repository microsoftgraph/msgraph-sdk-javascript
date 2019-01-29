"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var chai_1 = require("chai");
var MSALAuthenticationProvider_1 = require("../../src/MSALAuthenticationProvider");
var Window = require("window");
describe("MSALAuthenticationProvider.ts", function () {
    var clientId = "dummy_client_id";
    var globalWindow;
    before(function () {
        globalWindow = global["window"];
        global["window"] = new Window();
        try {
            var authProvider = new MSALAuthenticationProvider_1.MSALAuthenticationProvider(clientId, []);
        }
        catch (error) {
        }
    });
    after(function () {
        global["window"] = globalWindow;
    });
    describe("constructor", function () {
        it("Should return an instance of MSALAuthenticationProvider", function () {
            var authProvider = new MSALAuthenticationProvider_1.MSALAuthenticationProvider(clientId, []);
            chai_1.assert.isDefined(authProvider["scopes"]);
            chai_1.assert.isDefined(authProvider["clientId"]);
            chai_1.assert.isDefined(authProvider["userAgentApplication"]);
        });
    });
    describe("getAccessToken", function () {
        it("Should throw an error for getting access token with empty scopes", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var authProvider, token, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        authProvider = new MSALAuthenticationProvider_1.MSALAuthenticationProvider(clientId, []);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, authProvider.getAccessToken()];
                    case 2:
                        token = _a.sent();
                        throw new Error("Something went wrong, Should not provide access token for empty scopes");
                    case 3:
                        error_1 = _a.sent();
                        chai_1.assert.equal(error_1.name, "EmptyScopes");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    });
    describe("addScopes", function () {
        var user_read = "user.read", user_readWrite = "user.readWrite";
        it("Should throw an error for empty scopes array", function () {
            var authProvider = new MSALAuthenticationProvider_1.MSALAuthenticationProvider(clientId, [user_read]);
            try {
                authProvider.addScopes([]);
                throw new Error("Something wrong with the empty array validation, Should not be allowed to add empty array");
            }
            catch (error) {
                chai_1.assert.equal(error.name, "EmptyScopes");
            }
        });
        it("Should add scopes to empty scopes", function () {
            var authProvider = new MSALAuthenticationProvider_1.MSALAuthenticationProvider(clientId, []);
            authProvider.addScopes([user_read]);
            chai_1.assert.equal(authProvider["scopes"][0], user_read);
        });
        it("Should add scopes to non-empty scopes", function () {
            var authProvider = new MSALAuthenticationProvider_1.MSALAuthenticationProvider(clientId, [user_read]);
            authProvider.addScopes([user_readWrite]);
            chai_1.assert.equal(authProvider["scopes"].length, 2);
        });
        it("Should not add duplicate scopes", function () {
            var authProvider = new MSALAuthenticationProvider_1.MSALAuthenticationProvider(clientId, [user_read]);
            authProvider.addScopes([user_read]);
            chai_1.assert.equal(authProvider["scopes"].length, 1);
        });
    });
    describe("clearScopes", function () {
        var user_read = "user.read";
        it("Should clear the scopes array", function () {
            var authProvider = new MSALAuthenticationProvider_1.MSALAuthenticationProvider(clientId, [user_read]);
            authProvider.clearScopes();
            chai_1.assert.equal(authProvider["scopes"].length, 0);
        });
    });
});
//# sourceMappingURL=MSALAuthenticationProvider.js.map