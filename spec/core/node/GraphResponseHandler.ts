/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";
import "../../../src/PolyFill";
import { GraphResponseHandler } from "../../../src/GraphResponseHandler";
/**
 * References - https://fetch.spec.whatwg.org/#responses
 */
describe("GraphResponseHandler.ts", () => {
	const status200Unknown = {
		status: 200,
		statusText: "OK",
		headers: {
			"Content-Type": "dummy/unknown",
		},
	};

	describe("convertResponse", () => {
		it("Should return raw response incase of unknown content-type", async () => {
			const data = "test data";
			const response = new Response(data, status200Unknown);
			const responseValue = await GraphResponseHandler["convertResponse"](response);
			assert.equal(responseValue, data);
		});
	});
});
