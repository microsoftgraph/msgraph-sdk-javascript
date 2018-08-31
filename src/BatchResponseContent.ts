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
 * Signature representing Batch response payload
 * @property {KeyValuePairObject[]} responses - An array of key value pair representing response object for every request
 * @property {string} @nextLink - The nextLink value to get next set of responses in case of asynchronous batch requests
 */
interface BatchResponsePayload {
    responses: KeyValuePairObject[],
    "@nextLink"?: string
}


/**
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
     * Creates the BatchResponseContent instance
     * @param {BatchResponsePayload} response - The response body returned for batch request from server
     */
    constructor(response: BatchResponsePayload) {
        let self = this;
        self.responses = new Map();
        self.update(response);
    }

    /**
     * Updates the Batch response content instance with given responses.
     * @param {BatchResponsePayload} response - The response json representing batch response message
     */
    update(response: BatchResponsePayload) {
        let self = this;
        self.nextLink = response["@nextLink"];
        let responses = response.responses;
        for (let i = 0, l = responses.length; i < l; i++) {
            self.responses.set(responses[i].id, self.createResponseObject(responses[i]));
        }
    }

    /**
     * Creates native Response object from the json representation of it.
     * @param {KeyValuePairObject} responseJSON - The response json value
     * @return The Response Object instance
     */
    private createResponseObject(responseJSON: KeyValuePairObject): Response {
        let body = responseJSON.body,
            options: KeyValuePairObject = {};
        options.status = responseJSON.status;
        if(responseJSON.statusText !== undefined) {
            options.statusText = responseJSON.statusText;
        }
        options.headers = responseJSON.headers;
        return new Response(body, options);
    }

    /**
     * To get the response of a request for a given request id
     * @param {string} requestId - The request id value
     * @return The Response object instance for the particular request
     */
    getResponseById(requestId: string): Response {
        return this.responses.get(requestId);
    }

    /**
     * To get all the responses of the batch request
     * @return The Map of id and Response objects
     */
    getResponses(): Map<string, Response> {
        return this.responses;
    }

    /**
     * To get the iterator for the responses
     * @return The Iterable generator for the response objects
     */
    *getResponsesIterator(): IterableIterator<[string, Response]> {
        let self = this,
            iterator = self.responses.entries(),
            cur = iterator.next();
        while (!cur.done) {
            yield cur.value;
            cur = iterator.next();
        }
    }
}