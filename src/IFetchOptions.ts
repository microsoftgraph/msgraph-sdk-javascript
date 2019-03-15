/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @interface {@link https://github.com/bitinn/node-fetch/#options}
 * Signature to define the fetch request options for node environment
 * @property {number} [follow] - Maximum redirect count. 0 to not follow redirect
 * @property {number} [timeout] - Request/Response timeout in milliseconds, it resets on redirect. 0 to disable (OS limit applies)
 * @property {number} [compress] - Support gzip/deflate content encoding. false to disable
 * @property {number} [size] - Maximum response body size in bytes. 0 to disable
 * @property {any} [agent] - HTTP(S).Agent instance, allows custom proxy, certificate, lookup, family etc.
 */
export interface NodeFetchInit {
	follow?: number;
	timeout?: number;
	compress?: boolean;
	size?: number;
	agent?: any;
}

/**
 * @interface
 * Signature to define the fetch api options which includes both fetch standard options and also the extended node fetch options
 * @extends RequestInit @see {@link https://fetch.spec.whatwg.org/#requestinit}
 * @extends NodeFetchInit
 */
export interface FetchOptions extends RequestInit, NodeFetchInit {}
