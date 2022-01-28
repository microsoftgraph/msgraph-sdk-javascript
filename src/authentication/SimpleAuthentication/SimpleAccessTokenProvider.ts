/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module CustomAuthenticationProvider
 */

import { AccessTokenProvider } from "@microsoft/kiota-abstractions";

import { GraphClientError } from "../../GraphClientError";
import { AuthProviderCallback } from "./IAuthProviderCallback";

/**
 * @class
 * Class representing CustomAuthenticationProvider
 * @extends AuthenticationProvider
 */
export class SimpleAccessTokenProvider implements AccessTokenProvider {

    /**
     * @public
     * @constructor
     * Creates an instance of CustomAuthenticationProvider
     * @param {AuthProviderCallback} provider - An authProvider function
     * @returns An instance of CustomAuthenticationProvider
     */
    public constructor(private authProviderCallback: AuthProviderCallback) { }

    /**
     * @public
     * @async
     * To get the access token
     * @returns The promise that resolves to an access token
     */
    public getAuthorizationToken(): Promise<string> {
const token = this.authProviderCallback.getAccessTokenCallback(this.authProviderCallback.authOptions);
console.log(token);
        return this.authProviderCallback.getAccessTokenCallback(this.authProviderCallback.authOptions);
    }
}
