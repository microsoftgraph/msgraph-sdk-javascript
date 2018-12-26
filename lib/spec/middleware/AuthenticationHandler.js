"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var AuthenticationHandler_1 = require("../../src/middleware/AuthenticationHandler");
var chai_1 = require("chai");
var DummyAuthenticationProvider_1 = require("../DummyAuthenticationProvider");
var fetchMock = require("fetch-mock");
var HTTPMessageHandler_1 = require("../../src/middleware/HTTPMessageHandler");
var dummyAuthProvider = new DummyAuthenticationProvider_1.DummyAuthenticationProvider(), authHandler = new AuthenticationHandler_1.AuthenticationHandler(dummyAuthProvider), httpHandler = new HTTPMessageHandler_1.HTTPMessageHandler();
authHandler.setNext(httpHandler);
describe("AuthenticationHandler.ts", function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        describe("Constructor", function () {
            it("Should return an AuthenticationHandler for given AuthenticationProvider", function () {
                chai_1.assert.isTrue(authHandler instanceof AuthenticationHandler_1.AuthenticationHandler);
                chai_1.assert.equal(authHandler["authProvider"], dummyAuthProvider);
            });
        });
        describe("execute", function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
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
                it("Should set auth header for empty headers", function () { return __awaiter(_this, void 0, void 0, function () {
                    var context_1, error_1;
                    return __generator(this, function (_a) {
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
                it("Should set auth header in headers object", function () { return __awaiter(_this, void 0, void 0, function () {
                    var context_2, error_2;
                    return __generator(this, function (_a) {
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
                it("Should set auth header in Headers instance", function () { return __awaiter(_this, void 0, void 0, function () {
                    var context_3, error_3;
                    return __generator(this, function (_a) {
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
                it("Should set auth header in array of headers", function () { return __awaiter(_this, void 0, void 0, function () {
                    var context_4, error_4;
                    return __generator(this, function (_a) {
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