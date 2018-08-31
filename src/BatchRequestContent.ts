/**
 * @module BatchRequestContent
 */

import { RequestMethod } from './RequestMethod';

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
export class BatchRequestContent {
    /**
     * @static
     * Limit for number of requests {@link - https://developer.microsoft.com/en-us/graph/docs/concepts/known_issues#json-batching}
     */
    static requestLimit: number = 20;

    /**
     * To keep track of requests, key will be id of the request and value will be the request json
     */
    private requests: Map<string, KeyValuePairObject>;

    /**
     * Constructs a BatchRequestContent instance
     * @param {any[]} [requests] - Array of requests or json for batch payload
     */
    constructor(requests?: any[]) {
        let self = this;
        self.requests = new Map();
        if (typeof requests !== "undefined") {
            let limit = BatchRequestContent.requestLimit;
            if (requests.length > limit) {
                let error = new Error(`Maximum requests limit exceeded, Max allowed numbers of requests are ${limit}`);
                error.name = "Limit Exceeded Error";
                throw error;
            }
            for (const req of requests) {
                self.requests.set(req.id, req);
            }
        }
    }

    /**
     * @static
     * @async
     * Creates Batch Request Content instance by extracting values from requests parameter
     * @param {any[]} requests - The requests json value
     * @return A Promise that resolves to BatchRequestContent instance
     */
    static async create(requests?: any[]): Promise<any> {
        try {
            if (typeof requests !== "undefined") {
                for (let i = 0, l = requests.length; i < l; i++) {
                    if (requests[i].constructor.name === "Request") {
                        requests[i] = await BatchRequestContent.getJSONFromRequest(<Request>requests[i]);
                    }
                    if (requests[i].id === undefined) {
                        requests[i].id = BatchRequestContent.getRandomId();
                    }
                }
            }
            return new BatchRequestContent(requests);
        } catch (error) {
            throw error;
        }
    }

