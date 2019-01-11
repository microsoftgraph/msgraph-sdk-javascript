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
var fetchMock = require("fetch-mock");
var HTTPMessageHandler_1 = require("../../src/middleware/HTTPMessageHandler");
require("isomorphic-fetch");
describe("HTTPMessageHandler.ts", function () {
    var handler = new HTTPMessageHandler_1.HTTPMessageHandler();
    describe("execute", function () {
        var context = {
            request: "dummy_url1",
            options: {
                method: "get"
            }
        };
        it("Should return proper response", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = new Response("url", {
                            status: 200,
                            statusText: "OK"
                        });
                        fetchMock.once("*", response);
                        return [4 /*yield*/, handler.execute(context)];
                    case 1:
                        _a.sent();
                        chai_1.assert.isDefined(context.response);
                        chai_1.assert.equal(context.response.status, 200);
                        fetchMock.restore();
                        return [2 /*return*/];
                }
            });
        }); });
        it("Should return proper error for error in response body", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var obj, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = {
                            status: 404,
                            body: {
                                error: {
                                    code: "DataNotFound",
                                    message: "Unable to find the data that you are looking for",
                                    innerError: {
                                        "request-id": "Some random id",
                                        date: new Date()
                                    }
                                }
                            }
                        };
                        fetchMock.once("*", obj);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, handler.execute(context)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        chai_1.assert.isDefined(error_1);
                        chai_1.assert.equal(error_1.statusCode, obj.status);
                        chai_1.assert.equal(error_1.code, obj.body.error.code);
                        chai_1.assert.equal(error_1.message, obj.body.error.message);
                        return [3 /*break*/, 4];
                    case 4:
                        fetchMock.restore();
                        return [2 /*return*/];
                }
            });
        }); });
        it("Should return error for the non 2XX response without error in the response body", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var obj, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = {
                            status: 404,
                            body: {
                                someData: "someData"
                            }
                        };
                        fetchMock.once("*", obj);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, handler.execute(context)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        chai_1.assert.isDefined(error_2);
                        chai_1.assert.equal(error_2.statusCode, obj.status);
                        chai_1.assert.equal(error_2.requestId, null);
                        chai_1.assert.equal(error_2.body, null);
                        return [3 /*break*/, 4];
                    case 4:
                        fetchMock.restore();
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
//# sourceMappingURL=HTTPMessageHandler.js.map
