"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * @class
 * Class that handles BatchResponseContent
 */
var BatchResponseContent = /** @class */ (function () {
    /**
     * @constructor
     * Creates the BatchResponseContent instance
     * @param {BatchResponseBody} response - The response body returned for batch request from server
     * @returns An instance of a BatchResponseContent
     */
    function BatchResponseContent(response) {
        var self = this;
        self.responses = new Map();
        self.update(response);
    }
    /**
     * @public
     * Updates the Batch response content instance with given responses.
     * @param {BatchResponseBody} response - The response json representing batch response message
     * @returns Nothing
     */
    BatchResponseContent.prototype.update = function (response) {
        var self = this;
        self.nextLink = response["@nextLink"];
        var responses = response.responses;
        for (var i = 0, l = responses.length; i < l; i++) {
            self.responses.set(responses[i].id, self.createResponseObject(responses[i]));
        }
    };
    /**
     * @private
     * Creates native Response object from the json representation of it.
     * @param {KeyValuePairObject} responseJSON - The response json value
     * @returns The Response Object instance
     */
    BatchResponseContent.prototype.createResponseObject = function (responseJSON) {
        var body = responseJSON.body, options = {};
        options.status = responseJSON.status;
        if (responseJSON.statusText !== undefined) {
            options.statusText = responseJSON.statusText;
        }
        options.headers = responseJSON.headers;
        return new Response(body, options);
    };
    /**
     * @public
     * To get the response of a request for a given request id
     * @param {string} requestId - The request id value
     * @returns The Response object instance for the particular request
     */
    BatchResponseContent.prototype.getResponseById = function (requestId) {
        return this.responses.get(requestId);
    };
    /**
     * @public
     * To get all the responses of the batch request
     * @returns The Map of id and Response objects
     */
    BatchResponseContent.prototype.getResponses = function () {
        return this.responses;
    };
    /**
     * @public
     * To get the iterator for the responses
     * @returns The Iterable generator for the response objects
     */
    BatchResponseContent.prototype.getResponsesIterator = function () {
        var self, iterator, cur;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    self = this, iterator = self.responses.entries(), cur = iterator.next();
                    _a.label = 1;
                case 1:
                    if (!!cur.done) return [3 /*break*/, 3];
                    return [4 /*yield*/, cur.value];
                case 2:
                    _a.sent();
                    cur = iterator.next();
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    };
    return BatchResponseContent;
}());
exports.BatchResponseContent = BatchResponseContent;
//# sourceMappingURL=BatchResponseContent.js.map