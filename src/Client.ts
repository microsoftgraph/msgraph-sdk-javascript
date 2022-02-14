/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module Client
 */

import { BaseBearerTokenAuthenticationProvider } from "@microsoft/kiota-abstractions";

import { GraphClientError } from ".";
import { GRAPH_API_VERSION, GRAPH_BASE_URL } from "./Constants";
import { GraphRequest } from "./GraphRequest";
import { appendGraphAndCustomHosts } from "./GraphRequestUtil";
import { HTTPClient } from "./HTTPClient";
import { HTTPClientFactory } from "./HTTPClientFactory";
import { ClientOptions } from "./IClientOptions";
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
	private httpClient: HTTPClient;

	private authProvider: BaseBearerTokenAuthenticationProvider;

	/**
	 * @public
	 * @static
	 * To create a client instance with options and initializes the default middleware chain
	 * @param {Options} options - The options for client instance
	 * @returns The Client instance
	 */
	public static init(options: ClientOptions): Client {
		return new Client(options);
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
		if (clientOptions.authProvider === undefined) {
			const error = new GraphClientError();
			error.name = "Client Initialization Failed";
			error.message = "Unable to Create Client, Please provide an authentication provider";
			throw error;
		}
		this.authProvider = clientOptions.authProvider;
		const hostsValidator = this.authProvider.accessTokenProvider.getAllowedHostsValidator();
		const allowedHosts = clientOptions.customHosts ? new Set([...clientOptions.customHosts, ...hostsValidator.getAllowedHosts()]) : new Set(hostsValidator.getAllowedHosts());
		const hostSetWithGraphandCustomHosts = appendGraphAndCustomHosts(allowedHosts);
		hostsValidator.setAllowedHosts(hostSetWithGraphandCustomHosts);
		if (!clientOptions.middleware) {
			httpClient = HTTPClientFactory.createWithDefaultMiddleware();
		} else {
			httpClient = new HTTPClient(...[].concat(clientOptions.middleware));
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
		return new GraphRequest(this.httpClient, this.authProvider, this.config, path);
	}
}
