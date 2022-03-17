/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module Client
 */

import { AuthenticationProvider } from "@microsoft/kiota-abstractions";
import { HttpClient } from "@microsoft/kiota-http-fetchlibrary";
import { GraphClientError } from ".";
import { GRAPH_API_VERSION, GRAPH_BASE_URL } from "./Constants";
import { GraphRequest } from "./GraphRequest";
import { getDefaultMiddlewareChain } from "./HttpClientFactory";
import { ClientOptions } from "./IClientOptions";

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
	protected httpClient: HttpClient;

    protected authProvider:AuthenticationProvider

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
	public constructor(clientOptions: ClientOptions) {
		for (const key in clientOptions) {
			if (Object.prototype.hasOwnProperty.call(clientOptions, key)) {
				this.config[key] = clientOptions[key];
			}
		}
		let httpClient: HttpClient;
		if (clientOptions.authProvider === undefined) {
			const error = new GraphClientError();
			error.name = "AmbiguityInInitialization";
			error.message = "Unable to Create Client, Please provide an authentication provider";
			throw error;
		}
        this.authProvider = clientOptions.authProvider;
        if (!clientOptions.middleware) {
         
			httpClient = new HttpClient(undefined, ...[].concat(getDefaultMiddlewareChain(clientOptions)));
		} else  {
			httpClient = new HttpClient( clientOptions.customFetch,...[].concat(clientOptions.middleware));
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
		return new GraphRequest(this.httpClient, this.authProvider,this.config, path);
	}
}
