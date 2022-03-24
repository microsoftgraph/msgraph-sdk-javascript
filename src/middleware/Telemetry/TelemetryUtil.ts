/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { RequestOption } from "@microsoft/kiota-abstractions";
import { appendRequestHeader, FetchHeadersInit, FetchRequestInit, getRequestHeader, setRequestHeader, TelemetryHandlerOptions } from "@microsoft/kiota-http-fetchlibrary";

import { isCustomHost, isGraphURL } from "../../GraphRequestUtil";
import { PACKAGE_VERSION } from "../../Version";
import { generateUUID } from "../MiddlewareUtil";
import { GraphTelemetryConfig } from "./GraphTelemetryConfig";

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
export const CORE_PRODUCT_NAME = "graph-js-core";
export const coreSdkVersionValue = `${CORE_PRODUCT_NAME}/${PACKAGE_VERSION}`;

export const graphTelemetryCallback = (url: string, requestInit: RequestInit, requestOptions?: Record<string, RequestOption>, telemetryInfomation?: unknown) => {
	const graphTelemetry = telemetryInfomation as GraphTelemetryConfig;
	if (isGraphURL(url) || (graphTelemetry.allowedHosts && isCustomHost(url, graphTelemetry.allowedHosts))) {
		// Add telemetry only if the request url is a Graph URL.
		// Errors are reported as in issue #265 if headers are present when redirecting to a non Graph URL
		let clientRequestId: string = getRequestHeader(requestInit as FetchRequestInit, CLIENT_REQUEST_ID_HEADER);
		if (!clientRequestId) {
			clientRequestId = generateUUID();
			setRequestHeader(requestInit as FetchHeadersInit, CLIENT_REQUEST_ID_HEADER, clientRequestId);
		}

		appendRequestHeader(requestInit as FetchRequestInit, SDK_VERSION_HEADER, graphTelemetry.SDKNameWithVersion);
	} else {
		// Remove telemetry headers if present during redirection.
		delete requestInit.headers[CLIENT_REQUEST_ID_HEADER];
		delete requestInit.headers[SDK_VERSION_HEADER];
	}
};

export const getGraphTelemetryCallback = (graphTelemetry: GraphTelemetryConfig): TelemetryHandlerOptions => {
	/** As per https://github.com/microsoftgraph/msgraph-sdk-design/blob/master/middleware/TelemetryHandler.md
	 * The value should look like:
	 * graph-sdk-js/1.0.0, graph-js-core/4.0.0
	 **/
	graphTelemetry.SDKNameWithVersion = graphTelemetry.SDKNameWithVersion ? graphTelemetry.SDKNameWithVersion + ", " + coreSdkVersionValue : coreSdkVersionValue;
	return {
		telemetryConfigurator: graphTelemetryCallback,
		telemetryInfomation: graphTelemetry,
		getKey: undefined,
	};
};
