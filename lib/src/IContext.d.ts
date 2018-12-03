/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import { FetchOptions } from "./IFetchRequest";
import { MiddlewareOptions } from "./IMiddlewareOptions";
/**
 * @interface
 * @property {RequestInfo} request - The request url string or the Request instance
 * @property {FetchOptions} [options] - The options for the request
 * @property {any} [response] - The response content
 * @property {Response} [rawResponse] - The Response object
 * @property {MiddlewareOptions} [middlewareOptions] - The options for the middleware chain
 */
export interface Context {
    request: RequestInfo;
    options?: FetchOptions;
    response?: any;
    rawResponse?: Response;
    middlewareOptions?: MiddlewareOptions;
}
