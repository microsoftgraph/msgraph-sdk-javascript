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

export class GraphError {
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
	 * A member holding error message
	 */
	public message: string | null;

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
	 * @returns An instance of GraphError
	 */
	public constructor(statusCode: number = -1) {
		this.statusCode = statusCode;
		this.code = null;
		this.message = null;
		this.requestId = null;
		this.date = new Date();
		this.body = null;
	}
}
