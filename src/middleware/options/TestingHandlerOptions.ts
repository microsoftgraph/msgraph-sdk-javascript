/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module RetryHandlerOptions
 */

// import { FetchOptions } from "../../IFetchOptions";
import { MiddlewareOptions } from "./IMiddlewareOptions";
import { TestingStrategy } from "./TestingStrategy";

export class TestingHandlerOptions implements MiddlewareOptions {
	public testingStrategy: TestingStrategy;

	public statusCode: number;

	public statusMessage: string;

	public constructor(testingStrategy: TestingStrategy = TestingStrategy.RANDOM, statusCode?: number) {
		this.testingStrategy = testingStrategy;

		if (this.testingStrategy === TestingStrategy.MANUAL) {
			this.statusCode = statusCode;
			this.statusMessage = "Status Message here";
		}
		/* else if(this.testingStrategy === TestingStrategy.RANDOM) {
            
        }
        else {

        }
	} */
	}
}
