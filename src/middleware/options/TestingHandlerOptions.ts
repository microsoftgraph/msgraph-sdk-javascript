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
// import * as data from "./MethodStatusCode"
import { TestingStrategy } from "./TestingStrategy";

export class TestingHandlerOptions implements MiddlewareOptions {
	private apiMethod: string;

	public testingStrategy: TestingStrategy;

	public statusCode: number;

	public statusText: string;

	public methodStatusCode = {
		GET: [200, 301, 307, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504],
		POST: [200, 201, 204, 307, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504, 507],
		PUT: [200, 201, 400, 401, 403, 404, 405, 409, 429, 500, 502, 503, 504, 507],
		PATCH: [200, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504],
		DELETE: [200, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504, 507],
	};

	public constructor(testingStrategy: TestingStrategy = TestingStrategy.RANDOM, statusCode?: number) {
		this.testingStrategy = testingStrategy;
		this.statusCode = statusCode;
		// console.log("In testingHandlerOptions Constructor");
		// console.log(statusCode);
		// console.log(testingStrategy);

		// console.log("Out of Constructor");
	}

	private async setStatusCode() {
		if (this.testingStrategy === TestingStrategy.MANUAL) {
			// this.statusCode = statusCode;
			this.statusText = "Status Message here";
			// console.log("Inside the if condition");
		} else if (this.testingStrategy === TestingStrategy.RANDOM) {
			await this.getStatusCode().then((res) => {
				this.statusCode = res;
			});
			this.statusText = "Status Message here";
		}
		/* else {

        }
        */
	}

	private async getStatusCode(): Promise<number> {
		try {
			const fs = require("fs");
			/* let methodStatusCode;
        methodStatusCode = data.methodStatusCode;
        */
			/* const handleJSONFile = function (err, data) {
            if(err) {
                throw err;
            }

            methodStatusCode = JSON.parse(data);
            console.log(methodStatusCode);
        }

        await fs.readFile('./MethodStatusCode.json', handleJSONFile);
        */

			// const methodStatusCode = require('./MethodStatusCode.json');
			// await console.log(this.methodStatusCode[this.apiMethod], "hey");

			const container: number[] = this.methodStatusCode[this.apiMethod] as number[];
			const containerLength: number = this.methodStatusCode[this.apiMethod].length;
			// console.log(containerLength);
			// console.log(container[Math.floor(Math.random() * containerLength)]);

			return container[Math.floor(Math.random() * containerLength)];
			// return 200;
		} catch (error) {
			throw error;
		}
	}

	public async sendMethod(apiMethod: string) {
		// console.log(apiMethod, "hey");
		this.apiMethod = apiMethod;
		await this.setStatusCode();
	}
}
