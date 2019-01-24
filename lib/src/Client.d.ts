/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import { GraphRequest } from "./GraphRequest";
import { ClientOptions } from "./IClientOptions";
import { Options } from "./IOptions";
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
     * @private
     * @constructor
     * Creates an instance of Client
     * @param {ClientOptions} clientOptions - The options to instantiate the client object
     */
    private constructor();
    /**
     * @public
     * @static
     * To create a client instance with options and initializes the default middleware chain
     * @param {Options} options - The options for client instance
     * @returns The Client instance
     */
    static init(options: Options): Client;
    /**
     * @public
     * @static
     * To create a client instance with the Client Options
     * @param {ClientOptions} options - The options object for initializing the client
     * @returns The Client instance
     */
    static initWithMiddleware(options: ClientOptions): Client;
    /**
     * @public
     * Entry point to make requests
     * @param {string} path - The path string value
     * @returns The graph request instance
     */
    api(path: string): GraphRequest;
}
