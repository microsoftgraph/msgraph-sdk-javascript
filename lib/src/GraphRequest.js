"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var es6_promise_1 = require("es6-promise");
require("isomorphic-fetch");
var common_1 = require("./common");
var ResponseHandler_1 = require("./ResponseHandler");
var RequestMethod_1 = require("./RequestMethod");
var ResponseType_1 = require("./ResponseType");
var GraphHelper_1 = require("./GraphHelper");
var GraphRequest = /** @class */ (function () {
    function GraphRequest(config, path) {
        var self = this;
        self.config = config;
        self._options = {};
        self._headers = {};
        self.urlComponents = {
            host: self.config.baseUrl,
            version: self.config.defaultVersion,
            oDataQueryParams: {},
            otherURLQueryParams: {}
        };
        self.parsePath(path);
    }
    GraphRequest.prototype.header = function (headerKey, headerValue) {
        var self = this;
        self._headers[headerKey] = headerValue;
        return self;
    };
    GraphRequest.prototype.headers = function (headers) {
        var self = this;
        for (var key in headers) {
            self._headers[key] = headers[key];
        }
        return self;
    };
    GraphRequest.prototype.option = function (key, value) {
        var self = this;
        self._options[key] = value;
        return self;
    };
    GraphRequest.prototype.options = function (options) {
        var self = this;
        for (var key in options) {
            self._options[key] = options[key];
        }
        return self;
    };
    GraphRequest.prototype.parsePath = function (rawPath) {
        // break rawPath into this.urlComponents
        // strip out the base url if they passed it in
        if (rawPath.indexOf("https://") != -1) {
            rawPath = rawPath.replace("https://", "");
            // find where the host ends
            var endOfHostStrPos = rawPath.indexOf("/");
            this.urlComponents.host = "https://" + rawPath.substring(0, endOfHostStrPos); // parse out the host
            // strip the host from rawPath
            rawPath = rawPath.substring(endOfHostStrPos + 1, rawPath.length);
            // then remove the following version
            var endOfVersionStrPos = rawPath.indexOf("/");
            // parse out the version
            this.urlComponents.version = rawPath.substring(0, endOfVersionStrPos);
            // strip version from rawPath
            rawPath = rawPath.substring(endOfVersionStrPos + 1, rawPath.length);
        }
        // strip out any leading "/"
        if (rawPath.charAt(0) == "/") {
            rawPath = rawPath.substr(1);
        }
        var queryStrPos = rawPath.indexOf("?");
        // let afterPath = 
        if (queryStrPos == -1) {
            // no query string
            this.urlComponents.path = rawPath;
        }
        else {
            this.urlComponents.path = rawPath.substr(0, queryStrPos);
            // capture query string into
            // this.urlComponents.oDataQueryParams
            // and
            // this.urlComponents.otherURLQueryParams
            var queryParams = rawPath.substring(queryStrPos + 1, rawPath.length).split("&");
            for (var _i = 0, queryParams_1 = queryParams; _i < queryParams_1.length; _i++) {
                var queryParam = queryParams_1[_i];
                //queryParam:  a=b
                var queryParams_2 = queryParam.split("=");
                var key = queryParams_2[0];
                var value = queryParams_2[1];
                if (common_1.oDataQueryNames.indexOf(key)) {
                    this.urlComponents.oDataQueryParams[key] = value;
                }
                else {
                    this.urlComponents.otherURLQueryParams[key] = value;
                }
            }
        }
    };
    GraphRequest.prototype.urlJoin = function (urlSegments) {
        var tr = function (s) { return s.replace(/\/+$/, ''); };
        var tl = function (s) { return s.replace(/^\/+/, ''); };
        var joiner = function (pre, cur) { return [tr(pre), tl(cur)].join('/'); };
        var parts = Array.prototype.slice.call(urlSegments);
        return parts.reduce(joiner);
    };
    GraphRequest.prototype.buildFullUrl = function () {
        var url = this.urlJoin([this.urlComponents.host,
            this.urlComponents.version,
            this.urlComponents.path])
            + this.createQueryString();
        if (this.config.debugLogging) {
            console.log(url);
        }
        return url;
    };
    GraphRequest.prototype.version = function (v) {
        this.urlComponents.version = v;
        return this;
    };
    /*
     * Accepts .select("displayName,birthday")
     *     and .select(["displayName", "birthday"])
     *     and .select("displayName", "birthday")
     *
     */
    GraphRequest.prototype.select = function (properties) {
        this.addCsvQueryParameter("$select", properties, arguments);
        return this;
    };
    GraphRequest.prototype.expand = function (properties) {
        this.addCsvQueryParameter("$expand", properties, arguments);
        return this;
    };
    GraphRequest.prototype.orderby = function (properties) {
        this.addCsvQueryParameter("$orderby", properties, arguments);
        return this;
    };
    GraphRequest.prototype.search = function (searchStr) {
        this.urlComponents.oDataQueryParams["$search"] = "\"" + searchStr + "\"";
        return this;
    };
    GraphRequest.prototype.filter = function (filterStr) {
        this.urlComponents.oDataQueryParams["$filter"] = filterStr;
        return this;
    };
    GraphRequest.prototype.top = function (n) {
        this.urlComponents.oDataQueryParams["$top"] = n;
        return this;
    };
    GraphRequest.prototype.skip = function (n) {
        this.urlComponents.oDataQueryParams["$skip"] = n;
        return this;
    };
    GraphRequest.prototype.skipToken = function (token) {
        this.urlComponents.oDataQueryParams["$skipToken"] = token;
        return this;
    };
    GraphRequest.prototype.count = function (count) {
        this.urlComponents.oDataQueryParams["$count"] = count.toString();
        return this;
    };
    GraphRequest.prototype.responseType = function (responseType) {
        this._responseType = responseType;
        return this;
    };
    // helper for $select, $expand and $orderby (must be comma separated)
    GraphRequest.prototype.addCsvQueryParameter = function (propertyName, propertyValue, additionalProperties) {
        // if there are already $propertyName value there, append a ","
        this.urlComponents.oDataQueryParams[propertyName] = this.urlComponents.oDataQueryParams[propertyName] ? this.urlComponents.oDataQueryParams[propertyName] + "," : "";
        var allValues = [];
        if (typeof propertyValue === "string") {
            allValues.push(propertyValue);
        }
        else { // propertyValue passed in as array
            allValues = allValues.concat(propertyValue);
        }
        // merge in additionalProperties
        if (additionalProperties.length > 1 && typeof propertyValue === "string") {
            allValues = Array.prototype.slice.call(additionalProperties);
        }
        this.urlComponents.oDataQueryParams[propertyName] += allValues.join(",");
    };
    GraphRequest.prototype.delete = function (callback) {
        var self = this, url = self.buildFullUrl(), options = {
            method: RequestMethod_1.RequestMethod.DELETE
        };
        return self.sendRequestAndRouteResponse(url, options, callback);
    };
    /**
     * Alias for delete call
     */
    GraphRequest.prototype.del = function (callback) {
        return this.delete(callback);
    };
    GraphRequest.prototype.patch = function (content, callback) {
        var self = this, url = self.buildFullUrl(), options = {
            method: RequestMethod_1.RequestMethod.PATCH,
            body: GraphHelper_1.GraphHelper.serializeContent(content),
            headers: {
                "Content-Type": "application/json"
            }
        };
        return self.sendRequestAndRouteResponse(url, options, callback);
    };
    GraphRequest.prototype.post = function (content, callback) {
        var self = this, url = self.buildFullUrl(), options = {
            method: RequestMethod_1.RequestMethod.POST,
            body: GraphHelper_1.GraphHelper.serializeContent(content),
            headers: (content.constructor !== undefined && content.constructor.name === "FormData") ? {} : {
                "Content-Type": "application/json"
            }
        };
        return self.sendRequestAndRouteResponse(url, options, callback);
    };
    /**
     * Alias for Post call
     */
    GraphRequest.prototype.create = function (content, callback) {
        return this.post(content, callback);
    };
    GraphRequest.prototype.put = function (content, callback) {
        var self = this, url = self.buildFullUrl(), options = {
            method: RequestMethod_1.RequestMethod.PUT,
            body: GraphHelper_1.GraphHelper.serializeContent(content),
            headers: {
                "Content-Type": "application/octet-stream"
            }
        };
        return self.sendRequestAndRouteResponse(url, options, callback);
    };
    /**
     * Alias for update call
     */
    GraphRequest.prototype.update = function (content, callback) {
        return this.patch(content, callback);
    };
    GraphRequest.prototype.get = function (callback) {
        var self = this, url = self.buildFullUrl(), options = {
            method: RequestMethod_1.RequestMethod.GET
        };
        return self.sendRequestAndRouteResponse(url, options, callback);
    };
    GraphRequest.prototype.getStream = function (callback) {
        var self = this, url = self.buildFullUrl(), options = {
            method: RequestMethod_1.RequestMethod.GET
        };
        self.responseType(ResponseType_1.ResponseType.STREAM);
        return self.sendRequestAndRouteResponse(url, options, callback);
    };
    GraphRequest.prototype.putStream = function (stream, callback) {
        var self = this, url = self.buildFullUrl(), options = {
            method: RequestMethod_1.RequestMethod.PUT,
            headers: {
                "Content-Type": "application/octet-stream",
            },
            body: stream
        };
        return self.sendRequestAndRouteResponse(url, options, callback);
    };
    /**
     * @private
     * Sends request and routes response to the callback or resolves to promise
     * @param {RequestInfo} request - The Request object or url string value
     * @param {FetchOptions} options - The options for the fetch api request
     * @param {GraphRequestCallback} callback - The callback that needs to be called on response
     * @return The promise in case if the callback param is empty
     */
    GraphRequest.prototype.sendRequestAndRouteResponse = function (request, options, callback) {
        // return a promise when Promises are supported and no callback was provided
        if (callback == null && typeof es6_promise_1.Promise !== "undefined") {
            return this.routeResponseToPromise(request, options);
        }
        else {
            this.routeResponseToCallback(request, options, callback);
        }
    };
    /**
     * @private
     * Gets the Promise that will resolve or reject with fetch api request
     * @param {RequestInfo} request - The Request object or url string value
     * @param {FetchOptions} options - The options for the fetch api request
     * @return The Promise that resolves with Response
     */
    GraphRequest.prototype.routeResponseToPromise = function (request, options) {
        var _this = this;
        return new es6_promise_1.Promise(function (resolve, reject) {
            _this.routeResponseToCallback(request, options, function (err, body) {
                if (err != null) {
                    reject(err);
                }
                else {
                    resolve(body);
                }
            });
        });
    };
    /**
     * @private
     * Makes request to the service by getting auth token from the auth provider
     * @param {RequestInfo} request - The Request object or url string value
     * @param {FetchOptions} options - The options for the fetch api request
     * @param {GraphRequestCallback} callback - The callback function
     */
    GraphRequest.prototype.routeResponseToCallback = function (request, options, callback) {
        var _this = this;
        if (callback === void 0) { callback = function () { }; }
        var self = this;
        self.config.authProvider(function (err, accessToken) {
            if (err == null && accessToken != null) {
                options = self.configureRequestOptions(options, accessToken);
                fetch(request, options).then(function (response) {
                    _this.convertResponseType(response).then(function (responseValue) {
                        ResponseHandler_1.ResponseHandler.init(response, undefined, responseValue, callback);
                    }).catch(function (error) {
                        ResponseHandler_1.ResponseHandler.init(response, error, undefined, callback);
                    });
                }).catch(function (error) {
                    ResponseHandler_1.ResponseHandler.init(undefined, error, undefined, callback);
                });
            }
            else {
                callback(err, null, null);
            }
        });
    };
    /**
     * @private
     * Customizes the fetch options with the Auth token, SDKVersion header and customization applied via init, .header, .headers, .option, .options etc
     * @param {FetchOptions} options - The options for the fetch api request
     * @param {string} accessToken - The access token value
     * @return The fetch options with customization
     */
    GraphRequest.prototype.configureRequestOptions = function (options, accessToken) {
        var self = this, defaultHeaders = {
            Authorization: "Bearer " + accessToken,
            SdkVersion: "graph-js-" + common_1.PACKAGE_VERSION
        };
        var configuredOptions = {
            headers: {}
        };
        Object.assign(configuredOptions, self.config.fetchOptions, self._options, options);
        Object.assign(configuredOptions.headers, defaultHeaders, self._headers, options.headers);
        return configuredOptions;
    };
    // append query strings to the url, accepts either a string like $select=displayName or a dictionary {"$select": "displayName"}
    GraphRequest.prototype.query = function (queryDictionaryOrString) {
        if (typeof queryDictionaryOrString === "string") { // is string
            var queryStr = queryDictionaryOrString;
            var queryKey = queryStr.split("=")[0];
            var queryValue = queryStr.split("=")[1];
            this.urlComponents.otherURLQueryParams[queryKey] = queryValue;
        }
        else { // is dictionary
            for (var key in queryDictionaryOrString) {
                this.urlComponents.otherURLQueryParams[key] = queryDictionaryOrString[key];
            }
        }
        return this;
    };
    // ex: ?$select=displayName&$filter=startsWith(displayName, 'A')
    // does not include starting ?
    GraphRequest.prototype.createQueryString = function () {
        // need to combine first this.urlComponents.oDataQueryParams and this.urlComponents.otherURLQueryParams
        var q = [];
        if (Object.keys(this.urlComponents.oDataQueryParams).length != 0) {
            for (var property in this.urlComponents.oDataQueryParams) {
                q.push(property + "=" + this.urlComponents.oDataQueryParams[property]);
            }
        }
        if (Object.keys(this.urlComponents.otherURLQueryParams).length != 0) {
            for (var property in this.urlComponents.otherURLQueryParams) {
                q.push(property + "=" + this.urlComponents.otherURLQueryParams[property]);
            }
        }
        if (q.length > 0) {
            return "?" + q.join("&");
        }
        return "";
    };
    GraphRequest.prototype.parseDocumentResponse = function (response, type) {
        if (typeof DOMParser !== "undefined") {
            return new es6_promise_1.Promise(function (resolve, reject) {
                response.text().then(function (xmlString) {
                    try {
                        var parser = new DOMParser(), xmlDoc = parser.parseFromString(xmlString, type);
                        resolve(xmlDoc);
                    }
                    catch (error) {
                        reject(error);
                    }
                });
            });
        }
        else {
            return es6_promise_1.Promise.resolve(response.body);
        }
    };
    GraphRequest.prototype.convertResponseType = function (response) {
        var self = this, responseValue;
        if (!self._responseType) {
            self._responseType = '';
        }
        switch (self._responseType.toLowerCase()) {
            case ResponseType_1.ResponseType.ARRAYBUFFER:
                responseValue = response.arrayBuffer();
                break;
            case ResponseType_1.ResponseType.BLOB:
                responseValue = response.blob();
                break;
            case ResponseType_1.ResponseType.DOCUMENT:
                responseValue = self.parseDocumentResponse(response, "text/xml");
                break;
            case ResponseType_1.ResponseType.JSON:
                responseValue = response.json();
                break;
            case ResponseType_1.ResponseType.STREAM:
                responseValue = es6_promise_1.Promise.resolve(response.body);
                break;
            case ResponseType_1.ResponseType.TEXT:
                responseValue = response.text();
                break;
            default:
                var contentType = response.headers.get("Content-type");
                if (contentType !== null) {
                    var mimeType = contentType.split(";")[0], documentContentTypes = ["text/html", "text/xml", "application/xml", "application/xhtml+xml"];
                    if (documentContentTypes.includes(mimeType)) {
                        responseValue = self.parseDocumentResponse(response, mimeType);
                    }
                    else {
                        responseValue = response.json();
                    }
                }
                else {
                    /**
                     * RFC specification {@link https://tools.ietf.org/html/rfc7231#section-3.1.1.5} says:
                     *  A sender that generates a message containing a payload body SHOULD
                     *  generate a Content-Type header field in that message unless the
                     *  intended media type of the enclosed representation is unknown to the
                     *  sender.  If a Content-Type header field is not present, the recipient
                     *  MAY either assume a media type of "application/octet-stream"
                     *  ([RFC2046], Section 4.5.1) or examine the data to determine its type.
                     *
                     *  So assuming it as a stream type so returning the body.
                     */
                    responseValue = es6_promise_1.Promise.resolve(response.body);
                }
                break;
        }
        return responseValue;
    };
    return GraphRequest;
}());
exports.GraphRequest = GraphRequest;
//# sourceMappingURL=GraphRequest.js.map