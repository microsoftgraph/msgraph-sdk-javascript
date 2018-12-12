/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
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
 * @class
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
     * @constructor
     * Constructs a BatchRequestContent instance
     * @param {BatchRequestStep[]} [requests] - Array of requests value
     * @returns An instance of a BatchRequestContent
     */
    constructor(requests?: BatchRequestStep[]);
    /**
     * @public
     * Adds a request to the batch request content
     * @param {BatchRequestStep} request - The request value
     * @returns The id of the added request
     */
    addRequest(request: BatchRequestStep): string;
    /**
     * @public
     * Removes request from the batch payload and its dependencies from all dependents
     * @param {string} requestId - The id of a request that needs to be removed
     * @returns The boolean indicating removed status
     */
    removeRequest(requestId: string): boolean;
    /**
     * @public
     * @async
     * Serialize content from BatchRequestContent instance
     * @returns The body content to make batch request
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
     * @returns The boolean indicating the validation status
     */
    private static validateDependencies;
    /**
     * @private
     * @static
     * @async
     * Converts Request Object instance to a JSON
     * @param {IsomorphicRequest} request - The IsomorphicRequest Object instance
     * @returns A promise that resolves to JSON representation of a request
     */
    private static getRequestData;
    /**
     * @private
     * @static
     * @async
     * Gets the body of a Request object instance
     * @param {IsomorphicRequest} request - The IsomorphicRequest object instance
     * @returns The Promise that resolves to a body value of a Request
     */
    private static getRequestBody;
    /**
     * @public
     * Adds a dependency for a given dependent request
     * @param {string} dependentId - The id of the dependent request
     * @param {string} [dependencyId] - The id of the dependency request, if not specified the preceding request will be considered as a dependency
     * @returns nothing
     */
    addDependency(dependentId: string, dependencyId?: string): void;
    /**
     * @public
     * Removes a dependency for a given dependent request id
     * @param {string} dependentId - The id of the dependent request
     * @param {string} [dependencyId] - The id of the dependency request, if not specified will remove all the dependencies of that request
     * @returns The boolean indicating removed status
     */
    removeDependency(dependentId: string, dependencyId?: string): boolean;
}
