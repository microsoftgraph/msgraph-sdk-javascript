/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";
import { GraphResponseHandler } from "../../src/GraphResponseHandler";
import { ResponseType } from "../../src/ResponseType";

describe("GraphResponseHandler.ts", () => {
    let htmlString = `<!DOCTYPE html>
                        <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <title>Testing Document</title>
                            </head>
                            <body>
                                <h1 id="test">Testing</h1>
                            </body>
                        </html>`,
        status200 = {
            status: 200,
            statusText: "OK"
        },
        status204 = {
            status: 204,
            statusText: "OK"
        },
        status500 = {
            status: 500,
            statusText: "Internal Server Error"
        };

    describe("constructor", () => {
        it("Should initialize the DocumentTypes", () => {
            let response = new Response("test"),
                gResponse = new GraphResponseHandler(response);
            assert.isDefined(gResponse["rawResponse"]);
            assert.isUndefined(gResponse["responseType"]);
            assert.isUndefined(gResponse["callback"]);
            assert.isTrue(GraphResponseHandler["DocumentTypes"].length > 0);
        });
    });

    describe("parseDocumentResponse", () => {
        it("Should return the html string", async () => {
            let response = new Response(htmlString, status200),
                gResponse = new GraphResponseHandler(response),
                dom = await gResponse["parseDocumentResponse"](GraphResponseHandler["DocumentTypes"]["TEXT_HTML"]);
            assert.isDefined(dom);
            assert.equal(typeof dom, "string");
        });
    });

    describe("convertResponse", () => {
        it("Should return empty response for the NO CONTENT (204 response)", async () => {
            let response = new Response(undefined, status204),
                gResponse = new GraphResponseHandler(response),
                responseValue = await gResponse["convertResponse"]();
            assert.isUndefined(responseValue);
        });

        it("Should return response value as text", async () => {
            let response = new Response(htmlString, status200),
                gResponse = new GraphResponseHandler(response, ResponseType.TEXT),
                responseValue = await gResponse["convertResponse"]();
            assert.isDefined(responseValue);
            assert.equal(typeof responseValue, "string");
            assert.equal(responseValue, htmlString);
        });

        it("Should return response value as text for text/html return type", async () => {
            let response = new Response(htmlString, status200),
                gResponse = new GraphResponseHandler(response, ResponseType.DOCUMENT),
                responseValue = await gResponse["convertResponse"]();
            assert.isDefined(responseValue);
            assert.equal(typeof responseValue, "string");
            assert.equal(responseValue, htmlString);
        });

        it("Should return response value as json", async () => {
            let json = { test: "test" },
                response = new Response(JSON.stringify(json), status200),
                gResponse = new GraphResponseHandler(response, ResponseType.JSON),
                responseValue = await gResponse["convertResponse"]();
            assert.isDefined(responseValue);
            assert.equal(responseValue.test, "test");
        });

        it("Should return response value as text for default response type", async () => {
            let response = new Response(htmlString, status200),
                gResponse = new GraphResponseHandler(response),
                responseValue = await gResponse["convertResponse"]();
            assert.isDefined(responseValue);
            assert.equal(typeof responseValue, "string");
            assert.equal(responseValue, htmlString);
        });
    });

    describe("getResponse", () => {
        it("Should return valid 200 OK response", async () => {
            let response = new Response(htmlString, status200),
                gResponse = new GraphResponseHandler(response, ResponseType.TEXT),
                responseValue = await gResponse.getResponse();
            assert.isDefined(responseValue);
        });

        it("Should throw error for NOT OK response", async () => {
            try {
                let response = new Response("NOT OK", status500),
                    gResponse = new GraphResponseHandler(response),
                    responseValue = await gResponse.getResponse();
                throw new Error("Something wrong with validating OK response");
            } catch (error) {
                assert.isDefined(error);
                assert.equal(error, "NOT OK");
            }
        });
    });

    describe("getRawResponse", () => {
        it("Should return raw response", () => {
            let response = new Response(htmlString, status200),
                gResponse = new GraphResponseHandler(response),
                rawResponse = gResponse.getRawResponse();
            assert.isDefined(rawResponse);
            assert.isTrue(rawResponse instanceof Response);
        });
    });
});

