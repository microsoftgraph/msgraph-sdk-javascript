/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * @class
 * Class that handles BatchResponseContent
 */
export class BatchResponseContent {
	/**
	 * @public
	 * @constructor
	 * Creates the BatchResponseContent instance
	 * @param {BatchResponseBody} response - The response body returned for batch request from server
	 * @returns An instance of a BatchResponseContent
	 */
	constructor(response) {
		this.responses = new Map();
		this.update(response);
	}
	/**
	 * @private
	 * Creates native Response object from the json representation of it.
	 * @param {KeyValuePairObject} responseJSON - The response json value
	 * @returns The Response Object instance
	 */
	createResponseObject(responseJSON) {
		const body = responseJSON.body;
		const options = {};
		options.status = responseJSON.status;
		if (responseJSON.statusText !== undefined) {
			options.statusText = responseJSON.statusText;
		}
		options.headers = responseJSON.headers;
		if (options.headers !== undefined && options.headers["Content-Type"] !== undefined) {
			if (options.headers["Content-Type"].split(";")[0] === "application/json") {
				const bodyString = JSON.stringify(body);
				return new Response(bodyString, options);
			}
		}
		return new Response(body, options);
	}
	/**
	 * @public
	 * Updates the Batch response content instance with given responses.
	 * @param {BatchResponseBody} response - The response json representing batch response message
	 * @returns Nothing
	 */
	update(response) {
		this.nextLink = response["@odata.nextLink"];
		const responses = response.responses;
		for (let i = 0, l = responses.length; i < l; i++) {
			this.responses.set(responses[i].id, this.createResponseObject(responses[i]));
		}
	}
	/**
	 * @public
	 * To get the response of a request for a given request id
	 * @param {string} requestId - The request id value
	 * @returns The Response object instance for the particular request
	 */
	getResponseById(requestId) {
		return this.responses.get(requestId);
	}
	/**
	 * @public
	 * To get all the responses of the batch request
	 * @returns The Map of id and Response objects
	 */
	getResponses() {
		return this.responses;
	}
	/**
	 * @public
	 * To get the iterator for the responses
	 * @returns The Iterable generator for the response objects
	 */
	*getResponsesIterator() {
		const iterator = this.responses.entries();
		let cur = iterator.next();
		while (!cur.done) {
			yield cur.value;
			cur = iterator.next();
		}
	}
}
//# sourceMappingURL=BatchResponseContent.js.map
