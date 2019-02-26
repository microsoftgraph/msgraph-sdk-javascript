/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @constant
 * @function
 * PolyFills Promise and fetch after checking for its availability in native
 * @returns Nothing
 */
export const init = (): void => {
	require("es6-promise").polyfill();
	require("isomorphic-fetch");
};
