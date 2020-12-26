/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import * as tslib_1 from "tslib";
import { assert } from "chai";
import { HTTPClient } from "../../../src/HTTPClient";
import { DummyHTTPMessageHandler } from "../DummyHTTPMessageHandler";
describe("HTTPClient.ts", () => {
	const httpMessageHandler = new DummyHTTPMessageHandler();
	const httpClient = new HTTPClient(httpMessageHandler);
	/* tslint:disable: no-string-literal */
	describe("constructor", () => {
		it("Should create an instance and populate middleware member", () => {
			assert.isDefined(httpClient["middleware"]);
			assert.equal(httpClient["middleware"], httpMessageHandler);
		});
		it("Should create an instance and populate middleware member when passing a middleware array", () => {
			const client = new HTTPClient(...[httpMessageHandler]);
			assert.isDefined(client["middleware"]);
			assert.equal(client["middleware"], httpMessageHandler);
		});
		it("Should throw an error if middleware is undefined", () => {
			try {
				const client = new HTTPClient();
			} catch (error) {
				assert.equal(error.name, "InvalidMiddlewareChain");
			}
		});
		it("Should throw an error if middleware is passed as null", () => {
			try {
				const client = new HTTPClient(null);
			} catch (error) {
				assert.equal(error.name, "InvalidMiddlewareChain");
			}
		});
		it("Should throw an error if middleware is passed as an empty array", () => {
			try {
				const client = new HTTPClient(...[]);
			} catch (error) {
				assert.equal(error.name, "InvalidMiddlewareChain");
			}
		});
	});
	/* tslint:enable: no-string-literal */
	describe("sendRequest", () =>
		tslib_1.__awaiter(this, void 0, void 0, function*() {
			it("Should throw error for invalid request options incase if the url and options are passed", () =>
				tslib_1.__awaiter(this, void 0, void 0, function*() {
					try {
						const url = "dummy_url";
						const context = {
							request: url,
						};
						yield httpClient.sendRequest(context);
						throw new Error("Something wrong with the context validation");
					} catch (error) {
						assert.equal(error.name, "InvalidRequestOptions");
					}
				}));
			it("Should execute for context object with Request instance", () =>
				tslib_1.__awaiter(this, void 0, void 0, function*() {
					try {
						const request = new Request("dummy_url", {
							method: "GET",
						});
						const context = {
							request,
						};
						yield httpClient.sendRequest(context);
					} catch (error) {
						throw error;
					}
				}));
			it("Should execute for context object with request uri and options", () =>
				tslib_1.__awaiter(this, void 0, void 0, function*() {
					try {
						const url = "dummy_url";
						const options = {
							method: "GET",
						};
						const context = {
							request: url,
							options,
						};
						yield httpClient.sendRequest(context);
					} catch (error) {
						throw error;
					}
				}));
		}));
});
//# sourceMappingURL=HTTPClient.js.map
