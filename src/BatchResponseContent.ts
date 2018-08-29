/**
 * @module BatchResponseContent
 */

interface BatchResponsePayload {
    responses: {[key: string]: any},
    "@nextLink"?: string
}

interface KeyValuePairObject {
    [key: string]: any;
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
     * @param {any} response - The response body returned for batch request from server
     */
    constructor(response: BatchResponsePayload) {
        let self = this;
        self.responses = new Map();
        self.update(response);
    }

    update(response: BatchResponsePayload) {
        let self = this,
            nLink = response["@nextLink"];
        if (typeof nLink !== "undefined") {
            self.nextLink = nLink;
        }
        let responses = response.responses;
        for (let i = 0, l = responses.length; i < l; i++) {
            self.responses.set(responses[i].id, self.createResponseObject(responses[i]));
        }
    }

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
     * @return The response object instance for the particular request
     */
    getResponseById(requestId: string): Response {
        return this.responses.get(requestId);
    }

    /**
     * To get all the responses of the batch request
     * @return The array of response object instances
     */
    getResponses(): Map<string, Response> {
        return this.responses;
    }

    /**
     * To get the iterator for the responses
     * @return The Iterable generator for the response objects
     */
    *getResponsesIterator(): IterableIterator<[string, Response]> {
        let self = this;
        for (const key in self.responses) {
            yield [key, self.responses[key]];
        }
    }
}