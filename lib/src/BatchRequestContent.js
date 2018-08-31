"use strict";
/**
 * @module BatchRequestContent
 */
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var RequestMethod_1 = require("./RequestMethod");
/**
 * Class for handling BatchRequestContent
 */
var BatchRequestContent = /** @class */ (function () {
    /**
     * Constructs a BatchRequestContent instance
     * @param {any[]} [requests] - Array of requests or json for batch payload
     */
    function BatchRequestContent(requests) {
        var e_1, _a;
        var self = this;
        self.requests = new Map();
        if (typeof requests !== "undefined") {
            var limit = BatchRequestContent.requestLimit;
            if (requests.length > limit) {
                var error = new Error("Maximum requests limit exceeded, Max allowed numbers of requests are " + limit);
                error.name = "Limit Exceeded Error";
                throw error;
            }
            try {
                for (var requests_1 = __values(requests), requests_1_1 = requests_1.next(); !requests_1_1.done; requests_1_1 = requests_1.next()) {
                    var req = requests_1_1.value;
                    self.requests.set(req.id, req);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (requests_1_1 && !requests_1_1.done && (_a = requests_1.return)) _a.call(requests_1);
                }
                finally { if (e_1) throw e_1.error; }
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
    BatchRequestContent.create = function (requests) {
        return __awaiter(this, void 0, void 0, function () {
            var i, l, _a, _b, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 6, , 7]);
                        if (!(typeof requests !== "undefined")) return [3 /*break*/, 5];
                        i = 0, l = requests.length;
                        _c.label = 1;
                    case 1:
                        if (!(i < l)) return [3 /*break*/, 5];
                        if (!(requests[i].constructor.name === "Request")) return [3 /*break*/, 3];
                        _a = requests;
                        _b = i;
                        return [4 /*yield*/, BatchRequestContent.getJSONFromRequest(requests[i])];
                    case 2:
                        _a[_b] = _c.sent();
                        _c.label = 3;
                    case 3:
                        if (requests[i].id === undefined) {
                            requests[i].id = BatchRequestContent.getRandomId();
                        }
                        _c.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/, new BatchRequestContent(requests)];
                    case 6:
                        error_1 = _c.sent();
                        throw error_1;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @static
     * @async
     * Converts Request Object instance to a JSON
     * @param {Request} request - The Request Object
     * @return A promise that resolves to JSON representation of a request
     */
    BatchRequestContent.getJSONFromRequest = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var e_2, _a, requestJSON, headers, _b, _c, pair, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        requestJSON = {};
                        // Stripping off hostname, port and url scheme
                        requestJSON.url = "/" + request.url.split(/.*?\/\/.*?\//)[1];
                        requestJSON.method = request.method;
                        headers = {};
                        try {
                            for (_b = __values(request.headers.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                                pair = _c.value;
                                headers[pair[0]] = pair[1];
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        requestJSON.headers = headers;
                        if (!(request.method === RequestMethod_1.RequestMethod.PATCH || request.method === RequestMethod_1.RequestMethod.POST || request.method === RequestMethod_1.RequestMethod.PUT)) return [3 /*break*/, 2];
                        _d = requestJSON;
                        return [4 /*yield*/, BatchRequestContent.getBody(request)];
                    case 1:
                        _d.body = _e.sent();
                        _e.label = 2;
                    case 2: return [2 /*return*/, requestJSON];
                }
            });
        });
    };
    /**
     * @static
     * @async
     * Gets the body of a Request object instance
     * @param {Request} request - The Request object instance
     * @return The Promise that resolves to a body value of a Request
     */
    BatchRequestContent.getBody = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var bodyParsed, body, cloneReq, e_3, blob_1, reader_1, e_4;
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
                        e_3 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4:
                        if (!!bodyParsed) return [3 /*break*/, 9];
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 8, , 9]);
                        return [4 /*yield*/, request.blob()];
                    case 6:
                        blob_1 = _a.sent(), reader_1 = new FileReader();
                        return [4 /*yield*/, new Promise(function (resolve) {
                                reader_1.addEventListener("load", function () {
                                    resolve(reader_1.result);
                                }, false);
                                reader_1.readAsDataURL(blob_1);
                            })];
                    case 7:
                        body = _a.sent();
                        bodyParsed = true;
                        return [3 /*break*/, 9];
                    case 8:
                        e_4 = _a.sent();
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/, body];
                }
            });
        });
    };
    /**
     * @static
     * To get the random id
     * @return The random id of length 9
     */
    BatchRequestContent.getRandomId = function () {
        return Math.random().toString(36).substr(2, 9);
    };
    /**
     * @async
     * Adds a request to the batch payload
     * @param {any} request - Request object or a json representing request
     * @return The id of the added request (id will be generated in case if user didn't provide one)
     */
    BatchRequestContent.prototype.addRequest = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var self, limit, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this, limit = BatchRequestContent.requestLimit;
                        if (self.requests.size === limit) {
                            error = new Error("Maximum requests limit exceeded, Max allowed numbers of requests are " + limit);
                            error.name = "Limit Exceeded Error";
                            throw error;
                        }
                        if (!(request.constructor.name === "Request")) return [3 /*break*/, 2];
                        return [4 /*yield*/, BatchRequestContent.getJSONFromRequest(request)];
                    case 1:
                        request = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (request.id === undefined) {
                            request.id = BatchRequestContent.getRandomId();
                        }
                        this.requests.set(request.id, request);
                        return [2 /*return*/, request.id];
                }
            });
        });
    };
    /**
     * Removes request from the batch payload and its dependencies from all dependents
     * @param {string} requestId - Request id that needs to be removed
     * @return The boolean indicating removed status
     */
    BatchRequestContent.prototype.removeRequest = function (requestId) {
        /**
         * Removing dependency of this request id present as a dependency
         */
        var self = this, iterator = self.requests.entries(), cur = iterator.next();
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
        return self.requests.delete(requestId);
    };
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
        if (typeof request === "undefined" || request.dependsOn === undefined) {
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
     * Extract content from BatchRequestContent instance
     * @return The payload to make batch request
     */
    BatchRequestContent.prototype.content = function () {
        var requests = [], iterator = this.requests.entries(), cur = iterator.next();
        if (cur.done) {
            var error = new Error("No requests added yet, Please add at least one request.");
            error.name = "Empty Payload";
            throw error;
        }
        while (!cur.done) {
            requests.push(cur.value[1]);
            cur = iterator.next();
        }
        return {
            requests: requests
        };
    };
    /**
     * @static
     * Limit for number of requests {@link - https://developer.microsoft.com/en-us/graph/docs/concepts/known_issues#json-batching}
     */
    BatchRequestContent.requestLimit = 20;
    return BatchRequestContent;
}());
exports.BatchRequestContent = BatchRequestContent;
//# sourceMappingURL=BatchRequestContent.js.map