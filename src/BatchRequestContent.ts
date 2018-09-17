/**
 * @module BatchRequestContent
 */
import { RequestMethod } from './RequestMethod';

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
    requests: BatchRequestData[]
}

/**
 * Class for handling BatchRequestContent
 */
export class BatchRequestContent {
    /**
     * @private
     * @static
     * Limit for number of requests {@link - https://developer.microsoft.com/en-us/graph/docs/concepts/known_issues#json-batching}
     */
    private static requestLimit: number = 20;

    /**
     * To keep track of requests, key will be id of the request and value will be the request json
     */
    requests: Map<string, BatchRequestStep>;

    /**
     * Constructs a BatchRequestContent instance
     * @param {BatchRequestStep[]} [requests] - Array of requests value
     */
    constructor(requests?: BatchRequestStep[]) {
        let self = this;
        self.requests = new Map();
        if (typeof requests !== "undefined") {
            let limit = BatchRequestContent.requestLimit;
            if (requests.length > limit) {
                let error = new Error(`Maximum requests limit exceeded, Max allowed number of requests are ${limit}`);
                error.name = "Limit Exceeded Error";
                throw error;
            }
            for (const req of requests) {
                if (req.id === "") {
                    let error = new Error(`Id for a request is empty, Please provide an unique id`);
                    error.name = "Empty Id For Request";
                    throw error;
                }
                self.requests.set(req.id, req);
            }
        }
    }

    /**
     * Adds a request to the batch request content
     * @param {BatchRequestStep} request - The request value
     * @return The id of the added request
     */
    addRequest(request: BatchRequestStep): string {
        let self = this,
            limit = BatchRequestContent.requestLimit;
        if (request.id === "") {
            let error = new Error(`Id for a request is empty, Please provide an unique id`);
            error.name = "Empty Id For Request";
            throw error;
        }
        if (self.requests.size === limit) {
            let error = new Error(`Maximum requests limit exceeded, Max allowed number of requests are ${limit}`);
            error.name = "Limit Exceeded Error";
            throw error;
        }
        if (self.requests.has(request.id)) {
            let error = new Error(`Adding request with duplicate id ${request.id}, Make the id of the requests unique`);
            error.name = "Duplicate RequestId Error";
            throw error;
        }
        self.requests.set(request.id, request);
        return request.id;
    }

    /**
     * Removes request from the batch payload and its dependencies from all dependents 
     * @param {string} requestId - The id of a request that needs to be removed
     * @return The boolean indicating removed status 
     */
    removeRequest(requestId: string): boolean {
        let self = this,
            deleteStatus = self.requests.delete(requestId),
            iterator = self.requests.entries(),
            cur = iterator.next();
        /**
         * Removing dependencies where this request is present as a dependency
         */
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
        return deleteStatus;
    }

    /**
     * @async
     * Serialize content from BatchRequestContent instance
     * @return The body content to make batch request
     */
    async content(): Promise<BatchRequestBody> {
        let self = this,
            requestBody = <BatchRequestBody>{},
            requests = [],
            iterator = self.requests.entries(),
            cur = iterator.next();
        if (cur.done) {
            let error = new Error("No requests added yet, Please add at least one request.");
            error.name = "Empty Payload";
            throw error;
        }
        if (!BatchRequestContent.validateDependencies(self.requests)) {
            let error = new Error(`Invalid dependency found, Dependency should be:
1. Parallel - no individual request states a dependency in the dependsOn property.
2. Serial - all individual requests depend on the previous individual request.
3. Same - all individual requests that state a dependency in the dependsOn property, state the same dependency.`);
            error.name = "Invalid Dependency";
            throw error;
        }
        while (!cur.done) {
            let requestStep = cur.value[1],
                batchRequestData = <BatchRequestData> await BatchRequestContent.getRequestData(requestStep.request);
            batchRequestData.id = requestStep.id;
            if (requestStep.dependsOn !== undefined && requestStep.dependsOn.length > 0) {
                batchRequestData.dependsOn = requestStep.dependsOn;
            }
            requests.push(batchRequestData);
            cur = iterator.next();
        }
        requestBody.requests = requests;
        return requestBody;
    }

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

