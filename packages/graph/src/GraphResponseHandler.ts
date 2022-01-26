/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module GraphResponseHandler
 * References - https://fetch.spec.whatwg.org/#responses
 */

import { GraphRequestCallback } from "./IGraphRequestCallback";
import { ResponseType } from "./ResponseType";

/**
 * @enum
 * Enum for document types
 * @property {string} TEXT_HTML - The text/html content type
 * @property {string} TEXT_XML - The text/xml content type
 * @property {string} APPLICATION_XML - The application/xml content type
 * @property {string} APPLICATION_XHTML - The application/xhml+xml content type
 */
export enum DocumentType {
	TEXT_HTML = "text/html",
	TEXT_XML = "text/xml",
	APPLICATION_XML = "application/xml",
	APPLICATION_XHTML = "application/xhtml+xml",
}

/**
 * @enum
 * Enum for Content types
 * @property {string} TEXT_PLAIN - The text/plain content type
 * @property {string} APPLICATION_JSON - The application/json content type
 */

enum ContentType {
	TEXT_PLAIN = "text/plain",
	APPLICATION_JSON = "application/json",
}

/**
 * @enum
 * Enum for Content type regex
 * @property {string} DOCUMENT - The regex to match document content types
 * @property {string} IMAGE - The regex to match image content types
 */
enum ContentTypeRegexStr {
	DOCUMENT = "^(text\\/(html|xml))|(application\\/(xml|xhtml\\+xml))$",
	IMAGE = "^image\\/.+",
}

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
	private static parseDocumentResponse(rawResponse: Response, type: DocumentType): Promise<any> {
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
	private static async convertResponse(rawResponse: Response, responseType?: ResponseType): Promise<any> {
		if (rawResponse.status === 204) {
			// NO CONTENT
			return Promise.resolve();
		}
		let responseValue: any;
		const contentType = rawResponse.headers.get("Content-type");
		switch (responseType) {
			case ResponseType.ARRAYBUFFER:
				responseValue = await rawResponse.arrayBuffer();
				break;
			case ResponseType.BLOB:
				responseValue = await rawResponse.blob();
				break;
			case ResponseType.DOCUMENT:
				responseValue = await GraphResponseHandler.parseDocumentResponse(rawResponse, DocumentType.TEXT_XML);
				break;
			case ResponseType.JSON:
				responseValue = await rawResponse.json();
				break;
			case ResponseType.STREAM:
				responseValue = await Promise.resolve(rawResponse.body);
				break;
			case ResponseType.TEXT:
				responseValue = await rawResponse.text();
				break;
			default:
				if (contentType !== null) {
					const mimeType = contentType.split(";")[0];
					if (new RegExp(ContentTypeRegexStr.DOCUMENT).test(mimeType)) {
						responseValue = await GraphResponseHandler.parseDocumentResponse(rawResponse, mimeType as DocumentType);
					} else if (new RegExp(ContentTypeRegexStr.IMAGE).test(mimeType)) {
						responseValue = rawResponse.blob();
					} else if (mimeType === ContentType.TEXT_PLAIN) {
						responseValue = await rawResponse.text();
					} else if (mimeType === ContentType.APPLICATION_JSON) {
						responseValue = await rawResponse.json();
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
		return responseValue;
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
	public static async getResponse(rawResponse: Response, responseType?: ResponseType, callback?: GraphRequestCallback): Promise<any> {
		if (responseType === ResponseType.RAW) {
			return Promise.resolve(rawResponse);
		} else {
			const response = await GraphResponseHandler.convertResponse(rawResponse, responseType);
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
	}
}
