"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module GraphRequest
 */
var Constants_1 = require("./Constants");
var GraphRequestUtil_1 = require("./GraphRequestUtil");
var RequestMethod_1 = require("./RequestMethod");
var ResponseType_1 = require("./ResponseType");
/**
 * @class
 * A Class representing GraphRequest
 */
var GraphRequest = /** @class */ (function () {
    /**
     * Creates an instance of GraphRequest
     * @param {HTTPClient} httpClient - The HTTPClient instance
     * @param {ClientOptions} config - The options for making request
     * @param {string} path - A path string
     */
    function GraphRequest(httpClient, config, path) {
        var _this = this;
        /**
         * @private
         * Parses the path string and creates URLComponents out of it
         * @param {string} path - The request path string
         * @returns nothing
         */
        this.parsePath = function (path) {
            var self = _this;
            //Strips out the base of the url if they passed in
            if (path.indexOf("https://") !== -1) {
                path = path.replace("https://", "");
                // Find where the host ends
                var endOfHostStrPos = path.indexOf("/");
                // Parse out the host
                self.urlComponents.host = "https://" + path.substring(0, endOfHostStrPos);
                // Strip the host from path
                path = path.substring(endOfHostStrPos + 1, path.length);
                // Remove the following version
                var endOfVersionStrPos = path.indexOf("/");
                // Parse out the version
                self.urlComponents.version = path.substring(0, endOfVersionStrPos);
                // Strip version from path
                path = path.substring(endOfVersionStrPos + 1, path.length);
            }
            // Strip out any leading "/"
            if (path.charAt(0) === "/") {
                path = path.substr(1);
            }
            var queryStrPos = path.indexOf("?");
            if (queryStrPos === -1) {
                // No query string
                self.urlComponents.path = path;
            }
            else {
                self.urlComponents.path = path.substr(0, queryStrPos);
                // Capture query string into oDataQueryParams and otherURLQueryParams
                var queryParams = path.substring(queryStrPos + 1, path.length).split("&");
                for (var _i = 0, queryParams_1 = queryParams; _i < queryParams_1.length; _i++) {
                    var queryParam = queryParams_1[_i];
                    var queryParams_2 = queryParam.split("="), key = queryParams_2[0], value = queryParams_2[1];
                    if (GraphRequestUtil_1.oDataQueryNames.indexOf(key)) {
                        self.urlComponents.oDataQueryParams[key] = value;
                    }
                    else {
                        self.urlComponents.otherURLQueryParams[key] = value;
                    }
                }
            }
        };
        var self = this;
        self.httpClient = httpClient;
        self.config = config;
        self.urlComponents = {
            host: self.config.baseUrl,
            version: self.config.defaultVersion,
            oDataQueryParams: {},
            otherURLQueryParams: {}
        };
        self._options = {};
        self._headers = {};
        self.parsePath(path);
    }
    /**
     * @public
     * Sets the custom header for a request
     * @param {string} headerKey - A header key
     * @param {string} headerValue - A header value
     * @returns The same GraphRequest instance that is being called with
     */
    GraphRequest.prototype.header = function (headerKey, headerValue) {
        var self = this;
        self._headers[headerKey] = headerValue;
        return self;
    };
    /**
     * @public
     * Sets the custom headers for a request
     * @param {KeyValuePairObjectStringNumber} headers - The headers key value pair object
     * @returns The same GraphRequest instance that is being called with
     */
    GraphRequest.prototype.headers = function (headers) {
        var self = this;
        for (var key in headers) {
            self._headers[key] = headers[key];
        }
        return self;
    };
    /**
     * @public
     * Sets the option for making a request
     * @param {string} key - The key value
     * @param {any} value - The value
     * @returns The same GraphRequest instance that is being called with
     */
    GraphRequest.prototype.option = function (key, value) {
        var self = this;
        self._options[key] = value;
        return self;
    };
    /**
     * @public
     * Sets the options for making a request
     * @param {{ [key: string]: any }} options - The options key value pair
     * @returns The same GraphRequest instance that is being called with
     */
    GraphRequest.prototype.options = function (options) {
        var self = this;
        for (var key in options) {
            self._options[key] = options[key];
        }
        return self;
    };
    /**
     * @public
     * Sets the api endpoint version for a request
     * @param {string} version - The version value
     * @returns The same GraphRequest instance that is being called with
     */
    GraphRequest.prototype.version = function (version) {
        var self = this;
        self.urlComponents.version = version;
        return self;
    };
    /**
     * @public
     * Sets the api endpoint version for a request
     * @param {ResponseType} responseType - The response type value
     * @returns The same GraphRequest instance that is being called with
     */
    GraphRequest.prototype.responseType = function (responseType) {
        var self = this;
        self._responseType = responseType;
        return self;
    };
    /**
     * @private
     * Adds the query parameter as comma separated values
     * @param {string} propertyName - The name of a property
     * @param {string|string[]} propertyValue - The vale of a property
     * @param {IArguments} additionalProperties - The additional properties
     * @returns nothing
     */
    GraphRequest.prototype.addCsvQueryParameter = function (propertyName, propertyValue, additionalProperties) {
        // If there are already $propertyName value there, append a ","
        this.urlComponents.oDataQueryParams[propertyName] = this.urlComponents.oDataQueryParams[propertyName] ? this.urlComponents.oDataQueryParams[propertyName] + "," : "";
        var allValues = [];
        if (additionalProperties.length > 1 && typeof propertyValue === "string") {
            allValues = Array.prototype.slice.call(additionalProperties);
        }
        else if (typeof propertyValue === "string") {
            allValues.push(propertyValue);
        }
        else {
            allValues = allValues.concat(propertyValue);
        }
        this.urlComponents.oDataQueryParams[propertyName] += allValues.join(",");
    };
    /**
     * @public
     * To add properties for select OData Query param
     * @param {string|string[]} properties - The Properties value
     * @returns The same GraphRequest instance that is being called with
     */
    /*
    * Accepts .select("displayName,birthday")
    *     and .select(["displayName", "birthday"])
    *     and .select("displayName", "birthday")
    *
    */
    GraphRequest.prototype.select = function (properties) {
        var self = this;
        self.addCsvQueryParameter("$select", properties, arguments);
        return self;
    };
    /**
     * @public
     * To add properties for expand OData Query param
     * @param {string|string[]} properties - The Properties value
     * @returns The same GraphRequest instance that is being called with
     */
    GraphRequest.prototype.expand = function (properties) {
        var self = this;
        self.addCsvQueryParameter("$expand", properties, arguments);
        return self;
    };
    /**
     * @public
     * To add properties for orderby OData Query param
     * @param {string|string[]} properties - The Properties value
     * @returns The same GraphRequest instance that is being called with
     */
    GraphRequest.prototype.orderby = function (properties) {
        var self = this;
        self.addCsvQueryParameter("$orderby", properties, arguments);
        return self;
    };
    /**
     * @public
     * To add query string for filter OData Query param
     * @param {string} filterStr - The filter query string
     * @returns The same GraphRequest instance that is being called with
     */
    GraphRequest.prototype.filter = function (filterStr) {
        var self = this;
        self.urlComponents.oDataQueryParams["$filter"] = filterStr;
        return self;
    };
    /**
     * @public
     * To add criterion for search OData Query param
     * @param {string} searchStr - The search criterion string
     * @returns The same GraphRequest instance that is being called with
     */
    GraphRequest.prototype.search = function (searchStr) {
        var self = this;
        self.urlComponents.oDataQueryParams["$search"] = searchStr;
        return self;
    };
    /**
     * @public
     * To add number for top OData Query param
     * @param {number} n - The number value
     * @returns The same GraphRequest instance that is being called with
     */
    GraphRequest.prototype.top = function (n) {
        var self = this;
        self.urlComponents.oDataQueryParams["$top"] = n;
        return self;
    };
    /**
     * @public
     * To add number for skip OData Query param
     * @param {number} n - The number value
     * @returns The same GraphRequest instance that is being called with
     */
    GraphRequest.prototype.skip = function (n) {
        var self = this;
        self.urlComponents.oDataQueryParams["$skip"] = n;
        return self;
    };
    /**
     * @public
     * To add token string for skipToken OData Query param
     * @param {string} token - The token value
     * @returns The same GraphRequest instance that is being called with
     */
    GraphRequest.prototype.skipToken = function (token) {
        var self = this;
        self.urlComponents.oDataQueryParams["$skipToken"] = token;
        return self;
    };
    /**
     * @public
     * To add boolean for count OData Query param
     * @param {boolean} isCount - The count boolean
     * @returns The same GraphRequest instance that is being called with
     */
    GraphRequest.prototype.count = function (isCount) {
        var self = this;
        self.urlComponents.oDataQueryParams["$count"] = isCount.toString();
        return self;
    };
    /**
     * @public
     * Appends query string to the urlComponent
     * @param {string|KeyValuePairObjectStringNumber} queryDictionaryOrString - The query value
     * @returns The same GraphRequest instance that is being called with
     */
    GraphRequest.prototype.query = function (queryDictionaryOrString) {
        var self = this, otherURLQueryParams = self.urlComponents.otherURLQueryParams;
        if (typeof queryDictionaryOrString === "string") {
            var querySplit = queryDictionaryOrString.split("="), queryKey = querySplit[0], queryValue = querySplit[1];
            otherURLQueryParams[queryKey] = queryValue;
        }
        else {
            for (var key in queryDictionaryOrString) {
                otherURLQueryParams[key] = queryDictionaryOrString[key];
            }
        }
        return self;
    };
    /**
     * @private
     * Builds the full url from the URLComponents to make a request
     * @returns The URL string that is qualified to make a request to graph endpoint
     */
    GraphRequest.prototype.buildFullUrl = function () {
        var self = this;
        var url = GraphRequestUtil_1.urlJoin([self.urlComponents.host,
            self.urlComponents.version,
            self.urlComponents.path])
            + self.createQueryString();
        if (self.config.debugLogging) {
            console.log(url);
        }
        return url;
    };
    /**
     * @private
     * Builds the query string from the URLComponents
     * @returns The Constructed query string
     */
    GraphRequest.prototype.createQueryString = function () {
        // Combining query params from oDataQueryParams and otherURLQueryParams
        var urlComponents = this.urlComponents, query = [];
        if (Object.keys(urlComponents.oDataQueryParams).length !== 0) {
            for (var property in urlComponents.oDataQueryParams) {
                query.push(property + "=" + urlComponents.oDataQueryParams[property]);
            }
        }
        if (Object.keys(urlComponents.otherURLQueryParams).length !== 0) {
            for (var property in urlComponents.otherURLQueryParams) {
                query.push(property + "=" + urlComponents.otherURLQueryParams[property]);
            }
        }
        return (query.length > 0) ? "?" + query.join("&") : "";
    };
    /**
     * @private
     * Adds the custom headers and options for the request
     * @returns The options of a request
     */
    GraphRequest.prototype.getRequestOptions = function () {
        var self = this, defaultHeaders = {
            SdkVersion: "graph-js-" + Constants_1.PACKAGE_VERSION
        }, customizedOptions = {
            headers: {}
        };
        if (self.config.middlewareOptions !== undefined) {
            Object.assign(customizedOptions, self.config.middlewareOptions.requestOptions);
        }
        Object.assign(customizedOptions, self._options);
        Object.assign(customizedOptions.headers, defaultHeaders, self._headers);
        return customizedOptions;
    };
    /**
     * @private
     * @async
     * Adds the custom headers and options to the request and makes the HTTPClient send request call
     * @param {RequestInfo} request - The request url string or the Request object value
     * @param {FetchOptions} options - The options to make a request
     * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
     * @returns A promise that resolves to the response content
     */
    GraphRequest.prototype.send = function (request, options, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var self, requestOptions, middlewareOptions, context_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this, requestOptions = self.getRequestOptions();
                        if (self.config.middlewareOptions !== undefined) {
                            if (self.config.middlewareOptions.requestOptions !== undefined) {
                                requestOptions.headers = Object.assign({}, self.config.middlewareOptions.requestOptions.headers, requestOptions.headers);
                            }
                            requestOptions = Object.assign({}, self.config.middlewareOptions.requestOptions, requestOptions);
                        }
                        middlewareOptions = Object.assign({}, self.config.middlewareOptions, { requestOptions: requestOptions });
                        middlewareOptions.responseType = self._responseType;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, self.httpClient.sendRequest(request, options, middlewareOptions)];
                    case 2:
                        context_1 = _a.sent();
                        self._rawResponse = context_1.rawResponse;
                        if (typeof callback !== "undefined") {
                            callback(null, context_1.response, context_1.rawResponse);
                        }
                        else {
                            return [2 /*return*/, context_1.response];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        if (typeof callback !== "undefined") {
                            callback(error_1, null);
                        }
                        else {
                            throw error_1;
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @public
     * @async
     * Makes a http request with GET method
     * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
     * @returns A promise that resolves to the get response
     */
    GraphRequest.prototype.get = function (callback) {
        return __awaiter(this, void 0, void 0, function () {
            var self, url, options, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this, url = self.buildFullUrl(), options = {
                            method: RequestMethod_1.RequestMethod.GET
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, self.send(url, options, callback)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 3:
                        error_2 = _a.sent();
                        throw error_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @public
     * @async
     * Makes a http request with POST method
     * @param {any} content - The content that needs to be sent with the request
     * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
     * @returns A promise that resolves to the post response
     */
    GraphRequest.prototype.post = function (content, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var self, url, options, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this, url = self.buildFullUrl(), options = {
                            method: RequestMethod_1.RequestMethod.POST,
                            body: GraphRequestUtil_1.serializeContent(content),
                            headers: (content.constructor !== undefined && content.constructor.name === "FormData") ? {} : {
                                "Content-Type": "application/json"
                            }
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, self.send(url, options, callback)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 3:
                        error_3 = _a.sent();
                        throw error_3;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @public
     * @async
     * Alias for Post request call
     * @param {any} content - The content that needs to be sent with the request
     * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
     * @returns A promise that resolves to the post response
     */
    GraphRequest.prototype.create = function (content, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(content, callback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @public
     * @async
     * Makes http request with PUT method
     * @param {any} content - The content that needs to be sent with the request
     * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
     * @returns A promise that resolves to the put response
     */
    GraphRequest.prototype.put = function (content, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var self, url, options, response;
            return __generator(this, function (_a) {
                self = this, url = self.buildFullUrl(), options = {
                    method: RequestMethod_1.RequestMethod.PUT,
                    body: GraphRequestUtil_1.serializeContent(content),
                    headers: {
                        "Content-Type": "application/octet-stream"
                    }
                };
                try {
                    response = self.send(url, options, callback);
                    return [2 /*return*/, response];
                }
                catch (error) {
                    throw error;
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * @public
     * @async
     * Makes http request with PATCH method
     * @param {any} content - The content that needs to be sent with the request
     * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
     * @returns A promise that resolves to the patch response
     */
    GraphRequest.prototype.patch = function (content, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var self, url, options, response, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this, url = self.buildFullUrl(), options = {
                            method: RequestMethod_1.RequestMethod.PATCH,
                            body: GraphRequestUtil_1.serializeContent(content),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, self.send(url, options, callback)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 3:
                        error_4 = _a.sent();
                        throw error_4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @public
     * @async
     * Alias for PATCH request
     * @param {any} content - The content that needs to be sent with the request
     * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
     * @returns A promise that resolves to the patch response
     */
    GraphRequest.prototype.update = function (content, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.patch(content, callback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @public
     * @async
     * Makes http request with DELETE method
     * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
     * @returns A promise that resolves to the delete response
     */
    GraphRequest.prototype.delete = function (callback) {
        return __awaiter(this, void 0, void 0, function () {
            var self, url, options, response, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this, url = self.buildFullUrl(), options = {
                            method: RequestMethod_1.RequestMethod.DELETE
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, self.send(url, options, callback)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 3:
                        error_5 = _a.sent();
                        throw error_5;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @public
     * @async
     * Alias for delete request call
     * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
     * @returns A promise that resolves to the delete response
     */
    GraphRequest.prototype.del = function (callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.delete(callback)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @public
     * @async
     * Makes a http request with GET method to read response as a stream.
     * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
     * @returns A promise that resolves to the getStream response
     */
    GraphRequest.prototype.getStream = function (callback) {
        return __awaiter(this, void 0, void 0, function () {
            var self, url, options, stream, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this, url = self.buildFullUrl(), options = {
                            method: RequestMethod_1.RequestMethod.GET
                        };
                        self.responseType(ResponseType_1.ResponseType.STREAM);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, self.send(url, options, callback)];
                    case 2:
                        stream = _a.sent();
                        return [2 /*return*/, stream];
                    case 3:
                        error_6 = _a.sent();
                        throw error_6;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @public
     * @async
     * Makes a http request with GET method to read response as a stream.
     * @param {any} stream - The stream instance
     * @param {GraphRequestCallback} [callback] - The callback function to be called in response with async call
     * @returns A promise that resolves to the putStream response
     */
    GraphRequest.prototype.putStream = function (stream, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var self, url, options, response, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this, url = self.buildFullUrl(), options = {
                            method: RequestMethod_1.RequestMethod.PUT,
                            headers: {
                                "Content-Type": "application/octet-stream",
                            },
                            body: stream
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, self.send(url, options, callback)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 3:
                        error_7 = _a.sent();
                        throw error_7;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @public
     * To get the raw response for a request
     * @returns The raw response instance
     */
    GraphRequest.prototype.getRawResponse = function () {
        return this._rawResponse;
    };
    return GraphRequest;
}());
exports.GraphRequest = GraphRequest;
//# sourceMappingURL=GraphRequest.js.map