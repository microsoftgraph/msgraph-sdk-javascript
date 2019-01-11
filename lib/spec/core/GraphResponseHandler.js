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
var GraphResponseHandler_1 = require("../../src/GraphResponseHandler");
var ResponseType_1 = require("../../src/ResponseType");
describe("GraphResponseHandler.ts", function () {
    var htmlString = "<!DOCTYPE html>\n                        <html lang=\"en\">\n                            <head>\n                                <meta charset=\"UTF-8\">\n                                <title>Testing Document</title>\n                            </head>\n                            <body>\n                                <h1 id=\"test\">Testing</h1>\n                            </body>\n                        </html>", status200 = {
        status: 200,
        statusText: "OK"
    }, status204 = {
        status: 204,
        statusText: "OK"
    }, status500 = {
        status: 500,
        statusText: "Internal Server Error"
    };
    describe("constructor", function () {
        it("Should initialize the DocumentTypes", function () {
            var response = new Response("test"), gResponse = new GraphResponseHandler_1.GraphResponseHandler(response);
            chai_1.assert.isDefined(gResponse["rawResponse"]);
            chai_1.assert.isUndefined(gResponse["responseType"]);
            chai_1.assert.isUndefined(gResponse["callback"]);
            chai_1.assert.isTrue(GraphResponseHandler_1.GraphResponseHandler["DocumentTypes"].length > 0);
        });
    });
    describe("parseDocumentResponse", function () {
        it("Should return the html string", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var response, gResponse, dom;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = new Response(htmlString, status200), gResponse = new GraphResponseHandler_1.GraphResponseHandler(response);
                        return [4 /*yield*/, gResponse["parseDocumentResponse"](GraphResponseHandler_1.GraphResponseHandler["DocumentTypes"]["TEXT_HTML"])];
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
        it("Should return empty response for the NO CONTENT (204 response)", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var response, gResponse, responseValue;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = new Response(undefined, status204), gResponse = new GraphResponseHandler_1.GraphResponseHandler(response);
                        return [4 /*yield*/, gResponse["convertResponse"]()];
                    case 1:
                        responseValue = _a.sent();
                        chai_1.assert.isUndefined(responseValue);
                        return [2 /*return*/];
                }
            });
        }); });
        it("Should return response value as text", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var response, gResponse, responseValue;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = new Response(htmlString, status200), gResponse = new GraphResponseHandler_1.GraphResponseHandler(response, ResponseType_1.ResponseType.TEXT);
                        return [4 /*yield*/, gResponse["convertResponse"]()];
                    case 1:
                        responseValue = _a.sent();
                        chai_1.assert.isDefined(responseValue);
                        chai_1.assert.equal(typeof responseValue, "string");
                        chai_1.assert.equal(responseValue, htmlString);
                        return [2 /*return*/];
                }
            });
        }); });
        it("Should return response value as text for text/html return type", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var response, gResponse, responseValue;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = new Response(htmlString, status200), gResponse = new GraphResponseHandler_1.GraphResponseHandler(response, ResponseType_1.ResponseType.DOCUMENT);
                        return [4 /*yield*/, gResponse["convertResponse"]()];
                    case 1:
                        responseValue = _a.sent();
                        chai_1.assert.isDefined(responseValue);
                        chai_1.assert.equal(typeof responseValue, "string");
                        chai_1.assert.equal(responseValue, htmlString);
                        return [2 /*return*/];
                }
            });
        }); });
        it("Should return response value as json", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var json, response, gResponse, responseValue;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        json = { test: "test" }, response = new Response(JSON.stringify(json), status200), gResponse = new GraphResponseHandler_1.GraphResponseHandler(response, ResponseType_1.ResponseType.JSON);
                        return [4 /*yield*/, gResponse["convertResponse"]()];
                    case 1:
                        responseValue = _a.sent();
                        chai_1.assert.isDefined(responseValue);
                        chai_1.assert.equal(responseValue.test, "test");
                        return [2 /*return*/];
                }
            });
        }); });
        it("Should return response value as text for default response type", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var response, gResponse, responseValue;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = new Response(htmlString, status200), gResponse = new GraphResponseHandler_1.GraphResponseHandler(response);
                        return [4 /*yield*/, gResponse["convertResponse"]()];
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
    describe("getResponse", function () {
        it("Should return valid 200 OK response", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var response, gResponse, responseValue;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = new Response(htmlString, status200), gResponse = new GraphResponseHandler_1.GraphResponseHandler(response, ResponseType_1.ResponseType.TEXT);
                        return [4 /*yield*/, gResponse.getResponse()];
                    case 1:
                        responseValue = _a.sent();
                        chai_1.assert.isDefined(responseValue);
                        return [2 /*return*/];
                }
            });
        }); });
        it("Should throw error for NOT OK response", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var response, gResponse, responseValue, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        response = new Response("NOT OK", status500), gResponse = new GraphResponseHandler_1.GraphResponseHandler(response);
                        return [4 /*yield*/, gResponse.getResponse()];
                    case 1:
                        responseValue = _a.sent();
                        throw new Error("Something wrong with validating OK response");
                    case 2:
                        error_1 = _a.sent();
                        chai_1.assert.isDefined(error_1);
                        chai_1.assert.equal(error_1, "NOT OK");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });
    describe("getRawResponse", function () {
        it("Should return raw response", function () {
            var response = new Response(htmlString, status200), gResponse = new GraphResponseHandler_1.GraphResponseHandler(response), rawResponse = gResponse.getRawResponse();
            chai_1.assert.isDefined(rawResponse);
            chai_1.assert.isTrue(rawResponse instanceof Response);
        });
    });
});
//# sourceMappingURL=GraphResponseHandler.js.map
