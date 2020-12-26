/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";
import "isomorphic-fetch";

import { CustomAuthenticationProvider, TelemetryHandler } from "../../../src";
import { Client } from "../../../src/Client";
import { AuthProvider } from "../../../src/IAuthProvider";
import { ClientOptions } from "../../../src/IClientOptions";
import { Options } from "../../../src/IOptions";
import { AuthenticationHandler } from "../../../src/middleware/AuthenticationHandler";
import { ChaosHandler } from "../../../src/middleware/ChaosHandler";
import { ChaosHandlerOptions } from "../../../src/middleware/options/ChaosHandlerOptions";
import { ChaosStrategy } from "../../../src/middleware/options/ChaosStrategy";
import { DummyAuthenticationProvider } from "../DummyAuthenticationProvider";
import { DummyHTTPMessageHandler } from "../DummyHTTPMessageHandler";

describe("Client.ts", () => {
	/* tslint:disable: no-string-literal */
	describe("initWithMiddleware", () => {
		const dummyAuthProvider = new DummyAuthenticationProvider();
		const dummyHTTPHandler = new DummyHTTPMessageHandler();

		it("Should throw an error in case if both auth provider and custom middleware is passed", () => {
			try {
				const options: ClientOptions = {
					authProvider: dummyAuthProvider,
					middleware: dummyHTTPHandler,
				};
				const client: Client = Client.initWithMiddleware(options);
				throw new Error("Something wrong with the ambiguity check");
			} catch (error) {
				assert.equal(error.name, "AmbiguityInInitialization");
			}
		});

		it("Should return client instance for an authentication provider", () => {
			const options: ClientOptions = {
				authProvider: dummyAuthProvider,
			};
			const client: Client = Client.initWithMiddleware(options);
			assert.isTrue(client instanceof Client);
			assert.isDefined(client["httpClient"]);
		});

		it("Should return client instance for a custom middleware chain", () => {
			const options: ClientOptions = {
				middleware: dummyHTTPHandler,
			};
			const client: Client = Client.initWithMiddleware(options);
			assert.isTrue(client instanceof Client);
			assert.isDefined(client["httpClient"]);
		});

		it("Should throw error in case of neither auth provider nor custom middleware is passed", () => {
			try {
				const options: ClientOptions = {};
				Client.initWithMiddleware(options);
				throw new Error("Something wrong with the client initialization check");
			} catch (error) {
				assert.equal(error.name, "InvalidMiddlewareChain");
			}
		});

		it("Init middleware using a middleware array", async () => {
			const provider: AuthProvider = (done) => {
				done(null, "dummy_token");
			};
			const authHandler = new AuthenticationHandler(new CustomAuthenticationProvider(provider));
			const responseBody = "Test response body";
			const options = new ChaosHandlerOptions(ChaosStrategy.MANUAL, "Testing middleware array", 200, 0, responseBody);
			const middlewareArray = [authHandler, new ChaosHandler(options)];
			const client = Client.initWithMiddleware({ middleware: middlewareArray });

			const response = await client.api("me").get();
			assert.equal(response, responseBody);
		});

		it("Init middleware using a chained middleware array", async () => {
			const provider: AuthProvider = (done) => {
				done(null, "dummy_token");
			};
			const authHandler = new AuthenticationHandler(new CustomAuthenticationProvider(provider));

			const responseBody = "Test response body";
			const options = new ChaosHandlerOptions(ChaosStrategy.MANUAL, "Testing chained middleware array", 200, 0, responseBody);
			const chaosHandler = new ChaosHandler(options);
			const telemetryHandler = new TelemetryHandler();

			authHandler.setNext(telemetryHandler);
			telemetryHandler.setNext(chaosHandler);

			const middlewareArray = [authHandler];
			const client = Client.initWithMiddleware({ middleware: middlewareArray });

			const response = await client.api("me").get();
			assert.equal(response, responseBody);
		});
	});

	describe("init", () => {
		it("Should return a client instance with default authentication provider and default middleware chain", () => {
			const provider: AuthProvider = (done) => {
				done(null, "dummy_token");
			};
			const options: Options = {
				authProvider: provider,
			};
			const client: Client = Client.init(options);
			assert.isDefined(client["httpClient"]);
		});
	});
	/* tslint:enable: no-string-literal */
});
