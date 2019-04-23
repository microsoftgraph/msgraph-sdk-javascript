/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";

import { FetchOptions } from "../../src/IFetchOptions";
import { generateUUID, getRequestHeader, setRequestHeader } from "../../src/middleware/MiddlewareUtil";

describe("MiddlewareUtil.ts", async () => {
	describe("setRequestHeader", () => {
		const key: string = "Content-Type";
		const value: string = "application/json";
		const url = "dummy_url";
		it("Should set header in request object", () => {
			const request: Request = new Request(url, {
				method: "test",
				headers: {
					version: "version",
					[key]: value,
				},
			});
			setRequestHeader(request, undefined, key, value);
			assert.equal(request.headers.get(key), value);
		});

		it("Should set header for empty headers", () => {
			const options: FetchOptions = {
				method: "test",
			};
			setRequestHeader(url, options, key, value);
			assert.isDefined(options.headers);
			assert.equal(options.headers[key], value);
		});

		it("Should set header in headers object", () => {
			const options: FetchOptions = {
				method: "test",
				headers: {
					version: "version",
				},
			};
			setRequestHeader(url, options, key, value);
			assert.equal(options.headers[key], value);
		});

		it("Should set header in Headers instance", () => {
			const options: FetchOptions = {
				method: "test",
				headers: new Headers({ version: "version" }),
			};
			setRequestHeader(url, options, key, value);
			assert.isDefined(options.headers);
			assert.equal((options.headers as Headers).get(key), value);
		});

		it("Should set header in array of headers", () => {
			const options: FetchOptions = {
				method: "test",
				headers: [["version", "version"]],
			};
			setRequestHeader(url, options, key, value);
			assert.isDefined(options.headers);
			assert.equal(options.headers[1][1], value);
		});
	});

	describe("getRequestHeader", () => {
		const key: string = "Content-Type";
		const value: string = "application/json";
		const url = "dummy_url";
		it("Should get header from request object", () => {
			const request: Request = new Request(url, {
				method: "test",
				headers: {
					version: "version",
					[key]: value,
				},
			});
			const headerValue: string = getRequestHeader(request, undefined, key);
			assert.equal(headerValue, value);
		});

		it("Should get header from headers object", () => {
			const options: FetchOptions = {
				method: "test",
				headers: {
					version: "version",
					[key]: value,
				},
			};
			const headerValue: string = getRequestHeader(url, options, key);
			assert.equal(headerValue, value);
		});

		it("Should get header from Headers instance", () => {
			const options: FetchOptions = {
				method: "test",
				headers: new Headers({
					version: "version",
					[key]: value,
				}),
			};
			const headerValue: string = getRequestHeader(url, options, key);
			assert.equal(headerValue, value);
		});

		it("Should get header from array of headers", () => {
			const options: FetchOptions = {
				method: "test",
				headers: [["version", "version"], [key, value]],
			};
			const headerValue: string = getRequestHeader(url, options, key);
			assert.equal(headerValue, value);
		});
	});

	describe("generateUUID", () => {
		it("Should return the unique uuid", () => {
			const uuid = generateUUID();
			assert.equal(uuid.length, 36);
		});
	});
});
