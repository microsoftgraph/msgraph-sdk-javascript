/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";
import fetchMock = require("fetch-mock");
import { HTTPMessageHandler, GraphError } from "../../src/middleware/HTTPMessageHandler";
import { Context } from "../../src/IContext";
import "isomorphic-fetch";
import { ResponseType } from "../../src/ResponseType";

describe("HTTPMessageHandler.ts", () => {

    let handler: HTTPMessageHandler = new HTTPMessageHandler(),
        htmlString = `<!DOCTYPE html>
                        <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <title>Testing Document</title>
                            </head>
                            <body>
                                <h1 id="test">Testing</h1>
                            </body>
                        </html>`,
        okStatus = {
            status: 200,
            statusText: "OK"
        };

    describe("constructor", () => {
        it("Should initialize the DocumentTypes", () => {
            assert.isTrue(handler instanceof HTTPMessageHandler);
            assert.isTrue(HTTPMessageHandler["DocumentTypes"].length > 0);
        });
    });

    describe("parseDocumentResponse", () => {
        let response = new Response(htmlString, okStatus);
        it("Should return the html string", async () => {
            let dom = await handler["parseDocumentResponse"](response, HTTPMessageHandler["DocumentTypes"]["TEXT_HTML"]);
            assert.isDefined(dom);
            assert.equal(typeof dom, "string");
        });
    });

    describe("convertResponse", () => {
        it("Should return response value as text", async () => {
            let response = new Response(htmlString, okStatus),
                responseValue = await handler["convertResponse"](response, ResponseType.TEXT);
            assert.isDefined(responseValue);
            assert.equal(typeof responseValue, "string");
            assert.equal(responseValue, htmlString);
        });

        it("Should return response value as text for text/html return type", async () => {
            let response = new Response(htmlString, okStatus),
                responseValue = await handler["convertResponse"](response, ResponseType.DOCUMENT);
            assert.isDefined(responseValue);
            assert.equal(typeof responseValue, "string");
            assert.equal(responseValue, htmlString);
        });

        it("Should return response value as json", async () => {
            let json = { test: "test" },
                response = new Response(JSON.stringify(json), okStatus),
                responseValue = await handler["convertResponse"](response, ResponseType.JSON);
            assert.isDefined(responseValue);
            assert.equal(responseValue.test, "test");
        });

        it("Should return response value as text for default response type", async () => {
            let response = new Response(htmlString, okStatus),
                responseValue = await handler["convertResponse"](response);
            assert.isDefined(responseValue);
            assert.equal(typeof responseValue, "string");
            assert.equal(responseValue, htmlString);
        });
    });

    describe("defaultError", () => {
        it("Should return default error with given status code", () => {
            let code = 200,
                error = handler["defaultError"](code);
            assert.equal(error.statusCode, code);
        });

        it("Should return default error with default status code", () => {
            let error = handler["defaultError"]();
            assert.equal(error.statusCode, -1);
        });
    });

    describe("buildError", () => {
        it("Should return custom error without code", () => {
            let message = "test",
                error = new Error(message),
                gError = handler["buildError"](error);
            assert.equal(gError.message, message);
        });

        it("Should return custom error with code and message", () => {
            let message = "test",
                name = "test_name",
                error = new Error(message);
            error.name = name;
            let gError = handler["buildError"](error);
            assert.equal(gError.message, message);
            assert.equal(gError.code, name);
        });
    });

    describe("buildErrorFromResponse", () => {
        let statusCode = 400,
            error: any = {
                code: "DataNotAvailable",
                message: "The data that is being requested is not present",
            };

        it("Should construct error for error response without innerError property", () => {
            let gError: GraphError = handler["buildErrorFromResponse"](error, statusCode);
            assert.equal(gError.statusCode, statusCode);
            assert.equal(gError.requestId, "");
        });

        it("Should construct error for the response missing one or more properties in innerError property", () => {
            error.innerError = {
                "request-id": "some random id"
            };
            let gError: GraphError = handler["buildErrorFromResponse"](error, statusCode);
            assert.equal(gError.statusCode, statusCode);
            assert.equal(gError.requestId, "some random id");
        });

        it("Should construct error for the complete error response", () => {
            let date = new Date(),
                requestId = "some random id";
            error.innerError = {
                "request-id": requestId,
                date
            }
            let gError: GraphError = handler["buildErrorFromResponse"](error, statusCode);
            assert.equal(gError.statusCode, statusCode);
            assert.equal(gError.requestId, "some random id");
            assert.equal(gError.date.toUTCString(), date.toUTCString());
        })
    });

    describe("execute", () => {

        let context: Context = {
            request: "dummy_url1",
            options: {
                method: "get"
            }
        };

        it("Should return proper response", async () => {
            let response = new Response("url", {
                status: 200,
                statusText: "OK"
            })
            fetchMock.once("*", response);
            await handler.execute(context);
            assert.isDefined(context.rawResponse);
            assert.equal(context.rawResponse.status, 200);
            fetchMock.restore();
        });

        it("Should return proper error for error in response body", async () => {

            let obj = {
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
            try {
                await handler.execute(context);
            } catch (error) {
                assert.isDefined(error);
                assert.equal(error.statusCode, obj.status);
                assert.equal(error.code, obj.body.error.code);
                assert.equal(error.message, obj.body.error.message);
            }
            fetchMock.restore();
        });

        it("Should return error for the non 2XX response without error in the response body", async () => {
            let obj = {
                status: 404,
                body: {
                    someData: "someData"
                }
            };
            fetchMock.once("*", obj);
            try {
                await handler.execute(context);
            } catch (error) {
                assert.isDefined(error);
                assert.equal(error.statusCode, obj.status);
                assert.equal(error.requestId, null);
                assert.equal(error.body, null);
            }
            fetchMock.restore();
        });

        it("Should return default error for empty error with empty response", async () => {
            let obj = {
                status: 404
            };
            fetchMock.once("*", obj);
            try {
                await handler.execute(context);
            } catch (error) {
                assert.isDefined(error);
                assert.equal(error.statusCode, obj.status);
                assert.equal(error.requestId, null);
                assert.equal(error.body, null);
            }
            fetchMock.restore();
        });

        it("Should construct error response from the Error object", async () => {
            let error = new Error();
            error.message = "Unable to find the data that you are looking for";
            error.name = "DataNotFound";
            let obj = {
                status: 404,
                throws: error
            };
            fetchMock.once("*", obj);
            try {
                await handler.execute(context);
            } catch (err) {
                assert.isDefined(err);
                assert.equal(err.statusCode, -1);
                assert.equal(err.requestId, null);
                assert.equal(err.code, error.name);
                assert.equal(err.message, error.message);
            }
            fetchMock.restore();
        });

        it("Should construct default error object incase if the thrown error is not of Error", async () => {
            let errorStr = "Error String";
            let obj = {
                status: 404,
                throws: errorStr
            };
            fetchMock.once("*", obj);
            try {
                await handler.execute(context);
            } catch (err) {
                assert.isDefined(err);
                assert.equal(err.statusCode, -1);
                assert.equal(err.requestId, null);
                assert.equal(err.code, null);
                assert.equal(err.message, null);
            }
            fetchMock.restore();
        })
    });
});
