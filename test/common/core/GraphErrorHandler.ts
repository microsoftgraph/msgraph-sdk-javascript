/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";

import { GraphError } from "../../../src";
import { GraphErrorHandler } from "../../../src/GraphErrorHandler";

describe("GraphErrorHandler.ts", () => {
	describe("constructError", () => {
		it("Should return custom error without code", () => {
			const message = "test";
			const error = new Error(message);
			const gError = GraphErrorHandler["constructError"](error);
			assert.equal(gError.message, message);
		});

		it("Should return custom error with code and message", () => {
			const message = "test";
			const name = "test_name";
			const error = new Error(message);
			error.name = name;
			const gError = GraphErrorHandler["constructError"](error);
			assert.equal(gError.message, message);
			assert.equal(gError.code, name);
		});
	});

	describe("constructErrorFromResponse", () => {
		const statusCode = 400;
		const error: any = {
			error: {
				code: "DataNotAvailable",
				message: "The data that is being requested is not present",
			},
		};

		it("Should construct error for error response without innerError property", () => {
			const gError = GraphErrorHandler["constructErrorFromResponse"](error, statusCode);
			assert.isTrue(gError instanceof GraphError);
			assert.equal(gError.statusCode, statusCode);
			assert.equal(gError.requestId, null);
		});

		it("Should construct error for the response missing one or more properties in innerError property", () => {
			error.error.innerError = {
				"request-id": "some random id",
			};
			const gError = GraphErrorHandler["constructErrorFromResponse"](error, statusCode);
			assert.isTrue(gError instanceof GraphError);
			assert.equal(gError.statusCode, statusCode);
			assert.equal(gError.requestId, "some random id");
		});

		it("Should construct error for the complete error response", () => {
			const date = new Date();
			const requestId = "some random id";
			error.error.innerError = {
				"request-id": requestId,
				date,
			};
			const gError = GraphErrorHandler["constructErrorFromResponse"](error, statusCode);
			assert.isTrue(gError instanceof GraphError);
			assert.equal(gError.statusCode, statusCode);
			assert.equal(gError.requestId, "some random id");
			assert.equal(gError.date.toUTCString(), date.toUTCString());
		});
	});

	describe("getError", async () => {
		it("Should construct error from response", async () => {
			const errorResponse = {
				error: {
					code: "500",
					message: "Internal Server Error",
					innerError: {
						"request-id": "some random id",
					},
				},
			};
			const gError = await GraphErrorHandler.getError(errorResponse);
			assert.isTrue(gError instanceof GraphError);
			assert.equal(gError.requestId, "some random id");
			assert.equal(gError.code, "500");
			assert.equal(gError.message, "Internal Server Error");
		});

		it("Should construct error from error object", async () => {
			const error = new Error("Some Error");
			error.name = "InvalidError";
			const gError = await GraphErrorHandler.getError(error);
			assert.isTrue(gError instanceof GraphError);
			assert.equal(gError.requestId, null);
			assert.equal(gError.message, "Some Error");
			assert.equal(gError.code, "InvalidError");
		});

		it("Should construct some default error", async () => {
			const gError = await GraphErrorHandler.getError();
			assert.isTrue(gError instanceof GraphError);
			assert.equal(gError.message, "");
			assert.equal(gError.statusCode, -1);
			assert.equal(gError.code, null);
			assert.equal(gError.body, null);
			assert.equal(gError.requestId, null);
		});

		it("Should get header from response", async () => {
			const headers = { keyTest: "valueTest" };
			const errorResponse = {
				error: {
					code: "500",
					message: "Internal Server Error",
					innerError: {
						"request-id": "some random id",
					},
				},
			};
			const rawResponse = new Response(undefined, {
				headers,
			});
			const gError = await GraphErrorHandler.getError(errorResponse, 500, undefined, rawResponse);
			assert.isDefined(gError.headers);
			assert.equal(gError.headers, headers);
		});
	});
});
