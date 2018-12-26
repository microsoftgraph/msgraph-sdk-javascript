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
var chai_1 = require("chai");
var fetchMock = require("fetch-mock");
var HTTPMessageHandler_1 = require("../../src/middleware/HTTPMessageHandler");
require("isomorphic-fetch");
var ResponseType_1 = require("../../src/ResponseType");
describe("HTTPMessageHandler.ts", function () {
    var handler = new HTTPMessageHandler_1.HTTPMessageHandler(), htmlString = "<!DOCTYPE html>\n                        <html lang=\"en\">\n                            <head>\n                                <meta charset=\"UTF-8\">\n                                <title>Testing Document</title>\n                            </head>\n                            <body>\n                                <h1 id=\"test\">Testing</h1>\n                            </body>\n                        </html>", okStatus = {
        status: 200,
        statusText: "OK"
    };
    describe("constructor", function () {
        it("Should initialize the DocumentTypes", function () {
            chai_1.assert.isTrue(handler instanceof HTTPMessageHandler_1.HTTPMessageHandler);
            chai_1.assert.isTrue(HTTPMessageHandler_1.HTTPMessageHandler["DocumentTypes"].length > 0);
        });
    });
    describe("parseDocumentResponse", function () {
        var response = new Response(htmlString, okStatus);
        it("Should return the html string", function () { return __awaiter(_this, void 0, void 0, function () {
            var dom;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, handler["parseDocumentResponse"](response, HTTPMessageHandler_1.HTTPMessageHandler["DocumentTypes"]["TEXT_HTML"])];
                    case 1:
                        dom = _a.sent();
                        chai_1.assert.isDefined(dom);
                        chai_1.assert.equal(typeof dom, "string");
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("convertResponse", function () {
        it("Should return response value as text", function () { return __awaiter(_this, void 0, void 0, function () {
            var response, responseValue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = new Response(htmlString, okStatus);
                        return [4 /*yield*/, handler["convertResponse"](response, ResponseType_1.ResponseType.TEXT)];
                    case 1:
                        responseValue = _a.sent();
                        chai_1.assert.isDefined(responseValue);
                        chai_1.assert.equal(typeof responseValue, "string");
                        chai_1.assert.equal(responseValue, htmlString);
                        return [2 /*return*/];
                }
            });
        }); });
        it("Should return response value as text for text/html return type", function () { return __awaiter(_this, void 0, void 0, function () {
            var response, responseValue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = new Response(htmlString, okStatus);
                        return [4 /*yield*/, handler["convertResponse"](response, ResponseType_1.ResponseType.DOCUMENT)];
                    case 1:
                        responseValue = _a.sent();
                        chai_1.assert.isDefined(responseValue);
                        chai_1.assert.equal(typeof responseValue, "string");
                        chai_1.assert.equal(responseValue, htmlString);
                        return [2 /*return*/];
                }
            });
        }); });
        it("Should return response value as json", function () { return __awaiter(_this, void 0, void 0, function () {
            var json, response, responseValue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        json = { test: "test" }, response = new Response(JSON.stringify(json), okStatus);
                        return [4 /*yield*/, handler["convertResponse"](response, ResponseType_1.ResponseType.JSON)];
                    case 1:
                        responseValue = _a.sent();
                        chai_1.assert.isDefined(responseValue);
                        chai_1.assert.equal(responseValue.test, "test");
                        return [2 /*return*/];
                }
            });
        }); });
        it("Should return response value as text for default response type", function () { return __awaiter(_this, void 0, void 0, function () {
            var response, responseValue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = new Response(htmlString, okStatus);
                        return [4 /*yield*/, handler["convertResponse"](response)];
                    case 1:
                        responseValue = _a.sent();
                        chai_1.assert.isDefined(responseValue);
                        chai_1.assert.equal(typeof responseValue, "string");
                        chai_1.assert.equal(responseValue, htmlString);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("defaultError", function () {
        it("Should return default error with given status code", function () {
            var code = 200, error = handler["defaultError"](code);
            chai_1.assert.equal(error.statusCode, code);
        });
        it("Should return default error with default status code", function () {
            var error = handler["defaultError"]();
            chai_1.assert.equal(error.statusCode, -1);
        });
    });
    describe("buildError", function () {
        it("Should return custom error without code", function () {
            var message = "test", error = new Error(message), gError = handler["buildError"](error);
            chai_1.assert.equal(gError.message, message);
        });
        it("Should return custom error with code and message", function () {
            var message = "test", name = "test_name", error = new Error(message);
            error.name = name;
            var gError = handler["buildError"](error);
            chai_1.assert.equal(gError.message, message);
            chai_1.assert.equal(gError.code, name);
        });
    });
    describe("buildErrorFromResponse", function () {
        var statusCode = 400, error = {
            code: "DataNotAvailable",
            message: "The data that is being requested is not present",
        };
        it("Should construct error for error response without innerError property", function () {
            var gError = handler["buildErrorFromResponse"](error, statusCode);
            chai_1.assert.equal(gError.statusCode, statusCode);
            chai_1.assert.equal(gError.requestId, "");
        });
        it("Should construct error for the response missing one or more properties in innerError property", function () {
            error.innerError = {
                "request-id": "some random id"
            };
            var gError = handler["buildErrorFromResponse"](error, statusCode);
            chai_1.assert.equal(gError.statusCode, statusCode);
            chai_1.assert.equal(gError.requestId, "some random id");
        });
        it("Should construct error for the complete error response", function () {
            var date = new Date(), requestId = "some random id";
            error.innerError = {
                "request-id": requestId,
                date: date
            };
            var gError = handler["buildErrorFromResponse"](error, statusCode);
            chai_1.assert.equal(gError.statusCode, statusCode);
            chai_1.assert.equal(gError.requestId, "some random id");
            chai_1.assert.equal(gError.date.toUTCString(), date.toUTCString());
        });
    });
    describe("execute", function () {
        var context = {
            request: "dummy_url1",
            options: {
                method: "get"
            }
        };
        it("Should return proper response", function () { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
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
                        chai_1.assert.isDefined(context.rawResponse);
                        chai_1.assert.equal(context.rawResponse.status, 200);
                        fetchMock.restore();
                        return [2 /*return*/];
                }
            });
        }); });
        it("Should return proper error for error in response body", function () { return __awaiter(_this, void 0, void 0, function () {
            var obj, error_1;
            return __generator(this, function (_a) {
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
        it("Should return error for the non 2XX response without error in the response body", function () { return __awaiter(_this, void 0, void 0, function () {
            var obj, error_2;
            return __generator(this, function (_a) {
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
        it("Should return default error for empty error with empty response", function () { return __awaiter(_this, void 0, void 0, function () {
            var obj, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = {
                            status: 404
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
                        error_3 = _a.sent();
                        chai_1.assert.isDefined(error_3);
                        chai_1.assert.equal(error_3.statusCode, obj.status);
                        chai_1.assert.equal(error_3.requestId, null);
                        chai_1.assert.equal(error_3.body, null);
                        return [3 /*break*/, 4];
                    case 4:
                        fetchMock.restore();
                        return [2 /*return*/];
                }
            });
        }); });
        it("Should construct error response from the Error object", function () { return __awaiter(_this, void 0, void 0, function () {
            var error, obj, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        error = new Error();
                        error.message = "Unable to find the data that you are looking for";
                        error.name = "DataNotFound";
                        obj = {
                            status: 404,
                            throws: error
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
                        err_1 = _a.sent();
                        chai_1.assert.isDefined(err_1);
                        chai_1.assert.equal(err_1.statusCode, -1);
                        chai_1.assert.equal(err_1.requestId, null);
                        chai_1.assert.equal(err_1.code, error.name);
                        chai_1.assert.equal(err_1.message, error.message);
                        return [3 /*break*/, 4];
                    case 4:
                        fetchMock.restore();
                        return [2 /*return*/];
                }
            });
        }); });
        it("Should construct default error object incase if the thrown error is not of Error", function () { return __awaiter(_this, void 0, void 0, function () {
            var errorStr, obj, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        errorStr = "Error String";
                        obj = {
                            status: 404,
                            throws: errorStr
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
                        err_2 = _a.sent();
                        chai_1.assert.isDefined(err_2);
                        chai_1.assert.equal(err_2.statusCode, -1);
                        chai_1.assert.equal(err_2.requestId, null);
                        chai_1.assert.equal(err_2.code, null);
                        chai_1.assert.equal(err_2.message, null);
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