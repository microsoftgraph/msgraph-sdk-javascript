/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { FetchOptions } from "./IFetchOptions";
import { MiddlewareControl } from "./middleware/MiddlewareControl";

/**
 * @interface
 * @property {RequestInfo} request - The request url string or the Request instance
 * @property {FetchOptions} [options] - The options for the request
 * @property {Response} [response] - The response content
 * @property {MiddlewareControl} [middlewareControl] - The options for the middleware chain
 * @property {Set<string>}[customHosts] - A set of custom host names. Should contain hostnames only.
 *
 */

export interface Context {
	request: RequestInfo;
	options?: FetchOptions;
	response?: Response;
	middlewareControl?: MiddlewareControl;
	/**
	 * Example - If URL is "https://test_host", then set property "customHosts" as "customHosts: Set<string>(["test_host"])"
	 */
	customHosts?: Set<string>;
}
