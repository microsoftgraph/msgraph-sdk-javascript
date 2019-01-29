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
 * Class representing MSALAuthenticationProvider
 * @extends AuthenticationProvider
 */
var MSALAuthenticationProvider = /** @class */ (function () {
    /**
     * @constructor
     * Creates an instance of MSALAuthenticationProvider
     * @param {string} clientId - The clientId value of an application
     * @param {string[]} scopes - An array of graph scopes
     * @param {any} [options] - An options object for MSAL initialization
     * @returns An instance of MSALAuthenticationProvider
     */
    function MSALAuthenticationProvider(clientId, scopes, options) {
        var callback = function (errorDesc, token, error, tokenType) {
        };
        var self = this;
        self.clientId = clientId;
        self.scopes = scopes;
        self.userAgentApplication = new Msal.UserAgentApplication(self.clientId, undefined, callback, options);
    }
    /**
     * @public
     * @async
     * To get the access token
     * @returns The promise that resolves to an access token
     */
    MSALAuthenticationProvider.prototype.getAccessToken = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var self, error, accessToken, errorMsg_1, idToken, accessToken, error_1, accessToken, errorMsg_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        if (self.scopes.length === 0) {
                            error = new Error();
                            error.name = "EmptyScopes";
                            error.message = "Scopes cannot be empty, Please provide a scope";
                            throw error;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 13]);
                        return [4 /*yield*/, self.userAgentApplication.acquireTokenSilent(self.scopes)];
                    case 2:
                        accessToken = _a.sent();
                        return [2 /*return*/, accessToken];
                    case 3:
                        errorMsg_1 = _a.sent();
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 11, , 12]);
                        return [4 /*yield*/, self.userAgentApplication.loginPopup(self.scopes)];
                    case 5:
                        idToken = _a.sent();
                        _a.label = 6;
                    case 6:
                        _a.trys.push([6, 8, , 10]);
                        return [4 /*yield*/, self.userAgentApplication.acquireTokenSilent(self.scopes)];
                    case 7:
                        accessToken = _a.sent();
                        return [2 /*return*/, accessToken];
                    case 8:
                        error_1 = _a.sent();
                        return [4 /*yield*/, self.userAgentApplication.acquireTokenPopup(self.scopes)];
                    case 9:
                        accessToken = _a.sent();
                        return [2 /*return*/, accessToken];
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        errorMsg_2 = _a.sent();
                        throw new Error(errorMsg_2);
                    case 12: return [3 /*break*/, 13];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @public
     * To add the scopes to the existing set of scopes
     * @param {string[]} scopes - The array of graph scope values
     * @returns Nothing
     */
    MSALAuthenticationProvider.prototype.addScopes = function (scopes) {
        if (scopes.length === 0) {
            var error = new Error();
            error.name = "EmptyScopes";
            error.message = "Scopes array cannot be empty";
            throw error;
        }
        var self = this;
        self.scopes = Array.from(new Set(self.scopes.concat(scopes)));
    };
    /**
     * @public
     * To clear the graph scopes
     * @returns Nothing
     */
    MSALAuthenticationProvider.prototype.clearScopes = function () {
        this.scopes = [];
    };
    return MSALAuthenticationProvider;
}());
exports.MSALAuthenticationProvider = MSALAuthenticationProvider;
//# sourceMappingURL=MSALAuthenticationProvider.js.map