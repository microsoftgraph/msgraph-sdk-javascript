"use strict";
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
var es6_promise_1 = require("es6-promise");
require("isomorphic-fetch");
var common_1 = require("./common");
var ResponseHandler_1 = require("./ResponseHandler");
var RequestMethod_1 = require("./RequestMethod");
var ResponseType_1 = require("./ResponseType");
var GraphHelper_1 = require("./GraphHelper");
var GraphRequest = /** @class */ (function () {
    function GraphRequest(config, path) {
        this.config = config;
        this._headers = {};
        this.urlComponents = {
            host: this.config.baseUrl,
            version: this.config.defaultVersion,
            oDataQueryParams: {},
            otherURLQueryParams: {}
        };
        this.parsePath(path);
    }
    GraphRequest.prototype.header = function (headerKey, headerValue) {
        this._headers[headerKey] = headerValue;
        return this;
    };
    GraphRequest.prototype.headers = function (headers) {
        for (var key in headers) {
            this._headers[key] = headers[key];
        }
        return this;
    };
    GraphRequest.prototype.parsePath = function (rawPath) {
        // break rawPath into this.urlComponents
        var e_1, _a;
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
            try {
                for (var queryParams_1 = __values(queryParams), queryParams_1_1 = queryParams_1.next(); !queryParams_1_1.done; queryParams_1_1 = queryParams_1.next()) {
                    var queryParam = queryParams_1_1.value;
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
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (queryParams_1_1 && !queryParams_1_1.done && (_a = queryParams_1.return)) _a.call(queryParams_1);
                }
                finally { if (e_1) throw e_1.error; }
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
        this.addCsvQueryParamater("$select", properties, arguments);
        return this;
    };
    GraphRequest.prototype.expand = function (properties) {
        this.addCsvQueryParamater("$expand", properties, arguments);
        return this;
    };
    GraphRequest.prototype.orderby = function (properties) {
        this.addCsvQueryParamater("$orderby", properties, arguments);
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
    GraphRequest.prototype.addCsvQueryParamater = function (propertyName, propertyValue, additionalProperties) {
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
        var url = this.buildFullUrl();
        return this.sendRequestAndRouteResponse(new Request(url, { method: RequestMethod_1.RequestMethod.DELETE, headers: new Headers() }), callback);
    };
    GraphRequest.prototype.patch = function (content, callback) {
        var url = this.buildFullUrl();
        return this.sendRequestAndRouteResponse(new Request(url, {
            method: RequestMethod_1.RequestMethod.PATCH,
            body: GraphHelper_1.GraphHelper.serializeContent(content),
            headers: new Headers({ 'Content-Type': 'application/json' })
        }), callback);
    };
    GraphRequest.prototype.post = function (content, callback) {
        var url = this.buildFullUrl();
        return this.sendRequestAndRouteResponse(new Request(url, {
            method: RequestMethod_1.RequestMethod.POST,
            body: GraphHelper_1.GraphHelper.serializeContent(content),
            headers: new Headers((content.constructor !== undefined && content.constructor.name === "FormData") ? {} : { 'Content-Type': 'application/json' })
        }), callback);
    };
    GraphRequest.prototype.put = function (content, callback) {
        var url = this.buildFullUrl();
        return this.sendRequestAndRouteResponse(new Request(url, {
            method: RequestMethod_1.RequestMethod.PUT,
            body: GraphHelper_1.GraphHelper.serializeContent(content),
            headers: new Headers({ 'Content-Type': 'application/octet-stream' })
        }), callback);
    };
    // request aliases
    // alias for post
    GraphRequest.prototype.create = function (content, callback) {
        return this.post(content, callback);
    };
    // alias for patch
    GraphRequest.prototype.update = function (content, callback) {
        return this.patch(content, callback);
    };
    GraphRequest.prototype.del = function (callback) {
        return this.delete(callback);
    };
    GraphRequest.prototype.get = function (callback) {
        var url = this.buildFullUrl();
        return this.sendRequestAndRouteResponse(new Request(url, { method: RequestMethod_1.RequestMethod.GET, headers: new Headers() }), callback);
    };
    GraphRequest.prototype.routeResponseToPromise = function (request) {
        var _this = this;
        return new es6_promise_1.Promise(function (resolve, reject) {
            _this.routeResponseToCallback(request, function (err, body) {
                if (err != null) {
                    reject(err);
                }
                else {
                    resolve(body);
                }
            });
        });
    };
    // Given the Request object, make the request and invoke callback
    GraphRequest.prototype.handleFetch = function (request, callback, options) {
        var _this = this;
        ((request.constructor.name === "Request") ? fetch(request) : fetch(request, options)).then(function (response) {
            _this.convertResponseType(response).then(function (responseValue) {
                ResponseHandler_1.ResponseHandler.init(response, undefined, responseValue, callback);
            }).catch(function (error) {
                ResponseHandler_1.ResponseHandler.init(response, error, undefined, callback);
            });
        }).catch(function (error) {
            ResponseHandler_1.ResponseHandler.init(undefined, error, undefined, callback);
        });
    };
    // Given the Request object, get an auth token from the authProvider, make the fetch call
    GraphRequest.prototype.routeResponseToCallback = function (request, callback) {
        var self = this;
        self.config.authProvider(function (err, accessToken) {
            if (err == null && accessToken != null) {
                request = self.configureRequest(request, accessToken);
                self.handleFetch(request, callback);
            }
            else {
                callback(err, null, null);
            }
        });
    };
    /*
     * Help method that's called from the final actions( .get(), .post(), etc.) that after making the request either invokes
     * routeResponseToCallback() or routeResponseToPromise()
     */
    GraphRequest.prototype.sendRequestAndRouteResponse = function (request, callback) {
        // return a promise when Promises are supported and no callback was provided
        if (callback == null && typeof es6_promise_1.Promise !== "undefined") {
            return this.routeResponseToPromise(request);
        }
        else {
            this.routeResponseToCallback(request, callback || function () { });
        }
    };
    GraphRequest.prototype.getStream = function (callback) {
        var self = this;
        self.config.authProvider(function (err, accessToken) {
            if (err === null && accessToken !== null) {
                var url = self.buildFullUrl();
                var options_1 = {
                    method: RequestMethod_1.RequestMethod.GET,
                    headers: self.getDefaultRequestHeaders(accessToken)
                };
                self.responseType(ResponseType_1.ResponseType.STREAM);
                Object.keys(self._headers).forEach(function (key) { return options_1.headers[key] = self._headers[key]; });
                self.handleFetch(url, callback, options_1);
            }
            else {
                callback(err, null);
            }
        });
    };
    GraphRequest.prototype.putStream = function (stream, callback) {
        var self = this;
        self.config.authProvider(function (err, accessToken) {
            if (err === null && accessToken !== null) {
                var url = self.buildFullUrl();
                var options_2 = {
                    method: RequestMethod_1.RequestMethod.PUT,
                    headers: {
                        'Content-Type': 'application/octet-stream',
                    },
                    body: stream
                };
                var defaultHeaders_1 = self.getDefaultRequestHeaders(accessToken);
                Object.keys(defaultHeaders_1).forEach(function (key) { return options_2.headers[key] = defaultHeaders_1[key]; });
                Object.keys(self._headers).forEach(function (key) { return options_2.headers[key] = self._headers[key]; });
                self.handleFetch(url, callback, options_2);
            }
        });
    };
    GraphRequest.prototype.getDefaultRequestHeaders = function (accessToken) {
        return {
            Authorization: "Bearer " + accessToken,
            SdkVersion: "graph-js-" + common_1.PACKAGE_VERSION
        };
    };
    GraphRequest.prototype.configureRequest = function (request, accessToken) {
        var self = this, defaultHeaders = self.getDefaultRequestHeaders(accessToken);
        Object.keys(defaultHeaders).forEach(function (key) { return request.headers.set(key, defaultHeaders[key]); });
        Object.keys(self._headers).forEach(function (key) { return request.headers.set(key, self._headers[key]); });
        return request;
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
    GraphRequest.prototype.convertResponseType = function (response) {
        var responseValue;
        if (!this._responseType) {
            this._responseType = '';
        }
        switch (this._responseType.toLowerCase()) {
            case ResponseType_1.ResponseType.ARRAYBUFFER:
                responseValue = response.arrayBuffer();
                break;
            case ResponseType_1.ResponseType.BLOB:
                responseValue = response.blob();
                break;
            case ResponseType_1.ResponseType.DOCUMENT:
                // XMLHTTPRequest only :(
                responseValue = response.json();
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
                responseValue = response.json();
                break;
        }
        return responseValue;
    };
    return GraphRequest;
}());
exports.GraphRequest = GraphRequest;
//# sourceMappingURL=GraphRequest.js.map
