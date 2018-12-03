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
import 'isomorphic-fetch';
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
    statusCode: number;
    code: string;
    message: string;
    requestId: string;
    date: Date;
    body: string;
}
/**
 * @class
 * Class for HTTPMessageHandler
 * @extends Middleware
 */
export declare class HTTPMessageHandler implements Middleware {
    /**
     * @private
     * @static
     * A member holding array of document types
     */
    private static DocumentTypes;
    /**
     * @constructor
     * Creates an instance of GraphResponse
     * @param {Response} response - The response object
     * @return An instance of GraphResponse
     */
    constructor();
    /**
     * @private
     * To parse Document response
     * @param {Response} response - The response object
     * @param {ResponseType} type - The type to which the document needs to be parsed
     * @return A promise that resolves to a document content
     */
    private parseDocumentResponse;
    /**
     * @private
     * @async
     * @param {Response} response - The response object
     * @param {ResponseType} type - The type to which the response needs to be converted
     * @return A promise that resolves to the converted response content
     */
    private convertResponse;
    /**
     * @private
     * @param {number} [statusCode = -1] - The status code of the response
     * @return The GraphError object
     */
    private defaultError;
    /**
     * @private
     * @param {Error} error - The error object
     * @return The GraphError object
     */
    private buildError;
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
    private buildErrorFromResponse;
    /**
     * @public
     * @async
     * To execute the current middleware
     * @param {Context} context - The request context object
     * @return A promise that resolves to nothing
     */
    execute(context: Context): Promise<void>;
}
