export let oDataQueryNames = ["select", "expand", "orderby", "filter", "top", "skip", "skipToken", "count"]
export const DEFAULT_VERSION = "v1.0";
export const GRAPH_BASE_URL = "https://graph.microsoft.com/";

// NOTE: This should be kept up to date with the version used in package.json.
// If you are changing this please ensure you are also changing it in package.json.
export const PACKAGE_VERSION = "1.0.0";

// support oData params with and without $ prefix
oDataQueryNames = oDataQueryNames.concat(oDataQueryNames.map((s) => "$"+s));

export interface AuthProviderCallback {
    (error: any, accessToken: string): void
}

export interface Options {
    debugLogging?: boolean,
    defaultVersion?: string,
    authProvider?: (done:AuthProviderCallback) => void,
    baseUrl?: string
}

// http://graph.microsoft.com/VERSION/PATH?QUERYSTRING&OTHER_QUERY_PARAMS
export interface URLComponents {
    host: string
    version: string
    path?: string
    oDataQueryParams:{ [key: string] : string|number; }
    otherURLQueryParams:{ [key: string] : string|number; }
}

export interface GraphRequestCallback {
    (error: GraphError, response: any, rawResponse?: any): void
}


// This is NOT what is returned from the Graph
// GraphError is created from parsing JSON errors returned from the graph
// Some fields are renamed ie, "request-id" => requestId so you can use dot notation

export interface GraphError {
    statusCode: number, // 503
    code: string, // "SearchEvents"
    message: string, // "The parameter $search is not currently supported on the Events resource."
    requestId: string, // "ca269f81-55d7-483f-a9e6-2b04a2a2d0e2"
    date: Date, // new Date(2016-11-17T18:49:59)
    body: string // original graph response    
}