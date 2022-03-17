// export function telemetryConfigurator(){

import { RequestOption } from "@microsoft/kiota-abstractions";
import { FetchRequestInit } from "@microsoft/kiota-http-fetchlibrary";
import { appendRequestHeader, getRequestHeader, setRequestHeader, TelemetryHandlerOptions } from "@microsoft/kiota-http-fetchlibrary";
import {isCustomHost, isGraphURL} from "../GraphRequestUtil"; 
import { generateUUID } from "./MiddlewareUtil";

import { PACKAGE_VERSION} from "../Version";

export interface GraphTelemetry{
    customHosts: Set<string>,
    SDKNameWithVersion: string,
}

/**
	 * @private
	 * @static
	 * A member holding the name of the client request id header
	 */
const CLIENT_REQUEST_ID_HEADER = "client-request-id";

 /**
  * @private
  * @static
  * A member holding the name of the sdk version header
  */
const SDK_VERSION_HEADER = "SdkVersion";

 /**
  * @private
  * @static
  * A member holding the language prefix for the sdk version header value
  */
const PRODUCT_NAME = "graph-js";
const coreSdkVersionValue = `${PRODUCT_NAME}/${PACKAGE_VERSION}`;
export const graphTelemetryConfigurator = (url: string, requestInit: RequestInit, requestOptions?: Record<string, RequestOption>, telemetryInfomation?: unknown) => {
    const graphTelemetry = telemetryInfomation as GraphTelemetry;
    if (isGraphURL(url) || (graphTelemetry.customHosts && isCustomHost(url, graphTelemetry.customHosts))) {
        // Add telemetry only if the request url is a Graph URL.
        // Errors are reported as in issue #265 if headers are present when redirecting to a non Graph URL
        let clientRequestId: string = getRequestHeader(requestInit as FetchRequestInit, CLIENT_REQUEST_ID_HEADER);
        if (!clientRequestId) {
            clientRequestId = generateUUID();
            setRequestHeader(requestInit as FetchRequestInit, CLIENT_REQUEST_ID_HEADER, clientRequestId);
        }
       

        appendRequestHeader(requestInit as FetchRequestInit, SDK_VERSION_HEADER, graphTelemetry.SDKNameWithVersion);
    } else {
        // Remove telemetry headers if present during redirection.
        delete requestInit.headers[CLIENT_REQUEST_ID_HEADER];
        delete requestInit.headers[SDK_VERSION_HEADER];
    }

}

export const getGraphTelemetryConfigurator = (graphTelemetry: GraphTelemetry): TelemetryHandlerOptions => {
    graphTelemetry.SDKNameWithVersion = graphTelemetry.SDKNameWithVersion + "" + coreSdkVersionValue
    return {
        telemetryConfigurator: graphTelemetryConfigurator,
        telemetryInfomation: graphTelemetry
    } 

}



