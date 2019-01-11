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
 * Class representing AuthenticationHandler
 * @extends Middleware
 */
var AuthenticationHandler = /** @class */ (function () {
    /**
     * @constructor
     * Creates an instance of AuthenticationHandler
     * @param {AuthenticationProvider} authProvider - The authentication provider for the authentication handler
     */
    function AuthenticationHandler(authProvider) {
        this.authProvider = authProvider;
    }
    /**
     * @public
     * @async
     * To execute the current middleware
     * @param {context} context - The context object of the request
     * @returns A Promise that resolves to Nothing
     */
    AuthenticationHandler.prototype.execute = function (context) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var token, bearerKey, options, headerType, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.authProvider.getAccessToken()];
                    case 1:
                        token = _a.sent();
                        bearerKey = "Bearer " + token;
                        if (context.request.constructor.name === "Request") {
                            context.request.headers.set("Authorization", bearerKey);
                        }
                        else {
                            options = context.options;
                            if (options.headers === undefined) {
                                options.headers = {
                                    "Authorization": bearerKey
                                };
                            }
                            else {
                                headerType = options.headers.constructor.name;
                                if (headerType === "Headers") {
                                    options.headers.set("Authorization", bearerKey);
                                }
                                else if (headerType === "Array") {
                                    options.headers.push(["Authorization", bearerKey]);
                                }
                                else {
                                    Object.assign(options.headers, { Authorization: bearerKey });
                                }
                            }
                        }
                        return [4 /*yield*/, this.nextMiddleware.execute(context)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @public
     * To set the next middleware in the chain
     * @param {Middleware} next - The middleware instance
     * @returns Nothing
     */
    AuthenticationHandler.prototype.setNext = function (next) {
        this.nextMiddleware = next;
    };
    return AuthenticationHandler;
}());
exports.AuthenticationHandler = AuthenticationHandler;
//# sourceMappingURL=AuthenticationHandler.js.map