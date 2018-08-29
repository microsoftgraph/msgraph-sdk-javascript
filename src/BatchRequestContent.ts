/**
 * @module BatchRequestContent
 */

interface BatchRequestPayload {
    requests: {[key:string] : any};
}

interface KeyValuePairObject {
    [key: string]: any;
}

/**
 * Class for handling BatchRequestContent
 */
export class BatchRequestContent {
    /**
     * Limit for number of requests {@link - https://developer.microsoft.com/en-us/graph/docs/concepts/known_issues#json-batching}
     */
    static requestLimit: number = 20;

    /**
     * To keep track of requests, key will be id of the request and value will be the request json
     */
    private requests: Map<string, KeyValuePairObject>;

    /**
     * Creates a BatchRequestContent instance
     * @param {any[]} [requests] - Array of requests or json for batch payload
     */
    constructor(requests?: any[]) {
        let self = this;
        self.requests = new Map();
        if (typeof requests !== "undefined") {
            let limit = BatchRequestContent.requestLimit;
            if (requests.length > limit) {
                let error = new Error(`Maximum requests limit exceeded, Max allowed numbers of requests are ${limit}`);
                error.name = "Limit Exceed Error";
                throw error;
            }
            for (const req of requests) {
                self.requests.set(req.id, req);
            }
        }
    }

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

    static async getJSONFromRequest(request: Request): Promise<any> {
        let requestJSON = <KeyValuePairObject>{};
        requestJSON.url = request.url;
        requestJSON.method = request.method;
        let headers = {};
        for (const pair of request.headers.entries()) {
            headers[pair[0]] = pair[1];
        }
        requestJSON.headers = headers;
        requestJSON.body = await BatchRequestContent.getBody(request);
        return requestJSON;
    }

    static async getBody(request: Request): Promise<any> {
        let bodyParsed: boolean = false,
        body;
        try {
            body = await request.json();
            bodyParsed = true;
        } catch(e) {

        }
        if (!bodyParsed) {
            try {
                body = await request.blob();
                bodyParsed = true;
            } catch(e) {
    
            }
        }
        if (!bodyParsed) {
            try {
                body = await request.formData();
                bodyParsed = true;
            } catch(e) {
    
            }
        }
        if (!bodyParsed) {
            try {
                body = await request.text();
                bodyParsed = true;
            } catch(e) {
    
            }
        }
        if (!bodyParsed) {
            try {
                body = await request.arrayBuffer();
                bodyParsed = true;
            } catch(e) {
    
            }
        }
        return body;
    }

    static getRandomId(): string {
        return Math.random().toString(36).substr(2, 9);
    }

    /**
     * Adds a request to the batch payload
     * @param {any} request - Request object or a json representing request
     * @return The id of the added request (id will be generated in case if user didn't provide one)
     */
    async addRequest(request: any): Promise<any> {
        let self = this,
            limit = BatchRequestContent.requestLimit;
        if (self.requests.size === limit) {
            let error = new Error(`Maximum requests limit exceeded, Max allowed numbers of requests are ${limit}`);
            error.name = "Limit Exceed Error";
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
     * Removes request from the batch payload
     * @param {string} requestId - Request id that needs to be removed
     * @return The boolean indicating removed status 
     */
    removeRequest(requestId: string): boolean {
        return this.requests.delete(requestId);
    }

    /**
     * Adds a dependency for a dependent
     * @param {string} dependentId - The id of the dependent request
     * @param {string} [dependencyId] - The id of the dependency request, if not specified the preceding request will be considered as a dependency
     */
    addDependency(dependentId: string, dependencyId?: string) {
        let self = this;
        if (!self.requests.has(dependentId)) {
            let error = new Error("Dependent does not exists, Please check the id");
            error.name = "Invalid Dependent";
            throw error;
        }
        if (typeof dependencyId !== "undefined" && !self.requests.has(dependencyId)) {
            let error = new Error("Dependency does not exists, Please check the id");
            error.name = "Invalid Dependency";
            throw error;
        }
        if(typeof dependencyId !== "undefined") {
            let dependent = self.requests.get(dependentId);
            if (dependent.dependsOn === undefined) {
                dependent.dependsOn = [];
            }
            dependent.dependsOn.push(dependencyId);
        } else {
            let prev,
                iterator = self.requests.entries(),
                cur = iterator.next();
            while (!cur.done && cur[1].id !== dependentId) {
                prev = cur;
                cur = iterator.next();
            }
            if (typeof prev !== "undefined") {
                if (cur[1].dependsOn === undefined) {
                    cur[1].dependsOn = [];
                }
                cur[1].dependsOn.push(prev[0]);
            } else {
                let error = new Error("Can't add dependency, There is only a dependent request in the batch");
                error.name = "Invalid Dependency Addition";
                throw error;
            }
        }
    }
    
    /**
     * Removes a dependency for a given request id
     * @param {string} dependentId - The id of the dependent request
     * @param {string} [dependencyId] - The id of the dependency request, if not specified will remove all the dependencies of that request
     * @return The boolean indicating removed status
     */
    removeDependency(dependentId: string, dependencyId: string): boolean {
        let request = this.requests.get(dependentId);
        if (request.dependsOn === undefined) {
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
     * @return payload to make batch request
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