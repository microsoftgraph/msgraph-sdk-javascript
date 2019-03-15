/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @interface
 * Signature that defines callback for an authentication provider
 * @callback - The anonymous callback function which takes two params
 */
export type AuthProviderCallback = (error: any, accessToken: string | null) => void;
