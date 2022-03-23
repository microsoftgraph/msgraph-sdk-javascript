/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { CustomFetchHandler, Middleware, RetryHandler, RetryHandlerOptions, TelemetryHandler, TelemetryHandlerOptions } from "@microsoft/kiota-http-fetchlibrary";
import fetch from "node-fetch";

import { ClientOptions } from "./IClientOptions";
import { AuthenticationHandler } from "./middleware/AuthenticationHandler";
import { GraphTelemetryConfig } from "./middleware/GraphTelemetryConfig";
import { getgraphTelemetryCallback } from "./middleware/TelemetryUtil";
import { GraphSDKConfig } from "./requestBuilderUtils/GraphSDKConfig";

export function getDefaultMiddlewareChain(clientOptions: ClientOptions, allowedHosts: Set<string>, graphSDKConfig?: GraphSDKConfig): Middleware[] {
	const middlewareArray: Middleware[] = [];

	const authenticationHandler = new AuthenticationHandler(clientOptions.authProvider);
	middlewareArray.push(authenticationHandler);

	const retryHandler = new RetryHandler(new RetryHandlerOptions());
	middlewareArray.push(retryHandler);

	const telemetryHandlerOptions: TelemetryHandlerOptions = getgraphTelemetryCallback({
		allowedHosts,
		SDKNameWithVersion: graphSDKConfig?.sdkTelemetryVersion,
	} as GraphTelemetryConfig);
	const telemetryHandler = new TelemetryHandler(telemetryHandlerOptions);

	middlewareArray.push(telemetryHandler);
	middlewareArray.push(new CustomFetchHandler(clientOptions.customFetch ?? fetch));
	return middlewareArray;
}
