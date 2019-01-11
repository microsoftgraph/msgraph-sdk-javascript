"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * @class
 * Class representing HTTPClient
 */
var HTTPClient = /** @class */ (function () {
    /**
     * @constructor
     * Creates an instance of a HTTPClient
     * @param {Middleware} middleware - The first middleware of the middleware chain
     */
    function HTTPClient(middleware) {
        this.middleware = middleware;
    }
    /**
     * @public
     * @async
     * To send the request through the middleware chain
     * @param {RequestInfo} request - The request url string or the Request instance
     * @param {FetchOptions} options - The options of a request
     * @param {MiddlewareOptions} middlewareOptions - The options of a middleware chain
     * @returns A promise that resolves to the Context
     */
    HTTPClient.prototype.sendRequest = function (request, options, middlewareOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var context_1, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        context_1 = {
                            request: request,
                            options: options,
                            middlewareOptions: middlewareOptions
                        };
                        return [4 /*yield*/, this.middleware.execute(context_1)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, context_1];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return HTTPClient;
}());
exports.HTTPClient = HTTPClient;
//# sourceMappingURL=HTTPClient.js.map