/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { AuthProviderCallback } from "./IAuthProviderCallback";

/**
 * @interface
 * Signature that holds authProvider
 * @callback - The anonymous callback function which takes a single param
 */
export type AuthProvider = (done: AuthProviderCallback) => void;
