/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import "isomorphic-fetch";

import { assert } from "chai";

import { SimpleAuthenticationProvider, TelemetryHandler } from "../../../src";
import { Client } from "../../../src/Client";
import { GraphClientError } from "../../../src/GraphClientError";
import { ClientOptions } from "../../../src/IClientOptions";
import { ChaosHandler } from "../../../src/middleware/ChaosHandler";
import { ChaosHandlerOptions } from "../../../src/middleware/options/ChaosHandlerOptions";
import { ChaosStrategy } from "../../../src/middleware/options/ChaosStrategy";
import { DummyHTTPMessageHandler } from "../../DummyHTTPMessageHandler";

describe("Client.ts", () => {
	describe("init", () => {
		const dummyAuthProvider = new SimpleAuthenticationProvider(async () => {
			return "AccessToken";
		}, ["scope1", "scope2"]);
		const dummyHTTPHandler = new DummyHTTPMessageHandler();

		it("Should return client instance for an authentication provider", () => {
			const options: ClientOptions = {
				authProvider: dummyAuthProvider,
			};
			const client: Client = Client.init(options);
			assert.isTrue(client instanceof Client);
			assert.isDefined(client["httpClient"]);
		});

		it("Should return client instance for a custom middleware chain", () => {
			const options: ClientOptions = {
				middleware: dummyHTTPHandler,
				authProvider: dummyAuthProvider,
			};
			const client: Client = Client.init(options);
			assert.isTrue(client instanceof Client);
			assert.isDefined(client["httpClient"]);
		});

		it("Should throw error in case of auth provider is not passed", () => {
			try {
				const options: ClientOptions = { authProvider: undefined };
				Client.init(options);
				throw new Error("Test Failed - Something wrong with the client initialization check");
			} catch (error) {
				assert.equal(error.name, "Client Initialization Failed");
			}
		});

		it("Init middleware using a middleware array", async () => {
			const responseBody = "Test response body";
			const options = new ChaosHandlerOptions(ChaosStrategy.MANUAL, "Testing middleware array", 200, 100, responseBody);
			const middlewareArray = [new ChaosHandler(options)];
			const client = Client.init({ middleware: middlewareArray, authProvider: dummyAuthProvider });

			const response = await client.api("me").get();
			assert.equal(response, responseBody);
		});

		it("Init middleware using a chained middleware array", async () => {
			const responseBody = "Test response body";
			const options = new ChaosHandlerOptions(ChaosStrategy.MANUAL, "Testing chained middleware array", 200, 100, responseBody);
			const chaosHandler = new ChaosHandler(options);
			const telemetryHandler = new TelemetryHandler();

			telemetryHandler.setNext(chaosHandler);

			const middlewareArray = [telemetryHandler];
			const client = Client.init({ middleware: middlewareArray, authProvider: dummyAuthProvider });

			const response = await client.api("me").get();
			assert.equal(response, responseBody);
		});

		it("Should throw error in case the access token is undefined", async () => {
			try {
				const options = {
					defaultVersion: "v1.0",
					debugLogging: true,
					authProvider: new SimpleAuthenticationProvider(async () => {
						return undefined;
					}, ["scope1", "scope2"]),
				};

				const client = Client.init(options);
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				const res = await client.api("/test").get();
			} catch (error) {
				assert.isTrue(error instanceof GraphClientError);
				assert.isDefined(error.message);
			}
		});

		it("Should throw error in case the access token is empty", async () => {
			try {
				const options = {
					defaultVersion: "v1.0",
					debugLogging: true,
					authProvider: new SimpleAuthenticationProvider(async () => {
						return "";
					}, ["scope1", "scope2"]),
				};

				const client = Client.init(options);
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				const res = await client.api("/test").get();
				throw new Error("Test failed - Expected error was not thrown");
			} catch (error) {
				assert.isTrue(error instanceof GraphClientError);
				assert.equal(error.message, "Please provide a valid access token");
			}
		});

		it("Init middleware with custom hosts", async () => {

			const options = new ChaosHandlerOptions(ChaosStrategy.MANUAL, "Testing chained middleware array", 200, 100, "");
			const chaosHandler = new ChaosHandler(options);

			const telemetry = new TelemetryHandler();
			const middleware = [telemetry, chaosHandler];

			const customHost = "test_custom";
			const customHosts = new Set<string>([customHost]);
			const client = Client.init({
				middleware,
				authProvider: new SimpleAuthenticationProvider(
					async () => {
						return "";
					},
					["scope1", "scope2"],
					customHosts,
				),
			});
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const allowedHosts = client["authProvider"].accessTokenProvider.getAllowedHostsValidator().getAllowedHosts();

			assert.isTrue(allowedHosts.includes(customHost));
		});

		it("Pass invalid custom hosts", async () => {
			try {
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				const accessToken = "DUMMY_TOKEN";

				const options = new ChaosHandlerOptions(ChaosStrategy.MANUAL, "Testing chained middleware array", 200, 100, "");
				const chaosHandler = new ChaosHandler(options);

				const telemetry = new TelemetryHandler();
				const middleware = [telemetry, chaosHandler];

				const customHost = "https://test_custom/v1.0/me";
				const customHosts = new Set<string>([customHost]);
				const client = Client.init({
					middleware,
					authProvider: new SimpleAuthenticationProvider(
						async () => {
							return accessToken;
						},
						["scope1", "scope2"],
						customHosts,
					),
				});
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				const response = await client.api(`https://test_custom/v1.0/me`).get();

				throw new Error("Test fails - Error expected when custom host is not valid");
			} catch (error) {
				assert.isDefined(error);
				assert.isDefined(error.message);
				assert.equal(error.message, "The request url is not present in the allowed hosts list or is not a valid host");
			}
		});
	});

	describe("init", () => {
		it("Should return a client instance with default middleware chain", () => {
			const options: ClientOptions = {
				authProvider: new SimpleAuthenticationProvider(async () => {
					return "";
				}, ["scope1", "scope2"]),
			};
			const client: Client = Client.init(options);
			assert.isDefined(client["httpClient"]);
		});
	});
});
