/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";
import "isomorphic-fetch";

import { FetchOptions } from "../../src/IFetchOptions";
import { RetryHandlerOptions } from "../../src/middleware/options/RetryHandlerOptions";
import { RetryHandler } from "../../src/middleware/RetryHandler";
import { DummyHTTPMessageHandler } from "../DummyHTTPMessageHandler";

describe("RetryHandler.ts", function() {
	this.timeout(20 * 1000);
	const retryHandler = new RetryHandler();
	const retryHandlerOptions = new RetryHandlerOptions();
	const tooManyRequestsResponseWithRetryAfterDelay = new Response("", {
		status: 429,
		statusText: "TooManyRequests",
		headers: {
			"Retry-After": "10",
		},
	});
	const tooManyRequestsResponseWithRetyAfterDate = new Response("", {
		status: 429,
		statusText: "TooManyRequests",
		headers: {
			"Retry-After": new Date(Date.now() + 10000).toUTCString(),
		},
	});
	const serviceUnavailableResponse = new Response("", {
		status: 503,
		statusText: "ServiceUnavailable",
	});
	const gatewayTimeoutResponse = new Response("", {
		status: 504,
		statusText: "GatewayTimeout",
	});
	const nonRetryResponse = new Response("", {
		status: 200,
		statusText: "OK",
	});
	/* tslint:disable: no-string-literal */
	describe("constructor", () => {
		it("Should set the option member with retryHanderOptions", () => {
			const handler = new RetryHandler(retryHandlerOptions);
			assert.isDefined(handler["options"]);
		});

		it("Should create retryHandler instance with default retryHandlerOptions", () => {
			const handler = new RetryHandler();
			assert.isDefined(handler["options"]);
		});
	});

	describe("isRetry", () => {
		it("Should return true for 429 response", () => {
			assert.isTrue(retryHandler["isRetry"](tooManyRequestsResponseWithRetryAfterDelay));
		});

		it("Should return true for 503 response", () => {
			assert.isTrue(retryHandler["isRetry"](serviceUnavailableResponse));
		});

		it("Should return true for 504 response", () => {
			assert.isTrue(retryHandler["isRetry"](gatewayTimeoutResponse));
		});

		it("Should return false for non retry response", () => {
			assert.isFalse(retryHandler["isRetry"](nonRetryResponse));
		});
	});

	describe("isBuffered", () => {
		const url = "dummy_url";
		const transferEncodingChunkedResponse = new Response("test", {
			headers: {
				"Transfer-Encoding": "chunked",
			},
		});
		const transferEncodingNonChunkedResponse = new Response("test", {
			headers: {
				"Transfer-Encoding": "compress",
			},
		});
		const nonTransferEncodingResponse = new Response("test", {
			headers: {
				dummy: "dummy",
			},
		});
		const nonTransferEncodingResponseWithoutHeaders = new Response("test");
		it("Should fail for non post, patch, put requests", () => {
			const options: FetchOptions = {
				method: "GET",
			};
			const isBuffered = retryHandler["isBuffered"](url, options, nonTransferEncodingResponse);
			assert.isFalse(isBuffered);
		});

		it("Should fail for stream request", () => {
			const options: FetchOptions = {
				method: "PUT",
				headers: {
					"Content-Type": "application/octet-stream",
				},
			};
			const isBuffered = retryHandler["isBuffered"](url, options, nonTransferEncodingResponse);
			assert.isFalse(isBuffered);
		});

		it("Should fail for response without headers", () => {
			const options: FetchOptions = {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
			};
			const isBuffered = retryHandler["isBuffered"](url, options, nonTransferEncodingResponseWithoutHeaders);
			assert.isFalse(isBuffered);
		});

		it("Should fail for transfer encoding with non chunked response", () => {
			const options: FetchOptions = {
				method: "PUT",
			};
			const isBuffered = retryHandler["isBuffered"](url, options, transferEncodingNonChunkedResponse);
			assert.isFalse(isBuffered);
		});

		it("Should succeed for put method with non streaming chunked response", () => {
			const options: FetchOptions = {
				method: "PUT",
			};
			const isBuffered = retryHandler["isBuffered"](url, options, transferEncodingChunkedResponse);
			assert.isTrue(isBuffered);
		});

		it("Should succeed for post method with non streaming chunked response", () => {
			const options: FetchOptions = {
				method: "POST",
			};
			const isBuffered = retryHandler["isBuffered"](url, options, transferEncodingChunkedResponse);
			assert.isTrue(isBuffered);
		});

		it("Should succeed for patch method with non streaming chunked response", () => {
			const options: FetchOptions = {
				method: "PATCH",
			};
			const isBuffered = retryHandler["isBuffered"](url, options, transferEncodingChunkedResponse);
			assert.isTrue(isBuffered);
		});
	});

	describe("getDelay", () => {
		it("Should return retry delay from the response header", () => {
			const delay = retryHandler["getDelay"](tooManyRequestsResponseWithRetryAfterDelay, 1, 5);
			assert.equal(delay, 10);
		});

		it("Should return retry delay from the response header mentioning delay time", () => {
			const delay = retryHandler["getDelay"](tooManyRequestsResponseWithRetyAfterDate, 1, 5);
			assert.isDefined(delay);
		});

		it("Should return delay without exponential backoff", () => {
			const delay = retryHandler["getDelay"](gatewayTimeoutResponse, 1, 10);
			assert.isAbove(delay, 10);
			assert.isBelow(delay, 11);
		});

		it("Should return delay with exponential backoff", () => {
			const delay = retryHandler["getDelay"](gatewayTimeoutResponse, 2, 10);
			assert.isAbove(delay, 12);
			assert.isBelow(delay, 13);
		});

		it("Should return max delay for if the calculated delay is more", () => {
			const delay = retryHandler["getDelay"](gatewayTimeoutResponse, 10, 100);
			assert.isAbove(delay, 180);
			assert.isBelow(delay, 181);
		});
	});

	describe("getExponentialBackOffTime", () => {
		it("Should return 0 delay for 0th attempt i.e for a fresh request", () => {
			const time = retryHandler["getExponentialBackOffTime"](0);
			assert.equal(time, 0);
		});

		it("Should return attempt time", () => {
			const time = retryHandler["getExponentialBackOffTime"](1);
			assert.equal(time, 1);
		});
	});

	describe("sleep", async () => {
		it("Should run the sleep method for 1 second", async () => {
			try {
				await retryHandler["sleep"](1);
			} catch (error) {
				throw error;
			}
		});
	});

	describe("executeWithRetry", async () => {
		const handler = new RetryHandler(new RetryHandlerOptions());
		const retryOptionWithFalsyShouldRetry = new RetryHandlerOptions(undefined, undefined, () => false);
		const retryHandlerWithFalsyShouldRetry = new RetryHandler(retryOptionWithFalsyShouldRetry);
		const httpHandler = new DummyHTTPMessageHandler();
		handler.setNext(httpHandler);
		retryHandlerWithFalsyShouldRetry.setNext(httpHandler);
		const contextWithRetry = {
			request: new Request("test", {
				method: "GET",
			}),
			response: tooManyRequestsResponseWithRetyAfterDate,
		};

		it("Should not do retry for falsy should retry", async () => {
			try {
				const delay = retryHandlerWithFalsyShouldRetry["options"].delay;
				await retryHandlerWithFalsyShouldRetry["executeWithRetry"](contextWithRetry, 1, retryOptionWithFalsyShouldRetry);
				assert.equal(retryHandlerOptions.delay, delay);
			} catch (error) {
				throw error;
			}
		});
	});
	/* tslint:enable: no-string-literal */
});
