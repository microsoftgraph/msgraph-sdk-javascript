/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module TestingHandlerOptions
 */

import { MiddlewareOptions } from "./IMiddlewareOptions";
import { TestingStrategy } from "./TestingStrategy";

/**
 * Class representing TestingHandlerOptions
 * @class
 * Class
 * @implements MiddlewareOptions
 */
export class TestingHandlerOptions implements MiddlewareOptions {
	/**
	 * Specifies the startegy used for the Testing Handler -> RAMDOM/MANUAL
	 *
	 * @public
	 */
	public testingStrategy: TestingStrategy;

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
	 * @public
	 * @constructor
	 * To create an instance of Testing Handler Options
	 * @param {TestingStrategy} testingStrategy - Specifies the startegy used for the Testing Handler -> RAMDOM/MANUAL
	 * @param {number?} statusCode - The Message to be returned in the response
	 * @param {string} - The Message to be returned in the response
	 * @returns An instance of TestingHandlerOptions
	 */
	public constructor(testingStrategy: TestingStrategy = TestingStrategy.RANDOM, statusCode?: number, statusMessage: string = "Some error Happened") {
		this.testingStrategy = testingStrategy;
		this.statusCode = statusCode;
		this.statusMessage = statusMessage;
	}
}
