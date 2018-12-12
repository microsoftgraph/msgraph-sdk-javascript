/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module Client
 */

import { Options } from "./Common";
import { GRAPH_API_VERSION, GRAPH_BASE_URL } from "./Constants";
import { GraphRequest } from "./GraphRequest";
import { HTTPClientFactory } from "./HTTPClientFactory";
import { HTTPClient } from "./HTTPClient";

export class Client {

    /**
     * @private
     * A member which stores the Client instance options
     */
    private config: Options = {
        baseUrl: GRAPH_BASE_URL,
        debugLogging: false,
        defaultVersion: GRAPH_API_VERSION
    };

    /**
     * @private
     * A member which holds the HTTPClient instance
     */
    private httpClient: HTTPClient;

    /**
     * @public
     * @static
     * To create a client instance with options and initializes the default middleware chain
     * @param {Options} options - The options for client instance
     * @returns The Client instance
     */
    public static init(options: Options): Client {
        const client = new Client();
        for (const key in options) {
            client.config[key] = options[key];
        }
        let httpClient: HTTPClient;
        if (options.authProvider !== undefined) {
            httpClient = HTTPClientFactory.createWithAuthenticationProvider(options.authProvider);
        } else if (options.middleware !== undefined) {
            httpClient = new HTTPClient(options.middleware);
        } else {
            let error = new Error();
            error.name = "InvalidMiddlewareChain";
            error.message = "Unable to Create Client, Please provide either authentication provider for default middleware chain or custom middleware chain";
            throw error;
        }
        client.httpClient = httpClient;
        return client;
    }

    /**
     * @public
     * Entry point to make requests
     * @param {string} path - The path string value
     * @returns The graph request instance
     */
    public api(path: string): GraphRequest {
        let self = this;
        return new GraphRequest(self.httpClient, self.config, path);
    }
}
