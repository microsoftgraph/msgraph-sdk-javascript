/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * Signature that defines callback for an authentication provider
 */

export type AuthProviderCallback = (scopes?: string[]) => Promise<string>;
