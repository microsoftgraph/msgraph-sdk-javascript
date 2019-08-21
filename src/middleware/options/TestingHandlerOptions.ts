/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module RetryHandlerOptions
 */

import { FetchOptions } from "../../IFetchOptions";

import { MiddlewareOptions } from "./IMiddlewareOptions";

import { TestingStrategy } from "./TestingStrategy";

export class TestingHandlerOptions implements MiddlewareOptions {
	public testingStrategy: TestingStrategy;

	public statusCode: number;

	public statusMessage: string;

	public constructor(testingStrategy: TestingStrategy, statusCode: number) {
		this.testingStrategy = testingStrategy;
		this.statusCode = statusCode;
		this.statusMessage = "Status Message here";
	}
}
