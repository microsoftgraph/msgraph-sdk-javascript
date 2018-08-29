/**
 * @module BatchResponseContent
 */
interface BatchResponsePayload {
    responses: {
        [key: string]: any;
    };
    "@nextLink"?: string;
}
/**
 * Class that handles BatchResponseContent
 */
export declare class BatchResponseContent {
    /**
     * To hold the responses
     */
    private responses;
    /**
     * Holds the next link url
     */
    private nextLink;
    /**
     * Creates the BatchResponseContent instance
     * @param {any} response - The response body returned for batch request from server
     */
    constructor(response: BatchResponsePayload);
    update(response: BatchResponsePayload): void;
    private createResponseObject;
    /**
     * To get the response of a request for a given request id
     * @param {string} requestId - The request id value
     * @return The response object instance for the particular request
     */
    getResponseById(requestId: string): Response;
    /**
     * To get all the responses of the batch request
     * @return The array of response object instances
     */
    getResponses(): Map<string, Response>;
    /**
     * To get the iterator for the responses
     * @return The Iterable generator for the response objects
     */
    getResponsesIterator(): IterableIterator<[string, Response]>;
}
export {};
