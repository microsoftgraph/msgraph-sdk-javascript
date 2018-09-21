"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module BatchRequestContent
 */
var RequestMethod_1 = require("../RequestMethod");
/**
 * Class for handling BatchRequestContent
 */
var BatchRequestContent = /** @class */ (function () {
    /**
     * Constructs a BatchRequestContent instance
     * @param {BatchRequestStep[]} [requests] - Array of requests value
     */
    function BatchRequestContent(requests) {
        var self = this;
        self.requests = new Map();
        if (typeof requests !== "undefined") {
            var limit = BatchRequestContent.requestLimit;
            if (requests.length > limit) {
                var error = new Error("Maximum requests limit exceeded, Max allowed number of requests are " + limit);
                error.name = "Limit Exceeded Error";
                throw error;
            }
            for (var _i = 0, requests_1 = requests; _i < requests_1.length; _i++) {
                var req = requests_1[_i];
                self.addRequest(req);
            }
        }
    }
    /**
     * Adds a request to the batch request content
     * @param {BatchRequestStep} request - The request value
     * @return The id of the added request
     */
    BatchRequestContent.prototype.addRequest = function (request) {
        var self = this, limit = BatchRequestContent.requestLimit;
        if (request.id === "") {
            var error = new Error("Id for a request is empty, Please provide an unique id");
            error.name = "Empty Id For Request";
            throw error;
        }
        if (self.requests.size === limit) {
            var error = new Error("Maximum requests limit exceeded, Max allowed number of requests are " + limit);
            error.name = "Limit Exceeded Error";
            throw error;
        }
        if (self.requests.has(request.id)) {
            var error = new Error("Adding request with duplicate id " + request.id + ", Make the id of the requests unique");
            error.name = "Duplicate RequestId Error";
            throw error;
        }
        self.requests.set(request.id, request);
        return request.id;
    };
    /**
     * Removes request from the batch payload and its dependencies from all dependents
     * @param {string} requestId - The id of a request that needs to be removed
     * @return The boolean indicating removed status
     */
    BatchRequestContent.prototype.removeRequest = function (requestId) {
        var self = this, deleteStatus = self.requests.delete(requestId), iterator = self.requests.entries(), cur = iterator.next();
        /**
         * Removing dependencies where this request is present as a dependency
         */
        while (!cur.done) {
            var dependencies = cur.value[1].dependsOn;
            if (typeof dependencies !== "undefined") {
                var index = dependencies.indexOf(requestId);
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
    };
    /**
     * @async
     * Serialize content from BatchRequestContent instance
     * @return The body content to make batch request
     */
    BatchRequestContent.prototype.getContent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self, requestBody, requests, iterator, cur, error, error, requestStep, batchRequestData, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this, requestBody = {}, requests = [], iterator = self.requests.entries(), cur = iterator.next();
                        if (cur.done) {
                            error = new Error("No requests added yet, Please add at least one request.");
                            error.name = "Empty Payload";
                            throw error;
                        }
                        if (!BatchRequestContent.validateDependencies(self.requests)) {
                            error = new Error("Invalid dependency found, Dependency should be:\n1. Parallel - no individual request states a dependency in the dependsOn property.\n2. Serial - all individual requests depend on the previous individual request.\n3. Same - all individual requests that state a dependency in the dependsOn property, state the same dependency.");
                            error.name = "Invalid Dependency";
                            throw error;
                        }
                        _a.label = 1;
                    case 1:
                        if (!!cur.done) return [3 /*break*/, 3];
                        requestStep = cur.value[1];
                        return [4 /*yield*/, BatchRequestContent.getRequestData(requestStep.request)];
                    case 2:
                        batchRequestData = _a.sent();
                        /**
                         * @see {@link https://developer.microsoft.com/en-us/graph/docs/concepts/json_batching#request-format}
                         */
                        if (batchRequestData.body !== undefined && (batchRequestData.headers === undefined || batchRequestData.headers["content-type"] === undefined)) {
                            error = new Error("Content-type header is not mentioned for request #" + requestStep.id + ", For request having body, Content-type header should be mentioned");
                            error.name = "Invalid Content-type header";
                            throw error;
                        }
                        batchRequestData.id = requestStep.id;
                        if (requestStep.dependsOn !== undefined && requestStep.dependsOn.length > 0) {
                            batchRequestData.dependsOn = requestStep.dependsOn;
                        }
                        requests.push(batchRequestData);
                        cur = iterator.next();
                        return [3 /*break*/, 1];
                    case 3:
                        requestBody.requests = requests;
                        return [2 /*return*/, requestBody];
                }
            });
        });
    };
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
    BatchRequestContent.validateDependencies = function (requests) {
        var isParallel = function (requests) {
            var iterator = requests.entries(), cur = iterator.next();
            while (!cur.done) {
                var curReq = cur.value[1];
                if (curReq.dependsOn !== undefined && curReq.dependsOn.length > 0) {
                    return false;
                }
                cur = iterator.next();
            }
            return true;
        };
        var isSerial = function (requests) {
            var iterator = requests.entries(), cur = iterator.next();
            var firstRequest = cur.value[1];
            if (firstRequest.dependsOn !== undefined && firstRequest.dependsOn.length > 0) {
                return false;
            }
            var prev = cur;
            cur = iterator.next();
            while (!cur.done) {
                var curReq = cur.value[1];
                if (curReq.dependsOn === undefined || curReq.dependsOn.length !== 1 || curReq.dependsOn[0] !== prev.value[1].id) {
                    return false;
                }
                prev = cur;
                cur = iterator.next();
            }
            return true;
        };
        var isSame = function (requests) {
            var iterator = requests.entries(), cur = iterator.next();
            var firstRequest = cur.value[1], dependencyId;
            if (firstRequest.dependsOn === undefined || firstRequest.dependsOn.length === 0) {
                dependencyId = firstRequest.id;
            }
            else {
                if (firstRequest.dependsOn.length === 1) {
                    var fDependencyId = firstRequest.dependsOn[0];
                    if (fDependencyId !== firstRequest.id && requests.has(fDependencyId)) {
                        dependencyId = fDependencyId;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
            cur = iterator.next();
            while (!cur.done) {
                var curReq = cur.value[1];
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
            var error = new Error("Empty requests map, Please provide at least one request.");
            error.name = "Empty Requests Error";
            throw error;
        }
        return (isParallel(requests) || isSerial(requests) || isSame(requests));
    };
    /**
     * @private
     * @static
     * @async
     * Converts Request Object instance to a JSON
     * @param {IsomorphicRequest} request - The IsomorphicRequest Object instance
     * @return A promise that resolves to JSON representation of a request
     */
    BatchRequestContent.getRequestData = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var requestData, hasHttpRegex, headers, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        requestData = {};
                        hasHttpRegex = new RegExp("^https?:\/\/");
                        if (hasHttpRegex.test(request.url)) {
                            // Stripping off hostname, port and url scheme
                            requestData.url = "/" + request.url.split(/.*?\/\/.*?\//)[1];
                        }
                        else {
                            requestData.url = request.url;
                        }
                        requestData.method = request.method;
                        headers = {};
                        request.headers.forEach(function (value, key) {
                            headers[key] = value;
                        });
                        if (Object.keys(headers).length) {
                            requestData.headers = headers;
                        }
                        if (!(request.method === RequestMethod_1.RequestMethod.PATCH || request.method === RequestMethod_1.RequestMethod.POST || request.method === RequestMethod_1.RequestMethod.PUT)) return [3 /*break*/, 2];
                        _a = requestData;
                        return [4 /*yield*/, BatchRequestContent.getRequestBody(request)];
                    case 1:
                        _a.body = _b.sent();
                        _b.label = 2;
                    case 2: 
                    /**
                     * TODO: Check any other property needs to be used from the Request object and add them
                     */
                    return [2 /*return*/, requestData];
                }
            });
        });
    };
    /**
     * @private
     * @static
     * @async
     * Gets the body of a Request object instance
     * @param {IsomorphicRequest} request - The IsomorphicRequest object instance
     * @return The Promise that resolves to a body value of a Request
     */
    BatchRequestContent.getRequestBody = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var bodyParsed, body, cloneReq, e_1, blob_1, reader_1, buffer, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bodyParsed = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        cloneReq = request.clone();
                        return [4 /*yield*/, cloneReq.json()];
                    case 2:
                        body = _a.sent();
                        bodyParsed = true;
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4:
                        if (!!bodyParsed) return [3 /*break*/, 12];
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 11, , 12]);
                        if (!(typeof Blob !== "undefined")) return [3 /*break*/, 8];
                        return [4 /*yield*/, request.blob()];
                    case 6:
                        blob_1 = _a.sent();
                        reader_1 = new FileReader();
                        return [4 /*yield*/, new Promise(function (resolve) {
                                reader_1.addEventListener("load", function () {
                                    var dataURL = reader_1.result, 
                                    /**
                                     * Some valid dataURL schemes:
                                     *  1. data:text/vnd-example+xyz;foo=bar;base64,R0lGODdh
                                     *  2. data:text/plain;charset=UTF-8;page=21,the%20data:1234,5678
                                     *  3. data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==
                                     *  4. data:image/png,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==
                                     *  5. data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==
                                     * @see Syntax {@link https://en.wikipedia.org/wiki/Data_URI_scheme} for more
                                     */
                                    regex = new RegExp("^\s*data:(.+?\/.+?(;.+?\=.+?)*)?(;base64)?,(.*)\s*$"), segments = regex.exec(dataURL);
                                    resolve(segments[4]);
                                }, false);
                                reader_1.readAsDataURL(blob_1);
                            })];
                    case 7:
                        body = _a.sent();
                        return [3 /*break*/, 10];
                    case 8:
                        if (!(typeof Buffer !== "undefined")) return [3 /*break*/, 10];
                        return [4 /*yield*/, request.buffer()];
                    case 9:
                        buffer = _a.sent();
                        body = buffer.toString("base64");
                        _a.label = 10;
                    case 10:
                        bodyParsed = true;
                        return [3 /*break*/, 12];
                    case 11:
                        e_2 = _a.sent();
                        return [3 /*break*/, 12];
                    case 12: return [2 /*return*/, body];
                }
            });
        });
    };
    /**
     * Adds a dependency for a given dependent request
     *
     * @param {string} dependentId - The id of the dependent request
     * @param {string} [dependencyId] - The id of the dependency request, if not specified the preceding request will be considered as a dependency
     */
    BatchRequestContent.prototype.addDependency = function (dependentId, dependencyId) {
        var self = this;
        if (!self.requests.has(dependentId)) {
            var error = new Error("Dependent " + dependentId + " does not exists, Please check the id");
            error.name = "Invalid Dependent";
            throw error;
        }
        if (typeof dependencyId !== "undefined" && !self.requests.has(dependencyId)) {
            var error = new Error("Dependency " + dependencyId + " does not exists, Please check the id");
            error.name = "Invalid Dependency";
            throw error;
        }
        if (typeof dependencyId !== "undefined") {
            var dependent = self.requests.get(dependentId);
            if (dependent.dependsOn === undefined) {
                dependent.dependsOn = [];
            }
            if (dependent.dependsOn.includes(dependencyId)) {
                var error = new Error("Dependency " + dependencyId + " is already added for the request " + dependentId);
                error.name = "Duplicate Dependency";
                throw error;
            }
            dependent.dependsOn.push(dependencyId);
        }
        else {
            var prev = void 0, iterator = self.requests.entries(), cur = iterator.next();
            while (!cur.done && cur.value[1].id !== dependentId) {
                prev = cur;
                cur = iterator.next();
            }
            if (typeof prev !== "undefined") {
                var dependencyId_1 = prev.value[0];
                if (cur.value[1].dependsOn === undefined) {
                    cur.value[1].dependsOn = [];
                }
                if (cur.value[1].dependsOn.includes(dependencyId_1)) {
                    var error = new Error("Dependency " + dependencyId_1 + " is already added for the request " + dependentId);
                    error.name = "Duplicate Dependency";
                    throw error;
                }
                cur.value[1].dependsOn.push(dependencyId_1);
            }
            else {
                var error = new Error("Can't add dependency " + dependencyId + ", There is only a dependent request in the batch");
                error.name = "Invalid Dependency Addition";
                throw error;
            }
        }
    };
    /**
     * Removes a dependency for a given dependent request id
     * @param {string} dependentId - The id of the dependent request
     * @param {string} [dependencyId] - The id of the dependency request, if not specified will remove all the dependencies of that request
     * @return The boolean indicating removed status
     */
    BatchRequestContent.prototype.removeDependency = function (dependentId, dependencyId) {
        var request = this.requests.get(dependentId);
        if (typeof request === "undefined" || request.dependsOn === undefined || request.dependsOn.length === 0) {
            return false;
        }
        if (typeof dependencyId !== "undefined") {
            var index = request.dependsOn.indexOf(dependencyId);
            if (index === -1) {
                return false;
            }
            request.dependsOn.splice(index, 1);
            return true;
        }
        else {
            delete request.dependsOn;
            return true;
        }
    };
    /**
     * @private
     * @static
     * Limit for number of requests {@link - https://developer.microsoft.com/en-us/graph/docs/concepts/known_issues#json-batching}
     */
    BatchRequestContent.requestLimit = 20;
    return BatchRequestContent;
}());
exports.BatchRequestContent = BatchRequestContent;
//# sourceMappingURL=BatchRequestContent.js.map