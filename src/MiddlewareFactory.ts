/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { CustomFetchHandler, Middleware, RedirectHandler, RedirectHandlerOptions, RetryHandler, RetryHandlerOptions, TelemetryHandler, TelemetryHandlerOptions } from "@microsoft/kiota-http-fetchlibrary";
import fetch from "node-fetch";

import { ClientOptions } from "./IClientOptions";
import { AuthenticationHandler } from "./middleware/AuthenticationHandler";
import { GraphTelemetryConfig } from "./middleware/Telemetry/GraphTelemetryConfig";
import { getGraphTelemetryCallback } from "./middleware/Telemetry/TelemetryUtil";
import { GraphSDKConfig } from "./requestBuilderUtils/GraphSDKConfig";

export function getDefaultMiddlewareChain(clientOptions: ClientOptions, allowedHosts: Set<string>, graphSDKConfig?: GraphSDKConfig): Middleware[] {
	const middlewareArray: Middleware[] = [];

	const authenticationHandler = new AuthenticationHandler(clientOptions.authProvider);
	middlewareArray.push(authenticationHandler);

	const retryHandler = new RetryHandler(new RetryHandlerOptions());
	middlewareArray.push(retryHandler);

	const redirectHandler = new RedirectHandler(new RedirectHandlerOptions());
	middlewareArray.push(redirectHandler);

	const graphTelemetryConfig: GraphTelemetryConfig = {
		allowedHosts,
		SDKNameWithVersion: graphSDKConfig?.sdkTelemetryVersion,
	};

	const telemetryHandlerOptions: TelemetryHandlerOptions = getGraphTelemetryCallback(graphTelemetryConfig);
	const telemetryHandler = new TelemetryHandler(telemetryHandlerOptions);

	middlewareArray.push(telemetryHandler);
	middlewareArray.push(new CustomFetchHandler(clientOptions.customFetch ?? fetch));
	return middlewareArray;
}
