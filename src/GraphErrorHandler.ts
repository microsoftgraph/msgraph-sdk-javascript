
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

export class GraphErrorHandler {

    /**
     * @private
     * A member holding the error object
     */
    private error: any;

    /**
     * @private
     * A member holding the status code of the response
     */
    private statusCode: number;

    /**
     * @private
     * A member holding the graph request callback
     */
    private callback: GraphRequestCallback;

    /**
     * @constructor
     * Creates an instance of GraphErrorHandler
     * @param {any} [error = null] - The error returned by graph service or some native error
     * @param {number} [statusCode = -1] - The status code of the response
     * @param {GraphRequestCallback} [callback] - The graph request callback function
     * @returns An instance of GraphErrorHandler
     */
    constructor(error: any = null, statusCode: number = -1, callback?: GraphRequestCallback) {
        let self = this;
        self.error = error;
        self.statusCode = statusCode;
        self.callback = callback;
    }

    /**
     * @private
     * Populates the GraphError instance with Error instance values
     * @returns The GraphError instance
     */
    private constructError(): GraphError {
        let self = this,
            error = self.error,
            gError = new GraphError(self.statusCode);
        if (error.name !== undefined) {
            gError.code = error.name;
        }
        gError.body = error.toString();
        gError.message = error.message;
        gError.date = new Date();
        return gError;
    }

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
    private constructErrorFromResponse(): GraphError {
        let self = this,
            error = self.error.error,
            gError = new GraphError(self.statusCode);
        gError.code = error.code;
        gError.message = error.message;
        if (error.innerError !== undefined) {
            gError.requestId = error.innerError["request-id"];
            gError.date = new Date(error.innerError.date);
        }
        try {
            gError.body = JSON.stringify(error);
        } catch (error) {

        }
        return gError;
    }

    /**
     * @public
     * To get the GraphError object
     * @returns The GraphError instance
     */
    public getError(): GraphError {
        let self = this,
            error = self.error,
            gError: GraphError;
        if (error && error.error) {
            gError = self.constructErrorFromResponse();
        } else if (error instanceof Error) {
            gError = self.constructError();
        } else {
            gError = new GraphError(self.statusCode);
        }
        if (typeof self.callback === "function") {
            self.callback(gError, null);
        } else {
            return gError;
        }
    }
}

