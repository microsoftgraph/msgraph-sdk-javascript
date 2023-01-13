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
	 * A member holding status code of the error
	 */
	public statusCode: number;

	/**
	 * @public
	 * A member holding code i.e name of the error
	 */
	public code: string | null;

	/**
	 * @public
	 * A member holding request-id i.e identifier of the request
	 */
	public requestId: string | null;

	/**
	 * @public
	 * A member holding processed date and time of the request
	 */
	public date: Date;

    public headers?: Headers;

	/**
	 * @public
	 * A member holding original error response by the graph service
	 */
	public body: any;

	/**
	 * @public
	 * @constructor
	 * Creates an instance of GraphError
	 * @param {number} [statusCode = -1] - The status code of the error
	 * @param {string} [message] - The message of the error
	 * @param {Error} [baseError] - The base error
	 * @returns An instance of GraphError
	 */
	public constructor(statusCode = -1, message?: string, baseError?: Error) {
		super(message || (baseError && baseError.message));
		// https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
		Object.setPrototypeOf(this, GraphError.prototype);
		this.statusCode = statusCode;
		this.code = null;
		this.requestId = null;
		this.date = new Date();
		this.body = null;
		this.stack = baseError ? baseError.stack : this.stack;
	}
}
