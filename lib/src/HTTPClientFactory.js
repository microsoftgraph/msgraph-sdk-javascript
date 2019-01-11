"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module HTTPClientFactory
 */
var AuthenticationHandler_1 = require("./middleware/AuthenticationHandler");
var HTTPMessageHandler_1 = require("./middleware/HTTPMessageHandler");
var HTTPClient_1 = require("./HTTPClient");
/**
 * @class
 * Class representing HTTPClientFactory
 */
var HTTPClientFactory = /** @class */ (function () {
    function HTTPClientFactory() {
    }
    /**
     * @public
     * @static
     * Creates HTTPClient with default middleware chain
     * @param {AuthenticationProvider} authProvider - The authentication provider instance
     * @returns A HTTPClient instance
     */
    HTTPClientFactory.createWithAuthenticationProvider = function (authProvider) {
        var authenticationHandler = new AuthenticationHandler_1.AuthenticationHandler(authProvider);
        var httpMessageHandler = new HTTPMessageHandler_1.HTTPMessageHandler();
        authenticationHandler.setNext(httpMessageHandler);
        return HTTPClientFactory.createWithMiddleware(authenticationHandler);
    };
    /**
     * @public
     * @static
     * Creates a middleware chain with the given one
     * @param {Middleware} middleware - The first middleware of the middleware chain
     * @returns A HTTPClient instance
     */
    HTTPClientFactory.createWithMiddleware = function (middleware) {
        return new HTTPClient_1.HTTPClient(middleware);
    };
    return HTTPClientFactory;
}());
exports.HTTPClientFactory = HTTPClientFactory;
//# sourceMappingURL=HTTPClientFactory.js.map