    /**
     * @static
     * @async
     * Converts Request Object instance to a JSON
     * @param {request} request - The Request Object
     * @return A promise that resolves to JSON representation of a request
     */
    static async getJSONFromRequest(request: Request): Promise<any> {
        let requestJSON: KeyValuePairObject = {};
        // Stripping off hostname, port and url scheme
        requestJSON.url = "/" + request.url.split(/.*?\/\/.*?\//)[1];
        requestJSON.method = request.method;
        let headers = {};
        for (const pair of request.headers.entries()) {
            headers[pair[0]] = pair[1];
        }
        requestJSON.headers = headers;
        if (request.method === RequestMethod.PATCH || request.method === RequestMethod.POST || request.method === RequestMethod.PUT) {
            requestJSON.body = await BatchRequestContent.getBody(request);
        }
        return requestJSON;
    }

    /**
     * @static
     * @async
     * Gets the body of a Request object instance
     * @param {Request} request - The Request object instance
     * @return The Promise that resolves to a body value of a Request
     */
    static async getBody(request: Request): Promise<any> {
        let bodyParsed: boolean = false,
            body;
        try {
            let cloneReq = request.clone();
            body = await cloneReq.json();
            bodyParsed = true;
        } catch (e) {
            
        }
        if (!bodyParsed) {
            try {
                let blob = await request.blob(),
                    reader = new FileReader();
                body = await new Promise(resolve => {
                    reader.addEventListener("load", function () {
                        resolve(reader.result);
                    }, false);
                    reader.readAsDataURL(blob);
                });
                bodyParsed = true;
            } catch (e) {
                
            }
        }
        return body;
    }

    /**
     * @static
     * To get the random id
     * @return The random id of length 9
     */
    static getRandomId(): string {
        return Math.random().toString(36).substr(2, 9);
    }

    /**
     * @async
     * Adds a request to the batch payload
     * @param {any} request - Request object or a json representing request
     * @return The id of the added request (id will be generated in case if user didn't provide one)
     */
    async addRequest(request: any): Promise<any> {
        let self = this,
            limit = BatchRequestContent.requestLimit;
        if (self.requests.size === limit) {
            let error = new Error(`Maximum requests limit exceeded, Max allowed numbers of requests are ${limit}`);
            error.name = "Limit Exceeded Error";
            throw error;
        }
        if (request.constructor.name === "Request") {
            request = await BatchRequestContent.getJSONFromRequest(<Request>request);
        }
        if (request.id === undefined) {
            request.id = BatchRequestContent.getRandomId();
        }
        this.requests.set(request.id, request);
        return request.id;
    }

    /**
     * Removes request from the batch payload and its corresponding dependents
     * @param {string} requestId - Request id that needs to be removed
     * @return The boolean indicating removed status 
     */
    removeRequest(requestId: string): boolean {
        /**
         * Removing dependency of this request id present as a dependency
         */
        let self = this,
            iterator = self.requests.entries(),
            cur = iterator.next();
        while (!cur.done) {
            let dependencies = cur.value[1].dependsOn;
            if (typeof dependencies !== "undefined") {
                let index = dependencies.indexOf(requestId);
                if (index !== -1) {
                    dependencies.splice(index, 1);
                }
                if (dependencies.length === 0) {
                    delete cur.value[1].dependsOn;
                }
            }
            cur = iterator.next();
        }
        return self.requests.delete(requestId);
    }

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
    addDependency(dependentId: string, dependencyId?: string) {
        let self = this;
        if (!self.requests.has(dependentId)) {
            let error = new Error(`Dependent ${dependentId} does not exists, Please check the id`);
            error.name = "Invalid Dependent";
            throw error;
        }
        if (typeof dependencyId !== "undefined" && !self.requests.has(dependencyId)) {
            let error = new Error(`Dependency ${dependencyId} does not exists, Please check the id`);
            error.name = "Invalid Dependency";
            throw error;
        }
        if(typeof dependencyId !== "undefined") {
            let dependent = self.requests.get(dependentId);
            if (dependent.dependsOn === undefined) {
                dependent.dependsOn = [];
            }
            if (dependent.dependsOn.includes(dependencyId)) {
                let error = new Error(`Dependency ${dependencyId} is already added for the request ${dependentId}`);
                error.name = "Duplicate Dependency";
                throw error;
            }
            dependent.dependsOn.push(dependencyId);
        } else {
            let prev,
                iterator = self.requests.entries(),
                cur = iterator.next();
            while (!cur.done && cur.value[1].id !== dependentId) {
                prev = cur;
                cur = iterator.next();
            }
            if (typeof prev !== "undefined") {
                let dependencyId = prev.value[0];
                if (cur.value[1].dependsOn === undefined) {
                    cur.value[1].dependsOn = [];
                }
                if (cur.value[1].dependsOn.includes(dependencyId)) {
                    let error = new Error(`Dependency ${dependencyId} is already added for the request ${dependentId}`);
                    error.name = "Duplicate Dependency";
                    throw error;
                }
                cur.value[1].dependsOn.push(dependencyId);
            } else {
                let error = new Error(`Can't add dependency ${dependencyId}, There is only a dependent request in the batch`);
                error.name = "Invalid Dependency Addition";
                throw error;
            }
        }
    }
    
    /**
     * Removes a dependency for a given dependent request id
     * @param {string} dependentId - The id of the dependent request
     * @param {string} [dependencyId] - The id of the dependency request, if not specified will remove all the dependencies of that request
     * @return The boolean indicating removed status
     */
    removeDependency(dependentId: string, dependencyId?: string): boolean {
        let request = this.requests.get(dependentId);
        if (typeof request === "undefined" || request.dependsOn === undefined) {
            return false;
        }
        if (typeof dependencyId !== "undefined") {
            let index = request.dependsOn.indexOf(dependencyId);
            if (index === -1) {
                return false;
            }
            request.dependsOn.splice(index, 1);
            return true;
        } else {
            delete request.dependsOn;
            return true;
        }
    }

    /**
     * Extract content from BatchRequestContent instance
     * @return The payload to make batch request
     */
    content(): BatchRequestPayload {
        let requests = [],
            iterator = this.requests.entries(),
            cur = iterator.next();
        if (cur.done) {
            let error = new Error("No requests added yet, Please add at least one request.");
            error.name = "Empty Payload";
            throw error;
        }
        while (!cur.done) {
            requests.push(cur.value[1]);
            cur = iterator.next();
        }
        return {
            requests
        };
    }
}