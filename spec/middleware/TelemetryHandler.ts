/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";

import { GRAPH_BASE_URL } from "../../src/Constants";
import { Context } from "../../src/IContext";
import { MiddlewareControl } from "../../src/middleware/MiddlewareControl";
import { FeatureUsageFlag, TelemetryHandlerOptions } from "../../src/middleware/options/TelemetryHandlerOptions";
import { TelemetryHandler } from "../../src/middleware/TelemetryHandler";
import { PACKAGE_VERSION } from "../../src/Version";
import { DummyHTTPMessageHandler } from "../DummyHTTPMessageHandler";

describe("TelemetryHandler.ts", () => {
	/* tslint:disable: no-string-literal */
	describe("execute", function() {
		this.timeout(20 * 1000);
		const telemetryHandler = new TelemetryHandler();
		const dummyHTTPHandler = new DummyHTTPMessageHandler();
		telemetryHandler.setNext(dummyHTTPHandler);
		const okayResponse = new Response("", {
			status: 200,
			statusText: "OK",
		});
		it("Should not disturb client-request-id in the header", async () => {
			const uuid = "dummy_uuid";
			const context: Context = {
				request: GRAPH_BASE_URL,
				options: {
					headers: {
						"client-request-id": uuid,
					},
				},
			};
			dummyHTTPHandler.setResponses([okayResponse]);
			await telemetryHandler.execute(context);
			assert.equal(context.options.headers["client-request-id"], uuid);
		});

		it("Should create client-request-id if one is not present in the request header", async () => {
			const context: Context = {
				request: "https://GRAPH.microsoft.com:443/",
				options: {
					headers: {
						method: "GET",
					},
				},
			};
			dummyHTTPHandler.setResponses([okayResponse]);
			await telemetryHandler.execute(context);
			assert.isDefined(context.options.headers["client-request-id"]);
		});

		it("Should set sdk version header without feature flag usage if telemetry options is not present", async () => {
			const context: Context = {
				request: GRAPH_BASE_URL,
				options: {
					headers: {
						method: "GET",
					},
				},
			};
			dummyHTTPHandler.setResponses([okayResponse]);
			await telemetryHandler.execute(context);
			assert.equal(context.options.headers["SdkVersion"], `graph-js/${PACKAGE_VERSION}`);
		});

		it("Should set sdk version header with feature flag", async () => {
			const telemetryOptions = new TelemetryHandlerOptions();
			telemetryOptions["setFeatureUsage"](FeatureUsageFlag.AUTHENTICATION_HANDLER_ENABLED);
			const context: Context = {
				request: GRAPH_BASE_URL,
				options: {
					headers: {
						method: "GET",
					},
				},
				middlewareControl: new MiddlewareControl([telemetryOptions]),
			};
			dummyHTTPHandler.setResponses([okayResponse]);
			await telemetryHandler.execute(context);
			assert.equal(context.options.headers["SdkVersion"], `graph-js/${PACKAGE_VERSION} (featureUsage=${FeatureUsageFlag.AUTHENTICATION_HANDLER_ENABLED.toString(16)})`);
		});

		it("Should not set telemetry for non-graph url", async () => {
			const context: Context = {
				request: "test url",
				options: {
					headers: {
						method: "GET",
					},
				},
				middlewareControl: new MiddlewareControl(),
			};
			dummyHTTPHandler.setResponses([okayResponse]);
			await telemetryHandler.execute(context);
			assert.equal(context.options.headers["client-request-id"], undefined);
			assert.equal(context.options.headers["SdkVersion"], undefined);
			assert.equal(context.options.headers["setFeatureUsage"], undefined);
		});
	});
	/* tslint:enable: no-string-literal */
});
