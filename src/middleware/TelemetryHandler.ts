/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module TelemetryHandler
 */

import { graphURLs } from "../GraphRequestUtil";
import { Context } from "../IContext";
import { PACKAGE_VERSION } from "../Version";

import { Middleware } from "./IMiddleware";
import { MiddlewareControl } from "./MiddlewareControl";
import { appendRequestHeader, generateUUID, getRequestHeader, setRequestHeader } from "./MiddlewareUtil";
import { TelemetryHandlerOptions } from "./options/TelemetryHandlerOptions";

/**
 * @class
 * @implements Middleware
 * Class for TelemetryHandler
 */
export class TelemetryHandler implements Middleware {
	/**
	 * @private
	 * @static
	 * A member holding the name of the client request id header
	 */
	private static CLIENT_REQUEST_ID_HEADER = "client-request-id";

	/**
	 * @private
	 * @static
	 * A member holding the name of the sdk version header
	 */
	private static SDK_VERSION_HEADER = "SdkVersion";

	/**
	 * @private
	 * @static
	 * A member holding the language prefix for the sdk version header value
	 */
	private static PRODUCT_NAME = "graph-js";

	/**
	 * @private
	 * @static
	 * A member holding the key for the feature usage metrics
	 */
	private static FEATURE_USAGE_STRING = "featureUsage";

	/**
	 * @private
	 * A member to hold next middleware in the middleware chain
	 */
	private nextMiddleware: Middleware;

	/**
	 * @public
	 * @async
	 * To execute the current middleware
	 * @param {Context} context - The context object of the request
	 * @returns A Promise that resolves to nothing
	 */

	/**
	 * @private
	 * Checks if the request url points to the Graph service endpoints
	 * @param {string} url - The request url string
	 * @returns true if request url is a Graph url
	 */
	private isGraphURL(url: string): boolean {
		let isGraph = false;
		graphURLs.forEach((element) => {
			if (url.indexOf(element) !== -1) {
				isGraph = true;
			}
		});
		return isGraph;
	}

	public async execute(context: Context): Promise<void> {
		try {
			if (typeof context.request === "string" && this.isGraphURL(context.request)) {
				let clientRequestId: string = getRequestHeader(context.request, context.options, TelemetryHandler.CLIENT_REQUEST_ID_HEADER);
				if (clientRequestId === null) {
					clientRequestId = generateUUID();
					setRequestHeader(context.request, context.options, TelemetryHandler.CLIENT_REQUEST_ID_HEADER, clientRequestId);
				}
				let sdkVersionValue: string = `${TelemetryHandler.PRODUCT_NAME}/${PACKAGE_VERSION}`;
				let options: TelemetryHandlerOptions;
				if (context.middlewareControl instanceof MiddlewareControl) {
					options = context.middlewareControl.getMiddlewareOptions(TelemetryHandlerOptions) as TelemetryHandlerOptions;
				}
				if (typeof options !== "undefined") {
					const featureUsage: string = options.getFeatureUsage();
					sdkVersionValue += ` (${TelemetryHandler.FEATURE_USAGE_STRING}=${featureUsage})`;
				}

				appendRequestHeader(context.request, context.options, TelemetryHandler.SDK_VERSION_HEADER, sdkVersionValue);
			}

			return await this.nextMiddleware.execute(context);
		} catch (error) {
			throw error;
		}
	}

	/**
	 * @public
	 * To set the next middleware in the chain
	 * @param {Middleware} next - The middleware instance
	 * @returns Nothing
	 */
	public setNext(next: Middleware): void {
		this.nextMiddleware = next;
	}
}
