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
 * @class
 * Class for GraphErrorHandler
 */
export declare class GraphErrorHandler {
    /**
     * @private
     * A member holding the error object
     */
    private error;
    /**
     * @private
     * A member holding the status code of the response
     */
    private statusCode;
    /**
     * @private
     * A member holding the graph request callback
     */
    private callback;
    /**
     * @constructor
     * Creates an instance of GraphErrorHandler
     * @param {any} [error = null] - The error returned by graph service or some native error
     * @param {number} [statusCode = -1] - The status code of the response
     * @param {GraphRequestCallback} [callback] - The graph request callback function
     * @returns An instance of GraphErrorHandler
     */
    constructor(error?: any, statusCode?: number, callback?: GraphRequestCallback);
    /**
     * @private
     * Populates the GraphError instance with Error instance values
     * @returns The GraphError instance
     */
    private constructError;
    /**
     * @private
     * Populates the GraphError instance from the Error returned by graph service
     * @returns The GraphError instance
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
    private constructErrorFromResponse;
    /**
     * @public
     * To get the GraphError object
     * @returns The GraphError instance
     */
    getError(): GraphError;
}
