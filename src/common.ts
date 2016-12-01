/// <reference path="../typings/index.d.ts" />

export const oDataQueryNames = ["$select", "$expand", "$orderby", "$filter", "$top", "$skip", "$skipToken", "$count"];
export const DEFAULT_VERSION = "v1.0";
export const GRAPH_BASE_URL = "https://graph.microsoft.com/";


export interface Options {
    debugLogging?: boolean,
    defaultVersion?: string,
    authProvider?: (done) => void,
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

export interface GraphError {
    statusCode: number, // 503
    code: string, // "SearchEvents"
    message: string, // "The parameter $search is not currently supported on the Events resource."
    requestId: string, // "ca269f81-55d7-483f-a9e6-2b04a2a2d0e2"
    date: Date, // new Date(2016-11-17T18:49:59)
    body: string // original graph response    
}