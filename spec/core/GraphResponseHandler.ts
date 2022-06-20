/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";

import { DocumentType, GraphResponseHandler } from "../../src/GraphResponseHandler";
import { ResponseType } from "../../src/ResponseType";

describe("GraphResponseHandler.ts", () => {
	const htmlString = `<!DOCTYPE html>
                        <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <title>Testing Document</title>
                            </head>
                            <body>
                                <h1 id="test">Testing</h1>
                            </body>
                        </html>`;
	const status200 = {
		status: 200,
		statusText: "OK",
	};
	const status204 = {
		status: 204,
		statusText: "OK",
	};
	const status202 = {
		status: 202,
		statusText: "OK",
	};
	const status200Text = {
		status: 200,
		stautsText: "OK",
		headers: {
			"Content-Type": "text/plain",
		},
	};
	const status200Json = {
		status: 200,
		stautsText: "OK",
		headers: {
			"Content-Type": "application/json",
		},
	};

	/* tslint:disable: no-string-literal */
	describe("parseDocumentResponse", () => {
		it("Should return the html string", async () => {
			const response = new Response(htmlString, status200);
			const dom = await GraphResponseHandler["parseDocumentResponse"](response, DocumentType.TEXT_HTML);
			assert.isDefined(dom);
			assert.equal(typeof dom, "object");
		});
	});

	describe("convertResponse", () => {
		it("Should return empty response for the NO CONTENT (204 response)", async () => {
			const response = new Response(undefined, status204);
			const responseValue = await GraphResponseHandler["convertResponse"](response);
			assert.isUndefined(responseValue);
		});

		it("Should return empty text value for empty response", async () => {
			const response = new Response(undefined, status202);
			const responseValue = await GraphResponseHandler["convertResponse"](response);
			assert.equal(responseValue, null);
		});

		it("Should return text data for text/plain content-type", async () => {
			const data = "text data";
			const response = new Response(data, status200Text);
			const responseValue = await GraphResponseHandler["convertResponse"](response);
			assert.equal(responseValue, data);
		});

		it("Should return json data for application/json content-type", async () => {
			const data = {
				test: "test",
			};
			const response = new Response(JSON.stringify(data), status200Json);
			const responseValue = await GraphResponseHandler["convertResponse"](response);
			assert.equal(responseValue.test, data.test);
		});

		it("Should return response value as text", async () => {
			const response = new Response(htmlString, status200);
			const responseValue = await GraphResponseHandler["convertResponse"](response, ResponseType.TEXT);
			assert.isDefined(responseValue);
			assert.equal(typeof responseValue, "string");
			assert.equal(responseValue, htmlString);
		});

		it("Should return response value as json", async () => {
			const json = { test: "test" };
			const response = new Response(JSON.stringify(json), status200);
			const responseValue = await GraphResponseHandler["convertResponse"](response, ResponseType.JSON);
			assert.isDefined(responseValue);
			assert.equal(responseValue.test, "test");
		});

		it("Should return response value as text for default response type", async () => {
			const response = new Response(htmlString, status200);
			const responseValue = await GraphResponseHandler["convertResponse"](response);
			assert.isDefined(responseValue);
			assert.equal(typeof responseValue, "string");
			assert.equal(responseValue, htmlString);
		});
	});
	/* tslint:enable: no-string-literal */

	describe("getResponse", () => {
		it("Should return a raw response", async () => {
			const response = new Response(htmlString, status200);
			const responseValue = await GraphResponseHandler.getResponse(response, ResponseType.RAW);
			assert.isDefined(responseValue);
			assert.isTrue(responseValue instanceof Response);
		});

		it("Should return valid 200 OK response", async () => {
			const response = new Response(htmlString, status200);
			const responseValue = await GraphResponseHandler.getResponse(response, ResponseType.TEXT);
			assert.isDefined(responseValue);
		});
	});
});
