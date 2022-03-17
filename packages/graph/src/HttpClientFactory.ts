import fetch from "node-fetch";

import { CustomFetchHandler, Middleware, RedirectHandler, RetryHandler, RetryHandlerOptions, TelemetryHandlerOptions } from "@microsoft/kiota-http-fetchlibrary";
import { TelemetryHandler } from "@microsoft/kiota-http-fetchlibrary";

import { ClientOptions } from "./IClientOptions";
import { getGraphTelemetryConfigurator, GraphTelemetry } from "./middleware/TelemetryConfiguration";


export function getDefaultMiddlewareChain( clientOptions: ClientOptions): Middleware[] {
    console.log("called here");
		const middlewareArray: Middleware[] = [];
        const redirectHandler = new RedirectHandler();
        middlewareArray.push(redirectHandler);
		const retryHandler = new RetryHandler(new RetryHandlerOptions());
		middlewareArray.push(retryHandler);
        const telemetryHandlerOptions: TelemetryHandlerOptions = getGraphTelemetryConfigurator({
            customHosts: clientOptions.customHosts,
            SDKNameWithVersion: clientOptions.SDKNameWithVersion,
        }as GraphTelemetry);
        const telemetryHandler = new TelemetryHandler(telemetryHandlerOptions);

        middlewareArray.push(telemetryHandler);

        
		if (clientOptions.customFetch) {
			middlewareArray.push(new CustomFetchHandler(clientOptions.customFetch));
		} else {
			middlewareArray.push(new CustomFetchHandler(fetch));
		}

       
		return middlewareArray;
}
