/**
 * @module BatchRequestContent
 */
interface BatchRequestPayload {
    requests: {
        [key: string]: any;
    };
}
/**
 * Class for handling BatchRequestContent
 */
export declare class BatchRequestContent {
    /**
     * Limit for number of requests {@link - https://developer.microsoft.com/en-us/graph/docs/concepts/known_issues#json-batching}
     */
    static requestLimit: number;
    /**
     * To keep track of requests, key will be id of the request and value will be the request json
     */
    private requests;
    /**
     * Creates a BatchRequestContent instance
     * @param {any[]} [requests] - Array of requests or json for batch payload
     */
    constructor(requests?: any[]);
    static create(requests?: any[]): Promise<any>;
    static getJSONFromRequest(request: Request): Promise<any>;
    static getBody(request: Request): Promise<any>;
    static getRandomId(): string;
    /**
     * Adds a request to the batch payload
     * @param {any} request - Request object or a json representing request
     * @return The id of the added request (id will be generated in case if user didn't provide one)
     */
    addRequest(request: any): Promise<any>;
    /**
     * Removes request from the batch payload
     * @param {string} requestId - Request id that needs to be removed
     * @return The boolean indicating removed status
     */
    removeRequest(requestId: string): boolean;
    /**
     * Adds a dependency for a dependent
     * @param {string} dependentId - The id of the dependent request
     * @param {string} [dependencyId] - The id of the dependency request, if not specified the preceding request will be considered as a dependency
     */
    addDependency(dependentId: string, dependencyId?: string): void;
    /**
     * Removes a dependency for a given request id
     * @param {string} dependentId - The id of the dependent request
     * @param {string} [dependencyId] - The id of the dependency request, if not specified will remove all the dependencies of that request
     * @return The boolean indicating removed status
     */
    removeDependency(dependentId: string, dependencyId: string): boolean;
    /**
     * Extract content from BatchRequestContent instance
     * @return payload to make batch request
     */
    content(): BatchRequestPayload;
}
export {};
