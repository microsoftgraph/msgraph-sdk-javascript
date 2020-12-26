/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import * as tslib_1 from "tslib";
/**
 * @class
 * Class representing HTTPClient
 */
export class HTTPClient {
	/**
	 * @public
	 * @constructor
	 * Creates an instance of a HTTPClient
	 * @param {...Middleware} middleware - The first middleware of the middleware chain or a sequence of all the Middleware handlers
	 */
	constructor(...middleware) {
		if (!middleware || !middleware.length) {
			const error = new Error();
			error.name = "InvalidMiddlewareChain";
			error.message = "Please provide a default middleware chain or custom middleware chain";
			throw error;
		}
		this.setMiddleware(...middleware);
	}
	/**
	 * @private
	 * Processes the middleware parameter passed to set this.middleware property
	 * The calling function should validate if middleware is not undefined or not empty.
	 * @param {...Middleware} middleware - The middleware passed
	 * @returns Nothing
	 */
	setMiddleware(...middleware) {
		if (middleware.length > 1) {
			this.parseMiddleWareArray(middleware);
		} else {
			this.middleware = middleware[0];
		}
	}
	/**
	 * @private
	 * Processes the middleware array to construct the chain
	 * and sets this.middleware property to the first middlware handler of the array
	 * The calling function should validate if middleware is not undefined or not empty
	 * @param {Middleware[]} middlewareArray - The array of middleware handlers
	 * @returns Nothing
	 */
	parseMiddleWareArray(middlewareArray) {
		middlewareArray.forEach((element, index) => {
			if (index < middlewareArray.length - 1) {
				element.setNext(middlewareArray[index + 1]);
			}
		});
		this.middleware = middlewareArray[0];
	}
	/**
	 * @public
	 * @async
	 * To send the request through the middleware chain
	 * @param {Context} context - The context of a request
	 * @returns A promise that resolves to the Context
	 */
	sendRequest(context) {
		return tslib_1.__awaiter(this, void 0, void 0, function*() {
			try {
				if (typeof context.request === "string" && context.options === undefined) {
					const error = new Error();
					error.name = "InvalidRequestOptions";
					error.message = "Unable to execute the middleware, Please provide valid options for a request";
					throw error;
				}
				yield this.middleware.execute(context);
				return context;
			} catch (error) {
				throw error;
			}
		});
	}
}
//# sourceMappingURL=HTTPClient.js.map
