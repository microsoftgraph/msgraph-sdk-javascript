/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module GraphResponseHandler
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
enum DocumentType {
	TEXT_HTML = "text/html",
	TEXT_XML = "text/xml",
	APPLICATION_XML = "application/xml",
	APPLICATION_XHTML = "application/xhtml+xml",
}

/**
 * @class
 * Class for GraphResponseHandler
 */

export class GraphResponseHandler {
	/**
	 * @private
	 * @static
	 * A member holding array of document types
	 */
	private static DocumentTypes: string[] = ["text/html", "text/xml", "application/xml", "application/xhtml+xml"];

	/**
	 * @private
	 * @static
	 * To parse Document response
	 * @param {Response} rawResponse - The response object
	 * @param {DocumentType} type - The type to which the document needs to be parsed
	 * @returns A promise that resolves to a document content
	 */
	private static parseDocumentResponse(rawResponse: Response, type: DocumentType): Promise<any> {
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
	private static async convertResponse(rawResponse: Response, responseType?: ResponseType): Promise<any> {
		const clonedRawResponse: Response = rawResponse.clone();
		if (clonedRawResponse.status === 204) {
			// NO CONTENT
			return Promise.resolve();
		}
		let responseValue: any;
		try {
			switch (responseType) {
				case ResponseType.ARRAYBUFFER:
					responseValue = await clonedRawResponse.arrayBuffer();
					break;
				case ResponseType.BLOB:
					responseValue = await clonedRawResponse.blob();
					break;
				case ResponseType.DOCUMENT:
					responseValue = await GraphResponseHandler.parseDocumentResponse(clonedRawResponse, DocumentType.TEXT_XML);
					break;
				case ResponseType.JSON:
					responseValue = await clonedRawResponse.json();
					break;
				case ResponseType.STREAM:
					responseValue = await Promise.resolve(clonedRawResponse.body);
					break;
				case ResponseType.TEXT:
					responseValue = await clonedRawResponse.text();
					break;
				default:
					const contentType = clonedRawResponse.headers.get("Content-type");
					if (contentType !== null) {
						const mimeType = contentType.split(";")[0];
						responseValue = GraphResponseHandler.DocumentTypes.includes(mimeType) ? await GraphResponseHandler.parseDocumentResponse(clonedRawResponse, mimeType as DocumentType) : await clonedRawResponse.json();
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
						responseValue = Promise.resolve(clonedRawResponse.body);
					}
					break;
			}
		} catch (error) {
			throw error;
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
		try {
			if (responseType === ResponseType.RAW) {
				return Promise.resolve(rawResponse);
			} else {
				const response = await GraphResponseHandler.convertResponse(rawResponse, responseType);
				if (rawResponse.ok) {
					// Status Code 2XX
					if (typeof callback === "function") {
						callback(null, response, rawResponse);
					} else {
						return response;
					}
				} else {
					// NOT OK Response
					throw response;
				}
			}
		} catch (error) {
			throw rawResponse.ok ? error : rawResponse;
		}
	}
}
