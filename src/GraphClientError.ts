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
 * Create GraphClientError object to handle client-side errors
 * encountered within the JavaScript Client SDK.
 * Whereas GraphError Class should be used to handle errors in the response from the Graph API.
 */

export class GraphClientError extends Error {
	/**
	 * @public
	 * A custom error. This property should set be when the error is not of instanceOf Error/GraphClientError.
	 * Example =
	 * const client = MicrosoftGraph.Client.init({
	 * 		defaultVersion: "v1.0",
	 *  	authProvider: (done) => { done({TokenError:"AccessToken cannot be null"}, "<ACCESS_TOKEN>");
	 * });
	 */
	public customError?: any;

	/**
	 * @public
	 * @static
	 * @async
	 * To set the GraphClientError object
	 * @param {any} error - The error returned encountered by the Graph JavaScript Client SDK while processing request
	 * @returns GraphClientError object set to the error passed
	 */
	public static setGraphClientError(error: any): GraphClientError {
		let graphClientError: GraphClientError;
		if (error instanceof Error) {
			graphClientError = error;
		} else {
			graphClientError = new GraphClientError();
			graphClientError.customError = error;
		}
		return graphClientError;
	}

	/**
	 * @public
	 * @constructor
	 * Creates an instance of GraphClientError
	 * @param {string} message? - Error message
	 * @returns An instance of GraphClientError
	 */
	public constructor(message?: string) {
		super(message);
		Object.setPrototypeOf(this, GraphClientError.prototype);
	}
}
