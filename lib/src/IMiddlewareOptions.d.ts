/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import { FetchOptions } from "./IFetchRequest";
/**
 * @interface
 * Signature representing the middleware options
 * @property {FetchOptions} [fetchOptions] - The options for fetch request
 * @property {[key: string]: any} - The key value pair for request options
 */
export interface MiddlewareOptions {
    requestOptions?: FetchOptions;
    [key: string]: any;
}
