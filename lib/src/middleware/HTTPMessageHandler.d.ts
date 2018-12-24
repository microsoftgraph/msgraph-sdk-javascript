/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * @module HTTPMessageHandler
 */
import { Context } from "../IContext";
import { Middleware } from "../IMiddleware";
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
     * @returns An instance of GraphResponse
     */
    constructor();
    /**
     * @private
     * To parse Document response
     * @param {Response} response - The response object
     * @param {ResponseType} type - The type to which the document needs to be parsed
     * @returns A promise that resolves to a document content
     */
    private parseDocumentResponse;
    /**
     * @private
     * @async
     * @param {Response} response - The response object
     * @param {ResponseType} type - The type to which the response needs to be converted
     * @returns A promise that resolves to the converted response content
     */
    private convertResponse;
    /**
     * @private
     * @param {number} [statusCode = -1] - The status code of the response
     * @returns The GraphError object
     */
    private defaultError;
    /**
     * @private
     * @param {Error} error - The error object
     * @returns The GraphError object
     */
    private buildError;
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
    private buildErrorFromResponse;
    /**
     * @public
     * @async
     * To execute the current middleware
     * @param {Context} context - The request context object
     * @returns A promise that resolves to nothing
     */
    execute(context: Context): Promise<void>;
}
