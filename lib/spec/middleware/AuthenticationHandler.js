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
var AuthenticationHandler_1 = require("../../src/middleware/AuthenticationHandler");
var chai_1 = require("chai");
var DummyAuthenticationProvider_1 = require("../DummyAuthenticationProvider");
var fetchMock = require("fetch-mock");
var HTTPMessageHandler_1 = require("../../src/middleware/HTTPMessageHandler");
var dummyAuthProvider = new DummyAuthenticationProvider_1.DummyAuthenticationProvider(), authHandler = new AuthenticationHandler_1.AuthenticationHandler(dummyAuthProvider), httpHandler = new HTTPMessageHandler_1.HTTPMessageHandler();
authHandler.setNext(httpHandler);
describe("AuthenticationHandler.ts", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return tslib_1.__generator(this, function (_a) {
        describe("Constructor", function () {
            it("Should return an AuthenticationHandler for given AuthenticationProvider", function () {
                chai_1.assert.isTrue(authHandler instanceof AuthenticationHandler_1.AuthenticationHandler);
                chai_1.assert.equal(authHandler["authProvider"], dummyAuthProvider);
            });
        });
        describe("execute", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                before(function () {
                    fetchMock.mock("*", function (url, options) {
                        if (typeof options === undefined || options.headers === undefined) {
                            var error = new Error("Headers are empty, Please ensure to pass in the authorization header");
                            error.name = "InvalidRequestOptions";
                            throw error;
                        }
                        var headerType = options.headers.constructor.name, flag = false;
                        if (headerType === "Headers") {
                            if (options.headers.has("Authorization")) {
                                flag = true;
                            }
                        }
                        else if (headerType === "Array") {
                            for (var i = 0, l = options.headers.length; i < l; i++) {
                                if (options.headers[i][0] === "Authorization") {
                                    flag = true;
                                }
                            }
                        }
                        else {
                            if (options.headers.Authorization !== undefined) {
                                flag = true;
                            }
                        }
                        if (!flag) {
                            var authError = new Error("Authorization headers is not present, Please ensure to pass in the auth token");
                            authError.name = "EmptyAuthenticationToken";
                            throw authError;
                        }
                        return "200";
                    });
                });
                after(function () {
                    fetchMock.restore();
                });
                it("Should set auth header for empty headers", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var context_1, error_1;
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                context_1 = {
                                    request: "dummy_url",
                                    options: {
                                        method: "test"
                                    }
                                };
                                return [4 /*yield*/, authHandler.execute(context_1)];
                            case 1:
                                _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                error_1 = _a.sent();
                                throw error_1;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                it("Should set auth header in headers object", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var context_2, error_2;
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                context_2 = {
                                    request: "dummy_url",
                                    options: {
                                        method: "test",
                                        headers: {
                                            version: "version"
                                        }
                                    }
                                };
                                return [4 /*yield*/, authHandler.execute(context_2)];
                            case 1:
                                _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                error_2 = _a.sent();
                                throw error_2;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                it("Should set auth header in Headers instance", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var context_3, error_3;
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                context_3 = {
                                    request: "dummy_url",
                                    options: {
                                        method: "test",
                                        headers: new Headers({ version: "version" })
                                    }
                                };
                                return [4 /*yield*/, authHandler.execute(context_3)];
                            case 1:
                                _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                error_3 = _a.sent();
                                throw error_3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                it("Should set auth header in array of headers", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var context_4, error_4;
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                context_4 = {
                                    request: "dummy_url",
                                    options: {
                                        method: "test",
                                        headers: [["version", "version"]]
                                    }
                                };
                                return [4 /*yield*/, authHandler.execute(context_4)];
                            case 1:
                                _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                error_4 = _a.sent();
                                throw error_4;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=AuthenticationHandler.js.map