    static validateDependencies(requests: Map<string, BatchRequestStep>): boolean {
        const isParallel = (requests: Map<string, BatchRequestStep>): boolean => {
            let iterator = requests.entries(),
                cur = iterator.next();
            while (!cur.done) {
                let curReq = cur.value[1];
                if (curReq.dependsOn !== undefined && curReq.dependsOn.length > 0) {
                    return false;
                }
                cur = iterator.next();
            }
            return true;
        };
        const isSerial = (requests: Map<string, BatchRequestStep>): boolean => {
            let iterator = requests.entries(),
                cur = iterator.next();
            let firstRequest: BatchRequestStep = cur.value[1];
            if (firstRequest.dependsOn !== undefined && firstRequest.dependsOn.length > 0) {
                return false;
            }
            let prev = cur;
            cur = iterator.next();
            while (!cur.done) {
                let curReq:BatchRequestStep = cur.value[1];
                if (curReq.dependsOn === undefined || curReq.dependsOn.length !== 1 || curReq.dependsOn[0] !== prev.value[1].id) {
                    return false;
                }
                prev = cur;
                cur = iterator.next();
            }
            return true;
        };
        const isSame = (requests: Map<string, BatchRequestStep>): boolean => {
            let iterator = requests.entries(),
                cur = iterator.next();
            let firstRequest: BatchRequestStep = cur.value[1],
                dependencyId: string;
            if (firstRequest.dependsOn === undefined || firstRequest.dependsOn.length === 0) {
                dependencyId = firstRequest.id;
            } else {
                if (firstRequest.dependsOn.length === 1) {
                    let fDependencyId = firstRequest.dependsOn[0];
                    if (fDependencyId !== firstRequest.id && requests.has(fDependencyId)) {
                        dependencyId = fDependencyId;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            }
            cur = iterator.next();
            while (!cur.done) {
                let curReq = cur.value[1];
                if ((curReq.dependsOn === undefined || curReq.dependsOn.length === 0) && dependencyId !== curReq.id) {
                    return false;
                }
                if (curReq.dependsOn !== undefined && curReq.dependsOn.length !== 0) {
                    if (curReq.dependsOn.length === 1 && (curReq.id === dependencyId || curReq.dependsOn[0] !== dependencyId)) {
                        return false;
                    }
                    if (curReq.dependsOn.length > 1) {
                        return false;
                    }
                }
                cur = iterator.next();
            }
            return true;
        };
        if (requests.size === 0) {
            let error = new Error("Empty requests map, Please provide at least one request.");
            error.name = "Empty Requests Error";
            throw error;
        }
        return (isParallel(requests) || isSerial(requests) || isSame(requests));
    }

    /**
     * @private
     * @static
     * @async
     * Converts Request Object instance to a JSON
     * @param {Request} request - The Request Object
     * @return A promise that resolves to JSON representation of a request
     */
    private static async getRequestData(request: Request): Promise<RequestData> {
        let requestData = <RequestData>{};
        // Stripping off hostname, port and url scheme
        requestData.url = "/" + request.url.split(/.*?\/\/.*?\//)[1];
        requestData.method = request.method;
        let headers = {};
        request.headers.forEach((value, key) => {
            headers[key] = value;
        });
        if (Object.keys(headers).length) {
            requestData.headers = headers;
        }
        if (request.method === RequestMethod.PATCH || request.method === RequestMethod.POST || request.method === RequestMethod.PUT) {
            requestData.body = await BatchRequestContent.getRequestBody(request);
        }
        /**
         * Check any other property needs to be used from the Request object and add them
         */
        return requestData;
    }

    /**
     * @private
     * @static
     * @async
     * Gets the body of a Request object instance
     * @param {Request} request - The Request object instance
     * @return The Promise that resolves to a body value of a Request
     */
    private static async getRequestBody(request: Request): Promise<any> {
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
                        let dataURL = <string>reader.result,
                            regex = new RegExp("^\s*data:(.+?\/.+?(;.+?\=.+?)*)?(;base64)?,(.*)\s*$"),
                            segments = regex.exec(dataURL);
                        resolve(segments[4]);
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
     * Adds a dependency for a given dependent request
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
        if (typeof dependencyId !== "undefined") {
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
        if (typeof request === "undefined" || request.dependsOn === undefined || request.dependsOn.length === 0) {
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
}
