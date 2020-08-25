/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";

import { HTTPClient } from "../../src/HTTPClient";
import { Context } from "../../src/IContext";
import { FetchOptions } from "../../src/IFetchOptions";
import { DummyHTTPMessageHandler } from "../DummyHTTPMessageHandler";

describe("HTTPClient.ts", () => {
	const httpMessageHandler: DummyHTTPMessageHandler = new DummyHTTPMessageHandler();
	const httpClient: HTTPClient = new HTTPClient(httpMessageHandler);
	describe("constructor", () => {
		it("Should create an instance and populate middleware member", () => {
			assert.isDefined(httpClient["middleware"]);
			assert.equal(httpClient["middleware"], httpMessageHandler);
		});
	});
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
});
