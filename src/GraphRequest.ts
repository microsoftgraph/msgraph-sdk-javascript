import { Promise } from 'es6-promise'
import 'isomorphic-fetch';

import { Options, URLComponents, GraphError, oDataQueryNames, GraphRequestCallback, PACKAGE_VERSION, DefaultRequestHeaders } from "./common"
import { ResponseHandler } from "./ResponseHandler"
import { RequestMethod } from './RequestMethod';
import { ResponseType } from "./ResponseType";
import { GraphHelper } from './GraphHelper';

export class GraphRequest {
    config: Options;
    urlComponents: URLComponents;
    _headers: { [key: string]: string | number; } // other headers to pass through to superagent
    _responseType: string;


    constructor(config: Options, path: string) {
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

    public header(headerKey: string, headerValue: string) {
        this._headers[headerKey] = headerValue;
        return this;
    }

    public headers(headers: { [key: string]: string | number }) {
        for (let key in headers) {
            this._headers[key] = headers[key];
        }
        return this;
    }

    public parsePath(rawPath: string) {
        // break rawPath into this.urlComponents

        // strip out the base url if they passed it in
        if (rawPath.indexOf("https://") != -1) {
            rawPath = rawPath.replace("https://", "");

            // find where the host ends
            let endOfHostStrPos = rawPath.indexOf("/");
            this.urlComponents.host = "https://" + rawPath.substring(0, endOfHostStrPos); // parse out the host
            // strip the host from rawPath
            rawPath = rawPath.substring(endOfHostStrPos + 1, rawPath.length);

            // then remove the following version
            let endOfVersionStrPos = rawPath.indexOf("/");
            // parse out the version
            this.urlComponents.version = rawPath.substring(0, endOfVersionStrPos);
            // strip version from rawPath
            rawPath = rawPath.substring(endOfVersionStrPos + 1, rawPath.length);
        }

        // strip out any leading "/"
        if (rawPath.charAt(0) == "/") {
            rawPath = rawPath.substr(1);
        }

        let queryStrPos = rawPath.indexOf("?");
        // let afterPath = 
        if (queryStrPos == -1) {
            // no query string
            this.urlComponents.path = rawPath;
        } else {
            this.urlComponents.path = rawPath.substr(0, queryStrPos);

            // capture query string into
            // this.urlComponents.oDataQueryParams
            // and
            // this.urlComponents.otherURLQueryParams

            let queryParams = rawPath.substring(queryStrPos + 1, rawPath.length).split("&");
            for (let queryParam of queryParams) {
                //queryParam:  a=b
                let queryParams = queryParam.split("=");
                let key = queryParams[0];
                let value = queryParams[1];

                if (oDataQueryNames.indexOf(key)) {
                    this.urlComponents.oDataQueryParams[key] = value;
                } else {
                    this.urlComponents.otherURLQueryParams[key] = value;
                }
            }
        }
    }


    private urlJoin(urlSegments: string[]): String {
        const tr = (s) => s.replace(/\/+$/, '');
        const tl = (s) => s.replace(/^\/+/, '');
        const joiner = (pre, cur) => [tr(pre), tl(cur)].join('/');
        const parts = Array.prototype.slice.call(urlSegments);

        return parts.reduce(joiner);
    }

    public buildFullUrl(): string {
        let url = this.urlJoin([this.urlComponents.host,
        this.urlComponents.version,
        this.urlComponents.path])
            + this.createQueryString();

        if (this.config.debugLogging) {
            console.log(url)
        }

        return url;
    }

    version(v: string): GraphRequest {
        this.urlComponents.version = v;
        return this;
    }

    /*
     * Accepts .select("displayName,birthday")
     *     and .select(["displayName", "birthday"])
     *     and .select("displayName", "birthday")
     * 
     */
    select(properties: string | string[]): GraphRequest {
        this.addCsvQueryParamater("$select", properties, arguments);
        return this;
    }

    expand(properties: string | string[]): GraphRequest {
        this.addCsvQueryParamater("$expand", properties, arguments);
        return this;
    }

    orderby(properties: string | string[]): GraphRequest {
        this.addCsvQueryParamater("$orderby", properties, arguments);
        return this;
    }


    filter(filterStr: string): GraphRequest {
        this.urlComponents.oDataQueryParams["$filter"] = filterStr;
        return this;
    }

    top(n: number): GraphRequest {
        this.urlComponents.oDataQueryParams["$top"] = n;
        return this;
    }

    skip(n: number): GraphRequest {
        this.urlComponents.oDataQueryParams["$skip"] = n;
        return this;
    }

    skipToken(token: string): GraphRequest {
        this.urlComponents.oDataQueryParams["$skipToken"] = token;
        return this;
    }

    count(count: boolean): GraphRequest {
        this.urlComponents.oDataQueryParams["$count"] = count.toString();
        return this;
    }

    responseType(responseType: string): GraphRequest {
        this._responseType = responseType;
        return this;
    }

    // helper for $select, $expand and $orderby (must be comma separated)
    private addCsvQueryParamater(propertyName: string, propertyValue: string | string[], additionalProperties: IArguments) {
        // if there are already $propertyName value there, append a ","
        this.urlComponents.oDataQueryParams[propertyName] = this.urlComponents.oDataQueryParams[propertyName] ? this.urlComponents.oDataQueryParams[propertyName] + "," : "";

        let allValues: string[] = [];

        if (typeof propertyValue === "string") {
            allValues.push(propertyValue);
        } else { // propertyValue passed in as array
            allValues = allValues.concat(propertyValue);
        }

        // merge in additionalProperties
        if (additionalProperties.length > 1 && typeof propertyValue === "string") {
            allValues = Array.prototype.slice.call(additionalProperties);
        }

        this.urlComponents.oDataQueryParams[propertyName] += allValues.join(",");
    }


    delete(callback?: GraphRequestCallback): Promise<any> {
        let url = this.buildFullUrl();
        return this.sendRequestAndRouteResponse(
            new Request(url, { method: RequestMethod.DELETE, headers: new Headers() }),
            callback
        );
    }

    patch(content: any, callback?: GraphRequestCallback): Promise<any> {
        let url = this.buildFullUrl();
        return this.sendRequestAndRouteResponse(
            new Request(
                url,
                {
                    method: RequestMethod.PATCH,
                    body: GraphHelper.serializeContent(content),
                    headers: new Headers({ 'Content-Type': 'application/json' })
                }),
            callback
        );
    }

    post(content: any, callback?: GraphRequestCallback): Promise<any> {
        let url = this.buildFullUrl();
        return this.sendRequestAndRouteResponse(
            new Request(
                url,
                {
                    method: RequestMethod.POST,
                    body: GraphHelper.serializeContent(content),
                    headers: new Headers((content.constructor !== undefined && content.constructor.name === "FormData") ? {} : { 'Content-Type': 'application/json' })
                }),
            callback
        );
    }

    put(content: any, callback?: GraphRequestCallback): Promise<any> {
        let url = this.buildFullUrl();
        return this.sendRequestAndRouteResponse(
            new Request(
                url,
                {
                    method: RequestMethod.PUT,
                    body: GraphHelper.serializeContent(content),
                    headers: new Headers({ 'Content-Type': 'application/octet-stream' })
                }),
            callback
        );
    }

    // request aliases
    // alias for post
    create(content: any, callback?: GraphRequestCallback): Promise<any> {
        return this.post(content, callback);
    }

    // alias for patch
    update(content: any, callback?: GraphRequestCallback): Promise<any> {
        return this.patch(content, callback);
    }

    del(callback?: GraphRequestCallback): Promise<any> {
        return this.delete(callback);
    }

    get(callback?: GraphRequestCallback): Promise<any> {
        let url = this.buildFullUrl();
        return this.sendRequestAndRouteResponse(
            new Request(url, { method: RequestMethod.GET, headers: new Headers() }),
            callback
        );
    }

    private routeResponseToPromise(request: Request) {
        return new Promise((resolve, reject) => {
            this.routeResponseToCallback(request, (err, body) => {
                if (err != null) {
                    reject(err);
                } else {
                    resolve(body);
                }
            });
        });
    }

    // Given the Request object, make the request and invoke callback
    private handleFetch(request: Request | string, callback: GraphRequestCallback, options?: any) {
        ((request.constructor.name === "Request") ? fetch(request) : fetch(request, options)).then((response) => {
            this.convertResponseType(response).then((responseValue) => {
                ResponseHandler.init(response, undefined, responseValue, callback);
            }).catch((error) => {
                ResponseHandler.init(response, error, undefined, callback)
            });
        }).catch((error) => {
            ResponseHandler.init(undefined, error, undefined, callback)
        });
    }

    // Given the Request object, get an auth token from the authProvider, make the fetch call
    private routeResponseToCallback(request: Request, callback: GraphRequestCallback) {
        let self = this;
        self.config.authProvider((err, accessToken) => {
            if (err == null && accessToken != null) {
                request = self.configureRequest(request, accessToken);
                self.handleFetch(request, callback);
            } else {
                callback(err, null, null);
            }
        });
    }

    /*
     * Help method that's called from the final actions( .get(), .post(), etc.) that after making the request either invokes
     * routeResponseToCallback() or routeResponseToPromise()
     */
    private sendRequestAndRouteResponse(request: Request, callback?: GraphRequestCallback): Promise<any> {
        // return a promise when Promises are supported and no callback was provided
        if (callback == null && typeof Promise !== "undefined") {
            return this.routeResponseToPromise(request);
        } else {
            this.routeResponseToCallback(request, callback || function () { });
        }
    }

    getStream(callback: GraphRequestCallback) {
        let self = this;
        self.config.authProvider((err, accessToken) => {
            if (err === null && accessToken !== null) {
                let url = self.buildFullUrl();
                let options = {
                    method: RequestMethod.GET,
                    headers: self.getDefaultRequestHeaders(accessToken)
                };
                self.responseType(ResponseType.STREAM);
                Object.keys(self._headers).forEach((key) => options.headers[key] = self._headers[key] as string);
                self.handleFetch(url, callback, options);
            } else {
                callback(err, null);
            }
        });
    }

    putStream(stream: any, callback: GraphRequestCallback) {
        let self = this;
        self.config.authProvider((err, accessToken) => {
            if (err === null && accessToken !== null) {
                let url = self.buildFullUrl();
                let options = {
                    method: RequestMethod.PUT,
                    headers: {
                        'Content-Type': 'application/octet-stream',
                    },
                    body: stream
                }
                let defaultHeaders = self.getDefaultRequestHeaders(accessToken);
                Object.keys(defaultHeaders).forEach((key) => options.headers[key] = defaultHeaders[key] as string);
                Object.keys(self._headers).forEach((key) => options.headers[key] = self._headers[key] as string);
                self.handleFetch(url, callback, options);
            }
        });
    }

    private getDefaultRequestHeaders(accessToken: string): DefaultRequestHeaders {
        return {
            Authorization: `Bearer ${accessToken}`,
            SdkVersion: `graph-js-${PACKAGE_VERSION}`
        }
    }

    private configureRequest(request: Request, accessToken: string): Request {
        let self = this,
            defaultHeaders = self.getDefaultRequestHeaders(accessToken);
        Object.keys(defaultHeaders).forEach((key) => request.headers.set(key, defaultHeaders[key] as string));
        Object.keys(self._headers).forEach((key) => request.headers.set(key, self._headers[key] as string));
        return request;
    }

    // append query strings to the url, accepts either a string like $select=displayName or a dictionary {"$select": "displayName"}
    query(queryDictionaryOrString: string | { [key: string]: string | number; }): GraphRequest {
        if (typeof queryDictionaryOrString === "string") { // is string
            let queryStr = queryDictionaryOrString;
            let queryKey = queryStr.split("=")[0];
            let queryValue = queryStr.split("=")[1];

            this.urlComponents.otherURLQueryParams[queryKey] = queryValue;
        } else { // is dictionary
            for (let key in queryDictionaryOrString) {
                this.urlComponents.otherURLQueryParams[key] = queryDictionaryOrString[key];
            }
        }
        return this;
    }

    // ex: ?$select=displayName&$filter=startsWith(displayName, 'A')
    // does not include starting ?
    private createQueryString(): string {
        // need to combine first this.urlComponents.oDataQueryParams and this.urlComponents.otherURLQueryParams
        let q: string[] = [];

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

    private convertResponseType(response: Response): Promise<any> {
        let responseValue: any;
        if (!this._responseType) {
            this._responseType = '';
        }
        switch (this._responseType.toLowerCase()) {
            case ResponseType.ARRAYBUFFER:
                responseValue = response.arrayBuffer();
                break;
            case ResponseType.BLOB:
                responseValue = response.blob();
                break;
            case ResponseType.DOCUMENT:
                // XMLHTTPRequest only :(
                responseValue = response.json();
                break;
            case ResponseType.JSON:
                responseValue = response.json();
                break;
            case ResponseType.STREAM:
                responseValue = Promise.resolve(response.body);
                break;
            case ResponseType.TEXT:
                responseValue = response.text();
                break;
            default:
                responseValue = response.json();
                break;
        }
        return responseValue;
    }
}
