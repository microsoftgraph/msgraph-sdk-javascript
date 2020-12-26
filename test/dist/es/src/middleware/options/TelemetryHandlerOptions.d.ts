/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * @module TelemetryHandlerOptions
 */
import { Context } from "../../IContext";
import { MiddlewareOptions } from "./IMiddlewareOptions";
/**
 * @enum
 * @property {number} NONE - The hexadecimal flag value for nothing enabled
 * @property {number} REDIRECT_HANDLER_ENABLED - The hexadecimal flag value for redirect handler enabled
 * @property {number} RETRY_HANDLER_ENABLED - The hexadecimal flag value for retry handler enabled
 * @property {number} AUTHENTICATION_HANDLER_ENABLED - The hexadecimal flag value for the authentication handler enabled
 */
export declare enum FeatureUsageFlag {
	NONE = 0,
	REDIRECT_HANDLER_ENABLED = 1,
	RETRY_HANDLER_ENABLED = 2,
	AUTHENTICATION_HANDLER_ENABLED = 4,
}
/**
 * @class
 * @implements MiddlewareOptions
 * Class for TelemetryHandlerOptions
 */
export declare class TelemetryHandlerOptions implements MiddlewareOptions {
	/**
	 * @private
	 * A member to hold the OR of feature usage flags
	 */
	private featureUsage;
	/**
	 * @public
	 * @static
	 * To update the feature usage in the context object
	 * @param {Context} context - The request context object containing middleware options
	 * @param {FeatureUsageFlag} flag - The flag value
	 * @returns nothing
	 */
	static updateFeatureUsageFlag(context: Context, flag: FeatureUsageFlag): void;
	/**
	 * @private
	 * To set the feature usage flag
	 * @param {FeatureUsageFlag} flag - The flag value
	 * @returns nothing
	 */
	private setFeatureUsage;
	/**
	 * @public
	 * To get the feature usage
	 * @returns A feature usage flag as hexadecimal string
	 */
	getFeatureUsage(): string;
}
