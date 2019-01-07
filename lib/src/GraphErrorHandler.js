"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module GraphErrorHandler
 */
var GraphError_1 = require("./GraphError");
/**
 * @class
 * Class for GraphErrorHandler
 */
var GraphErrorHandler = /** @class */ (function () {
    /**
     * @constructor
     * Creates an instance of GraphErrorHandler
     * @param {any} [error = null] - The error returned by graph service or some native error
     * @param {number} [statusCode = -1] - The status code of the response
     * @param {GraphRequestCallback} [callback] - The graph request callback function
     * @returns An instance of GraphErrorHandler
     */
    function GraphErrorHandler(error, statusCode, callback) {
        if (error === void 0) { error = null; }
        if (statusCode === void 0) { statusCode = -1; }
        var self = this;
        self.error = error;
        self.statusCode = statusCode;
        self.callback = callback;
    }
    /**
     * @private
     * Populates the GraphError instance with Error instance values
     * @returns The GraphError instance
     */
    GraphErrorHandler.prototype.constructError = function () {
        var self = this, error = self.error, gError = new GraphError_1.GraphError(self.statusCode);
        if (error.name !== undefined) {
            gError.code = error.name;
        }
        gError.body = error.toString();
        gError.message = error.message;
        gError.date = new Date();
        return gError;
    };
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
    GraphErrorHandler.prototype.constructErrorFromResponse = function () {
        var self = this, error = self.error.error, gError = new GraphError_1.GraphError(self.statusCode);
        gError.code = error.code;
        gError.message = error.message;
        if (error.innerError !== undefined) {
            gError.requestId = error.innerError["request-id"];
            gError.date = new Date(error.innerError.date);
        }
        try {
            gError.body = JSON.stringify(error);
        }
        catch (error) {
        }
        return gError;
    };
    /**
     * @public
     * To get the GraphError object
     * @returns The GraphError instance
     */
    GraphErrorHandler.prototype.getError = function () {
        var self = this, error = self.error, gError;
        if (error && error.error) {
            gError = self.constructErrorFromResponse();
        }
        else if (error instanceof Error) {
            gError = self.constructError();
        }
        else {
            gError = new GraphError_1.GraphError(self.statusCode);
        }
        if (typeof self.callback === "function") {
            self.callback(gError, null);
        }
        else {
            return gError;
        }
    };
    return GraphErrorHandler;
}());
exports.GraphErrorHandler = GraphErrorHandler;
//# sourceMappingURL=GraphErrorHandler.js.map