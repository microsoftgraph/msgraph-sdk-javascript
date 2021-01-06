/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";

import { GraphClientError } from "../../../src/GraphClientError";

describe("GraphClientError", () => {
	const message = "test";
	const name = "test_name";
	it("Should return GraphClientError error with message set", () => {
		const gError = new GraphClientError(message);
		assert.equal(gError.message, message);
	});

	it("Should return GraphClientError when Error object is passed", () => {
		const errorParameter = new Error(message);
		errorParameter.name = name;
		const gError = GraphClientError.setGraphClientError(errorParameter);
		assert.equal(gError.message, message);
		assert.equal(gError.name, name);
	});

	it("Should return GraphClientError when custom error object is passed", () => {
		const customErrorParameter = { errorName: name, errorMessage: message };
		const gError = GraphClientError.setGraphClientError(customErrorParameter);
		assert.isDefined(gError.customError);
		assert.equal(gError.customError, customErrorParameter);
	});
});
