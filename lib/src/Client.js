"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module Client
 */
var Constants_1 = require("./Constants");
var CustomAuthenticationProvider_1 = require("./CustomAuthenticationProvider");
var GraphRequest_1 = require("./GraphRequest");
var HTTPClientFactory_1 = require("./HTTPClientFactory");
var HTTPClient_1 = require("./HTTPClient");
var ValidatePolyFilling_1 = require("./ValidatePolyFilling");
var Client = /** @class */ (function () {
    /**
     * @private
     * @constructor
     * Creates an instance of Client
     * @param {ClientOptions} clientOptions - The options to instantiate the client object
     */
    function Client(clientOptions) {
        /**
         * @private
         * A member which stores the Client instance options
         */
        this.config = {
            baseUrl: Constants_1.GRAPH_BASE_URL,
            debugLogging: false,
            defaultVersion: Constants_1.GRAPH_API_VERSION
        };
        try {
            ValidatePolyFilling_1.validatePolyFilling();
        }
        catch (error) {
            throw error;
        }
        var self = this;
        for (var key in clientOptions) {
            self.config[key] = clientOptions[key];
        }
        var httpClient;
        if (clientOptions.authProvider !== undefined && clientOptions.middleware !== undefined) {
            var error = new Error();
            error.name = "AmbiguityInInitialization";
            error.message = "Unable to Create Client, Please provide either authentication provider for default middleware chain or custom middleware chain not both";
            throw error;
        }
        else if (clientOptions.authProvider !== undefined) {
            httpClient = HTTPClientFactory_1.HTTPClientFactory.createWithAuthenticationProvider(clientOptions.authProvider);
        }
        else if (clientOptions.middleware !== undefined) {
            httpClient = new HTTPClient_1.HTTPClient(clientOptions.middleware);
        }
        else {
            var error = new Error();
            error.name = "InvalidMiddlewareChain";
            error.message = "Unable to Create Client, Please provide either authentication provider for default middleware chain or custom middleware chain";
            throw error;
        }
        self.httpClient = httpClient;
    }
    /**
     * @public
     * @static
     * To create a client instance with options and initializes the default middleware chain
     * @param {Options} options - The options for client instance
     * @returns The Client instance
     */
    Client.init = function (options) {
        var clientOptions = {};
        for (var i in options) {
            if (i === "authProvider") {
                clientOptions[i] = new CustomAuthenticationProvider_1.CustomAuthenticationProvider(options[i]);
            }
            else {
                clientOptions[i] = options[i];
            }
        }
        return Client.initWithMiddleware(clientOptions);
    };
    /**
     * @public
     * @static
     * To create a client instance with the Client Options
     * @param {ClientOptions} options - The options object for initializing the client
     * @returns The Client instance
     */
    Client.initWithMiddleware = function (options) {
        try {
            return new Client(options);
        }
        catch (error) {
            throw error;
        }
    };
    /**
     * @public
     * Entry point to make requests
     * @param {string} path - The path string value
     * @returns The graph request instance
     */
    Client.prototype.api = function (path) {
        var self = this;
        return new GraphRequest_1.GraphRequest(self.httpClient, self.config, path);
    };
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=Client.js.map