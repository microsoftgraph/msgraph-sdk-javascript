/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import * as tslib_1 from "tslib";
import { PACKAGE_VERSION } from "../Version";
import { MiddlewareControl } from "./MiddlewareControl";
import { appendRequestHeader, generateUUID, getRequestHeader, setRequestHeader } from "./MiddlewareUtil";
import { TelemetryHandlerOptions } from "./options/TelemetryHandlerOptions";
/**
 * @class
 * @implements Middleware
 * Class for TelemetryHandler
 */
export class TelemetryHandler {
	/**
	 * @public
	 * @async
	 * To execute the current middleware
	 * @param {Context} context - The context object of the request
	 * @returns A Promise that resolves to nothing
	 */
	execute(context) {
		return tslib_1.__awaiter(this, void 0, void 0, function*() {
			try {
				let clientRequestId = getRequestHeader(context.request, context.options, TelemetryHandler.CLIENT_REQUEST_ID_HEADER);
				if (clientRequestId === null) {
					clientRequestId = generateUUID();
					setRequestHeader(context.request, context.options, TelemetryHandler.CLIENT_REQUEST_ID_HEADER, clientRequestId);
				}
				let sdkVersionValue = `${TelemetryHandler.PRODUCT_NAME}/${PACKAGE_VERSION}`;
				let options;
				if (context.middlewareControl instanceof MiddlewareControl) {
					options = context.middlewareControl.getMiddlewareOptions(TelemetryHandlerOptions);
				}
				if (typeof options !== "undefined") {
					const featureUsage = options.getFeatureUsage();
					sdkVersionValue += ` (${TelemetryHandler.FEATURE_USAGE_STRING}=${featureUsage})`;
				}
				appendRequestHeader(context.request, context.options, TelemetryHandler.SDK_VERSION_HEADER, sdkVersionValue);
				return yield this.nextMiddleware.execute(context);
			} catch (error) {
				throw error;
			}
		});
	}
	/**
	 * @public
	 * To set the next middleware in the chain
	 * @param {Middleware} next - The middleware instance
	 * @returns Nothing
	 */
	setNext(next) {
		this.nextMiddleware = next;
	}
}
/**
 * @private
 * @static
 * A member holding the name of the client request id header
 */
TelemetryHandler.CLIENT_REQUEST_ID_HEADER = "client-request-id";
/**
 * @private
 * @static
 * A member holding the name of the sdk version header
 */
TelemetryHandler.SDK_VERSION_HEADER = "SdkVersion";
/**
 * @private
 * @static
 * A member holding the language prefix for the sdk version header value
 */
TelemetryHandler.PRODUCT_NAME = "graph-js";
/**
 * @private
 * @static
 * A member holding the key for the feature usage metrics
 */
TelemetryHandler.FEATURE_USAGE_STRING = "featureUsage";
//# sourceMappingURL=TelemetryHandler.js.map
