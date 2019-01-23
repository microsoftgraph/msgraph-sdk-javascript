import { Promise } from 'es6-promise'
import 'isomorphic-fetch';

import { Options, URLComponents, oDataQueryNames, GraphRequestCallback, PACKAGE_VERSION, DefaultRequestHeaders, FetchOptions } from "./common"
import { ResponseHandler } from "./ResponseHandler"
import { RequestMethod } from './RequestMethod';
import { ResponseType } from "./ResponseType";
import { GraphHelper } from './GraphHelper';

export class GraphRequest {
    config: Options;
    urlComponents: URLComponents;
    _options: FetchOptions;
    _headers: {
        [key: string]: string;
    };
    _responseType: string;


    constructor(config: Options, path: string) {
        let self = this;
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

    public header(headerKey: string, headerValue: string) {
        let self = this;
        self._headers[headerKey] = headerValue;
        return self;
    }

    public headers(headers: { [key: string]: string | number }) {
        let self = this;
        for (let key in headers) {
            self._headers[key] = <string>headers[key];
        }
        return self;
    }

    public option(key: string, value: any) {
        let self = this;
        self._options[key] = value;
        return self;
    }

    public options(options: { [key: string]: any}) {
        let self = this;
        for (let key in options) {
            self._options[key] = options[key];
        }
        return self;
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
        this.addCsvQueryParameter("$select", properties, arguments);
        return this;
    }

    expand(properties: string | string[]): GraphRequest {
        this.addCsvQueryParameter("$expand", properties, arguments);
        return this;
    }

    orderby(properties: string | string[]): GraphRequest {
        this.addCsvQueryParameter("$orderby", properties, arguments);
        return this;
    }

    search(searchStr: string): GraphRequest {
        this.urlComponents.oDataQueryParams["$search"] = `"${searchStr}"`;
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
    private addCsvQueryParameter(propertyName: string, propertyValue: string | string[], additionalProperties: IArguments) {
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
        let self = this,
            url = self.buildFullUrl(),
            options: FetchOptions = {
                method: RequestMethod.DELETE
            }
        return self.sendRequestAndRouteResponse(url, options, callback);
    }

    /**
     * Alias for delete call
     */
    del(callback?: GraphRequestCallback): Promise<any> {
        return this.delete(callback);
    }

    patch(content: any, callback?: GraphRequestCallback): Promise<any> {
        let self = this,
            url = self.buildFullUrl(),
            options: FetchOptions = {
                method: RequestMethod.PATCH,
                body: GraphHelper.serializeContent(content),
                headers: {
                    "Content-Type": "application/json"
                }
            };
        return self.sendRequestAndRouteResponse(url, options, callback);
    }

    post(content: any, callback?: GraphRequestCallback): Promise<any> {
        let self = this,
            url = self.buildFullUrl(),
            options: FetchOptions = {
                method: RequestMethod.POST,
                body: GraphHelper.serializeContent(content),
                headers: (content.constructor !== undefined && content.constructor.name === "FormData") ? {} : {
                    "Content-Type": "application/json"
                }
            };
        return self.sendRequestAndRouteResponse(url, options, callback);
    }

    /**
     * Alias for Post call
     */
    create(content: any, callback?: GraphRequestCallback): Promise<any> {
        return this.post(content, callback);
    }

    put(content: any, callback?: GraphRequestCallback): Promise<any> {
        let self = this,
            url = self.buildFullUrl(),
            options: FetchOptions = {
                method: RequestMethod.PUT,
                body: GraphHelper.serializeContent(content),
                headers: { 
                    "Content-Type": "application/octet-stream"
                }
            };
        return self.sendRequestAndRouteResponse(url, options, callback);
    }

    /**
     * Alias for update call
     */
    update(content: any, callback?: GraphRequestCallback): Promise<any> {
        return this.patch(content, callback);
    }

    get(callback?: GraphRequestCallback): Promise<any> {
        let self = this,
            url = self.buildFullUrl(),
            options: FetchOptions = {
                method: RequestMethod.GET
            };
        return self.sendRequestAndRouteResponse(url, options, callback);
    }

    getStream(callback: GraphRequestCallback): Promise<any> {
        let self = this,
            url = self.buildFullUrl(),
            options = {
                method: RequestMethod.GET
            };
        self.responseType(ResponseType.STREAM);
        return self.sendRequestAndRouteResponse(url, options, callback);
    }

    putStream(stream: any, callback: GraphRequestCallback): Promise<any> {
        let self = this,
            url = self.buildFullUrl(),
            options = {
                method: RequestMethod.PUT,
                headers: {
                    "Content-Type": "application/octet-stream",
                },
                body: stream
            };
        return self.sendRequestAndRouteResponse(url, options, callback);
    }

    /**
     * @private
     * Sends request and routes response to the callback or resolves to promise
     * @param {RequestInfo} request - The Request object or url string value 
     * @param {FetchOptions} options - The options for the fetch api request 
     * @param {GraphRequestCallback} callback - The callback that needs to be called on response
     * @return The promise in case if the callback param is empty
     */
    private sendRequestAndRouteResponse(request: RequestInfo, options: FetchOptions, callback?: GraphRequestCallback): Promise<any> {
        // return a promise when Promises are supported and no callback was provided
        if (callback == null && typeof Promise !== "undefined") {
            return this.routeResponseToPromise(request, options);
        } else {
            this.routeResponseToCallback(request, options, callback);
        }
    }

    /**
     * @private
     * Gets the Promise that will resolve or reject with fetch api request
     * @param {RequestInfo} request - The Request object or url string value
     * @param {FetchOptions} options - The options for the fetch api request
     * @return The Promise that resolves with Response
     */
    private routeResponseToPromise(request: RequestInfo, options: FetchOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            this.routeResponseToCallback(request, options, (err, body) => {
                if (err != null) {
                    reject(err);
                } else {
                    resolve(body);
                }
            });
        });
    }

