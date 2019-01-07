"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
var es6Promise = require("es6-promise");
/**
 * @constant
 * @function
 * PolyFills Promise and fetch after checking for its availability in native
 * @returns Nothing
 */
exports.init = function () {
    if (typeof Promise === "undefined") {
        es6Promise.polyfill();
    }
    if (typeof fetch === "undefined") {
        require("isomorphic-fetch");
    }
};
//# sourceMappingURL=PolyFill.js.map