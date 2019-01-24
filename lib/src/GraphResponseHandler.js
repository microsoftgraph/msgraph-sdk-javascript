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
    function GraphResponseHandler() {
    }
    /**
     * @private
     * @static
     * To parse Document response
     * @param {Response} rawResponse - The response object
     * @param {DocumentType} type - The type to which the document needs to be parsed
     * @returns A promise that resolves to a document content
     */
    GraphResponseHandler.parseDocumentResponse = function (rawResponse, type) {
        if (typeof DOMParser !== "undefined") {
            return new Promise(function (resolve, reject) {
                rawResponse.text().then(function (xmlString) {
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
            return Promise.resolve(rawResponse.body);
        }
    };
    /**
     * @private
     * @static
     * @async
     * To convert the native Response to response content
     * @param {Response} rawResponse - The response object
     * @param {ResponseType} [responseType] - The response type value
     * @returns A promise that resolves to the converted response content
     */
    GraphResponseHandler.convertResponse = function (rawResponse, responseType) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var responseValue, _a, contentType, mimeType;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (responseType === ResponseType_1.ResponseType.RAW) {
                            return [2 /*return*/, Promise.resolve(rawResponse)];
                        }
                        if (rawResponse.status === 204) { //NO CONTENT
                            return [2 /*return*/, Promise.resolve()];
                        }
                        _a = responseType;
                        switch (_a) {
                            case ResponseType_1.ResponseType.ARRAYBUFFER: return [3 /*break*/, 1];
                            case ResponseType_1.ResponseType.BLOB: return [3 /*break*/, 3];
                            case ResponseType_1.ResponseType.DOCUMENT: return [3 /*break*/, 5];
                            case ResponseType_1.ResponseType.JSON: return [3 /*break*/, 7];
                            case ResponseType_1.ResponseType.STREAM: return [3 /*break*/, 9];
                            case ResponseType_1.ResponseType.TEXT: return [3 /*break*/, 11];
                        }
                        return [3 /*break*/, 13];
                    case 1: return [4 /*yield*/, rawResponse.arrayBuffer()];
                    case 2:
                        responseValue = _b.sent();
                        return [3 /*break*/, 20];
                    case 3: return [4 /*yield*/, rawResponse.blob()];
                    case 4:
                        responseValue = _b.sent();
                        return [3 /*break*/, 20];
                    case 5: return [4 /*yield*/, GraphResponseHandler.parseDocumentResponse(rawResponse, DocumentType.TEXT_XML)];
                    case 6:
                        responseValue = _b.sent();
                        return [3 /*break*/, 20];
                    case 7: return [4 /*yield*/, rawResponse.json()];
                    case 8:
                        responseValue = _b.sent();
                        return [3 /*break*/, 20];
                    case 9: return [4 /*yield*/, Promise.resolve(rawResponse.body)];
                    case 10:
                        responseValue = _b.sent();
                        return [3 /*break*/, 20];
                    case 11: return [4 /*yield*/, rawResponse.text()];
                    case 12:
                        responseValue = _b.sent();
                        return [3 /*break*/, 20];
                    case 13:
                        contentType = rawResponse.headers.get("Content-type");
                        if (!(contentType !== null)) return [3 /*break*/, 18];
                        mimeType = contentType.split(";")[0];
                        if (!GraphResponseHandler.DocumentTypes.includes(mimeType)) return [3 /*break*/, 15];
                        return [4 /*yield*/, GraphResponseHandler.parseDocumentResponse(rawResponse, mimeType)];
                    case 14:
                        responseValue = _b.sent();
                        return [3 /*break*/, 17];
                    case 15: return [4 /*yield*/, rawResponse.json()];
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
                        responseValue = Promise.resolve(rawResponse.body);
                        _b.label = 19;
                    case 19: return [3 /*break*/, 20];
                    case 20: return [2 /*return*/, responseValue];
                }
            });
        });
    };
    /**
     * @public
     * @static
     * @async
     * To get the parsed response
     * @param {Response} rawResponse - The response object
     * @param {ResponseType} [responseType] - The response type value
     * @param {GraphRequestCallback} [callback] - The graph request callback function
     * @returns The parsed response
     */
    GraphResponseHandler.getResponse = function (rawResponse, responseType, callback) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, GraphResponseHandler.convertResponse(rawResponse, responseType)];
                    case 1:
                        response = _a.sent();
                        if (rawResponse.ok) { // Status Code 2XX
                            if (typeof callback === "function") {
                                callback(null, response, rawResponse);
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
     * @private
     * @static
     * A member holding array of document types
     */
    GraphResponseHandler.DocumentTypes = ["text/html", "text/xml", "application/xml", "application/xhtml+xml"];
    return GraphResponseHandler;
}());
exports.GraphResponseHandler = GraphResponseHandler;
//# sourceMappingURL=GraphResponseHandler.js.map