    /**
     * @private
     * Makes request to the service by getting auth token from the auth provider
     * @param {RequestInfo} request - The Request object or url string value
     * @param {FetchOptions} options - The options for the fetch api request
     * @param {GraphRequestCallback} callback - The callback function
     */
    private routeResponseToCallback(request: RequestInfo, options: FetchOptions, callback: GraphRequestCallback = function () { }) {
        let self = this;
        self.config.authProvider((err, accessToken) => {
            if (err == null && accessToken != null) {
                options = self.configureRequestOptions(options, accessToken);
                fetch(request, options).then((response) => {
                    this.convertResponseType(response).then((responseValue) => {
                        ResponseHandler.init(response, undefined, responseValue, callback);
                    }).catch((error) => {
                        ResponseHandler.init(response, error, undefined, callback)
                    });
                }).catch((error) => {
                    ResponseHandler.init(undefined, error, undefined, callback)
                });
            } else {
                callback(err, null, null);
            }
        });
    }

    /**
     * @private
     * Customizes the fetch options with the Auth token, SDKVersion header and customization applied via init, .header, .headers, .option, .options etc
     * @param {FetchOptions} options - The options for the fetch api request
     * @param {string} accessToken - The access token value
     * @return The fetch options with customization
     */
    private configureRequestOptions(options: FetchOptions, accessToken: string): FetchOptions {
        let self = this,
            defaultHeaders = {
                Authorization: `Bearer ${accessToken}`,
                SdkVersion: `graph-js-${PACKAGE_VERSION}`
            };
        let configuredOptions: FetchOptions = {
            headers: {}
        };
        Object.assign(configuredOptions, self.config.fetchOptions, self._options, options);
        Object.assign(configuredOptions.headers, defaultHeaders, self._headers, options.headers);
        return configuredOptions;
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

    private parseDocumentResponse(response, type): Promise<any> {
        if (typeof DOMParser !== "undefined") {
            return new Promise((resolve, reject) => {
                response.text().then((xmlString) => {
                    try {
                        let parser = new DOMParser(),
                            xmlDoc = parser.parseFromString(xmlString, type);
                        resolve(xmlDoc);
                    } catch (error) {
                        reject(error);
                    }
                });
            });
        } else {
            return Promise.resolve(response.body);
        }
    }

    private convertResponseType(response: Response): Promise<any> {
        let self = this,
            responseValue: any;
        if (!self._responseType) {
            self._responseType = '';
        }
        switch (self._responseType.toLowerCase()) {
            case ResponseType.ARRAYBUFFER:
                responseValue = response.arrayBuffer();
                break;
            case ResponseType.BLOB:
                responseValue = response.blob();
                break;
            case ResponseType.DOCUMENT:
                responseValue = self.parseDocumentResponse(response, "text/xml");
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
                let contentType = response.headers.get("Content-type");
                if (contentType !== null) {
                    let mimeType = contentType.split(";")[0],
                        documentContentTypes = ["text/html", "text/xml", "application/xml", "application/xhtml+xml"];
                    if (documentContentTypes.includes(mimeType)) {
                        responseValue = self.parseDocumentResponse(response, mimeType);
                    } else {
                        responseValue = response.json();
                    }
                } else {
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
                    responseValue = Promise.resolve(response.body);
                }
                break;
        }
        return responseValue;
    }
}