/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module TelemetryHandler
 */

import { appendRequestHeader, getRequestHeader, setRequestHeader } from "@microsoft/kiota-http-fetchlibrary";

import { generateUUID, isCustomHost, isGraphURL } from "../GraphRequestUtil";
import { Context } from "../IContext";
import { PACKAGE_VERSION } from "../Version";
import { TelemetryHandlerOptions } from "./options/TelemetryHandlerOptions";

/**
 * @class
 * @implements Middleware
 * Class for TelemetryHandler
 */

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

/**
 * @private
 * @static
 * A member holding the key for the feature usage metrics
 */
const FEATURE_USAGE_STRING = "featureUsage";

/**
 * @private
 * @static
 * A member holding the key for the feature usage metrics
 */
export const TelemetryHandlerOptionsKey = "TelemetryHandlerOptions";
/**
 * @public
 * @async
 * To execute the current middleware
 * @param {Context} context - The context object of the request
 * @returns A Promise that resolves to nothing
 */
export const telemetryConfigurator = (context: Context): void => {
	const url = context.requestUrl;
	if (isGraphURL(url) || (context.customHosts && isCustomHost(url, context.customHosts))) {
		// Add telemetry only if the request url is a Graph URL.
		// Errors are reported as in issue #265 if headers are present when redirecting to a non Graph URL
		let clientRequestId: string = getRequestHeader(context.requestInformationOptions, CLIENT_REQUEST_ID_HEADER);
		if (!clientRequestId) {
			clientRequestId = generateUUID();
			setRequestHeader(context.fetchRequestInit, CLIENT_REQUEST_ID_HEADER, clientRequestId);
		}
		let sdkVersionValue = `${PRODUCT_NAME}/${PACKAGE_VERSION}`;
		let options: TelemetryHandlerOptions;
		if (context.requestInformationOptions) {
			options = (context?.requestInformationOptions && context.requestInformationOptions[TelemetryHandlerOptionsKey]) as TelemetryHandlerOptions;
		}
		if (options) {
			const featureUsage: string = options.getFeatureUsage();
			sdkVersionValue += ` (${FEATURE_USAGE_STRING}=${featureUsage})`;
		}
		appendRequestHeader(context.fetchRequestInit, SDK_VERSION_HEADER, sdkVersionValue);
	} else {
		// Remove telemetry headers if present during redirection.
		delete context.fetchRequestInit.headers[CLIENT_REQUEST_ID_HEADER];
		delete context.fetchRequestInit.headers[SDK_VERSION_HEADER];
	}
};
