/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module ChaosHandlerOptions
 */

import { ChaosStrategy } from "./ChaosStrategy";
import { MiddlewareOptions } from "./IMiddlewareOptions";

/**
 * Class representing ChaosHandlerOptions
 * @class
 * Class
 * @implements MiddlewareOptions
 */
export class ChaosHandlerOptions implements MiddlewareOptions {
	/**
	 * Specifies the startegy used for the Testing Handler -> RANDOM/MANUAL
	 *
	 * @public
	 */
	public chaosStrategy: ChaosStrategy;

	/**
	 * Status code to be returned in the response
	 *
	 * @public
	 */
	public statusCode: number;

	/**
	 * The Message to be returned in the response
	 *
	 * @public
	 */
	public statusMessage: string;

	/**
	 * The percentage of randomness/chaos in the handler
	 *
	 * Setting the default value as 10%
	 * @public
	 */
	public chaosPercentage: number;

	/**
	 * The response body to be returned in the response
	 *
	 * @public
	 */
	public responseBody: any;

	/**
	 * The response headers to be returned in the response
	 *
	 * @public
	 */
	public headers: Headers;

	/**
	 * @public
	 * @constructor
	 * To create an instance of Testing Handler Options
	 * @param {ChaosStrategy} chaosStrategy - Specifies the startegy used for the Testing Handler -> RAMDOM/MANUAL
	 * @param {string} statusMessage - The Message to be returned in the response
	 * @param {number?} statusCode - The statusCode to be returned in the response
	 * @param {number?} chaosPercentage - The percentage of randomness/chaos in the handler
	 * @param {any?} responseBody - The response body to be returned in the response
	 * @returns An instance of ChaosHandlerOptions
	 */
	public constructor(chaosStrategy: ChaosStrategy = ChaosStrategy.RANDOM, statusMessage = "Some error Happened", statusCode?: number, chaosPercentage?: number, responseBody?: any, headers?: Headers) {
		this.chaosStrategy = chaosStrategy;
		this.statusCode = statusCode;
		this.statusMessage = statusMessage;
		this.chaosPercentage = chaosPercentage !== undefined ? chaosPercentage : 10;
		this.responseBody = responseBody;
		this.headers = headers;
		if (this.chaosPercentage > 100) {
			throw new Error("Error Pecentage can not be more than 100");
		}
	}
}
