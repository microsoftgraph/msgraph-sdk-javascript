"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var GraphErrorHandler_1 = require("../../src/GraphErrorHandler");
describe("GraphErrorHandler.ts", function () {
    describe("constructor", function () {
        var gErrorHandler = new GraphErrorHandler_1.GraphErrorHandler(null);
        chai_1.assert.equal(gErrorHandler["error"], null);
        chai_1.assert.equal(gErrorHandler["statusCode"], -1);
        chai_1.assert.isUndefined(gErrorHandler["callback"]);
    });
    describe("constructError", function () {
        it("Should return custom error without code", function () {
            var message = "test", error = new Error(message), gErrorHandler = new GraphErrorHandler_1.GraphErrorHandler(error), gError = gErrorHandler["constructError"]();
            chai_1.assert.equal(gError.message, message);
        });
        it("Should return custom error with code and message", function () {
            var message = "test", name = "test_name", error = new Error(message);
            error.name = name;
            var gErrorHandler = new GraphErrorHandler_1.GraphErrorHandler(error), gError = gErrorHandler["constructError"]();
            chai_1.assert.equal(gError.message, message);
            chai_1.assert.equal(gError.code, name);
        });
    });
    describe("constructErrorFromResponse", function () {
        var statusCode = 400, error = {
            error: {
                code: "DataNotAvailable",
                message: "The data that is being requested is not present",
            }
        };
        it("Should construct error for error response without innerError property", function () {
            var gErrorHandler = new GraphErrorHandler_1.GraphErrorHandler(error, statusCode), gError = gErrorHandler["constructErrorFromResponse"]();
            chai_1.assert.equal(gError.statusCode, statusCode);
            chai_1.assert.equal(gError.requestId, null);
        });
        it("Should construct error for the response missing one or more properties in innerError property", function () {
            error.error.innerError = {
                "request-id": "some random id"
            };
            var gErrorHandler = new GraphErrorHandler_1.GraphErrorHandler(error, statusCode), gError = gErrorHandler["constructErrorFromResponse"]();
            chai_1.assert.equal(gError.statusCode, statusCode);
            chai_1.assert.equal(gError.requestId, "some random id");
        });
        it("Should construct error for the complete error response", function () {
            var date = new Date(), requestId = "some random id";
            error.error.innerError = {
                "request-id": requestId,
                date: date
            };
            var gErrorHandler = new GraphErrorHandler_1.GraphErrorHandler(error, statusCode), gError = gErrorHandler["constructErrorFromResponse"]();
            chai_1.assert.equal(gError.statusCode, statusCode);
            chai_1.assert.equal(gError.requestId, "some random id");
            chai_1.assert.equal(gError.date.toUTCString(), date.toUTCString());
        });
    });
    describe("getError", function () {
        it("Should construct error from response", function () {
            var errorResponse = {
                error: {
                    code: "500",
                    message: "Internal Server Error",
                    innerError: {
                        "request-id": "some random id"
                    }
                }
            }, gErrorHandler = new GraphErrorHandler_1.GraphErrorHandler(errorResponse), gError = gErrorHandler.getError();
            chai_1.assert.equal(gError.requestId, "some random id");
            chai_1.assert.equal(gError.code, "500");
            chai_1.assert.equal(gError.message, "Internal Server Error");
        });
        it("Should construct error from error object", function () {
            var error = new Error("Some Error");
            error.name = "InvalidError";
            var gErrorHandler = new GraphErrorHandler_1.GraphErrorHandler(error), gError = gErrorHandler.getError();
            chai_1.assert.equal(gError.requestId, null);
            chai_1.assert.equal(gError.message, "Some Error");
            chai_1.assert.equal(gError.code, "InvalidError");
        });
        it("Should construct some default error", function () {
            var gErrorHandler = new GraphErrorHandler_1.GraphErrorHandler(), gError = gErrorHandler.getError();
            chai_1.assert.equal(gError.statusCode, -1);
            chai_1.assert.equal(gError.code, null);
            chai_1.assert.equal(gError.message, null);
            chai_1.assert.equal(gError.body, null);
            chai_1.assert.equal(gError.requestId, null);
        });
    });
});
//# sourceMappingURL=GraphErrorHandler.js.map