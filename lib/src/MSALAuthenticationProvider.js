"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
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
        return __awaiter(this, void 0, void 0, function () {
            var self, error, accessToken, errorMsg_1, idToken, accessToken, error_1, accessToken, errorMsg_2;
            return __generator(this, function (_a) {
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