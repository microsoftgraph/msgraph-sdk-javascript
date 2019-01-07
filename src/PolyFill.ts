/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import * as es6Promise from "es6-promise";

/**
 * @constant
 * @function
 * PolyFills Promise and fetch after checking for its availability in native
 * @returns Nothing
 */
export const init = (): void => {
    if (typeof Promise === "undefined") {
        es6Promise.polyfill();
    }
    if (typeof fetch === "undefined") {
        require("isomorphic-fetch");
    }
}
