/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import * as tslib_1 from "tslib";
import { assert } from "chai";
import { MiddlewareControl } from "../../../src/middleware/MiddlewareControl";
import { FeatureUsageFlag, TelemetryHandlerOptions } from "../../../src/middleware/options/TelemetryHandlerOptions";
import { TelemetryHandler } from "../../../src/middleware/TelemetryHandler";
import { PACKAGE_VERSION } from "../../../src/Version";
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
		it("Should not disturb client-request-id in the header", () =>
			tslib_1.__awaiter(this, void 0, void 0, function*() {
				try {
					const uuid = "dummy_uuid";
					const context = {
						request: "url",
						options: {
							headers: {
								"client-request-id": uuid,
							},
						},
					};
					dummyHTTPHandler.setResponses([okayResponse]);
					yield telemetryHandler.execute(context);
					assert.equal(context.options.headers["client-request-id"], uuid);
				} catch (error) {
					throw error;
				}
			}));
		it("Should create client-request-id if one is not present in the request header", () =>
			tslib_1.__awaiter(this, void 0, void 0, function*() {
				try {
					const context = {
						request: "url",
						options: {
							headers: {
								method: "GET",
							},
						},
					};
					dummyHTTPHandler.setResponses([okayResponse]);
					yield telemetryHandler.execute(context);
					assert.isDefined(context.options.headers["client-request-id"]);
				} catch (error) {
					throw error;
				}
			}));
		it("Should set sdk version header without feature flag usage if telemetry options is not present", () =>
			tslib_1.__awaiter(this, void 0, void 0, function*() {
				try {
					const context = {
						request: "url",
						options: {
							headers: {
								method: "GET",
							},
						},
					};
					dummyHTTPHandler.setResponses([okayResponse]);
					yield telemetryHandler.execute(context);
					assert.equal(context.options.headers["SdkVersion"], `graph-js/${PACKAGE_VERSION}`);
				} catch (error) {
					throw error;
				}
			}));
		it("Should set sdk version header with feature flag", () =>
			tslib_1.__awaiter(this, void 0, void 0, function*() {
				try {
					const telemetryOptions = new TelemetryHandlerOptions();
					telemetryOptions["setFeatureUsage"](FeatureUsageFlag.AUTHENTICATION_HANDLER_ENABLED);
					const context = {
						request: "url",
						options: {
							headers: {
								method: "GET",
							},
						},
						middlewareControl: new MiddlewareControl([telemetryOptions]),
					};
					dummyHTTPHandler.setResponses([okayResponse]);
					yield telemetryHandler.execute(context);
					assert.equal(context.options.headers["SdkVersion"], `graph-js/${PACKAGE_VERSION} (featureUsage=${FeatureUsageFlag.AUTHENTICATION_HANDLER_ENABLED.toString(16)})`);
				} catch (error) {
					throw error;
				}
			}));
	});
	/* tslint:enable: no-string-literal */
});
//# sourceMappingURL=TelemetryHandler.js.map
