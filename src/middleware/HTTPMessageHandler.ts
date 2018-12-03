/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module HTTPMessageHandler
 */

import { Middleware } from "../IMiddleware";
import { Context } from "../IContext";
import { ResponseType } from "../ResponseType";
import 'isomorphic-fetch';

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
 * @interface
 * Signature to represent the Graph error object
 * @NOTE: This is NOT what is returned from the Graph
 * GraphError is created from parsing JSON errors returned from the graph
 * Some fields are renamed ie, "request-id" => requestId so you can use dot notation
 * 
 * @property {number} statusCode - The status code of the error
 * @property {string} code - The code to represent the request
 * @property {string} message - The error message
 * @property {string} requestId - The identifier for the request
 * @property {Date} date - The request processed date and time
 * @property {string} body - The original error response by the graph
 */
export interface GraphError {
    statusCode: number,
    code: string,
    message: string,
    requestId: string,
    date: Date,
    body: string
}

/**
 * @class
 * Class for HTTPMessageHandler
 * @extends Middleware
 */
export class HTTPMessageHandler implements Middleware {

    /**
     * @private
     * @static
     * A member holding array of document types
     */
    private static DocumentTypes: string[];

    /**
     * @constructor
     * Creates an instance of GraphResponse
     * @param {Response} response - The response object
     * @return An instance of GraphResponse
     */
    constructor() {
        if (HTTPMessageHandler.DocumentTypes === undefined) {
            HTTPMessageHandler.DocumentTypes = Object.keys(DocumentType).map(k => DocumentType[k as any]);
        }
    }

    /**
     * @private
     * To parse Document response
     * @param {Response} response - The response object
     * @param {ResponseType} type - The type to which the document needs to be parsed 
     * @return A promise that resolves to a document content
     */
    private parseDocumentResponse(response, type): Promise<any> {
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
     * @param {Response} response - The response object
     * @param {ResponseType} type - The type to which the response needs to be converted
     * @return A promise that resolves to the converted response content
     */
    private async convertResponse(response: Response, type?: ResponseType): Promise<any> {
        if (response.status === 204) { //NO CONTENT
            return Promise.resolve();
        }
        let self = this,
            responseValue: any;
        switch (type) {
            case ResponseType.ARRAYBUFFER:
                responseValue = response.arrayBuffer();
                break;
            case ResponseType.BLOB:
                responseValue = response.blob();
                break;
            case ResponseType.DOCUMENT:
                responseValue = self.parseDocumentResponse(response, DocumentType.TEXT_XML);
                break;
            case ResponseType.JSON:
                responseValue = response.json();
                break;
            case ResponseType.STREAM:
                responseValue = Promise.resolve(response.body);
                break;
            case ResponseType.TEXT:
                responseValue = response.text();
                break;
            default:
                let contentType = response.headers.get("Content-type");
                if (contentType !== null) {
                    let mimeType = contentType.split(";")[0];
                    if (HTTPMessageHandler.DocumentTypes.includes(mimeType)) {
                        responseValue = self.parseDocumentResponse(response, mimeType);
                    } else {
                        responseValue = response.json();
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
     * @private
     * @param {number} [statusCode = -1] - The status code of the response
     * @return The GraphError object 
     */
    private defaultError(statusCode: number = -1): GraphError {
        return {
            statusCode,
            code: null,
            message: null,
            requestId: null,
            date: new Date(),
            body: null
        }
    }

    /**
     * @private
     * @param {Error} error - The error object
     * @return The GraphError object
     */
    private buildError(error: Error): GraphError {
        const gError: GraphError = this.defaultError();
        if (error.name !== undefined) {
            gError.code = error.name;
        }
        gError.body = error.toString();
        gError.message = error.message;
        gError.date = new Date();
        return gError;
    }

    /**
     * @private
     * @param {any} response - The error data object
     * @param {number} statusCode - The status code of the response
     * @return The GraphError object 
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
    private buildErrorFromResponse(error: any, statusCode: number): GraphError {
        return {
            statusCode,
            code: error.code,
            message: error.message,
            requestId: (error.innerError !== undefined) ? error.innerError["request-id"] : "",
            date: (error.innerError !== undefined) ? new Date(error.innerError.date) : new Date(),
            body: error
        };
    }

    /**
     * @public
     * @async
     * To execute the current middleware
     * @param {Context} context - The request context object
     * @return A promise that resolves to nothing
     */
    public async execute(context: Context): Promise<void> {
        try {
            let self = this,
                optionsHeaders: HeadersInit = Object.assign({}, context.options.headers);
            if (context.middlewareOptions !== undefined && context.middlewareOptions.requestOptions !== undefined) {
                let middlewareOptionsHeaders: HeadersInit = Object.assign({}, context.middlewareOptions.requestOptions.headers);
                Object.assign(context.options, context.middlewareOptions.requestOptions);
                Object.assign(context.options.headers, optionsHeaders, middlewareOptionsHeaders);
            }
            let rawResponse = await fetch(context.request, context.options);
            context.rawResponse = rawResponse;
            let responseType: ResponseType;
            if (context.middlewareOptions !== undefined) {
                responseType = context.middlewareOptions.responseType;
            }
            let response = await this.convertResponse(rawResponse, responseType);
            if (rawResponse.ok) { // Status Code 2XX
                context.response = response;
            } else { // NOT OK Response
                if (response && response.error) { // If the error is passed in body
                    throw self.buildErrorFromResponse(response.error, rawResponse.status);
                } else {
                    throw self.defaultError(rawResponse.status);
                }
            }
        } catch (error) {
            let self = this;
            if (error.requestId !== undefined) {
                throw error;
            } else if (error instanceof Error) {
                throw self.buildError(error);
            } else {
                throw self.defaultError();
            }
        }
    }
}
