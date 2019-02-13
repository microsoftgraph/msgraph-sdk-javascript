/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module MiddlewareUtil
 */

import { FetchOptions } from "../IFetchOptions";

export const getRequestHeader = (request: RequestInfo, options: FetchOptions | undefined, key: string): string | null => {
	let value: string = null;
	if (request instanceof Request) {
		value = (request as Request).headers.get(key);
	} else if (typeof options !== "undefined" && options.headers !== undefined) {
		if (options.headers instanceof Headers) {
			value = (options.headers as Headers).get(key);
		} else if (options.headers instanceof Array) {
			const headers = options.headers as string[][];
			for (let i = 0, l = headers.length; i < l; i++) {
				if (headers[i][0] === key) {
					value = headers[i][1];
					break;
				}
			}
		} else if (options.headers[key] !== undefined) {
			value = options.headers[key];
		}
	}
	return value;
};

export const setRequestHeader = (request: RequestInfo, options: FetchOptions | undefined, key: string, value: string): void => {
	if (request instanceof Request) {
		(request as Request).headers.set(key, value);
	} else if (typeof options !== "undefined") {
		if (options.headers === undefined) {
			options.headers = {
				[key]: value,
			};
		} else {
			if (options.headers instanceof Headers) {
				(options.headers as Headers).set(key, value);
			} else if (options.headers instanceof Array) {
				(options.headers as string[][]).push([key, value]);
			} else {
				Object.assign(options.headers, { [key]: value });
			}
		}
	}
};
