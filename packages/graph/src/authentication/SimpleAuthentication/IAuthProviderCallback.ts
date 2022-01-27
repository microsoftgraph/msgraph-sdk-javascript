/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */


export interface AuthProviderCallback {
	/**
	 * Parameters that are passed into the getAccessTokenCallback
	 */
	authOptions?: unknown;
	/**
	 * Signature that defines callback for an authentication provider
	 */
	getAccessTokenCallback?: (authOptions?: unknown) => Promise<string>;
}