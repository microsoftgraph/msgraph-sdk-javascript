import { assert } from "chai";

import { ChaosHandler } from "../../../src/middleware/ChaosHandler";
import { ChaosHandlerOptions } from "../../../src/middleware/options/ChaosHandlerOptions";
import { ChaosStrategy } from "../../../src/middleware/options/ChaosStrategy";
import { RequestMethod } from "../../../src/RequestMethod";
import { DummyHTTPMessageHandler } from "../../DummyHTTPMessageHandler";

describe("ChaosHandler.ts", () => {
	const chaosHandlerOptions = new ChaosHandlerOptions();
	const chaosHandler = new ChaosHandler(chaosHandlerOptions);
	describe("constructor", () => {
		it("Should create an instance with given options", () => {
			const handler = new ChaosHandler(chaosHandlerOptions);
			assert.isDefined(handler["chaosHandlerOptions"]);
		});

		it("Should create an instance with default set of options", () => {
			const handler = new ChaosHandler();
			assert.isDefined(handler["chaosHandlerOptions"]);
		});
	});

	describe("createResponseHeaders", () => {
		it("Should have request-id for every random statusCode", () => {
			const options = new ChaosHandlerOptions(ChaosStrategy.MANUAL, "testStatusCode", 204);
			const chaosHandler = new ChaosHandler(options);
			const responseHeader = chaosHandler["createResponseHeaders"]("xxxxxxxxxxxxxxxx", new Date().toString());
			assert.isDefined(responseHeader.get("request-id"));
		});

		it("Should have retry-after for 429 case", () => {
			const options = new ChaosHandlerOptions(ChaosStrategy.MANUAL, "testStatusCode", 429);
			const chaosHandler = new ChaosHandler(options);
			const responseHeader = chaosHandler["createResponseHeaders"]("xxxxxxxxxxxxxxxx", new Date().toString());
			assert.isDefined(responseHeader.get("retry-after"));
		});
	});

	describe("createResponseBody", () => {
		it("Should return error in response body for error scenarios", () => {
			const options = new ChaosHandlerOptions(ChaosStrategy.MANUAL, "Not Found", 404);
			const chaosHandler = new ChaosHandler(options);
			const responseBody = chaosHandler["createResponseBody"]("xxxxxxxxxxxxxx", new Date().toString());
			assert.isDefined(responseBody["error"]);
		});

		it("Should return empty response body for success scenarios", () => {
			const options = new ChaosHandlerOptions(ChaosStrategy.MANUAL, "Not Found", 200);
			const chaosHandler = new ChaosHandler(options);
			const responseBody = chaosHandler["createResponseBody"]("xxxxxxxxxxxxxx", new Date().toString());
			assert.equal(Object.keys(responseBody).length, 0);
		});
	});

	describe("createResponse", () => {
		const url = "https://graph.microsoft.com/v1.0/me";

		it("Should return a valid response object for MANUAL case", () => {
			const chaosHandler = new ChaosHandler(new ChaosHandlerOptions(ChaosStrategy.MANUAL, "Manual response", 404));
			const response = chaosHandler["createResponse"](url);
			assert.isDefined(response);
		});

		it("Should return a valid response object for RANDOM case", () => {
			const chaosHandler = new ChaosHandler(new ChaosHandlerOptions(ChaosStrategy.RANDOM));
			const response = chaosHandler["createResponse"](url);
			assert.isDefined(response);
		});
	});

	describe("sendRequest", () => {
		const requestUrl = "https://graph.microsoft.com/v1.0/me";
		const requestInit: RequestInit = {
			method: "GET",
		};

		const manualMap: Map<string, Map<string, number>> = new Map([["/me", new Map([["GET", 500]])]]);
		const tempManualOptions: ChaosHandlerOptions = new ChaosHandlerOptions(ChaosStrategy.MANUAL, undefined, undefined, 100);
		const tempChaosHandler = new ChaosHandler(tempManualOptions, manualMap);

		const dummyHTTPHandler = new DummyHTTPMessageHandler();

		it("Should return a response after creating it", () => {
			const response = tempChaosHandler["sendRequest"](requestUrl, requestInit);
			assert.isDefined(response);
		});

		it("Should send the request to the graph", async () => {
			const handler = new ChaosHandler(new ChaosHandlerOptions(ChaosStrategy.RANDOM, "I generated the error", undefined, 100));
			const response = await handler["sendRequest"](requestUrl, requestInit);
			handler.setNext(dummyHTTPHandler);

			assert.isDefined(response);
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
		const manualMap: Map<string, Map<string, number>> = new Map([
			[
				"/me/messages/.*",
				new Map([
					["GET", 500],
					["PATCH", 201],
				]),
			],
			[
				"/me",
				new Map([
					["GET", 500],
					["PATCH", 201],
				]),
			],
		]);
		const tempManualOptions: ChaosHandlerOptions = new ChaosHandlerOptions(ChaosStrategy.MANUAL);
		const tempManualOptionsRegex: ChaosHandlerOptions = new ChaosHandlerOptions(ChaosStrategy.MANUAL);
		const tempChaosHandlerManual = new ChaosHandler(tempManualOptions, manualMap);
		const tempChaosHandlerManualRegex = new ChaosHandler(tempManualOptionsRegex, manualMap);

		it("Should set a statusCode for MANUAL mode", () => {
			const tempOptions = new ChaosHandlerOptions(ChaosStrategy.MANUAL, "Set status code", 404);
			const chaosHandler = new ChaosHandler(tempOptions);
			chaosHandler["setStatusCode"]("https://graph.microsoft.com/v1.0/me", RequestMethod.GET);

			assert.isDefined(tempOptions.statusCode);
		});

		it("Should  set a statusCode for RANDOM mode", () => {
			const tempOptions = new ChaosHandlerOptions(ChaosStrategy.RANDOM, "I generated the error", undefined, 100);
			const chaosHandler = new ChaosHandler(tempOptions);
			chaosHandler["setStatusCode"]("https://graph.microsoft.com/v1.0/me", RequestMethod.POST);
			assert.isDefined(tempOptions.statusCode);
		});

		it("Should set a statusCode for MANUAL mode with manualMap", () => {
			tempChaosHandlerManual["setStatusCode"]("https://graph.microsoft.com/v1.0/me", RequestMethod.PATCH);
			assert.equal(tempManualOptions.statusCode, 201);
		});

		it("Should set a statusCode for MANUAL mode with manualMap matching regex", () => {
			tempChaosHandlerManualRegex["setStatusCode"]("https://graph.microsoft.com/v1.0/me/messages/abc123-xxxxx-xxxxx", RequestMethod.GET);
			assert.equal(tempManualOptionsRegex.statusCode, 500);
		});
	});

	describe("execute", () => {
		const manualMap: Map<string, Map<string, number>> = new Map([
			[
				"/me",
				new Map([
					["GET", 500],
					["PATCH", 201],
				]),
			],
		]);
		const dummyHTTPHandler = new DummyHTTPMessageHandler();
		const tempChaosHandlerDefault = new ChaosHandler(new ChaosHandlerOptions());
		const tempChaosHandlerRandom = new ChaosHandler(new ChaosHandlerOptions(ChaosStrategy.RANDOM));
		const tempChaosHandlerManual = new ChaosHandler(new ChaosHandlerOptions(ChaosStrategy.MANUAL), manualMap);
		tempChaosHandlerDefault.setNext(dummyHTTPHandler);
		tempChaosHandlerRandom.setNext(dummyHTTPHandler);
		tempChaosHandlerManual.setNext(dummyHTTPHandler);
		const requestURL = "https://graph.microsoft.com/v1.0/me";
		const requestInit = {
			method: "GET",
		};
		it("Should return response for Default Case", () => {
			const options = new ChaosHandlerOptions(ChaosStrategy.RANDOM);

			const requestOptions = { ChaosHandlerOptionKey: options };

			assert.isDefined(tempChaosHandlerDefault["execute"](requestURL, requestInit, requestOptions));
		});

		it("Should return response for Random case", () => {
			assert.isDefined(tempChaosHandlerRandom["execute"](requestURL, requestInit));
		});

		it("Should return response for Manual Global case", () => {
			assert.isDefined(tempChaosHandlerManual["execute"](requestURL, requestInit));
		});

		it("Should return response for Manual Request Level case", () => {
			const options = new ChaosHandlerOptions(ChaosStrategy.MANUAL, "Manual Request level case", 200);
			const requestOptions = {
				ChaosHandlerOptionKey: options,
			};

			assert.isDefined(tempChaosHandlerManual["execute"](requestURL, requestInit, requestOptions));
		});

		it("Should return response for Manual Request Level case 100%", () => {
			const options = new ChaosHandlerOptions(ChaosStrategy.MANUAL, "Manual Request level case", 429, 100);
			const requestOptions = {
				ChaosHandlerOptionKey: options,
			};

			assert.isDefined(tempChaosHandlerManual["execute"](requestURL, requestInit, requestOptions));
		});
	});
});
