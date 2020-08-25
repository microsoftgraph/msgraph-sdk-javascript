/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";

import { Context } from "../../src/IContext";
import { MiddlewareControl } from "../../src/middleware/MiddlewareControl";
import { FeatureUsageFlag, TelemetryHandlerOptions } from "../../src/middleware/options/TelemetryHandlerOptions";

describe("TelemetryHandlerOptions.ts", () => {
	describe("constructor", () => {
		it("Should initialize the feature usage flag with NONE flag", () => {
			const telemetryOptions = new TelemetryHandlerOptions();
			assert.equal(telemetryOptions["featureUsage"], FeatureUsageFlag.NONE);
		});
	});

	describe("updateFeatureUsageFlag", () => {
		it("Should update feature usage flag for middleware control without telemetry handler option", () => {
			const context: Context = {
				request: "url",
				middlewareControl: new MiddlewareControl(),
			};
			TelemetryHandlerOptions.updateFeatureUsageFlag(context, FeatureUsageFlag.AUTHENTICATION_HANDLER_ENABLED);
			const options: TelemetryHandlerOptions = context.middlewareControl.getMiddlewareOptions(TelemetryHandlerOptions) as TelemetryHandlerOptions;
			assert.equal(options["featureUsage"], FeatureUsageFlag.AUTHENTICATION_HANDLER_ENABLED);
		});

		it("Should update feature usage flag for middleware control with telemetry handler option", () => {
			const context: Context = {
				request: "url",
				middlewareControl: new MiddlewareControl([new TelemetryHandlerOptions()]),
			};
			TelemetryHandlerOptions.updateFeatureUsageFlag(context, FeatureUsageFlag.AUTHENTICATION_HANDLER_ENABLED);
			const options: TelemetryHandlerOptions = context.middlewareControl.getMiddlewareOptions(TelemetryHandlerOptions) as TelemetryHandlerOptions;
			assert.equal(options["featureUsage"], FeatureUsageFlag.AUTHENTICATION_HANDLER_ENABLED);
		});

		it("Should update feature usage flag for context object without middleware control object", () => {
			const context: Context = {
				request: "url",
			};
			TelemetryHandlerOptions.updateFeatureUsageFlag(context, FeatureUsageFlag.AUTHENTICATION_HANDLER_ENABLED);
			const options: TelemetryHandlerOptions = context.middlewareControl.getMiddlewareOptions(TelemetryHandlerOptions) as TelemetryHandlerOptions;
			assert.equal(options["featureUsage"], FeatureUsageFlag.AUTHENTICATION_HANDLER_ENABLED);
		});
	});

	describe("setFeatureUsage", () => {
		it("Should set a given flags", () => {
			const telemetryOptions = new TelemetryHandlerOptions();
			telemetryOptions["setFeatureUsage"](FeatureUsageFlag.AUTHENTICATION_HANDLER_ENABLED);
			telemetryOptions["setFeatureUsage"](FeatureUsageFlag.RETRY_HANDLER_ENABLED);
			assert.equal(telemetryOptions["featureUsage"] & FeatureUsageFlag.AUTHENTICATION_HANDLER_ENABLED, FeatureUsageFlag.AUTHENTICATION_HANDLER_ENABLED);
			assert.equal(telemetryOptions["featureUsage"] & FeatureUsageFlag.RETRY_HANDLER_ENABLED, FeatureUsageFlag.RETRY_HANDLER_ENABLED);
			assert.equal(telemetryOptions["featureUsage"] & FeatureUsageFlag.REDIRECT_HANDLER_ENABLED, FeatureUsageFlag.NONE);
		});
	});

	describe("getFeatureUsage", () => {
		it("Should return the feature usage in hexadecimal string", () => {
			const telemetryOptions = new TelemetryHandlerOptions();
			telemetryOptions["setFeatureUsage"](FeatureUsageFlag.AUTHENTICATION_HANDLER_ENABLED);
			telemetryOptions["setFeatureUsage"](FeatureUsageFlag.RETRY_HANDLER_ENABLED);
			const usageFlag = telemetryOptions.getFeatureUsage();
			assert.equal(usageFlag, "6");
		});
	});
});
