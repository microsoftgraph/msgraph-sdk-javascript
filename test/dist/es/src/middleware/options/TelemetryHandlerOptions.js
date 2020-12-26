/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import { MiddlewareControl } from "../MiddlewareControl";
/**
 * @enum
 * @property {number} NONE - The hexadecimal flag value for nothing enabled
 * @property {number} REDIRECT_HANDLER_ENABLED - The hexadecimal flag value for redirect handler enabled
 * @property {number} RETRY_HANDLER_ENABLED - The hexadecimal flag value for retry handler enabled
 * @property {number} AUTHENTICATION_HANDLER_ENABLED - The hexadecimal flag value for the authentication handler enabled
 */
export var FeatureUsageFlag;
(function(FeatureUsageFlag) {
	FeatureUsageFlag[(FeatureUsageFlag["NONE"] = 0)] = "NONE";
	FeatureUsageFlag[(FeatureUsageFlag["REDIRECT_HANDLER_ENABLED"] = 1)] = "REDIRECT_HANDLER_ENABLED";
	FeatureUsageFlag[(FeatureUsageFlag["RETRY_HANDLER_ENABLED"] = 2)] = "RETRY_HANDLER_ENABLED";
	FeatureUsageFlag[(FeatureUsageFlag["AUTHENTICATION_HANDLER_ENABLED"] = 4)] = "AUTHENTICATION_HANDLER_ENABLED";
})(FeatureUsageFlag || (FeatureUsageFlag = {}));
/**
 * @class
 * @implements MiddlewareOptions
 * Class for TelemetryHandlerOptions
 */
export class TelemetryHandlerOptions {
	constructor() {
		/**
		 * @private
		 * A member to hold the OR of feature usage flags
		 */
		this.featureUsage = FeatureUsageFlag.NONE;
	}
	/**
	 * @public
	 * @static
	 * To update the feature usage in the context object
	 * @param {Context} context - The request context object containing middleware options
	 * @param {FeatureUsageFlag} flag - The flag value
	 * @returns nothing
	 */
	static updateFeatureUsageFlag(context, flag) {
		let options;
		if (context.middlewareControl instanceof MiddlewareControl) {
			options = context.middlewareControl.getMiddlewareOptions(TelemetryHandlerOptions);
		} else {
			context.middlewareControl = new MiddlewareControl();
		}
		if (typeof options === "undefined") {
			options = new TelemetryHandlerOptions();
			context.middlewareControl.setMiddlewareOptions(TelemetryHandlerOptions, options);
		}
		options.setFeatureUsage(flag);
	}
	/**
	 * @private
	 * To set the feature usage flag
	 * @param {FeatureUsageFlag} flag - The flag value
	 * @returns nothing
	 */
	setFeatureUsage(flag) {
		/* tslint:disable: no-bitwise */
		this.featureUsage = this.featureUsage | flag;
		/* tslint:enable: no-bitwise */
	}
	/**
	 * @public
	 * To get the feature usage
	 * @returns A feature usage flag as hexadecimal string
	 */
	getFeatureUsage() {
		return this.featureUsage.toString(16);
	}
}
//# sourceMappingURL=TelemetryHandlerOptions.js.map
