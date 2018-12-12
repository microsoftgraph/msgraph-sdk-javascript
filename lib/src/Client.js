"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = require("./Constants");
var GraphRequest_1 = require("./GraphRequest");
var HTTPClientFactory_1 = require("./HTTPClientFactory");
var HTTPClient_1 = require("./HTTPClient");
var Client = /** @class */ (function () {
    function Client() {
        /**
         * @private
         * A member which stores the Client instance options
         */
        this.config = {
            baseUrl: Constants_1.GRAPH_BASE_URL,
            debugLogging: false,
            defaultVersion: Constants_1.GRAPH_API_VERSION
        };
    }
    /**
     * @public
     * @static
     * To create a client instance with options and initializes the default middleware chain
     * @param {Options} options - The options for client instance
     * @returns The Client instance
     */
    Client.init = function (options) {
        var client = new Client();
        for (var key in options) {
            client.config[key] = options[key];
        }
        var httpClient;
        if (options.authProvider !== undefined) {
            httpClient = HTTPClientFactory_1.HTTPClientFactory.createWithAuthenticationProvider(options.authProvider);
        }
        else if (options.middleware !== undefined) {
            httpClient = new HTTPClient_1.HTTPClient(options.middleware);
        }
        else {
            var error = new Error();
            error.name = "InvalidMiddlewareChain";
            error.message = "Unable to Create Client, Please provide either authentication provider for default middleware chain or custom middleware chain";
            throw error;
        }
        client.httpClient = httpClient;
        return client;
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