"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ResponseType_1 = require("./ResponseType");
/**
 * @enum
 * Enum for document types
 * @property {string} TEXT_HTML - The text/html content type
 * @property {string} TEXT_XML - The text/xml content type
 * @property {string} APPLICATION_XML - The application/xml content type
 * @property {string} APPLICATION_XHTML - The application/xhml+xml content type
 */
var DocumentType;
(function (DocumentType) {
    DocumentType["TEXT_HTML"] = "text/html";
    DocumentType["TEXT_XML"] = "text/xml";
    DocumentType["APPLICATION_XML"] = "application/xml";
    DocumentType["APPLICATION_XHTML"] = "application/xhtml+xml";
})(DocumentType || (DocumentType = {}));
/**
 * @class
 * Class for GraphResponseHandler
 */
var GraphResponseHandler = /** @class */ (function () {
    /**
     * @constructor
     * Creates an instance of GraphResponseHandler
     * @param {Response} rawResponse - The response object
     * @param {ResponseType} [responseType] - The response type value
     * @param {GraphRequestCallback} [callback] - The graph request callback function
     * @returns An instance of GraphResponseHandler
     */
    function GraphResponseHandler(rawResponse, responseType, callback) {
        var self = this;
        self.rawResponse = rawResponse;
        self.responseType = responseType;
        self.callback = callback;
        if (GraphResponseHandler.DocumentTypes === undefined) {
            GraphResponseHandler.DocumentTypes = Object.keys(DocumentType).map(function (k) { return DocumentType[k]; });
        }
    }
    /**
     * @private
     * To parse Document response
     * @param {DocumentType} type - The type to which the document needs to be parsed
     * @returns A promise that resolves to a document content
     */
    GraphResponseHandler.prototype.parseDocumentResponse = function (type) {
        var response = this.rawResponse;
        if (typeof DOMParser !== "undefined") {
            return new Promise(function (resolve, reject) {
                response.text().then(function (xmlString) {
                    try {
                        var parser = new DOMParser(), xmlDoc = parser.parseFromString(xmlString, type);
                        resolve(xmlDoc);
                    }
                    catch (error) {
                        reject(error);
                    }
                });
            });
        }
        else {
            return Promise.resolve(response.body);
        }
    };
    /**
     * @private
     * @async
     * To convert the native Response to response content
     * @returns A promise that resolves to the converted response content
     */
    GraphResponseHandler.prototype.convertResponse = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var self, response, type, responseValue, _a, contentType, mimeType;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        self = this, response = self.rawResponse, type = self.responseType;
                        if (response.status === 204) { //NO CONTENT
                            return [2 /*return*/, Promise.resolve()];
                        }
                        _a = type;
                        switch (_a) {
                            case ResponseType_1.ResponseType.ARRAYBUFFER: return [3 /*break*/, 1];
                            case ResponseType_1.ResponseType.BLOB: return [3 /*break*/, 3];
                            case ResponseType_1.ResponseType.DOCUMENT: return [3 /*break*/, 5];
                            case ResponseType_1.ResponseType.JSON: return [3 /*break*/, 7];
                            case ResponseType_1.ResponseType.STREAM: return [3 /*break*/, 9];
                            case ResponseType_1.ResponseType.TEXT: return [3 /*break*/, 11];
                        }
                        return [3 /*break*/, 13];
                    case 1: return [4 /*yield*/, response.arrayBuffer()];
                    case 2:
                        responseValue = _b.sent();
                        return [3 /*break*/, 20];
                    case 3: return [4 /*yield*/, response.blob()];
                    case 4:
                        responseValue = _b.sent();
                        return [3 /*break*/, 20];
                    case 5: return [4 /*yield*/, self.parseDocumentResponse(DocumentType.TEXT_XML)];
                    case 6:
                        responseValue = _b.sent();
                        return [3 /*break*/, 20];
                    case 7: return [4 /*yield*/, response.json()];
                    case 8:
                        responseValue = _b.sent();
                        return [3 /*break*/, 20];
                    case 9: return [4 /*yield*/, Promise.resolve(response.body)];
                    case 10:
                        responseValue = _b.sent();
                        return [3 /*break*/, 20];
                    case 11: return [4 /*yield*/, response.text()];
                    case 12:
                        responseValue = _b.sent();
                        return [3 /*break*/, 20];
                    case 13:
                        contentType = response.headers.get("Content-type");
                        if (!(contentType !== null)) return [3 /*break*/, 18];
                        mimeType = contentType.split(";")[0];
                        if (!GraphResponseHandler.DocumentTypes.includes(mimeType)) return [3 /*break*/, 15];
                        return [4 /*yield*/, self.parseDocumentResponse(mimeType)];
                    case 14:
                        responseValue = _b.sent();
                        return [3 /*break*/, 17];
                    case 15: return [4 /*yield*/, response.json()];
                    case 16:
                        responseValue = _b.sent();
                        _b.label = 17;
                    case 17: return [3 /*break*/, 19];
                    case 18:
                        /**
                         * RFC specification {@link https://tools.ietf.org/html/rfc7231#section-3.1.1.5} says:
                         *  A sender that generates a message containing a payload body SHOULD
                         *  generate a Content-Type header field in that message unless the
                         *  intended media type of the enclosed representation is unknown to the
                         *  sender.  If a Content-Type header field is not present, the recipient
                         *  MAY either assume a media type of "application/octet-stream"
                         *  ([RFC2046], Section 4.5.1) or examine the data to determine its type.
                         *
                         *  So assuming it as a stream type so returning the body.
                         */
                        responseValue = Promise.resolve(response.body);
                        _b.label = 19;
                    case 19: return [3 /*break*/, 20];
                    case 20: return [2 /*return*/, responseValue];
                }
            });
        });
    };
    /**
     * @public
     * @async
     * To get the parsed response
     * @returns The parsed response
     */
    GraphResponseHandler.prototype.getResponse = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var self_1, rawResponse, response, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        self_1 = this, rawResponse = self_1.rawResponse;
                        return [4 /*yield*/, self_1.convertResponse()];
                    case 1:
                        response = _a.sent();
                        if (rawResponse.ok) { // Status Code 2XX
                            if (typeof self_1.callback === "function") {
                                self_1.callback(null, response, rawResponse);
                            }
                            else {
                                return [2 /*return*/, response];
                            }
                        }
                        else { //NOT OK Response
                            throw response;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @public
     * To get the raw response
     * @return The raw response
     */
    GraphResponseHandler.prototype.getRawResponse = function () {
        return this.rawResponse;
    };
    return GraphResponseHandler;
}());
exports.GraphResponseHandler = GraphResponseHandler;
//# sourceMappingURL=GraphResponseHandler.js.map