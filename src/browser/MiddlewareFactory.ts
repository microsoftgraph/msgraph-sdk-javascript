/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { CustomFetchHandler, Middleware, MiddlewareFactory as KiotaMiddlewareFactory, RetryHandler, RetryHandlerOptions, TelemetryHandler, TelemetryHandlerOptions } from "@microsoft/kiota-http-fetchlibrary";
import fetch from "node-fetch";

import { ClientOptions } from "../IClientOptions";
import { AuthenticationHandler } from "../middleware/AuthenticationHandler";
import { GraphTelemetryConfig } from "../middleware/Telemetry/GraphTelemetryConfig";
import { getGraphTelemetryCallback } from "../middleware/Telemetry/TelemetryUtil";
import { GraphSDKConfig } from "../requestBuilderUtils/GraphSDKConfig";

export function getDefaultMiddlewareChain(clientOptions: ClientOptions, allowedHosts: Set<string>, graphSDKConfig?: GraphSDKConfig): Middleware[] {
	const middlewareArray: Middleware[] = [];

	const authenticationHandler = new AuthenticationHandler(clientOptions.authProvider);
	middlewareArray.push(authenticationHandler);

	const graphTelemetryConfig: GraphTelemetryConfig = {
		allowedHosts,
		SDKNameWithVersion: graphSDKConfig?.sdkTelemetryVersion,
	};
	const telemetryHandlerOptions: TelemetryHandlerOptions = getGraphTelemetryCallback(graphTelemetryConfig);
	const telemetryHandler = new TelemetryHandler(telemetryHandlerOptions);

	/**  insert telemetry handler before custom fetch handler as the telemetry
	 * headers need to be deleted in case the request is redirected to a non-graph endpoint
	 */
	const kiotaDefaultMiddleware = KiotaMiddlewareFactory.getDefaultMiddlewareChain(clientOptions.customFetch);
	kiotaDefaultMiddleware.splice(kiotaDefaultMiddleware.length - 1, 0, telemetryHandler);
	return middlewareArray.concat(kiotaDefaultMiddleware);
}
