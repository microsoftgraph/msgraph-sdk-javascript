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
 * @property {string} @nextLink - The nextLink value to get next set of responses in case of asynchronous batch requests
 */
interface BatchResponseBody {
    responses: KeyValuePairObject[];
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
     * @param {BatchResponseBody} response - The response body returned for batch request from server
     */
    constructor(response: BatchResponseBody);
    /**
     * Updates the Batch response content instance with given responses.
     * @param {BatchResponseBody} response - The response json representing batch response message
     */
    update(response: BatchResponseBody): void;
    /**
     * Creates native Response object from the json representation of it.
     * @param {KeyValuePairObject} responseJSON - The response json value
     * @return The Response Object instance
     */
    private createResponseObject;
    /**
     * To get the response of a request for a given request id
     * @param {string} requestId - The request id value
     * @return The Response object instance for the particular request
     */
    getResponseById(requestId: string): Response;
    /**
     * To get all the responses of the batch request
     * @return The Map of id and Response objects
     */
    getResponses(): Map<string, Response>;
    /**
     * To get the iterator for the responses
     * @return The Iterable generator for the response objects
     */
    getResponsesIterator(): IterableIterator<[string, Response]>;
}
export {};
