import { assert } from "chai";

import { Context } from "../../src/IContext";
import { ChaosHandler } from "../../src/middleware/ChaosHandler";
import { MiddlewareControl } from "../../src/middleware/MiddlewareControl";
import { ChaosHandlerOptions } from "../../src/middleware/options/ChaosHandlerOptions";
import { ChaosStrategy } from "../../src/middleware/options/ChaosStrategy";
import { RequestMethod } from "../../src/RequestMethod";
import { DummyHTTPMessageHandler } from "../DummyHTTPMessageHandler";

const chaosHandlerOptions = new ChaosHandlerOptions();
const chaosHandler = new ChaosHandler();

describe("ChaosHandler.ts", () => {
	/* tslint:disable: no-string-literal */
	describe("constructor", () => {
		it("Should create an instance with given options", () => {
			const handler = new ChaosHandler(chaosHandlerOptions);
			assert.isDefined(handler["options"]);
		});

		it("Should create an instance with default set of options", () => {
			const handler = new ChaosHandler();
			assert.isDefined(handler["options"]);
		});
	});

	describe("createResponseHeaders", () => {
		it("Should have request-id for every random statusCode", () => {
			const responseHeader = chaosHandler["createResponseHeaders"](204, "xxxxxxxxxxxxxxxx", new Date().toString());
			assert.isDefined(responseHeader.get("request-id"));
		});

		it("Should have retry-after for 429 case", () => {
			const responseHeader = chaosHandler["createResponseHeaders"](429, "xxxxxxxxxxxxxxxx", new Date().toString());
			assert.isDefined(responseHeader.get("retry-after"));
		});
	});

	describe("createResponseBody", () => {
		it("Should return error in response body for error scenarios", () => {
			const responseBody = chaosHandler["createResponseBody"](404, "Not Found", "xxxxxxxxxxxxxx", new Date().toString());
			assert.isDefined(responseBody["error"]);
		});

		it("Should return empty response body for success scenarios", () => {
			const responseBody = chaosHandler["createResponseBody"](200, "Not Found", "xxxxxxxxxxxxxx", new Date().toString());
			assert.equal(Object.keys(responseBody).length, 0);
		});
	});

	describe("createResponse", () => {
		const cxt: Context = {
			request: "https://graph.microsoft.com/v1.0/me",
			options: {
				method: "GET",
			},
		};

		it("Should return a valid response object for MANUAL case", () => {
			chaosHandler["createResponse"](new ChaosHandlerOptions(ChaosStrategy.MANUAL, "Manual response", 404), cxt);
			assert.isDefined(cxt.response);
		});

		it("Should return a valid response object for RANDOM case", () => {
			chaosHandler["createResponse"](new ChaosHandlerOptions(ChaosStrategy.RANDOM), cxt);
			assert.isDefined(cxt.response);
		});
	});

	describe("sendRequest", async () => {
		const cxt: Context = {
			request: "https://graph.microsoft.com/v1.0/me",
			options: {
				method: "GET",
			},
		};

		const manualMap: Map<string, Map<string, number>> = new Map([["/me", new Map([["GET", 500]])]]);
		const tempManualOptions: ChaosHandlerOptions = new ChaosHandlerOptions(ChaosStrategy.MANUAL);
		const tempChaosHandler = new ChaosHandler(tempManualOptions, manualMap);

		const dummyHTTPHandler = new DummyHTTPMessageHandler();
		const handler = new ChaosHandler();
		handler.setNext(dummyHTTPHandler);

		it("Should return a response after creating it", async () => {
			tempChaosHandler["sendRequest"](tempManualOptions, cxt);
			assert.isDefined(cxt.response);
		});

		it("Should send the request to the graph", async () => {
			handler["sendRequest"](new ChaosHandlerOptions(ChaosStrategy.RANDOM, "I generated the error", undefined, 100), cxt);
			assert.isDefined(cxt.response);
		});
	});

	describe("getRandomStatusCode", () => {
		it("Should return a status code for GET method", () => {
			assert.isDefined(chaosHandler["getRandomStatusCode"](RequestMethod.GET));
		});

		it("Should return a status code for POST method", () => {
			assert.isDefined(chaosHandler["getRandomStatusCode"](RequestMethod.POST));
		});

		it("Should return a status code for PUT method", () => {
			assert.isDefined(chaosHandler["getRandomStatusCode"](RequestMethod.PUT));
		});

		it("Should return a status code for PATCH method", () => {
			assert.isDefined(chaosHandler["getRandomStatusCode"](RequestMethod.PATCH));
		});

		it("Should return a status code for DELETE method", () => {
			assert.isDefined(chaosHandler["getRandomStatusCode"](RequestMethod.DELETE));
		});
	});

	describe("getRelativeURL", () => {
		it("Should return a relative URL for the complete URL", () => {
			assert.equal(chaosHandler["getRelativeURL"]("https://graph.microsoft.com/v1.0/me"), "/me");
		});

		it("Should return a relative URL for the complete URL with filter", () => {
			assert.equal(chaosHandler["getRelativeURL"]("https://graph.microsoft.com/v1.0/me/messages?filter=emailAddress eq 'jon@contoso.com'"), "/me/messages");
		});

		it("Should return a relative URL for the complete URL with ids", () => {
			assert.equal(chaosHandler["getRelativeURL"]("https://graph.microsoft.com/v1.0/me/messages/q1abcxx-xxxxxx-xxxxabc"), "/me/messages/q1abcxx-xxxxxx-xxxxabc");
		});

		it("Should return a relative URL for the complete URL in case of beta", () => {
			assert.equal(chaosHandler["getRelativeURL"]("https://graph.microsoft.com/beta/me/messages"), "/me/messages");
		});
	});

	describe("setStatusCode", () => {
		const manualMap: Map<string, Map<string, number>> = new Map([["/me/messages/.*", new Map([["GET", 500], ["PATCH", 201]])], ["/me", new Map([["GET", 500], ["PATCH", 201]])]]);
		const tempManualOptions: ChaosHandlerOptions = new ChaosHandlerOptions(ChaosStrategy.MANUAL);
		const tempManualOptionsRegex: ChaosHandlerOptions = new ChaosHandlerOptions(ChaosStrategy.MANUAL);
		const tempChaosHandlerManual = new ChaosHandler(tempManualOptions, manualMap);
		const tempChaosHandlerManualRegex = new ChaosHandler(tempManualOptionsRegex, manualMap);

		it("Should set a statusCode for MANUAL mode", () => {
			const tempOptions = new ChaosHandlerOptions(ChaosStrategy.MANUAL, "Set status code", 404);
			chaosHandler["setStatusCode"](tempOptions, "https://graph.microsoft.com/v1.0/me", RequestMethod.GET);
			assert.isDefined(tempOptions.statusCode);
		});

		it("Should  set a statusCode for RANDOM mode", () => {
			const tempOptions = new ChaosHandlerOptions(ChaosStrategy.RANDOM, "I generated the error", undefined, 100);
			chaosHandler["setStatusCode"](tempOptions, "https://graph.microsoft.com/v1.0/me", RequestMethod.POST);
			assert.isDefined(tempOptions.statusCode);
		});

		it("Should set a statusCode for MANUAL mode with manualMap", () => {
			tempChaosHandlerManual["setStatusCode"](tempManualOptions, "https://graph.microsoft.com/v1.0/me", RequestMethod.PATCH);
			assert.equal(tempManualOptions.statusCode, 201);
		});

		it("Should set a statusCode for MANUAL mode with manualMap matching regex", () => {
			tempChaosHandlerManualRegex["setStatusCode"](tempManualOptionsRegex, "https://graph.microsoft.com/v1.0/me/messages/abc123-xxxxx-xxxxx", RequestMethod.GET);
			assert.equal(tempManualOptionsRegex.statusCode, 500);
		});
	});

	describe("getOptions", () => {
		it("Should return the options in the context object", () => {
			const options = new ChaosHandlerOptions(ChaosStrategy.MANUAL, "Get options", 405);
			const cxt: Context = {
				request: "url",
				middlewareControl: new MiddlewareControl([options]),
			};
			const o = chaosHandler["getOptions"](cxt);
			assert.equal(o.chaosStrategy, ChaosStrategy.MANUAL);
			assert.equal(o.statusCode, 405);
		});

		it("Should return the default set of options with RANDOM in the middleware", () => {
			const cxt: Context = {
				request: "url",
			};
			const o = chaosHandler["getOptions"](cxt);
			assert.equal(o.chaosStrategy, ChaosStrategy.RANDOM);
			assert.equal(o.statusCode, undefined);
		});

		it("Should return the default set of options with DEFAULT in the middleware", () => {
			const tempChaosHandler = new ChaosHandler(new ChaosHandlerOptions(ChaosStrategy.MANUAL));
			const cxt: Context = {
				request: "url",
			};
			const o = tempChaosHandler["getOptions"](cxt);
			assert.equal(o.chaosStrategy, ChaosStrategy.MANUAL);
			assert.equal(o.statusCode, undefined);
		});
	});

	describe("execute", async () => {
		const manualMap: Map<string, Map<string, number>> = new Map([["/me", new Map([["GET", 500], ["PATCH", 201]])]]);
		const dummyHTTPHandler = new DummyHTTPMessageHandler();
		const tempChaosHandlerDefault = new ChaosHandler(new ChaosHandlerOptions());
		const tempChaosHandlerRandom = new ChaosHandler(new ChaosHandlerOptions(ChaosStrategy.RANDOM));
		const tempChaosHandlerManual = new ChaosHandler(new ChaosHandlerOptions(ChaosStrategy.MANUAL), manualMap);
		tempChaosHandlerDefault.setNext(dummyHTTPHandler);
		tempChaosHandlerRandom.setNext(dummyHTTPHandler);
		tempChaosHandlerManual.setNext(dummyHTTPHandler);

		it("Should return response for Default Case", async () => {
			const options = new ChaosHandlerOptions(ChaosStrategy.RANDOM);
			const cxt: Context = {
				request: "https://graph.microsoft.com/v1.0/me",
				options: {
					method: "GET",
				},
				middlewareControl: new MiddlewareControl([options]),
			};
			assert.isDefined(tempChaosHandlerDefault["execute"](cxt));
		});

		it("Should return response for Random case", async () => {
			const cxt: Context = {
				request: "https://graph.microsoft.com/v1.0/me",
				options: {
					method: "GET",
				},
			};
			assert.isDefined(tempChaosHandlerRandom["execute"](cxt));
		});

		it("Should return response for Manual Global case", async () => {
			const cxt: Context = {
				request: "https://graph.microsoft.com/v1.0/me",
				options: {
					method: "GET",
				},
			};
			assert.isDefined(tempChaosHandlerManual["execute"](cxt));
		});

		it("Should return response for Manual Request Level case", async () => {
			const options = new ChaosHandlerOptions(ChaosStrategy.MANUAL, "Manual Request level case", 200);
			const cxt: Context = {
				request: "https://graph.microsoft.com/v1.0/me",
				options: {
					method: "GET",
				},
				middlewareControl: new MiddlewareControl([options]),
			};
			assert.isDefined(tempChaosHandlerManual["execute"](cxt));
		});
	});
});
