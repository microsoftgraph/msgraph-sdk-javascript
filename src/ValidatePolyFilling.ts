/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @constant
 * @function
 * Validates availability of Promise and fetch in global context
 * @returns The true in case the Promise and fetch available, otherwise throws error
 */

export const validatePolyfilling = (): boolean => {
	if (typeof Promise === "undefined" && typeof fetch === "undefined") {
		const error = new Error("Library cannot function without Promise and fetch. So, please provide a polyfill for them.");
		error.name = "PolyfillNotAvailable";
		throw error;
	} else if (typeof Promise === "undefined") {
		const error = new Error("Library cannot function without Promise. So, please provide a polyfill for it.");
		error.name = "PolyfillNotAvailable";
		throw error;
	} else if (typeof fetch === "undefined") {
		const error = new Error("Library cannot function without fetch. So, please provide a polyfill for it.");
		error.name = "PolyfillNotAvailable";
		throw error;
	}
	return true;
};
