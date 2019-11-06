/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";

import { Client } from "../../src/Client";
import { HTTPClient } from "../../src/HTTPClient";
import { Context } from "../../src/IContext";
import { FetchOptions } from "../../src/IFetchOptions";
import { RedirectHandlerOptions } from "../../src/middleware/options/RedirectHandlerOptions";
import { RedirectHandler } from "../../src/middleware/RedirectHandler";
import { TelemetryHandler } from "../../src/middleware/TelemetryHandler";
import { DummyHTTPMessageHandler } from "../DummyHTTPMessageHandler";

describe("HTTPClient.ts", () => {
	const httpMessageHandler: DummyHTTPMessageHandler = new DummyHTTPMessageHandler();
	const httpClient: HTTPClient = new HTTPClient(httpMessageHandler);
	/* tslint:disable: no-string-literal */
	describe("constructor", () => {
		it("Should create an instance and populate middleware member", () => {
			assert.isDefined(httpClient["middleware"]);
			assert.equal(httpClient["middleware"], httpMessageHandler);
		});
	});
	/* tslint:enable: no-string-literal */

	describe("sendRequest", async () => {
		it("Should throw error for invalid request options incase if the url and options are passed", async () => {
			try {
				const url = "dummy_url";
				const context: Context = {
					request: url,
				};
				await httpClient.sendRequest(context);
				throw new Error("Something wrong with the context validation");
			} catch (error) {
				assert.equal(error.name, "InvalidRequestOptions");
			}
		});

		it("Should execute for context object with Request instance", async () => {
			try {
				const request: Request = new Request("dummy_url", {
					method: "GET",
				});
				const context: Context = {
					request,
				};
				await httpClient.sendRequest(context);
			} catch (error) {
				throw error;
			}
		});

		it("Should execute for context object with request uri and options", async () => {
			try {
				const url = "dummy_url";
				const options: FetchOptions = {
					method: "GET",
				};
				const context: Context = {
					request: url,
					options,
				};
				await httpClient.sendRequest(context);
			} catch (error) {
				throw error;
			}
		});
	});

	describe("getMiddlewareArray", () => {
		it("Should work fine for a single middleware in the chain, which does have a getNext method", () => {
			const telemetryHandler = new TelemetryHandler();
			const tempHttpClient: HTTPClient = new HTTPClient(telemetryHandler);
			assert.equal(tempHttpClient.getMiddlewareArray().length, 1);
		});

		it("Should work fine for a single middleware in the chain, which doesn't have a getNext method", () => {
			const tempHttpClient: HTTPClient = new HTTPClient(httpMessageHandler);
			assert.equal(tempHttpClient.getMiddlewareArray().length, 1);
		});

		it("Should work fine for a chain containing many middlewares", () => {
			const telemetryHandler = new TelemetryHandler();
			const redirectHandler = new RedirectHandler(new RedirectHandlerOptions());
			redirectHandler.setNext(telemetryHandler);
			telemetryHandler.setNext(httpMessageHandler);
			const tempHttpClient: HTTPClient = new HTTPClient(redirectHandler);
			assert.equal(tempHttpClient.getMiddlewareArray().length, 3);
		});
	});

	describe("setMiddlewareArray", () => {
		it("Should make a chain out of the provided array of middlewares", () => {
			const telemetryHandler = new TelemetryHandler();
			const redirectHandler = new RedirectHandler(new RedirectHandlerOptions());
			redirectHandler.setNext(httpMessageHandler);
			const tempHttpClient: HTTPClient = new HTTPClient(redirectHandler);
			const middlewareArray = tempHttpClient.getMiddlewareArray();
			middlewareArray.splice(1, 0, telemetryHandler);
			tempHttpClient.setMiddlewareArray(middlewareArray);
			assert.equal(tempHttpClient.getMiddlewareArray().length, 3);
		});
	});
});
