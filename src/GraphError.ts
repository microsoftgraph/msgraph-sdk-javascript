/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module GraphError
 */

/**
 * @class
 * Class for GraphError
 * @NOTE: This is NOT what is returned from the Graph
 * GraphError is created from parsing JSON errors returned from the graph
 * Some fields are renamed ie, "request-id" => requestId so you can use dot notation
 */

export class GraphError {

    /**
     * @public
     * A member holding status code of the error
     */
    public statusCode: number;

    /**
     * @public
     * A member holding code i.e name of the error
     */
    public code: string;

    /**
     * @public
     * A member holding error message
     */
    public message: string;

    /**
     * @public
     * A member holding request-id i.e identifier of the request
     */
    public requestId: string;

    /**
     * @public
     * A member holding processed date and time of the request
     */
    public date: Date;

    /**
     * @public
     * A member holding original error response by the graph service
     */
    public body: any;

    /**
     * @constructor
     * Creates an instance of GraphError
     * @param {number} [statusCode = -1] - The status code of the error
     * @returns An instance of GraphError
     */
    constructor(statusCode: number = -1) {
        let self = this;
        self.statusCode = statusCode;
        self.code = null;
        self.message = null;
        self.requestId = null;
        self.date = new Date();
        self.body = null;
    }
}
