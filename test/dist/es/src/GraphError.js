/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * @module GraphError
 */
/**
 * @class
 * Class for GraphError
 * @NOTE: This is NOT what is returned from the Graph
 * GraphError is created from parsing JSON errors returned from the graph
 * Some fields are renamed ie, "request-id" => requestId so you can use dot notation
 */
export class GraphError extends Error {
	/**
	 * @public
	 * @constructor
	 * Creates an instance of GraphError
	 * @param {number} [statusCode = -1] - The status code of the error
	 * @returns An instance of GraphError
	 */
	constructor(statusCode = -1, message, baseError) {
		super(message || (baseError && baseError.message));
		this.statusCode = statusCode;
		this.code = null;
		this.requestId = null;
		this.date = new Date();
		this.body = null;
		this.stack = baseError ? baseError.stack : this.stack;
	}
}
//# sourceMappingURL=GraphError.js.map
