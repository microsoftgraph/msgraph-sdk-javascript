import { assert } from "chai";

import { Context } from "../../src/IContext";
import { MiddlewareControl } from "../../src/middleware/MiddlewareControl";
import { TestingHandlerOptions } from "../../src/middleware/options/TestingHandlerOptions";
import { TestingStrategy } from "../../src/middleware/options/TestingStrategy";
import { TestingHandler } from "../../src/middleware/TestingHandler";

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

	describe("createResponseHeaders", () => {
		it("Should have request-id for every random statusCode", () => {
			const responseHeader = testingHandler["createResponseHeaders"](204, "statusMessage", "xxxxxxxxxxxxxxxx", new Date());
			assert.isDefined(responseHeader["request-id"]);
		});

		it("Should have Location for 3xx cases", () => {
			const responseHeader = testingHandler["createResponseHeaders"](301, "statusMessage", "xxxxxxxxxxxxxxxx", new Date());
			assert.isDefined(responseHeader["Location"]);
		});

		it("Should have request-id for 3xx cases", () => {
			const responseHeader = testingHandler["createResponseHeaders"](301, "statusMessage", "xxxxxxxxxxxxxxxx", new Date());
			assert.isDefined(responseHeader["request-id"]);
		});

		it("Should have timeout for 429 case", () => {
			const responseHeader = testingHandler["createResponseHeaders"](429, "statusMessage", "xxxxxxxxxxxxxxxx", new Date());
			assert.isDefined(responseHeader["retry-after"]);
		});

		it("Should have request-id for 5xx cases", () => {
			const responseHeader = testingHandler["createResponseHeaders"](500, "statusMessage", "xxxxxxxxxxxxxxxx", new Date());
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
			assert.isDefined(testingHandler["createResponse"](new TestingHandlerOptions(TestingStrategy.MANUAL, 404), "https://graph.microsoft.com/v1.0/me/", "GET"));
		});

		it("Should return a valid response object for RANDOM case", () => {
			assert.isDefined(testingHandler["createResponse"](new TestingHandlerOptions(TestingStrategy.RANDOM), "https://graph.microsoft.com/v1.0/me/", "GET"));
		});
	});

	describe("getRandomStatusCode", () => {
		it("Should return a status code for GET method", () => {
			assert.isDefined(testingHandler["getRandomStatusCode"]("GET"));
		});

		it("Should return a status code for POST method", () => {
			assert.isDefined(testingHandler["getRandomStatusCode"]("POST"));
		});

		it("Should return a status code for PUT method", () => {
			assert.isDefined(testingHandler["getRandomStatusCode"]("PUT"));
		});

		it("Should return a status code for PATCH method", () => {
			assert.isDefined(testingHandler["getRandomStatusCode"]("PATCH"));
		});

		it("Should return a status code for DELETE method", () => {
			assert.isDefined(testingHandler["getRandomStatusCode"]("DELETE"));
		});
	});

	describe("getRelativeURL", () => {
		it("Should return a relative URL for the complete URL", () => {
			assert.equal(testingHandler["getRelativeURL"](new RegExp("http(s)://graph.microsoft.com/[^/]*/"), "https://graph.microsoft.com/v1.0/me/"), "me/");
		});
	});

	describe("setStatusCode", () => {
		it("Should return a response for MANUAL mode", () => {
			const tempOptions = new TestingHandlerOptions(TestingStrategy.MANUAL, 404);
			testingHandler["setStatusCode"](tempOptions, "https://graph.microsoft.com/v1.0/me/", "GET");
			assert.isDefined(tempOptions.statusCode);
		});

		it("Should return a response for RANDOM mode without status Code", () => {
			const tempOptions = new TestingHandlerOptions(TestingStrategy.RANDOM);
			testingHandler["setStatusCode"](tempOptions, "https://graph.microsoft.com/v1.0/me/", "POST");
			assert.isDefined(tempOptions.statusCode);
		});

		it("Should return a response for RANDOM mode without status Code", () => {
			const tempOptions = new TestingHandlerOptions(TestingStrategy.RANDOM, 404);
			testingHandler["setStatusCode"](tempOptions, "https://graph.microsoft.com/v1.0/me/", "POST");
			assert.isDefined(tempOptions.statusCode);
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

	describe("execute", () => {
		const manualMap: Map<string, Map<string, number>> = new Map([["/me", new Map([["GET", 500], ["PATCH", 201]])]]);
		const tempTestingHandlerDefault = new TestingHandler(new TestingHandlerOptions());
		const tempTestingHandlerRandom = new TestingHandler(new TestingHandlerOptions(TestingStrategy.RANDOM));
		const tempTestingHandlerManual = new TestingHandler(new TestingHandlerOptions(TestingStrategy.MANUAL), manualMap);

		it("Should return response for Default Case", () => {
			const options = new TestingHandlerOptions(TestingStrategy.RANDOM);
			const cxt: Context = {
				request: "/me",
				options: {
					method: "GET",
				},
				middlewareControl: new MiddlewareControl([options]),
			};
			assert.isDefined(tempTestingHandlerDefault["execute"](cxt));
		});

		it("Should return response for Random case", () => {
			const cxt: Context = {
				request: "/me",
				options: {
					method: "GET",
				},
			};
			assert.isDefined(tempTestingHandlerRandom["execute"](cxt));
		});

		it("Should return response for Manual Global case", () => {
			const cxt: Context = {
				request: "/me",
				options: {
					method: "GET",
				},
			};
			assert.isDefined(tempTestingHandlerManual["execute"](cxt));
		});

		it("Should return response for Manual Request Level case", () => {
			const options = new TestingHandlerOptions(TestingStrategy.MANUAL, 200);
			const cxt: Context = {
				request: "/me",
				options: {
					method: "GET",
				},
				middlewareControl: new MiddlewareControl([options]),
			};
			assert.isDefined(tempTestingHandlerManual["execute"](cxt));
		});
	});
});
