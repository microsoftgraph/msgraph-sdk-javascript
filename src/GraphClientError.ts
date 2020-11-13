/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module GraphClientError
 */

/**
 * @class
 * This class is to handle errors that within the JavaScript Client SDK
 * unlike GraphError Class which handles errors in response from the Graph API.
 */

export class GraphClientError extends Error {
	/**
	 * @public
	 * A member holding response by the graph service
	 */
	public body?: any;

	/**
	 * @public
	 * @static
	 * @async
	 * To get the GraphError object
	 * @param {any} [error = null] - The error returned encountered by the Graph JavaScript Client
	 * SDK while processing request
	 * @returns A promise that resolves to GraphError instance
	 */
	public static async getError(error: any = null): Promise<GraphClientError> {
		let graphClientError: GraphClientError;
		if (typeof Error !== "undefined" && error instanceof Error) {
			graphClientError = error;
		} else if (error) {
			graphClientError = new GraphClientError();
			graphClientError.body = error;
		}
		return graphClientError;
	}

	public constructor(message?: string, baseError?: Error) {
		super(message || (baseError && baseError.message));
		this.stack = baseError ? baseError.stack : this.stack;
	}
}
