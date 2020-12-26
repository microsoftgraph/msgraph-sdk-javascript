/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * @module TelemetryHandler
 */
import { Context } from "../IContext";
import { Middleware } from "./IMiddleware";
/**
 * @class
 * @implements Middleware
 * Class for TelemetryHandler
 */
export declare class TelemetryHandler implements Middleware {
	/**
	 * @private
	 * @static
	 * A member holding the name of the client request id header
	 */
	private static CLIENT_REQUEST_ID_HEADER;
	/**
	 * @private
	 * @static
	 * A member holding the name of the sdk version header
	 */
	private static SDK_VERSION_HEADER;
	/**
	 * @private
	 * @static
	 * A member holding the language prefix for the sdk version header value
	 */
	private static PRODUCT_NAME;
	/**
	 * @private
	 * @static
	 * A member holding the key for the feature usage metrics
	 */
	private static FEATURE_USAGE_STRING;
	/**
	 * @private
	 * A member to hold next middleware in the middleware chain
	 */
	private nextMiddleware;
	/**
	 * @public
	 * @async
	 * To execute the current middleware
	 * @param {Context} context - The context object of the request
	 * @returns A Promise that resolves to nothing
	 */
	execute(context: Context): Promise<void>;
	/**
	 * @public
	 * To set the next middleware in the chain
	 * @param {Middleware} next - The middleware instance
	 * @returns Nothing
	 */
	setNext(next: Middleware): void;
}
