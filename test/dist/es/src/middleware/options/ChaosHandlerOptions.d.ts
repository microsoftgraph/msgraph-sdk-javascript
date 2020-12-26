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
export declare class ChaosHandlerOptions implements MiddlewareOptions {
	/**
	 * Specifies the startegy used for the Testing Handler -> RANDOM/MANUAL
	 *
	 * @public
	 */
	chaosStrategy: ChaosStrategy;
	/**
	 * Status code to be returned in the response
	 *
	 * @public
	 */
	statusCode: number;
	/**
	 * The Message to be returned in the response
	 *
	 * @public
	 */
	statusMessage: string;
	/**
	 * The percentage of randomness/chaos in the handler
	 *
	 * Setting the default value as 10%
	 * @public
	 */
	chaosPercentage: number;
	/**
	 * The response body to be returned in the response
	 *
	 * @public
	 */
	responseBody: any;
	/**
	 * @public
	 * @constructor
	 * To create an instance of Testing Handler Options
	 * @param {ChaosStrategy} ChaosStrategy - Specifies the startegy used for the Testing Handler -> RAMDOM/MANUAL
	 * @param {string} statusMessage - The Message to be returned in the response
	 * @param {number?} statusCode - The statusCode to be returned in the response
	 * @param {number?} chaosPercentage - The percentage of randomness/chaos in the handler
	 * @param {any?} responseBody - The response body to be returned in the response
	 * @returns An instance of ChaosHandlerOptions
	 */
	constructor(chaosStrategy?: ChaosStrategy, statusMessage?: string, statusCode?: number, chaosPercentage?: number, responseBody?: any);
}
