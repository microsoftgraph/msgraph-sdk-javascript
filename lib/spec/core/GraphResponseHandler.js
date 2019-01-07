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
        it("Should return the html string", function () { return __awaiter(_this, void 0, void 0, function () {
            var response, gResponse, dom;
            return __generator(this, function (_a) {
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
        it("Should return empty response for the NO CONTENT (204 response)", function () { return __awaiter(_this, void 0, void 0, function () {
            var response, gResponse, responseValue;
            return __generator(this, function (_a) {
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
        it("Should return response value as text", function () { return __awaiter(_this, void 0, void 0, function () {
            var response, gResponse, responseValue;
            return __generator(this, function (_a) {
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
        it("Should return response value as text for text/html return type", function () { return __awaiter(_this, void 0, void 0, function () {
            var response, gResponse, responseValue;
            return __generator(this, function (_a) {
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
        it("Should return response value as json", function () { return __awaiter(_this, void 0, void 0, function () {
            var json, response, gResponse, responseValue;
            return __generator(this, function (_a) {
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
        it("Should return response value as text for default response type", function () { return __awaiter(_this, void 0, void 0, function () {
            var response, gResponse, responseValue;
            return __generator(this, function (_a) {
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
        it("Should return valid 200 OK response", function () { return __awaiter(_this, void 0, void 0, function () {
            var response, gResponse, responseValue;
            return __generator(this, function (_a) {
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
        it("Should throw error for NOT OK response", function () { return __awaiter(_this, void 0, void 0, function () {
            var response, gResponse, responseValue, error_1;
            return __generator(this, function (_a) {
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