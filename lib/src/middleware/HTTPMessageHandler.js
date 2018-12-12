"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseType_1 = require("../ResponseType");
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
 * Class for HTTPMessageHandler
 * @extends Middleware
 */
var HTTPMessageHandler = /** @class */ (function () {
    /**
     * @constructor
     * Creates an instance of GraphResponse
     * @param {Response} response - The response object
     * @returns An instance of GraphResponse
     */
    function HTTPMessageHandler() {
        if (HTTPMessageHandler.DocumentTypes === undefined) {
            HTTPMessageHandler.DocumentTypes = Object.keys(DocumentType).map(function (k) { return DocumentType[k]; });
        }
    }
    /**
     * @private
     * To parse Document response
     * @param {Response} response - The response object
     * @param {ResponseType} type - The type to which the document needs to be parsed
     * @returns A promise that resolves to a document content
     */
    HTTPMessageHandler.prototype.parseDocumentResponse = function (response, type) {
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
     * @param {Response} response - The response object
     * @param {ResponseType} type - The type to which the response needs to be converted
     * @returns A promise that resolves to the converted response content
     */
    HTTPMessageHandler.prototype.convertResponse = function (response, type) {
        return __awaiter(this, void 0, void 0, function () {
            var self, responseValue, contentType, mimeType;
            return __generator(this, function (_a) {
                if (response.status === 204) { //NO CONTENT
                    return [2 /*return*/, Promise.resolve()];
                }
                self = this;
                switch (type) {
                    case ResponseType_1.ResponseType.ARRAYBUFFER:
                        responseValue = response.arrayBuffer();
                        break;
                    case ResponseType_1.ResponseType.BLOB:
                        responseValue = response.blob();
                        break;
                    case ResponseType_1.ResponseType.DOCUMENT:
                        responseValue = self.parseDocumentResponse(response, DocumentType.TEXT_XML);
                        break;
                    case ResponseType_1.ResponseType.JSON:
                        responseValue = response.json();
                        break;
                    case ResponseType_1.ResponseType.STREAM:
                        responseValue = Promise.resolve(response.body);
                        break;
                    case ResponseType_1.ResponseType.TEXT:
                        responseValue = response.text();
                        break;
                    default:
                        contentType = response.headers.get("Content-type");
                        if (contentType !== null) {
                            mimeType = contentType.split(";")[0];
                            if (HTTPMessageHandler.DocumentTypes.includes(mimeType)) {
                                responseValue = self.parseDocumentResponse(response, mimeType);
                            }
                            else {
                                responseValue = response.json();
                            }
                        }
                        else {
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
                        }
                        break;
                }
                return [2 /*return*/, responseValue];
            });
        });
    };
    /**
     * @private
     * @param {number} [statusCode = -1] - The status code of the response
     * @returns The GraphError object
     */
    HTTPMessageHandler.prototype.defaultError = function (statusCode) {
        if (statusCode === void 0) { statusCode = -1; }
        return {
            statusCode: statusCode,
            code: null,
            message: null,
            requestId: null,
            date: new Date(),
            body: null
        };
    };
    /**
     * @private
     * @param {Error} error - The error object
     * @returns The GraphError object
     */
    HTTPMessageHandler.prototype.buildError = function (error) {
        var gError = this.defaultError();
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
     * @param {any} response - The error data object
     * @param {number} statusCode - The status code of the response
     * @returns The GraphError object
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
    HTTPMessageHandler.prototype.buildErrorFromResponse = function (error, statusCode) {
        return {
            statusCode: statusCode,
            code: error.code,
            message: error.message,
            requestId: (error.innerError !== undefined) ? error.innerError["request-id"] : "",
            date: (error.innerError !== undefined) ? new Date(error.innerError.date) : new Date(),
            body: error
        };
    };
    /**
     * @public
     * @async
     * To execute the current middleware
     * @param {Context} context - The request context object
     * @returns A promise that resolves to nothing
     */
    HTTPMessageHandler.prototype.execute = function (context) {
        return __awaiter(this, void 0, void 0, function () {
            var self_1, optionsHeaders, options, middlewareOptionsHeaders, rawResponse, responseType, response, error_1, self_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        self_1 = this, optionsHeaders = Object.assign({}, context.options.headers), options = Object.assign({}, context.options);
                        if (context.middlewareOptions !== undefined && context.middlewareOptions.requestOptions !== undefined) {
                            middlewareOptionsHeaders = Object.assign({}, context.middlewareOptions.requestOptions.headers);
                            Object.assign(options, context.middlewareOptions.requestOptions);
                            Object.assign(options.headers, optionsHeaders, middlewareOptionsHeaders);
                        }
                        return [4 /*yield*/, fetch(context.request, options)];
                    case 1:
                        rawResponse = _a.sent();
                        context.rawResponse = rawResponse;
                        responseType = void 0;
                        if (context.middlewareOptions !== undefined) {
                            responseType = context.middlewareOptions.responseType;
                        }
                        return [4 /*yield*/, this.convertResponse(rawResponse, responseType)];
                    case 2:
                        response = _a.sent();
                        if (rawResponse.ok) { // Status Code 2XX
                            context.response = response;
                        }
                        else { // NOT OK Response
                            if (response && response.error) { // If the error is passed in body
                                throw self_1.buildErrorFromResponse(response.error, rawResponse.status);
                            }
                            else {
                                throw self_1.defaultError(rawResponse.status);
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        self_2 = this;
                        if (error_1.requestId !== undefined) {
                            throw error_1;
                        }
                        else if (error_1 instanceof Error) {
                            throw self_2.buildError(error_1);
                        }
                        else {
                            throw self_2.defaultError();
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return HTTPMessageHandler;
}());
exports.HTTPMessageHandler = HTTPMessageHandler;
//# sourceMappingURL=HTTPMessageHandler.js.map