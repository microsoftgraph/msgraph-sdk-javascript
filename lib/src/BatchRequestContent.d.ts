/**
 * @interface
 * Signature representing BatchRequestStep data
 * @property {string} id - Unique identity for the request, Should not be an empty string
 * @property {string[]} [dependsOn] - Array of dependencies
 * @property {Request} request - The Request object
 */
export interface BatchRequestStep {
    id: string;
    dependsOn?: string[];
    request: Request;
}
/**
 * @interface
 * Signature representing single request in a Batching
 * @extends RequestInit
 * @see {@link https://github.com/Microsoft/TypeScript/blob/master/lib/lib.dom.d.ts#L1337} and {@link https://fetch.spec.whatwg.org/#requestinit}
 *
 * @property {string} url - The url value of the request
 */
export interface RequestData extends RequestInit {
    url: string;
}
/**
 * @interface
 * Signature representing batch request data
 * @property {string} id - Unique identity for the request, Should not be an empty string
 * @property {string[]} [dependsOn] - Array of dependencies
 */
export interface BatchRequestData extends RequestData {
    id: string;
    dependsOn?: string[];
}
/**
 * @interface
 * Signature representing batch request body
 * @property {BatchRequestData[]} requests - Array of request data, a json representation of requests for batch
 */
export interface BatchRequestBody {
    requests: BatchRequestData[];
}
/**
 * Class for handling BatchRequestContent
 */
export declare class BatchRequestContent {
    /**
     * @private
     * @static
     * Limit for number of requests {@link - https://developer.microsoft.com/en-us/graph/docs/concepts/known_issues#json-batching}
     */
    private static requestLimit;
    /**
     * To keep track of requests, key will be id of the request and value will be the request json
     */
    requests: Map<string, BatchRequestStep>;
    /**
     * Constructs a BatchRequestContent instance
     * @param {BatchRequestStep[]} [requests] - Array of requests value
     */
    constructor(requests?: BatchRequestStep[]);
    /**
     * Adds a request to the batch request content
     * @param {BatchRequestStep} request - The request value
     * @return The id of the added request
     */
    addRequest(request: BatchRequestStep): string;
    /**
     * Removes request from the batch payload and its dependencies from all dependents
     * @param {string} requestId - The id of a request that needs to be removed
     * @return The boolean indicating removed status
     */
    removeRequest(requestId: string): boolean;
    /**
     * @async
     * Serialize content from BatchRequestContent instance
     * @return The body content to make batch request
     */
    getContent(): Promise<BatchRequestBody>;
    /**
     * @private
     * @static
     * Validates the dependency chain of the requests
     *
     * Note:
     * Individual requests can depend on other individual requests. Currently, requests can only depend on a single other request, and must follow one of these three patterns:
     * 1. Parallel - no individual request states a dependency in the dependsOn property.
     * 2. Serial - all individual requests depend on the previous individual request.
     * 3. Same - all individual requests that state a dependency in the dependsOn property, state the same dependency.
     * As JSON batching matures, these limitations will be removed.
     * @see {@link https://developer.microsoft.com/en-us/graph/docs/concepts/known_issues#json-batching}
     *
     * @return The boolean indicating the validation status
     */
    static validateDependencies(requests: Map<string, BatchRequestStep>): boolean;
    /**
     * @private
     * @static
     * @async
     * Converts Request Object instance to a JSON
     * @param {IsomorphicRequest} request - The IsomorphicRequest Object instance
     * @return A promise that resolves to JSON representation of a request
     */
    private static getRequestData;
    /**
     * @private
     * @static
     * @async
     * Gets the body of a Request object instance
     * @param {IsomorphicRequest} request - The IsomorphicRequest object instance
     * @return The Promise that resolves to a body value of a Request
     */
    private static getRequestBody;
    /**
     * Adds a dependency for a given dependent request
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
}
