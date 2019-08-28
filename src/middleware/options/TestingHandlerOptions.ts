/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module TestingHandlerOptions
 */

import { FetchOptions } from "../../IFetchOptions";

import { MiddlewareOptions } from "./IMiddlewareOptions";
import { methodStatusCode, responseMap } from "./TestingHandlerData";
import { TestingStrategy } from "./TestingStrategy";

export class TestingHandlerOptions implements MiddlewareOptions {
	public testingStrategy: TestingStrategy;

	public statusCode: number;

	public statusMessage: string;

	public constructor(testingStrategy: TestingStrategy = TestingStrategy.RANDOM, statusCode?: number) {
		this.testingStrategy = testingStrategy;
		this.statusCode = statusCode;
	}
}
