/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { AuthenticationHandler } from "../../src/middleware/AuthenticationHandler";
import { assert } from "chai";
import { DummyAuthenticationProvider } from "../DummyAuthenticationProvider";
import fetchMock = require("fetch-mock");
import { HTTPMessageHandler } from "../../src/middleware/HTTPMessageHandler";
import { Context } from "../../src/IContext";

const dummyAuthProvider = new DummyAuthenticationProvider(),
    authHandler = new AuthenticationHandler(dummyAuthProvider),
    httpHandler = new HTTPMessageHandler();
authHandler.setNext(httpHandler);

describe("AuthenticationHandler.ts", async () => {
    describe("Constructor", () => {
        it("Should return an AuthenticationHandler for given AuthenticationProvider", () => {
            assert.isTrue(authHandler instanceof AuthenticationHandler);
            assert.equal(authHandler["authProvider"], dummyAuthProvider);
        });
    });

    describe("execute", async () => {
        before(() => {
            fetchMock.mock("*", (url, options) => {
                if (typeof options === undefined || options.headers === undefined) {
                    let error = new Error("Headers are empty, Please ensure to pass in the authorization header");
                    error.name = "InvalidRequestOptions";
                    throw error;
                }
                let headerType = options.headers.constructor.name,
                    flag: boolean = false;
                if (headerType === "Headers") {
                    if ((options.headers as Headers).has("Authorization")) {
                        flag = true;
                    }
                } else if (headerType === "Array") {
                    for (let i = 0, l = (options.headers as String[][]).length; i < l; i++) {
                        if (options.headers[i][0] === "Authorization") {
                            flag = true;
                        }
                    }
                } else {
                    if ((options.headers as Record<string, string>).Authorization !== undefined) {
                        flag = true;
                    }
                }
                if (!flag) {
                    let authError: Error = new Error("Authorization headers is not present, Please ensure to pass in the auth token");
                    authError.name = "EmptyAuthenticationToken";
                    throw authError;
                }
                return "200";
            });
        });

        after(() => {
            fetchMock.restore();
        });

        it("Should set auth header for empty headers", async () => {
            try {
                let context: Context = {
                    request: "dummy_url",
                    options: {
                        method: "test"
                    }
                };
                await authHandler.execute(context);
            } catch (error) {
                throw error;
            }
        });

        it("Should set auth header in headers object", async () => {
            try {
                let context: Context = {
                    request: "dummy_url",
                    options: {
                        method: "test",
                        headers: {
                            version: "version"
                        }
                    }
                };
                await authHandler.execute(context);
            } catch (error) {
                throw error;
            }
        });

        it("Should set auth header in Headers instance", async () => {
            try {
                let context: Context = {
                    request: "dummy_url",
                    options: {
                        method: "test",
                        headers: new Headers({ version: "version" })
                    }
                };
                await authHandler.execute(context);
            } catch (error) {
                throw error;
            }
        });

        it("Should set auth header in array of headers", async () => {
            try {
                let context: Context = {
                    request: "dummy_url",
                    options: {
                        method: "test",
                        headers: [["version", "version"]]
                    }
                };
                await authHandler.execute(context);
            } catch (error) {
                throw error;
            }
        })
    });
});