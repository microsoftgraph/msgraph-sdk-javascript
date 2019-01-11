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
    APPLICATION_XHTML = "application/xhtml+xml"
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
    private static DocumentTypes: string[];

    /**
     * @private
     * A member holding the raw response
     */
    private rawResponse: Response;

    /**
     * @private
     * A member holding the response type
     */
    private responseType: ResponseType;

    /**
     * @private
     * A member holding the graph request callback
     */
    private callback: GraphRequestCallback;

    /**
     * @constructor
     * Creates an instance of GraphResponseHandler
     * @param {Response} rawResponse - The response object
     * @param {ResponseType} [responseType] - The response type value
     * @param {GraphRequestCallback} [callback] - The graph request callback function
     * @returns An instance of GraphResponseHandler
     */
    constructor(rawResponse: Response, responseType?: ResponseType, callback?: GraphRequestCallback) {
        let self = this;
        self.rawResponse = rawResponse;
        self.responseType = responseType;
        self.callback = callback;
        if (GraphResponseHandler.DocumentTypes === undefined) {
            GraphResponseHandler.DocumentTypes = Object.keys(DocumentType).map(k => DocumentType[k as any]);
        }
    }

    /**
     * @private
     * To parse Document response
     * @param {DocumentType} type - The type to which the document needs to be parsed
     * @returns A promise that resolves to a document content
     */
    private parseDocumentResponse(type: DocumentType): Promise<any> {
        let response = this.rawResponse;
        if (typeof DOMParser !== "undefined") {
            return new Promise((resolve, reject) => {
                response.text().then((xmlString) => {
                    try {
                        let parser = new DOMParser(),
                            xmlDoc = parser.parseFromString(xmlString, type);
                        resolve(xmlDoc);
                    } catch (error) {
                        reject(error);
                    }
                });
            });
        } else {
            return Promise.resolve(response.body);
        }
    }

    /**
     * @private
     * @async
     * To convert the native Response to response content
     * @returns A promise that resolves to the converted response content
     */
    private async convertResponse(): Promise<any> {
        let self = this,
            response = self.rawResponse,
            type = self.responseType;
        if (response.status === 204) { //NO CONTENT
            return Promise.resolve();
        }
        let responseValue: any;
        switch (type) {
            case ResponseType.ARRAYBUFFER:
                responseValue = await response.arrayBuffer();
                break;
            case ResponseType.BLOB:
                responseValue = await response.blob();
                break;
            case ResponseType.DOCUMENT:
                responseValue = await self.parseDocumentResponse(DocumentType.TEXT_XML);
                break;
            case ResponseType.JSON:
                responseValue = await response.json();
                break;
            case ResponseType.STREAM:
                responseValue = await Promise.resolve(response.body);
                break;
            case ResponseType.TEXT:
                responseValue = await response.text();
                break;
            default:
                let contentType = response.headers.get("Content-type");
                if (contentType !== null) {
                    let mimeType = contentType.split(";")[0];
                    if (GraphResponseHandler.DocumentTypes.includes(mimeType)) {
                        responseValue = await self.parseDocumentResponse(mimeType as DocumentType);
                    } else {
                        responseValue = await response.json();
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
                    responseValue = Promise.resolve(response.body);
                }
                break;
        }
        return responseValue;
    }

    /**
     * @public
     * @async
     * To get the parsed response
     * @returns The parsed response
     */
    public async getResponse(): Promise<any> {
        try {
            let self = this,
                rawResponse = self.rawResponse,
                response = await self.convertResponse();
            if (rawResponse.ok) { // Status Code 2XX
                if (typeof self.callback === "function") {
                    self.callback(null, response, rawResponse);
                } else {
                    return response;
                }
            } else { //NOT OK Response
                throw response;
            }
        } catch (error) {
            throw error;
        }
    }

    /**
     * @public
     * To get the raw response
     * @return The raw response
     */
    public getRawResponse(): Response {
        return this.rawResponse;
    }
}