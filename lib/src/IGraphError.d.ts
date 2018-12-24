/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
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
