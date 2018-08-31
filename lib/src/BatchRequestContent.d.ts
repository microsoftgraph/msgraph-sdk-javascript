/**
 * @module BatchRequestContent
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
 * Signature representing Batch request payload
 * @property {KeyValuePairObject[]} requests - An array of key value pair representing request objects
 */
interface BatchRequestPayload {
    requests: KeyValuePairObject[];
}
/**
 * Class for handling BatchRequestContent
 */
export declare class BatchRequestContent {
    /**
     * @static
     * Limit for number of requests {@link - https://developer.microsoft.com/en-us/graph/docs/concepts/known_issues#json-batching}
     */
    static requestLimit: number;
    /**
     * To keep track of requests, key will be id of the request and value will be the request json
     */
    private requests;
    /**
     * Constructs a BatchRequestContent instance
     * @param {any[]} [requests] - Array of requests or json for batch payload
     */
    constructor(requests?: any[]);
    /**
     * @static
     * @async
     * Creates Batch Request Content instance by extracting values from requests parameter
     * @param {any[]} requests - The requests json value
     * @return A Promise that resolves to BatchRequestContent instance
     */
    static create(requests?: any[]): Promise<any>;
    /**
     * @static
     * @async
     * Converts Request Object instance to a JSON
     * @param {Request} request - The Request Object
     * @return A promise that resolves to JSON representation of a request
     */
    static getJSONFromRequest(request: Request): Promise<any>;
    /**
     * @static
     * @async
     * Gets the body of a Request object instance
     * @param {Request} request - The Request object instance
     * @return The Promise that resolves to a body value of a Request
     */
    static getBody(request: Request): Promise<any>;
    /**
     * @static
     * To get the random id
     * @return The random id of length 9
     */
    static getRandomId(): string;
    /**
     * @async
     * Adds a request to the batch payload
     * @param {any} request - Request object or a json representing request
     * @return The id of the added request (id will be generated in case if user didn't provide one)
     */
    addRequest(request: any): Promise<any>;
    /**
     * Removes request from the batch payload and its dependencies from all dependents
     * @param {string} requestId - Request id that needs to be removed
     * @return The boolean indicating removed status
     */
    removeRequest(requestId: string): boolean;
    /**
     * Adds a dependency for a given dependent request
     *
     * Note:
     * Individual requests can depend on other individual requests. Currently, requests can only depend on a single other request, and must follow one of these three patterns:
     * 1. Parallel - no individual request states a dependency in the dependsOn property.
     * 2. Serial - all individual requests depend on the previous individual request.
     * 3. Same - all individual requests that state a dependency in the dependsOn property, state the same dependency.
     * As JSON batching matures, these limitations will be removed.
     * @see {@link https://developer.microsoft.com/en-us/graph/docs/concepts/known_issues#json-batching}
     *
     * @param {string} dependentId - The id of the dependent request
     * @param {string} [dependencyId] - The id of the dependency request, if not specified the preceding request will be considered as a dependency
     */
    addDependency(dependentId: string, dependencyId?: string): void;
    /**
     * Removes a dependency for a given dependent request id
     * @param {string} dependentId - The id of the dependent request
     * @param {string} [dependencyId] - The id of the dependency request, if not specified will remove all the dependencies of that request
     * @return The boolean indicating removed status
     */
    removeDependency(dependentId: string, dependencyId?: string): boolean;
    /**
     * Extract content from BatchRequestContent instance
     * @return The payload to make batch request
     */
    content(): BatchRequestPayload;
}
export {};
