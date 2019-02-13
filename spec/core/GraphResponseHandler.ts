/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";

import { GraphResponseHandler } from "../../src/GraphResponseHandler";
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
	const status500 = {
		status: 500,
		statusText: "Internal Server Error",
	};
	/* tslint:disable: no-string-literal*/
	describe("parseDocumentResponse", () => {
		it("Should return the html string", async () => {
			const response = new Response(htmlString, status200);
			const dom = await GraphResponseHandler["parseDocumentResponse"](response, GraphResponseHandler["DocumentTypes"]["TEXT_HTML"]);
			assert.isDefined(dom);
			assert.equal(typeof dom, "string");
		});
	});

	describe("convertResponse", () => {
		it("Should return empty response for the NO CONTENT (204 response)", async () => {
			const response = new Response(undefined, status204);
			const responseValue = await GraphResponseHandler["convertResponse"](response);
			assert.isUndefined(responseValue);
		});

		it("Should return response value as text", async () => {
			const response = new Response(htmlString, status200);
			const responseValue = await GraphResponseHandler["convertResponse"](response, ResponseType.TEXT);
			assert.isDefined(responseValue);
			assert.equal(typeof responseValue, "string");
			assert.equal(responseValue, htmlString);
		});

		it("Should return a raw response", async () => {
			const response = new Response(htmlString, status200);
			const responseValue = await GraphResponseHandler["convertResponse"](response, ResponseType.RAW);
			assert.isDefined(responseValue);
			assert.isTrue(responseValue instanceof Response);
		});

		it("Should return response value as text for text/html return type", async () => {
			const response = new Response(htmlString, status200);
			const responseValue = await GraphResponseHandler["convertResponse"](response, ResponseType.DOCUMENT);
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
	/* tslint:enable: no-string-literal*/

	describe("getResponse", () => {
		it("Should return valid 200 OK response", async () => {
			const response = new Response(htmlString, status200);
			const responseValue = await GraphResponseHandler.getResponse(response, ResponseType.TEXT);
			assert.isDefined(responseValue);
		});

		it("Should throw error for NOT OK response", async () => {
			try {
				const response = new Response("NOT OK", status500);
				const responseValue = await GraphResponseHandler.getResponse(response, ResponseType.TEXT);
				throw new Error("Something wrong with validating OK response");
			} catch (error) {
				assert.isDefined(error);
				assert.equal(error, "NOT OK");
			}
		});
	});
});
