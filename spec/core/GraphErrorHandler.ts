/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";
import { GraphErrorHandler } from "../../src/GraphErrorHandler";

describe("GraphErrorHandler.ts", () => {
    describe("constructError", () => {
        it("Should return custom error without code", () => {
            let message = "test",
                error = new Error(message),
                gError = GraphErrorHandler["constructError"](error);
            assert.equal(gError.message, message);
        });

        it("Should return custom error with code and message", () => {
            let message = "test",
                name = "test_name",
                error = new Error(message);
            error.name = name;
            let gError = GraphErrorHandler["constructError"](error);
            assert.equal(gError.message, message);
            assert.equal(gError.code, name);
        });
    });

    describe("constructErrorFromResponse", () => {
        let statusCode = 400,
            error: any = {
                error: {
                    code: "DataNotAvailable",
                    message: "The data that is being requested is not present",
                }
            }

        it("Should construct error for error response without innerError property", () => {
            let gError = GraphErrorHandler["constructErrorFromResponse"](error, statusCode);
            assert.equal(gError.statusCode, statusCode);
            assert.equal(gError.requestId, null);
        });

        it("Should construct error for the response missing one or more properties in innerError property", () => {
            error.error.innerError = {
                "request-id": "some random id"
            };
            let gError = GraphErrorHandler["constructErrorFromResponse"](error, statusCode);
            assert.equal(gError.statusCode, statusCode);
            assert.equal(gError.requestId, "some random id");
        });

        it("Should construct error for the complete error response", () => {
            let date = new Date(),
                requestId = "some random id";
            error.error.innerError = {
                "request-id": requestId,
                date
            }
            let gError = GraphErrorHandler["constructErrorFromResponse"](error, statusCode);
            assert.equal(gError.statusCode, statusCode);
            assert.equal(gError.requestId, "some random id");
            assert.equal(gError.date.toUTCString(), date.toUTCString());
        });
    });

    describe("getError", () => {
        it("Should construct error from response", () => {
            let errorResponse = {
                    error: {
                        code: "500",
                        message: "Internal Server Error",
                        innerError: {
                            "request-id": "some random id"
                        }
                    }
                },
                gError = GraphErrorHandler.getError(errorResponse);
            assert.equal(gError.requestId, "some random id");
            assert.equal(gError.code, "500");
            assert.equal(gError.message, "Internal Server Error");
        });

        it("Should construct error from error object", () => {
            let error = new Error("Some Error");
            error.name = "InvalidError";
            let gError = GraphErrorHandler.getError(error);
            assert.equal(gError.requestId, null);
            assert.equal(gError.message, "Some Error");
            assert.equal(gError.code, "InvalidError");
        });

        it("Should construct some default error", () => {
            let gError = GraphErrorHandler.getError();
            assert.equal(gError.statusCode, -1);
            assert.equal(gError.code, null);
            assert.equal(gError.message, null);
            assert.equal(gError.body, null);
            assert.equal(gError.requestId, null);
        });
    });
});