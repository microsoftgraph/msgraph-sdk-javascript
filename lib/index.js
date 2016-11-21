'use strict';
const request = require('superagent');
const packageInfo = require('../package.json');
const oDataQueryNames = ["$select", "$expand", "$orderby", "$filter", "$top", "$skip", "$skipToken", "$count"];
const DEFAULT_VERSION = "v1.0";
const GRAPH_BASE_URL = "https://graph.microsoft.com/";
class GraphRequest {
    constructor(config, path) {
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
    parseError(rawErr) {
        let errObj;
        if (!('rawResponse' in rawErr)) {
            errObj = rawErr.response.body.error;
        }
        else {
            errObj = JSON.parse(rawErr.rawResponse.replace(/^\uFEFF/, '')).error;
        }
        let statusCode;
        if (rawErr.response !== undefined && rawErr.response.status !== undefined) {
            statusCode = rawErr.response.status;
        }
        else {
            statusCode = rawErr.statusCode;
        }
        let err = {
            statusCode: statusCode,
            code: errObj.code,
            message: errObj.message,
            requestId: errObj.innerError["request-id"],
            date: new Date(errObj.innerError.date),
            body: errObj
        };
        return err;
    }
    header(headerKey, headerValue) {
        this._headers[headerKey] = headerValue;
        return this;
    }
    headers(headers) {
        for (let key in headers) {
            this._headers[key] = headers[key];
        }
        return this;
    }
    parsePath(rawPath) {
        if (rawPath.indexOf("https://") != -1) {
            rawPath = rawPath.replace("https://", "");
            let endOfHostStrPos = rawPath.indexOf("/");
            this.urlComponents.host = "https://" + rawPath.substring(0, endOfHostStrPos);
            rawPath = rawPath.substring(endOfHostStrPos + 1, rawPath.length);
            let endOfVersionStrPos = rawPath.indexOf("/");
            this.urlComponents.version = rawPath.substring(0, endOfVersionStrPos);
            rawPath = rawPath.substring(endOfVersionStrPos + 1, rawPath.length);
        }
        if (rawPath.charAt(0) == "/") {
            rawPath = rawPath.substr(1);
        }
        let queryStrPos = rawPath.indexOf("?");
        if (queryStrPos == -1) {
            this.urlComponents.path = rawPath;
        }
        else {
            this.urlComponents.path = rawPath.substr(0, queryStrPos);
            let queryParams = rawPath.substring(queryStrPos + 1, rawPath.length).split("&");
            for (let queryParam of queryParams) {
                let param = queryParam.split("=");
                let key = param[0];
                let value = param[1];
                if (oDataQueryNames.indexOf(key)) {
                    this.urlComponents.oDataQueryParams[key] = value;
                }
                else {
                    this.urlComponents.otherURLQueryParams[key] = value;
                }
            }
        }
    }
    urlJoin(urlSegments) {
        const tr = (s) => s.replace(/\/+$/, '');
        const tl = (s) => s.replace(/^\/+/, '');
        const joiner = (pre, cur) => [tr(pre), tl(cur)].join('/');
        const parts = Array.prototype.slice.call(urlSegments);
        return parts.reduce(joiner);
    }
    buildFullUrl() {
        let url = this.urlJoin([this.urlComponents.host,
            this.urlComponents.version,
            this.urlComponents.path])
            + this.createQueryString();
        if (this.config.debugLogging) {
            console.log(url);
        }
        return url;
    }
    version(v) {
        this.urlComponents.version = v;
        return this;
    }
    select(properties) {
        this.addCsvQueryParamater("$select", properties, arguments);
        return this;
    }
    expand(properties) {
        this.addCsvQueryParamater("$expand", properties, arguments);
        return this;
    }
    orderby(properties) {
        this.addCsvQueryParamater("$orderby", properties, arguments);
        return this;
    }
    filter(filterStr) {
        this.urlComponents.oDataQueryParams["$filter"] = filterStr;
        return this;
    }
    top(n) {
        this.urlComponents.oDataQueryParams["$top"] = n;
        return this;
    }
    skip(n) {
        this.urlComponents.oDataQueryParams["$skip"] = n;
        return this;
    }
    skipToken(token) {
        this.urlComponents.oDataQueryParams["$skipToken"] = token;
        return this;
    }
    count(count) {
        this.urlComponents.oDataQueryParams["$count"] = count.toString();
        return this;
    }
    responseType(responseType) {
        this._responseType = responseType;
        return this;
    }
    addCsvQueryParamater(propertyName, propertyValue, additionalProperties) {
        this.urlComponents.oDataQueryParams[propertyName] = this.urlComponents.oDataQueryParams[propertyName] ? this.urlComponents.oDataQueryParams[propertyName] + "," : "";
        let allValues = [];
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
    }
    delete(callback) {
        let url = this.buildFullUrl();
        return this.sendRequestAndRouteResponse(request.del(url), callback);
    }
    patch(content, callback) {
        let url = this.buildFullUrl();
        return this.sendRequestAndRouteResponse(request
            .patch(url)
            .send(content), callback);
    }
    post(content, callback) {
        let url = this.buildFullUrl();
        return this.sendRequestAndRouteResponse(request
            .post(url)
            .send(content), callback);
    }
    put(content, callback) {
        let url = this.buildFullUrl();
        return this.sendRequestAndRouteResponse(request
            .put(url)
            .type('application/octet-stream')
            .send(content), callback);
    }
    create(content, callback) {
        return this.post(content, callback);
    }
    update(content, callback) {
        return this.patch(content, callback);
    }
    del(callback) {
        return this.delete(callback);
    }
    get(callback) {
        let url = this.buildFullUrl();
        return this.sendRequestAndRouteResponse(request
            .get(url), callback);
    }
    routeResponseToPromise(requestBuilder) {
        let _this = this;
        return new Promise((resolve, reject) => {
            _this.config.authProvider((err, accessToken) => {
                if (err) {
                    reject(err);
                    return;
                }
                let request = _this.configureRequest(requestBuilder, accessToken);
                request.end((err, res) => {
                    if (res && res.ok) {
                        resolve(res.body);
                    }
                    else {
                        reject(_this.parseError((err == null && res.error !== null) ? res : err));
                    }
                });
            });
        });
    }
    routeResponseToCallback(requestBuilder, callback) {
        this.config.authProvider((err, accessToken) => {
            if (err === null && accessToken !== null) {
                let request = this.configureRequest(requestBuilder, accessToken);
                request.end((err, res) => {
                    if (callback !== null)
                        this.handleResponse(err, res, callback);
                });
            }
            else if (callback !== null) {
                callback(err, null, null);
            }
        });
    }
    sendRequestAndRouteResponse(requestBuilder, callback) {
        if (typeof callback === "undefined" && typeof Promise !== "undefined") {
            return this.routeResponseToPromise(requestBuilder);
        }
        else {
            this.routeResponseToCallback(requestBuilder, callback);
        }
    }
    getStream(callback) {
        this.config.authProvider((err, accessToken) => {
            if (err === null && accessToken !== null) {
                let url = this.buildFullUrl();
                callback(null, this.configureRequest(request.get(url), accessToken));
            }
            else {
                callback(err, null);
            }
        });
    }
    putStream(stream, callback) {
        this.config.authProvider((err, accessToken) => {
            if (err === null && accessToken !== null) {
                let url = this.buildFullUrl();
                let req = this.configureRequest(request.put(url), accessToken);
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
    }
    configureRequest(requestBuilder, accessToken) {
        let request = requestBuilder
            .set('Authorization', 'Bearer ' + accessToken)
            .set(this._headers)
            .set('SdkVersion', "graph-js-" + packageInfo.version);
        if (this._responseType !== undefined) {
            request.responseType(this._responseType);
        }
        return request;
    }
    getResultIterator() {
        let values = [];
        let nextLink;
        let get = (url) => {
            return (callback) => {
                if (values.length > 0) {
                    callback(null, values.splice(0, 1)[0]);
                }
                else {
                    if (nextLink != null) {
                        url = nextLink;
                    }
                    _this.sendRequestAndRouteResponse(request.get(url), (err, res) => {
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
        let _this = this;
        return function* () {
            let url = _this.buildFullUrl();
            while (true) {
                yield get(url);
            }
        }();
    }
    query(queryDictionaryOrString) {
        if (typeof queryDictionaryOrString === "string") {
            let queryStr = queryDictionaryOrString;
            let queryKey = queryStr.split("=")[0];
            let queryValue = queryStr.split("=")[1];
            this.urlComponents.otherURLQueryParams[queryKey] = queryValue;
        }
        else {
            for (let key in queryDictionaryOrString) {
                this.urlComponents.otherURLQueryParams[key] = queryDictionaryOrString[key];
            }
        }
        return this;
    }
    handleResponse(err, res, callback) {
        if (res && res.ok) {
            callback(null, res.body, res);
        }
        else {
            if (err == null && res.error !== null)
                callback(this.parseError(res), null, res);
            else
                callback(this.parseError(err), null, res);
        }
    }
    createQueryString() {
        let q = [];
        if (Object.keys(this.urlComponents.oDataQueryParams).length != 0) {
            for (let property in this.urlComponents.oDataQueryParams) {
                q.push(property + "=" + this.urlComponents.oDataQueryParams[property]);
            }
        }
        if (Object.keys(this.urlComponents.otherURLQueryParams).length != 0) {
            for (let property in this.urlComponents.otherURLQueryParams) {
                q.push(property + "=" + this.urlComponents.otherURLQueryParams[property]);
            }
        }
        if (q.length > 0) {
            return "?" + q.join("&");
        }
        return "";
    }
}
exports.GraphRequest = GraphRequest;
module.exports = class MicrosoftGraphClient {
    constructor() {
        this.config = {
            debugLogging: false,
            defaultVersion: DEFAULT_VERSION,
            baseUrl: GRAPH_BASE_URL
        };
    }
    static init(clientOptions) {
        var graphClient = new MicrosoftGraphClient();
        for (let key in clientOptions) {
            graphClient.config[key] = clientOptions[key];
        }
        return graphClient;
    }
    api(path) {
        return new GraphRequest(this.config, path);
    }
}
;
//# sourceMappingURL=index.js.map