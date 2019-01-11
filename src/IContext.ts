/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { FetchOptions } from "./IFetchOptions";
import { MiddlewareOptions } from "./IMiddlewareOptions";

/**
 * @interface
 * @property {RequestInfo} request - The request url string or the Request instance
 * @property {FetchOptions} [options] - The options for the request
 * @property {Response} [response] - The response content
 * @property {MiddlewareOptions} [middlewareOptions] - The options for the middleware chain
 */
export interface Context {
    request: RequestInfo;
    options?: FetchOptions;
    response?: Response;
    middlewareOptions?: MiddlewareOptions;
}