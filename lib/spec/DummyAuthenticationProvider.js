"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var DummyAuthenticationProvider = /** @class */ (function () {
    function DummyAuthenticationProvider() {
    }
    DummyAuthenticationProvider.prototype.getAccessToken = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var token;
            return tslib_1.__generator(this, function (_a) {
                token = "DUMMY_TOKEN";
                return [2 /*return*/, Promise.resolve(token)];
            });
        });
    };
    return DummyAuthenticationProvider;
}());
exports.DummyAuthenticationProvider = DummyAuthenticationProvider;
//# sourceMappingURL=DummyAuthenticationProvider.js.map