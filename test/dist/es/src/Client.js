/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * @module Client
 */
import { GRAPH_API_VERSION, GRAPH_BASE_URL } from "./Constants";
import { CustomAuthenticationProvider } from "./CustomAuthenticationProvider";
import { GraphRequest } from "./GraphRequest";
import { HTTPClient } from "./HTTPClient";
import { HTTPClientFactory } from "./HTTPClientFactory";
import { validatePolyFilling } from "./ValidatePolyFilling";
export class Client {
	/**
	 * @private
	 * @constructor
	 * Creates an instance of Client
	 * @param {ClientOptions} clientOptions - The options to instantiate the client object
	 */
	constructor(clientOptions) {
		/**
		 * @private
		 * A member which stores the Client instance options
		 */
		this.config = {
			baseUrl: GRAPH_BASE_URL,
			debugLogging: false,
			defaultVersion: GRAPH_API_VERSION,
		};
		try {
			validatePolyFilling();
		} catch (error) {
			throw error;
		}
		for (const key in clientOptions) {
			if (clientOptions.hasOwnProperty(key)) {
				this.config[key] = clientOptions[key];
			}
		}
		let httpClient;
		if (clientOptions.authProvider !== undefined && clientOptions.middleware !== undefined) {
			const error = new Error();
			error.name = "AmbiguityInInitialization";
			error.message = "Unable to Create Client, Please provide either authentication provider for default middleware chain or custom middleware chain not both";
			throw error;
		} else if (clientOptions.authProvider !== undefined) {
			httpClient = HTTPClientFactory.createWithAuthenticationProvider(clientOptions.authProvider);
		} else if (clientOptions.middleware !== undefined) {
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
	 * @static
	 * To create a client instance with options and initializes the default middleware chain
	 * @param {Options} options - The options for client instance
	 * @returns The Client instance
	 */
	static init(options) {
		const clientOptions = {};
		for (const i in options) {
			if (options.hasOwnProperty(i)) {
				clientOptions[i] = i === "authProvider" ? new CustomAuthenticationProvider(options[i]) : options[i];
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
	static initWithMiddleware(clientOptions) {
		try {
			return new Client(clientOptions);
		} catch (error) {
			throw error;
		}
	}
	/**
	 * @public
	 * Entry point to make requests
	 * @param {string} path - The path string value
	 * @returns The graph request instance
	 */
	api(path) {
		return new GraphRequest(this.httpClient, this.config, path);
	}
}
//# sourceMappingURL=Client.js.map
