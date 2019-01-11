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
 * @class
 * Class for GraphResponseHandler
 */
export declare class GraphResponseHandler {
    /**
     * @private
     * @static
     * A member holding array of document types
     */
    private static DocumentTypes;
    /**
     * @private
     * A member holding the raw response
     */
    private rawResponse;
    /**
     * @private
     * A member holding the response type
     */
    private responseType;
    /**
     * @private
     * A member holding the graph request callback
     */
    private callback;
    /**
     * @constructor
     * Creates an instance of GraphResponseHandler
     * @param {Response} rawResponse - The response object
     * @param {ResponseType} [responseType] - The response type value
     * @param {GraphRequestCallback} [callback] - The graph request callback function
     * @returns An instance of GraphResponseHandler
     */
    constructor(rawResponse: Response, responseType?: ResponseType, callback?: GraphRequestCallback);
    /**
     * @private
     * To parse Document response
     * @param {DocumentType} type - The type to which the document needs to be parsed
     * @returns A promise that resolves to a document content
     */
    private parseDocumentResponse;
    /**
     * @private
     * @async
     * To convert the native Response to response content
     * @returns A promise that resolves to the converted response content
     */
    private convertResponse;
    /**
     * @public
     * @async
     * To get the parsed response
     * @returns The parsed response
     */
    getResponse(): Promise<any>;
    /**
     * @public
     * To get the raw response
     * @return The raw response
     */
    getRawResponse(): Response;
}
