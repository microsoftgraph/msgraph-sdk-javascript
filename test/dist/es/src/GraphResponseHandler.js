/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import * as tslib_1 from "tslib";
import { ResponseType } from "./ResponseType";
/**
 * @enum
 * Enum for document types
 * @property {string} TEXT_HTML - The text/html content type
 * @property {string} TEXT_XML - The text/xml content type
 * @property {string} APPLICATION_XML - The application/xml content type
 * @property {string} APPLICATION_XHTML - The application/xhml+xml content type
 */
export var DocumentType;
(function(DocumentType) {
	DocumentType["TEXT_HTML"] = "text/html";
	DocumentType["TEXT_XML"] = "text/xml";
	DocumentType["APPLICATION_XML"] = "application/xml";
	DocumentType["APPLICATION_XHTML"] = "application/xhtml+xml";
})(DocumentType || (DocumentType = {}));
/**
 * @enum
 * Enum for Content types
 * @property {string} TEXT_PLAIN - The text/plain content type
 * @property {string} APPLICATION_JSON - The application/json content type
 */
var ContentType;
(function(ContentType) {
	ContentType["TEXT_PLAIN"] = "text/plain";
	ContentType["APPLICATION_JSON"] = "application/json";
})(ContentType || (ContentType = {}));
/**
 * @enum
 * Enum for Content type regex
 * @property {string} DOCUMENT - The regex to match document content types
 * @property {string} IMAGE - The regex to match image content types
 */
var ContentTypeRegexStr;
(function(ContentTypeRegexStr) {
	ContentTypeRegexStr["DOCUMENT"] = "^(text\\/(html|xml))|(application\\/(xml|xhtml\\+xml))$";
	ContentTypeRegexStr["IMAGE"] = "^image\\/.+";
})(ContentTypeRegexStr || (ContentTypeRegexStr = {}));
/**
 * @class
 * Class for GraphResponseHandler
 */
export class GraphResponseHandler {
	/**
	 * @private
	 * @static
	 * To parse Document response
	 * @param {Response} rawResponse - The response object
	 * @param {DocumentType} type - The type to which the document needs to be parsed
	 * @returns A promise that resolves to a document content
	 */
	static parseDocumentResponse(rawResponse, type) {
		try {
			if (typeof DOMParser !== "undefined") {
				return new Promise((resolve, reject) => {
					rawResponse.text().then((xmlString) => {
						try {
							const parser = new DOMParser();
							const xmlDoc = parser.parseFromString(xmlString, type);
							resolve(xmlDoc);
						} catch (error) {
							reject(error);
						}
					});
				});
			} else {
				return Promise.resolve(rawResponse.body);
			}
		} catch (error) {
			throw error;
		}
	}
	/**
	 * @private
	 * @static
	 * @async
	 * To convert the native Response to response content
	 * @param {Response} rawResponse - The response object
	 * @param {ResponseType} [responseType] - The response type value
	 * @returns A promise that resolves to the converted response content
	 */
	static convertResponse(rawResponse, responseType) {
		return tslib_1.__awaiter(this, void 0, void 0, function*() {
			if (rawResponse.status === 204) {
				// NO CONTENT
				return Promise.resolve();
			}
			let responseValue;
			try {
				switch (responseType) {
					case ResponseType.ARRAYBUFFER:
						responseValue = yield rawResponse.arrayBuffer();
						break;
					case ResponseType.BLOB:
						responseValue = yield rawResponse.blob();
						break;
					case ResponseType.DOCUMENT:
						responseValue = yield GraphResponseHandler.parseDocumentResponse(rawResponse, DocumentType.TEXT_XML);
						break;
					case ResponseType.JSON:
						responseValue = yield rawResponse.json();
						break;
					case ResponseType.STREAM:
						responseValue = yield Promise.resolve(rawResponse.body);
						break;
					case ResponseType.TEXT:
						responseValue = yield rawResponse.text();
						break;
					default:
						const contentType = rawResponse.headers.get("Content-type");
						if (contentType !== null) {
							const mimeType = contentType.split(";")[0];
							if (new RegExp(ContentTypeRegexStr.DOCUMENT).test(mimeType)) {
								responseValue = yield GraphResponseHandler.parseDocumentResponse(rawResponse, mimeType);
							} else if (new RegExp(ContentTypeRegexStr.IMAGE).test(mimeType)) {
								responseValue = rawResponse.blob();
							} else if (mimeType === ContentType.TEXT_PLAIN) {
								responseValue = yield rawResponse.text();
							} else if (mimeType === ContentType.APPLICATION_JSON) {
								responseValue = yield rawResponse.json();
							} else {
								responseValue = Promise.resolve(rawResponse.body);
							}
						} else {
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
						}
						break;
				}
			} catch (error) {
				throw error;
			}
			return responseValue;
		});
	}
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
	static getResponse(rawResponse, responseType, callback) {
		return tslib_1.__awaiter(this, void 0, void 0, function*() {
			try {
				if (responseType === ResponseType.RAW) {
					return Promise.resolve(rawResponse);
				} else {
					const response = yield GraphResponseHandler.convertResponse(rawResponse, responseType);
					if (rawResponse.ok) {
						// Status Code 2XX
						if (typeof callback === "function") {
							callback(null, response);
						} else {
							return response;
						}
					} else {
						// NOT OK Response
						throw response;
					}
				}
			} catch (error) {
				throw error;
			}
		});
	}
}
//# sourceMappingURL=GraphResponseHandler.js.map
