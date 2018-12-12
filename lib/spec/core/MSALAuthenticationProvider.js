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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var MSALAuthenticationProvider_1 = require("../../src/MSALAuthenticationProvider");
var Window = require("window");
describe("MSALAuthenticationProvider.ts", function () {
    var clientId = "dummy_client_id";
    var globalWindow;
    before(function () {
        globalWindow = global["window"];
        global["window"] = new Window();
        try {
            var authProvider = new MSALAuthenticationProvider_1.MSALAuthenticationProvider(clientId, []);
        }
        catch (error) {
        }
    });
    after(function () {
        global["window"] = globalWindow;
    });
    describe("constructor", function () {
        it("Should return an instance of MSALAuthenticationProvider", function () {
            var authProvider = new MSALAuthenticationProvider_1.MSALAuthenticationProvider(clientId, []);
            chai_1.assert.isDefined(authProvider["scopes"]);
            chai_1.assert.isDefined(authProvider["clientId"]);
            chai_1.assert.isDefined(authProvider["userAgentApplication"]);
        });
    });
    describe("getAccessToken", function () {
        it("Should throw an error for getting access token with empty scopes", function () { return __awaiter(_this, void 0, void 0, function () {
            var authProvider, token, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        authProvider = new MSALAuthenticationProvider_1.MSALAuthenticationProvider(clientId, []);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, authProvider.getAccessToken()];
                    case 2:
                        token = _a.sent();
                        throw new Error("Something went wrong, Should not provide access token for empty scopes");
                    case 3:
                        error_1 = _a.sent();
                        chai_1.assert.equal(error_1.name, "EmptyScopes");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    });
    describe("addScopes", function () {
        var user_read = "user.read", user_readWrite = "user.readWrite";
        it("Should throw an error for empty scopes array", function () {
            var authProvider = new MSALAuthenticationProvider_1.MSALAuthenticationProvider(clientId, [user_read]);
            try {
                authProvider.addScopes([]);
                throw new Error("Something wrong with the empty array validation, Should not be allowed to add empty array");
            }
            catch (error) {
                chai_1.assert.equal(error.name, "EmptyScopes");
            }
        });
        it("Should add scopes to empty scopes", function () {
            var authProvider = new MSALAuthenticationProvider_1.MSALAuthenticationProvider(clientId, []);
            authProvider.addScopes([user_read]);
            chai_1.assert.equal(authProvider["scopes"][0], user_read);
        });
        it("Should add scopes to non-empty scopes", function () {
            var authProvider = new MSALAuthenticationProvider_1.MSALAuthenticationProvider(clientId, [user_read]);
            authProvider.addScopes([user_readWrite]);
            chai_1.assert.equal(authProvider["scopes"].length, 2);
        });
        it("Should not add duplicate scopes", function () {
            var authProvider = new MSALAuthenticationProvider_1.MSALAuthenticationProvider(clientId, [user_read]);
            authProvider.addScopes([user_read]);
            chai_1.assert.equal(authProvider["scopes"].length, 1);
        });
    });
    describe("clearScopes", function () {
        var user_read = "user.read";
        it("Should clear the scopes array", function () {
            var authProvider = new MSALAuthenticationProvider_1.MSALAuthenticationProvider(clientId, [user_read]);
            authProvider.clearScopes();
            chai_1.assert.equal(authProvider["scopes"].length, 0);
        });
    });
});
//# sourceMappingURL=MSALAuthenticationProvider.js.map