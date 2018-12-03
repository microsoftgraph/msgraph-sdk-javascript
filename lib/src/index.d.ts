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
import { GraphRequest } from "./GraphRequest";
export declare class Client {
    /**
     * @private
     * A member which stores the Client instance options
     */
    private config;
    /**
     * @private
     * A member which holds the HTTPClient instance
     */
    private httpClient;
    /**
     * @public
     * @static
     * To create a client instance with options and initializes the default middleware chain
     * @param {Options} options - The options for client instance
     * @return The Client instance
     */
    static init(options: Options): Client;
    /**
     * @public
     * Entry point to make requests
     * @param {string} path - The path string value
     * @return The graph request instance
     */
    api(path: string): GraphRequest;
}
