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
 * Class representing CustomAuthenticationProvider
 * @extends AuthenticationProvider
 */
var CustomAuthenticationProvider = /** @class */ (function () {
    /**
     * @constructor
     * Creates an instance of CustomAuthenticationProvider
     * @param {AuthProviderCallback} provider - An authProvider function
     * @returns An instance of CustomAuthenticationProvider
     */
    function CustomAuthenticationProvider(provider) {
        this.provider = provider;
    }
    /**
     * @public
     * @async
     * To get the access token
     * @returns The promise that resolves to an access token
     */
    CustomAuthenticationProvider.prototype.getAccessToken = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.provider(function (error, accessToken) {
                            if (accessToken) {
                                resolve(accessToken);
                            }
                            else {
                                reject(error);
                            }
                        });
                    })];
            });
        });
    };
    return CustomAuthenticationProvider;
}());
exports.CustomAuthenticationProvider = CustomAuthenticationProvider;
//# sourceMappingURL=CustomAuthenticationProvider.js.map