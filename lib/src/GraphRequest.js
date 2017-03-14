"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
var common_1 = require("./common");
var request = require("superagent");
var es6_promise_1 = require("es6-promise");
var ResponseHandler_1 = require("./ResponseHandler");
var packageInfo = require('../../package.json');
var GraphRequest = (function () {
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
        if (rawPath.indexOf("https://") != -1) {
            rawPath = rawPath.replace("https://", "");
            var endOfHostStrPos = rawPath.indexOf("/");
            this.urlComponents.host = "https://" + rawPath.substring(0, endOfHostStrPos);
            rawPath = rawPath.substring(endOfHostStrPos + 1, rawPath.length);
            var endOfVersionStrPos = rawPath.indexOf("/");
            this.urlComponents.version = rawPath.substring(0, endOfVersionStrPos);
            rawPath = rawPath.substring(endOfVersionStrPos + 1, rawPath.length);
        }
        if (rawPath.charAt(0) == "/") {
            rawPath = rawPath.substr(1);
        }
        var queryStrPos = rawPath.indexOf("?");
        if (queryStrPos == -1) {
            this.urlComponents.path = rawPath;
        }
        else {
            this.urlComponents.path = rawPath.substr(0, queryStrPos);
            var queryParams = rawPath.substring(queryStrPos + 1, rawPath.length).split("&");
            for (var _i = 0, queryParams_1 = queryParams; _i < queryParams_1.length; _i++) {
                var queryParam = queryParams_1[_i];
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
    GraphRequest.prototype.addCsvQueryParamater = function (propertyName, propertyValue, additionalProperties) {
        this.urlComponents.oDataQueryParams[propertyName] = this.urlComponents.oDataQueryParams[propertyName] ? this.urlComponents.oDataQueryParams[propertyName] + "," : "";
        var allValues = [];
        if (typeof propertyValue === "string") {
            allValues.push(propertyValue);
        }
        else {
            allValues = allValues.concat(propertyValue);
        }
        if (additionalProperties.length > 1 && typeof propertyValue === "string") {
            allValues = Array.prototype.slice.call(additionalProperties);
        }
        this.urlComponents.oDataQueryParams[propertyName] += allValues.join(",");
    };
    GraphRequest.prototype.delete = function (callback) {
        var url = this.buildFullUrl();
        return this.sendRequestAndRouteResponse(request.del(url), callback);
    };
    GraphRequest.prototype.patch = function (content, callback) {
        var url = this.buildFullUrl();
        return this.sendRequestAndRouteResponse(request
            .patch(url)
            .send(content), callback);
    };
    GraphRequest.prototype.post = function (content, callback) {
        var url = this.buildFullUrl();
        return this.sendRequestAndRouteResponse(request
            .post(url)
            .send(content), callback);
    };
    GraphRequest.prototype.put = function (content, callback) {
        var url = this.buildFullUrl();
        return this.sendRequestAndRouteResponse(request
            .put(url)
            .type('application/octet-stream')
            .send(content), callback);
    };
    GraphRequest.prototype.create = function (content, callback) {
        return this.post(content, callback);
    };
    GraphRequest.prototype.update = function (content, callback) {
        return this.patch(content, callback);
    };
    GraphRequest.prototype.del = function (callback) {
        return this.delete(callback);
    };
    GraphRequest.prototype.get = function (callback) {
        var url = this.buildFullUrl();
        return this.sendRequestAndRouteResponse(request
            .get(url), callback);
    };
    GraphRequest.prototype.routeResponseToPromise = function (requestBuilder) {
        var _this = this;
        return new es6_promise_1.Promise(function (resolve, reject) {
            _this.routeResponseToCallback(requestBuilder, function (err, body) {
                if (err != null) {
                    reject(err);
                }
                else {
                    resolve(body);
                }
            });
        });
    };
    GraphRequest.prototype.routeResponseToCallback = function (requestBuilder, callback) {
        var _this = this;
        this.config.authProvider(function (err, accessToken) {
            if (err == null && accessToken != null) {
                var request_1 = _this.configureRequest(requestBuilder, accessToken);
                request_1.end(function (err, res) {
                    ResponseHandler_1.ResponseHandler.init(err, res, callback);
                });
            }
            else {
                callback(err, null, null);
            }
        });
    };
    GraphRequest.prototype.sendRequestAndRouteResponse = function (requestBuilder, callback) {
        if (callback == null && typeof es6_promise_1.Promise !== "undefined") {
            return this.routeResponseToPromise(requestBuilder);
        }
        else {
            this.routeResponseToCallback(requestBuilder, callback || function () { });
        }
    };
    GraphRequest.prototype.getStream = function (callback) {
        var _this = this;
        this.config.authProvider(function (err, accessToken) {
            if (err === null && accessToken !== null) {
                var url = _this.buildFullUrl();
                callback(null, _this.configureRequest(request.get(url), accessToken));
            }
            else {
                callback(err, null);
            }
        });
    };
    GraphRequest.prototype.putStream = function (stream, callback) {
        var _this = this;
        this.config.authProvider(function (err, accessToken) {
            if (err === null && accessToken !== null) {
                var url = _this.buildFullUrl();
                var req = _this.configureRequest(request.put(url), accessToken);
                req.type('application/octet-stream');
                stream
                    .pipe(req)
                    .on('error', function (err) {
                    callback(err, null);
                })
                    .on('end', function () {
                    callback(null);
                });
            }
        });
    };
    GraphRequest.prototype.configureRequest = function (requestBuilder, accessToken) {
        var request = requestBuilder
            .set('Authorization', 'Bearer ' + accessToken)
            .set(this._headers)
            .set('SdkVersion', "graph-js-" + packageInfo.version);
        if (this._responseType !== undefined) {
            request.responseType(this._responseType);
        }
        return request;
    };
    GraphRequest.prototype.getResultIterator = function () {
        var values = [];
        var nextLink;
        var get = function (url) {
            return function (callback) {
                if (values.length > 0) {
                    callback(null, values.splice(0, 1)[0]);
                }
                else {
                    if (nextLink != null) {
                        url = nextLink;
                    }
                    _this.sendRequestAndRouteResponse(request.get(url), function (err, res) {
                        if (err) {
                            callback(err, null);
                            return;
                        }
                        values = values.concat(res.value);
                        nextLink = res["@odata.nextLink"];
                        callback(null, values.splice(0, 1)[0]);
                    });
                }
            };
        };
        var _this = this;
        return function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = _this.buildFullUrl();
                        _a.label = 1;
                    case 1:
                        if (!true) return [3, 3];
                        return [4, get(url)];
                    case 2:
                        _a.sent();
                        return [3, 1];
                    case 3: return [2];
                }
            });
        }();
    };
    GraphRequest.prototype.query = function (queryDictionaryOrString) {
        if (typeof queryDictionaryOrString === "string") {
            var queryStr = queryDictionaryOrString;
            var queryKey = queryStr.split("=")[0];
            var queryValue = queryStr.split("=")[1];
            this.urlComponents.otherURLQueryParams[queryKey] = queryValue;
        }
        else {
            for (var key in queryDictionaryOrString) {
                this.urlComponents.otherURLQueryParams[key] = queryDictionaryOrString[key];
            }
        }
        return this;
    };
    GraphRequest.prototype.createQueryString = function () {
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
    return GraphRequest;
}());
exports.GraphRequest = GraphRequest;
//# sourceMappingURL=GraphRequest.js.map