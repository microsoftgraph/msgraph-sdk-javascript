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
import { MiddlewareControl } from "../MiddlewareControl";

import { MiddlewareOptions } from "./IMiddlewareOptions";

export enum FeatureUsageFlag {
	NONE = 0x0,
	REDIRECT_HANDLER_ENABLED = 0x1,
	RETRY_HANDLER_ENABLED = 0x2,
	AUTHENTICATION_HANDLER_ENABLED = 0x4,
}

/**
 * @class
 * @implements MiddlewareOptions
 * Class for TelemetryHandlerOptions
 */

export class TelemetryHandlerOptions implements MiddlewareOptions {
	private featureUsage: FeatureUsageFlag = FeatureUsageFlag.NONE;

	public static updateFeatureUsageFlag(context: Context, flag: FeatureUsageFlag): void {
		let options: TelemetryHandlerOptions;
		if (context.middlewareControl instanceof MiddlewareControl) {
			options = context.middlewareControl.getMiddlewareOptions(TelemetryHandlerOptions.name) as TelemetryHandlerOptions;
		} else {
			context.middlewareControl = new MiddlewareControl();
		}
		if (typeof options === "undefined") {
			options = new TelemetryHandlerOptions();
			context.middlewareControl.setMiddlewareOptions(TelemetryHandlerOptions.name, options);
		}
		options.setFeatureUsage(flag);
	}

	public setFeatureUsage(flag: FeatureUsageFlag): void {
		/* tslint:disable: no-bitwise */
		this.featureUsage = this.featureUsage | flag;
		/* tslint:enable: no-bitwise */
	}

	public getFeatureUsage(): string {
		return this.featureUsage.toString(16);
	}
}
