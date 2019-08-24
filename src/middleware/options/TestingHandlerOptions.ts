/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module TestingHandlerOptions
 */

// import { FetchOptions } from "../../IFetchOptions";
import { MiddlewareOptions } from "./IMiddlewareOptions";
import { TestingStrategy } from "./TestingStrategy";

export class TestingHandlerOptions implements MiddlewareOptions {
	public testingStrategy: TestingStrategy;

	public statusCode: number;

	public statusText: string;

	public constructor(testingStrategy: TestingStrategy = TestingStrategy.RANDOM, statusCode: number = 200) {
		this.testingStrategy = testingStrategy;
		// console.log("In testingHandlerOptions Constructor");
		// console.log(statusCode);
		// console.log(testingStrategy);
		if (this.testingStrategy === TestingStrategy.MANUAL) {
			this.statusCode = statusCode;
			this.statusText = "Status Message here";
			// console.log("Inside the if condition");
		}
		/* else if(this.testingStrategy === TestingStrategy.RANDOM) {
            
        }
        else {

        }
    } */

		// console.log("Out of Constructor");
	}
}
