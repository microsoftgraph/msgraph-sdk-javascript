import { assert } from "chai";

import { Context } from "../../src/IContext";
import { MiddlewareControl } from "../../src/middleware/MiddlewareControl";
import { TestingHandlerOptions } from "../../src/middleware/options/TestingHandlerOptions";
import { TestingStrategy } from "../../src/middleware/options/TestingStrategy";
import { TestingHandler } from "../../src/middleware/TestingHandler";
import { RequestMethod } from "../../src/RequestMethod";

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
			const responseHeader = testingHandler["createResponseHeaders"](204, "xxxxxxxxxxxxxxxx", new Date().toString());
			assert.isDefined(responseHeader.get("request-id"));
		});

		it("Should have Location for 3xx cases", () => {
			const responseHeader = testingHandler["createResponseHeaders"](301, "xxxxxxxxxxxxxxxx", new Date().toString());
			assert.isDefined(responseHeader.get("Location"));
		});

		it("Should have request-id for 3xx cases", () => {
			const responseHeader = testingHandler["createResponseHeaders"](301, "xxxxxxxxxxxxxxxx", new Date().toString());
			assert.isDefined(responseHeader.get("request-id"));
		});

		it("Should have timeout for 429 case", () => {
			const responseHeader = testingHandler["createResponseHeaders"](429, "xxxxxxxxxxxxxxxx", new Date().toString());
			assert.isDefined(responseHeader.get("retry-after"));
		});

		it("Should have request-id for 5xx cases", () => {
			const responseHeader = testingHandler["createResponseHeaders"](500, "xxxxxxxxxxxxxxxx", new Date().toString());
			assert.isDefined(responseHeader.get("request-id"));
		});
	});

	describe("createResponseBody", () => {
		it("Should return error in response body for error scenarios", () => {
			const responseBody = testingHandler["createResponseBody"](404, "Not Found", "xxxxxxxxxxxxxx", new Date().toString());
			assert.isDefined(responseBody["error"]);
		});

		it("Should return empty response body for success scenarios", () => {
			const responseBody = testingHandler["createResponseBody"](303, "Not Found", "xxxxxxxxxxxxxx", new Date().toString());
			assert.equal(Object.keys(responseBody).length, 0);
		});
	});

	describe("createResponse", async () => {
		const cxt: Context = {
			request: "https://graph.microsoft.com/v1.0/me",
			options: {
				method: "GET",
			},
		};

		it("Should return a valid response object for MANUAL case", async () => {
			assert.isDefined(testingHandler["createResponse"](new TestingHandlerOptions(TestingStrategy.MANUAL, 404), cxt));
		});

		it("Should return a valid response object for RANDOM case", async () => {
			assert.isDefined(testingHandler["createResponse"](new TestingHandlerOptions(TestingStrategy.RANDOM), cxt));
		});
	});

	describe("getRandomStatusCode", () => {
		it("Should return a status code for GET method", () => {
			assert.isDefined(testingHandler["getRandomStatusCode"](RequestMethod.GET));
		});

		it("Should return a status code for POST method", () => {
			assert.isDefined(testingHandler["getRandomStatusCode"](RequestMethod.POST));
		});

		it("Should return a status code for PUT method", () => {
			assert.isDefined(testingHandler["getRandomStatusCode"](RequestMethod.PUT));
		});

		it("Should return a status code for PATCH method", () => {
			assert.isDefined(testingHandler["getRandomStatusCode"](RequestMethod.PATCH));
		});

		it("Should return a status code for DELETE method", () => {
			assert.isDefined(testingHandler["getRandomStatusCode"](RequestMethod.DELETE));
		});
	});

	describe("getRelativeURL", () => {
		it("Should return a relative URL for the complete URL", () => {
			assert.equal(testingHandler["getRelativeURL"]("https://graph.microsoft.com/v1.0/me"), "/me");
		});

		it("Should return a relative URL for the complete URL with filter", () => {
			assert.equal(testingHandler["getRelativeURL"]("https://graph.microsoft.com/v1.0/me/messages?filter=emailAddress eq 'jon@contoso.com'"), "/me/messages");
		});

		it("Should return a relative URL for the complete URL with ids", () => {
			assert.equal(testingHandler["getRelativeURL"]("https://graph.microsoft.com/v1.0/me/messages/q1abcxx-xxxxxx-xxxxabc"), "/me/messages/q1abcxx-xxxxxx-xxxxabc");
		});

		it("Should return a relative URL for the complete URL in case of beta", () => {
			assert.equal(testingHandler["getRelativeURL"]("https://graph.microsoft.com/beta/me/messages"), "/me/messages");
		});
	});

	describe("setStatusCode", () => {
		const manualMap: Map<string, Map<string, number>> = new Map([["/me/messages/.*", new Map([["GET", 500], ["PATCH", 201]])], ["/me", new Map([["GET", 500], ["PATCH", 201]])]]);
		const tempManualOptions: TestingHandlerOptions = new TestingHandlerOptions(TestingStrategy.MANUAL);
		const tempManualOptionsRegex: TestingHandlerOptions = new TestingHandlerOptions(TestingStrategy.MANUAL);
		const tempTestingHandlerManual = new TestingHandler(tempManualOptions, manualMap);
		const tempTestingHandlerManualRegex = new TestingHandler(tempManualOptionsRegex, manualMap);

		it("Should set a statusCode for MANUAL mode", () => {
			const tempOptions = new TestingHandlerOptions(TestingStrategy.MANUAL, 404);
			testingHandler["setStatusCode"](tempOptions, "https://graph.microsoft.com/v1.0/me", RequestMethod.GET);
			assert.isDefined(tempOptions.statusCode);
		});

		it("Should  set a statusCode for RANDOM mode without status Code", () => {
			const tempOptions = new TestingHandlerOptions(TestingStrategy.RANDOM);
			const passThrough = testingHandler["setStatusCode"](tempOptions, "https://graph.microsoft.com/v1.0/me", RequestMethod.POST);
			console.log(tempOptions.statusCode);
			if (passThrough === false) {
				assert.isDefined(tempOptions.statusCode);
			}
		});

		it("Should  set a statusCode for RANDOM mode with status Code", () => {
			const tempOptions = new TestingHandlerOptions(TestingStrategy.RANDOM, 404);
			testingHandler["setStatusCode"](tempOptions, "https://graph.microsoft.com/v1.0/me", RequestMethod.POST);
			assert.isDefined(tempOptions.statusCode);
		});

		it("Should set a statusCode for MANUAL mode with manualMap", () => {
			tempTestingHandlerManual["setStatusCode"](tempManualOptions, "https://graph.microsoft.com/v1.0/me", RequestMethod.PATCH);
			// console.log(tempManualOptions.statusCode);
			assert.equal(tempManualOptions.statusCode, 201);
		});

		it("Should set a statusCode for MANUAL mode with manualMap matching regex", () => {
			tempTestingHandlerManualRegex["setStatusCode"](tempManualOptionsRegex, "https://graph.microsoft.com/v1.0/me/messages/abc123-xxxxx-xxxxx", RequestMethod.GET);
			assert.equal(tempManualOptionsRegex.statusCode, 500);
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

	describe("execute", async () => {
		const manualMap: Map<string, Map<string, number>> = new Map([["/me", new Map([["GET", 500], ["PATCH", 201]])]]);
		const tempTestingHandlerDefault = new TestingHandler(new TestingHandlerOptions());
		const tempTestingHandlerRandom = new TestingHandler(new TestingHandlerOptions(TestingStrategy.RANDOM));
		const tempTestingHandlerManual = new TestingHandler(new TestingHandlerOptions(TestingStrategy.MANUAL), manualMap);

		it("Should return response for Default Case", async () => {
			const options = new TestingHandlerOptions(TestingStrategy.RANDOM);
			const cxt: Context = {
				request: "https://graph.microsoft.com/v1.0/me",
				options: {
					method: "GET",
				},
				middlewareControl: new MiddlewareControl([options]),
			};
			assert.isDefined(tempTestingHandlerDefault["execute"](cxt));
		});

		it("Should return response for Random case", async () => {
			const cxt: Context = {
				request: "https://graph.microsoft.com/v1.0/me",
				options: {
					method: "GET",
				},
			};
			assert.isDefined(tempTestingHandlerRandom["execute"](cxt));
		});

		it("Should return response for Manual Global case", async () => {
			const cxt: Context = {
				request: "https://graph.microsoft.com/v1.0/me",
				options: {
					method: "GET",
				},
			};
			assert.isDefined(tempTestingHandlerManual["execute"](cxt));
		});

		it("Should return response for Manual Request Level case", async () => {
			const options = new TestingHandlerOptions(TestingStrategy.MANUAL, 200);
			const cxt: Context = {
				request: "https://graph.microsoft.com/v1.0/me",
				options: {
					method: "GET",
				},
				middlewareControl: new MiddlewareControl([options]),
			};
			assert.isDefined(tempTestingHandlerManual["execute"](cxt));
		});
	});
});
