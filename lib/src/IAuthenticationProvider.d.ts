/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * @interface
 * A signature representing Authentication provider
 * @property {Function} getAccessTokenWithCompletion - The function to get the access token from the authentication provider
 */
export interface AuthenticationProvider {
    getAccessToken: () => Promise<any>;
}
