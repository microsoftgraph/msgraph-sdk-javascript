import { Options, URLComponents, GraphRequestCallback } from "./common";
export declare class GraphRequest {
    config: Options;
    urlComponents: URLComponents;
    _headers: {
        [key: string]: string | number;
    };
    _responseType: string;
    constructor(config: Options, path: string);
    header(headerKey: string, headerValue: string): this;
    headers(headers: {
        [key: string]: string | number;
    }): this;
    parsePath(rawPath: string): void;
    private urlJoin(urlSegments);
    buildFullUrl(): string;
    version(v: string): GraphRequest;
    select(properties: string | [string]): GraphRequest;
    expand(properties: string | [string]): GraphRequest;
    orderby(properties: string | [string]): GraphRequest;
    filter(filterStr: string): GraphRequest;
    top(n: number): GraphRequest;
    skip(n: number): GraphRequest;
    skipToken(token: string): GraphRequest;
    count(count: boolean): GraphRequest;
    responseType(responseType: string): GraphRequest;
    private addCsvQueryParamater(propertyName, propertyValue, additionalProperties);
    delete(callback?: GraphRequestCallback): Promise<any>;
    patch(content: any, callback?: GraphRequestCallback): Promise<any>;
    post(content: any, callback?: GraphRequestCallback): Promise<any>;
    put(content: any, callback?: GraphRequestCallback): Promise<any>;
    create(content: any, callback?: GraphRequestCallback): Promise<any>;
    update(content: any, callback?: GraphRequestCallback): Promise<any>;
    del(callback?: GraphRequestCallback): Promise<any>;
    get(callback?: GraphRequestCallback): Promise<any>;
    private routeResponseToPromise(requestBuilder);
    private routeResponseToCallback(requestBuilder, callback);
    private sendRequestAndRouteResponse(requestBuilder, callback?);
    getStream(callback: GraphRequestCallback): void;
    putStream(stream: any, callback: Function): void;
    private configureRequest(requestBuilder, accessToken);
    getResultIterator(): IterableIterator<(callback: any) => void>;
    query(queryDictionaryOrString: string | {
        [key: string]: string | number;
    }): GraphRequest;
    private createQueryString();
}
