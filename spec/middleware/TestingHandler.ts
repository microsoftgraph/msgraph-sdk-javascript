import { assert } from "chai";

import { Context } from "../../src/IContext";
import { MiddlewareControl } from "../../src/middleware/MiddlewareControl";
import { TestingHandlerOptions } from "../../src/middleware/options/TestingHandlerOptions";
import { TestingStrategy } from "../../src/middleware/options/TestingStrategy";
import { TestingHandler } from "../../src/middleware/TestingHandler";
import { DummyHTTPMessageHandler } from "../DummyHTTPMessageHandler";

const testingHandlerOptions = new TestingHandlerOptions();
const testingHandler = new TestingHandler();

describe("TestingHandler.ts", () => {
	/* tslint:disable: no-string-literal */
	describe("constructor", () => {
		it("Should create an instance with given options", () => {
			const handler = new TestingHandler(testingHandlerOptions);
			assert.isDefined(handler["options"]);
		});

		it("Should create an instance with default set of options", () => {
			const handler = new TestingHandler();
			assert.isDefined(handler["options"]);
		});
	});

	describe("createResponseHeader", () => {
		it("Should have request-id for every random statusCode", () => {
			const responseHeader = testingHandler["createResponseHeader"](204, "statusMessage", "xxxxxxxxxxxxxxxx", new Date());
			assert.isDefined(responseHeader["request-id"]);
		});

		it("Should have Location for 3xx cases", () => {
			const responseHeader = testingHandler["createResponseHeader"](301, "statusMessage", "xxxxxxxxxxxxxxxx", new Date());
			assert.isDefined(responseHeader["Location"]);
		});

		it("Should have request-id for 3xx cases", () => {
			const responseHeader = testingHandler["createResponseHeader"](301, "statusMessage", "xxxxxxxxxxxxxxxx", new Date());
			assert.isDefined(responseHeader["request-id"]);
		});

		it("Should have timeout for 429 case", () => {
			const responseHeader = testingHandler["createResponseHeader"](429, "statusMessage", "xxxxxxxxxxxxxxxx", new Date());
			assert.isDefined(responseHeader["timeout"]);
		});

		it("Should have request-id for 5xx cases", () => {
			const responseHeader = testingHandler["createResponseHeader"](500, "statusMessage", "xxxxxxxxxxxxxxxx", new Date());
			assert.isDefined(responseHeader["request-id"]);
		});
	});

	describe("createResponseBody", () => {
		it("Should return error in response body for error scenarios", () => {
			const responseBody = testingHandler["createResponseBody"](404, "Not Found", "xxxxxxxxxxxxxx", new Date());
			assert.isDefined(responseBody["error"]);
		});

		it("Should return empty response body for success scenarios", () => {
			const responseBody = testingHandler["createResponseBody"](303, "Not Found", "xxxxxxxxxxxxxx", new Date());
			assert.equal(Object.keys(responseBody).length, 0);
		});
	});

	describe("createResponse", () => {
		it("Should return a valid response object for MANUAL case", () => {
			assert.isDefined(testingHandler["createResponse"](new TestingHandlerOptions(TestingStrategy.MANUAL, 404), "https://graph.microsoft.com/v1.0/me/"));
		});

		it("Should return a valid response object for RANDOM case", () => {
			assert.isDefined(testingHandler["createResponse"](new TestingHandlerOptions(TestingStrategy.RANDOM), "https://graph.microsoft.com/v1.0/me/"));
		});
	});

	describe("getStatusCode", () => {
		it("Should return a status code for GET method", () => {
			assert.isDefined(testingHandler["getStatusCode"]("GET"));
		});

		it("Should return a status code for POST method", () => {
			assert.isDefined(testingHandler["getStatusCode"]("POST"));
		});

		it("Should return a status code for PUT method", () => {
			assert.isDefined(testingHandler["getStatusCode"]("PUT"));
		});

		it("Should return a status code for PATCH method", () => {
			assert.isDefined(testingHandler["getStatusCode"]("PATCH"));
		});

		it("Should return a status code for DELETE method", () => {
			assert.isDefined(testingHandler["getStatusCode"]("DELETE"));
		});
	});

	describe("setStatusCode", () => {
		it("Should return a response for MANUAL mode", () => {
			assert.isDefined(testingHandler["setStatusCode"](new TestingHandlerOptions(TestingStrategy.MANUAL, 404), "https://graph.microsoft.com/v1.0/me/", "GET"));
		});

		it("Should return a response for RANDOM mode without status Code", () => {
			assert.isDefined(testingHandler["setStatusCode"](new TestingHandlerOptions(TestingStrategy.RANDOM), "https://graph.microsoft.com/v1.0/me/", "POST"));
		});

		it("Should return a response for RANDOM mode without status Code", () => {
			assert.isDefined(testingHandler["setStatusCode"](new TestingHandlerOptions(TestingStrategy.RANDOM, 404), "https://graph.microsoft.com/v1.0/me/", "POST"));
		});
	});

	describe("getOptions", () => {
		it("Should return the options in the context object", () => {
			const options = new TestingHandlerOptions(TestingStrategy.MANUAL, 405);
			const cxt: Context = {
				request: "url",
				middlewareControl: new MiddlewareControl([options]),
			};
			const o = testingHandler["getOptions"](cxt);
			assert.equal(o.testingStrategy, TestingStrategy.MANUAL);
			assert.equal(o.statusCode, 405);
		});

		it("Should return the default set of options with RANDOM in the middleware", () => {
			const cxt: Context = {
				request: "url",
			};
			const o = testingHandler["getOptions"](cxt);
			assert.equal(o.testingStrategy, TestingStrategy.RANDOM);
			assert.equal(o.statusCode, undefined);
		});

		it("Should return the default set of options with DEFAULT in the middleware", () => {
			const tempTestingHandler = new TestingHandler(new TestingHandlerOptions(TestingStrategy.MANUAL));
			const cxt: Context = {
				request: "url",
			};
			const o = tempTestingHandler["getOptions"](cxt);
			assert.equal(o.testingStrategy, TestingStrategy.MANUAL);
			assert.equal(o.statusCode, undefined);
		});
	});
});
