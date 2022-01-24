/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module Client
 */
 import { HttpClient } from "@microsoft/kiota-http-fetchlibrary";

import { GraphAuthenticationProvider } from "./authentication/GraphAuthenticationProvider";
import { CallBackAccessTokenProvider } from "./CallBackAccessTokenProvider";
import { GRAPH_API_VERSION, GRAPH_BASE_URL } from "./Constants";
import { GraphClientError } from "./GraphClientError";
import { GraphRequest } from "./GraphRequest";
import { HTTPClientFactory } from "./HTTPClientFactory";
import { ClientOptions } from "./IClientOptions";
import { Options } from "./IOptions";
import { validatePolyFilling } from "./ValidatePolyFilling";

export class Client {
	/**
	 * @private
	 * A member which stores the Client instance options
	 */
	private config: ClientOptions = {
		baseUrl: GRAPH_BASE_URL,
		debugLogging: false,
		defaultVersion: GRAPH_API_VERSION,
	};

	/**
	 * @private
	 * A member which holds the HTTPClient instance
	 */
	private httpClient: HttpClient;

	private authenticationProvider: AuthenticationProvider;

	/**
	 * @public
	 * @static
	 * To create a client instance with options and initializes the default middleware chain
	 * @param {Options} options - The options for client instance
	 * @returns The Client instance
	 */
	public static init(options: Options): Client {
		const clientOptions: ClientOptions = {};
		for (const i in options) {
			if (Object.prototype.hasOwnProperty.call(options, i)) {
				clientOptions[i] = i === "authProvider" ? new CallBackAccessTokenProvider(options[i]) : options[i];
			}
		}
		return Client.initWithMiddleware(clientOptions);
	}

	/**
	 * @public
	 * @static
	 * To create a client instance with the Client Options
	 * @param {ClientOptions} clientOptions - The options object for initializing the client
	 * @returns The Client instance
	 */
	public static initWithMiddleware(clientOptions: ClientOptions): Client {
		return new Client(clientOptions);
	}

	/**
	 * @private
	 * @constructor
	 * Creates an instance of Client
	 * @param {ClientOptions} clientOptions - The options to instantiate the client object
	 */
	private constructor(clientOptions: ClientOptions) {
		validatePolyFilling();
		for (const key in clientOptions) {
			if (Object.prototype.hasOwnProperty.call(clientOptions, key)) {
				this.config[key] = clientOptions[key];
			}
		}
		let httpClient: HTTPClient;
		if (clientOptions.accessTokenProvider !== undefined && clientOptions.authenticationProvider !== undefined) {
			const error = new GraphClientError();
			error.name = "AmbiguityInInitialization";
			error.message = "Unable to Create Client, Please provide either an AuthenticationProvider implementation or an AccessTokenProvider implementation not both";
			throw error;
		} else if (clientOptions.authenticationProvider !== undefined) {
			this.authenticationProvider = clientOptions.authenticationProvider;
		} else if (clientOptions.accessTokenProvider !== undefined) {
			this.authenticationProvider = new GraphAuthenticationProvider(clientOptions.accessTokenProvider);
		}

		if (clientOptions.middleware !== undefined) {
			httpClient = new HTTPClient(...[].concat(clientOptions.middleware));
		} else {
			const error = new Error();
			error.name = "InvalidMiddlewareChain";
			error.message = "Unable to Create Client, Please provide either authentication provider for default middleware chain or custom middleware chain";
			throw error;
		}
		this.httpClient = httpClient;
	}

	/**
	 * @public
	 * Entry point to make requests
	 * @param {string} path - The path string value
	 * @returns The graph request instance
	 */
	public api(path: string): GraphRequest {
		return new GraphRequest(this.httpClient, this.config, path);
	}
}
