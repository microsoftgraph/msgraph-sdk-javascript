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
 * Class for HTTPMessageHandler
 * @extends Middleware
 */
var HTTPMessageHandler = /** @class */ (function () {
    function HTTPMessageHandler() {
    }
    /**
     * @public
     * @async
     * To execute the current middleware
     * @param {Context} context - The request context object
     * @returns A promise that resolves to Nothing
     */
    HTTPMessageHandler.prototype.execute = function (context) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, error_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = context;
                        return [4 /*yield*/, fetch(context.request, context.options)];
                    case 1:
                        _a.response = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return HTTPMessageHandler;
}());
exports.HTTPMessageHandler = HTTPMessageHandler;
//# sourceMappingURL=HTTPMessageHandler.js.map