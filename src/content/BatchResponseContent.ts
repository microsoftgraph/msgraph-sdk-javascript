/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module BatchResponseContent
 */

/**
 * @interface
 * Signature represents key value pair object
 */
interface KeyValuePairObject {
    [key: string]: any;
}

/**
 * @interface
 * Signature representing Batch response body
 * @property {KeyValuePairObject[]} responses - An array of key value pair representing response object for every request
 * @property {string} [@nextLink] - The nextLink value to get next set of responses in case of asynchronous batch requests
 */
interface BatchResponseBody {
    responses: KeyValuePairObject[],
    "@nextLink"?: string
}


/**
 * @class
 * Class that handles BatchResponseContent
 */
export class BatchResponseContent {

    /**
     * To hold the responses
     */
    private responses: Map<string, Response>;

    /**
     * Holds the next link url
     */
    private nextLink: string;


    /**
     * @public
     * @constructor
     * Creates the BatchResponseContent instance
     * @param {BatchResponseBody} response - The response body returned for batch request from server
     * @returns An instance of a BatchResponseContent
     */
    public constructor(response: BatchResponseBody) {
        let self = this;
        self.responses = new Map();
        self.update(response);
    }

    /**
     * @public
     * Updates the Batch response content instance with given responses.
     * @param {BatchResponseBody} response - The response json representing batch response message
     * @returns Nothing
     */
    public update(response: BatchResponseBody): void {
        let self = this;
        self.nextLink = response["@nextLink"];
        let responses = response.responses;
        for (let i = 0, l = responses.length; i < l; i++) {
            self.responses.set(responses[i].id, self.createResponseObject(responses[i]));
        }
    }

    /**
     * @private
     * Creates native Response object from the json representation of it.
     * @param {KeyValuePairObject} responseJSON - The response json value
     * @returns The Response Object instance
     */
    private createResponseObject(responseJSON: KeyValuePairObject): Response {
        let body = responseJSON.body,
            options: KeyValuePairObject = {};
        options.status = responseJSON.status;
        if (responseJSON.statusText !== undefined) {
            options.statusText = responseJSON.statusText;
        }
        options.headers = responseJSON.headers;
        return new Response(body, options);
    }

    /**
     * @public
     * To get the response of a request for a given request id
     * @param {string} requestId - The request id value
     * @returns The Response object instance for the particular request
     */
    public getResponseById(requestId: string): Response {
        return this.responses.get(requestId);
    }

    /**
     * @public
     * To get all the responses of the batch request
     * @returns The Map of id and Response objects
     */
    public getResponses(): Map<string, Response> {
        return this.responses;
    }

    /**
     * @public
     * To get the iterator for the responses
     * @returns The Iterable generator for the response objects
     */
    public *getResponsesIterator(): IterableIterator<[string, Response]> {
        let self = this,
            iterator = self.responses.entries(),
            cur = iterator.next();
        while (!cur.done) {
            yield cur.value;
            cur = iterator.next();
        }
    }
}
