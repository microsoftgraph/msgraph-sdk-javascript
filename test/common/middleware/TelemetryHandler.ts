/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { TelemetryHandler } from "@microsoft/kiota-http-fetchlibrary";
import { assert } from "chai";

import { GRAPH_BASE_URL, GRAPH_URLS } from "../../../src/Constants";
import { GraphTelemetryConfig } from "../../../src/middleware/GraphTelemetryConfig";
import { getgraphTelemetryCallback } from "../../../src/middleware/TelemetryUtil";
import { PACKAGE_VERSION } from "../../../src/Version";
import { DummyHTTPMessageHandler } from "../../DummyHTTPMessageHandler";

describe("TelemetryHandler.ts", () => {
	describe("execute", function () {
		this.timeout(20 * 1000);
		const telemetryHandler = new TelemetryHandler(
			getgraphTelemetryCallback({
				allowedHosts: GRAPH_URLS,
				SDKNameWithVersion: "TEST VERSION",
			} as GraphTelemetryConfig),
		);
		const dummyHTTPHandler = new DummyHTTPMessageHandler();
		const uuid = "dummy_uuid";
		const sdkVersion = "dummy_version";
		telemetryHandler.next = dummyHTTPHandler;
		const okayResponse = new Response("", {
			status: 200,
			statusText: "OK",
		});
		it("Should not disturb client-request-id in the header", async () => {
			const request = GRAPH_BASE_URL;
			const options = {
				headers: {
					"client-request-id": uuid,
				},
			};

			dummyHTTPHandler.setResponses([okayResponse]);
			await telemetryHandler.execute(request, options);
			assert.equal(options.headers["client-request-id"], uuid);
		});

		it("Should create client-request-id if one is not present in the request header", async () => {
			const requestUrl = "https://GRAPH.microsoft.com:443/";
			const options = {
				headers: {
					method: "GET",
				},
			};

			dummyHTTPHandler.setResponses([okayResponse]);
			await telemetryHandler.execute(requestUrl, options);
			assert.isDefined(options.headers["client-request-id"]);
		});

		it("Should set sdk version header without feature flag usage if telemetry options is not present", async () => {
			const request = GRAPH_BASE_URL;
			const options = {
				headers: {
					method: "GET",
				},
			};

			dummyHTTPHandler.setResponses([okayResponse]);
			await telemetryHandler.execute(request, options);
			assert.equal(options["SdkVersion"], `graph-js/${PACKAGE_VERSION}`);
		});

		it("Should not set telemetry for non-graph url", async () => {
			const request = "test url";
			const options = {
				headers: {
					method: "GET",
				},
			};

			dummyHTTPHandler.setResponses([okayResponse]);
			await telemetryHandler.execute(request, options);
			assert.equal(options.headers["client-request-id"], undefined);
			assert.equal(options.headers["SdkVersion"], undefined);
			assert.equal(options.headers["setFeatureUsage"], undefined);
		});

		it("Should not disturb client-request-id in the header when Request object is passed with Graph URL", async () => {
			const request = GRAPH_BASE_URL;
			const options = {
				headers: {
					"client-request-id": uuid,
					SdkVersion: sdkVersion,
				},
			};
			dummyHTTPHandler.setResponses([okayResponse]);
			await telemetryHandler.execute(request, options);
			assert.equal(options.headers["client-request-id"], uuid);
			assert.equal(options.headers["SdkVersion"], sdkVersion);
		});

		it("Should delete Telemetry in the header when Request object is passed with non Graph URL", async () => {
			const request = "test_url";

			const options = {
				headers: {
					"client-request-id": uuid,
					SdkVersion: "test_version",
				},
			};

			dummyHTTPHandler.setResponses([okayResponse]);
			await telemetryHandler.execute(request, options);
			assert.equal(options.headers["client-request-id"], undefined);
			assert.equal(options.headers["SdkVersion"], undefined);
		});
	});
});
