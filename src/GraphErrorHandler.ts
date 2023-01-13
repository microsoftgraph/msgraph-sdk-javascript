/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module GraphErrorHandler
 */

import { GraphError } from "./GraphError";
import { GraphRequestCallback } from "./IGraphRequestCallback";

/**
 * @interface
 * Signature for the json represent of the error response from the Graph API
 * https://docs.microsoft.com/en-us/graph/errors
 * @property {[key: string] : string | number} - The Key value pair
 */
interface GraphAPIErrorResponse {
	error: {
		code: string;
		message: string;
		innerError: any;
	};
}

/**
 * @class
 * Class for GraphErrorHandler
 */

export class GraphErrorHandler {
	/**
	 * @private
	 * @static
	 * Populates the GraphError instance with Error instance values
	 * @param {Error} error - The error returned by graph service or some native error
	 * @param {number} [statusCode] - The status code of the response
	 * @returns The GraphError instance
	 */
	private static constructError(error: Error, statusCode?: number, rawResponse?: Response): GraphError {
		const gError = new GraphError(statusCode, "", error);
		if (error.name !== undefined) {
			gError.code = error.name;
		}
		gError.body = error.toString();
		gError.date = new Date();
		gError.headers = rawResponse?.headers;
		return gError;
	}

	/**
	 * @private
	 * @static
	 * @async
	 * Populates the GraphError instance from the Error returned by graph service
	 * @param {GraphAPIErrorResponse} graphError - The error possibly returned by graph service or some native error
	 * @param {number} statusCode - The status code of the response
	 * @returns A promise that resolves to GraphError instance
	 *
	 * Example error for https://graph.microsoft.com/v1.0/me/events?$top=3&$search=foo
	 * {
	 *      "error": {
	 *          "code": "SearchEvents",
	 *          "message": "The parameter $search is not currently supported on the Events resource.",
	 *          "innerError": {
	 *              "request-id": "b31c83fd-944c-4663-aa50-5d9ceb367e19",
	 *              "date": "2016-11-17T18:37:45"
	 *          }
	 *      }
	 *  }
	 */
	private static constructErrorFromResponse(graphError: GraphAPIErrorResponse, statusCode: number, rawResponse?: Response): GraphError {
		const error = graphError.error;
		const gError = new GraphError(statusCode, error.message);
		gError.code = error.code;
		if (error.innerError !== undefined) {
			gError.requestId = error.innerError["request-id"];
			gError.date = new Date(error.innerError.date);
		}

		gError.body = JSON.stringify(error);
		gError.headers = rawResponse?.headers;

		return gError;
	}

	/**
	 * @public
	 * @static
	 * @async
	 * To get the GraphError object
	 * Reference - https://docs.microsoft.com/en-us/graph/errors
	 * @param {any} [error = null] - The error returned by graph service or some native error
	 * @param {number} [statusCode = -1] - The status code of the response
	 * @param {GraphRequestCallback} [callback] - The graph request callback function
	 * @returns A promise that resolves to GraphError instance
	 */
	public static async getError(error: any = null, statusCode = -1, callback?: GraphRequestCallback, rawResponse?: Response): Promise<GraphError> {
		let gError: GraphError;
		if (error && error.error) {
			gError = GraphErrorHandler.constructErrorFromResponse(error, statusCode, rawResponse);
		} else if (error instanceof Error) {
			gError = GraphErrorHandler.constructError(error, statusCode, rawResponse);
		} else {
			gError = new GraphError(statusCode);
			gError.body = error; // if a custom error is passed which is not instance of Error object or a graph API response
		}
		if (typeof callback === "function") {
			callback(gError, null);
		} else {
			return gError;
		}
	}
}
