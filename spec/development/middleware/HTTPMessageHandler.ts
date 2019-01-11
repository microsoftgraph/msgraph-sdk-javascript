/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";
import fetchMock = require("fetch-mock");
import { HTTPMessageHandler } from "../../../src/middleware/HTTPMessageHandler";
import { Context } from "../../../src/IContext";
import "isomorphic-fetch";

describe("HTTPMessageHandler.ts", () => {

    let handler: HTTPMessageHandler = new HTTPMessageHandler();
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
            assert.isDefined(context.response);
            assert.equal(context.response.status, 200);
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
    });
});
