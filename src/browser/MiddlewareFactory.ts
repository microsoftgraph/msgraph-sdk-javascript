/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { CustomFetchHandler, Middleware, RedirectHandler, RetryHandler, RetryHandlerOptions, TelemetryHandlerOptions } from "@microsoft/kiota-http-fetchlibrary";
import { TelemetryHandler } from "@microsoft/kiota-http-fetchlibrary";
import { ClientOptions } from "../IClientOptions";
import { getGraphTelemetryConfigurator, GraphTelemetry } from "../middleware/TelemetryConfiguration";
import { AuthenticationHandler } from "../middleware/AuthenticationHandler"
import { GraphSDKConfig } from "../requestBuilderUtils/GraphSDKConfig";


export function getDefaultMiddlewareChain(clientOptions: ClientOptions, graphSDKConfig: GraphSDKConfig): Middleware[] {

    const middlewareArray: Middleware[] = [];
    if (!graphSDKConfig || !Object.keys(graphSDKConfig).length) {
        const authenticationHandler = new AuthenticationHandler(clientOptions.authProvider);
        middlewareArray.push(authenticationHandler);
    }
    const retryHandler = new RetryHandler(new RetryHandlerOptions());
    middlewareArray.push(retryHandler);
    const telemetryHandlerOptions: TelemetryHandlerOptions = getGraphTelemetryConfigurator({
        customHosts: clientOptions.customHosts,
        SDKNameWithVersion: graphSDKConfig?.sdkTelemetryVersion
    } as GraphTelemetry);
    const telemetryHandler = new TelemetryHandler(telemetryHandlerOptions);

    middlewareArray.push(telemetryHandler);
    middlewareArray.push(new CustomFetchHandler(clientOptions.customFetch ?? fetch));
    return middlewareArray;
}
