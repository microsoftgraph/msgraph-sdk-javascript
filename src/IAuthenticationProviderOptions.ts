/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @interface
 * A signature represents the Authentication provider options
 * @property {string[]} [scopes] - The array of scopes
 */
export interface AuthenticationProviderOptions {
	scopes?: string[];
}
