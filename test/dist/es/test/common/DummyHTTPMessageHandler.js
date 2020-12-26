/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import * as tslib_1 from "tslib";
/**
 * @class
 * @implements Middleware
 * Class representing DummyHTTPMessageHandler
 */
export class DummyHTTPMessageHandler {
	/**
	 * @public
	 * @constructor
	 * To create an instance of DummyHTTPMessageHandler
	 * @param {Response[]} [responses = []] - The array of response objects
	 * @returns An instance of DummyHTTPMessageHandler
	 */
	constructor(responses = []) {
		this.responses = responses;
	}
	/**
	 * @public
	 * To set the array of responses
	 * @param {Response[]} response - The array of responses
	 * @returns Nothing
	 */
	setResponses(responses) {
		this.responses = responses;
	}
	/**
	 * @public
	 * @async
	 * To execute the current middleware
	 * @param {Context} context - The request context object
	 * @returns A promise that resolves to nothing
	 */
	execute(context) {
		return tslib_1.__awaiter(this, void 0, void 0, function*() {
			context.response = this.responses.shift();
			return;
		});
	}
}
//# sourceMappingURL=DummyHTTPMessageHandler.js.map
