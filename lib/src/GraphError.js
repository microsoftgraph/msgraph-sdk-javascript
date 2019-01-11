"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
var GraphError = /** @class */ (function () {
    /**
     * @constructor
     * Creates an instance of GraphError
     * @param {number} [statusCode = -1] - The status code of the error
     * @returns An instance of GraphError
     */
    function GraphError(statusCode) {
        if (statusCode === void 0) { statusCode = -1; }
        var self = this;
        self.statusCode = statusCode;
        self.code = null;
        self.message = null;
        self.requestId = null;
        self.date = new Date();
        self.body = null;
    }
    return GraphError;
}());
exports.GraphError = GraphError;
//# sourceMappingURL=GraphError.js.map