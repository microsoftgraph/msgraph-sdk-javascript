/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * @module DefaultAuthenticationProvider
 */
import { AuthenticationProvider } from "./IAuthenticationProvider";
import { AuthProvider } from "./IOptions";
/**
 * @class
 * Class representing DefaultAuthenticationProvider
 * @extends AuthenticationProvider
 */
export declare class DefaultAuthenticationProvider implements AuthenticationProvider {
    /**
     * @private
     * A member to hold authProvider callback
     */
    private provider;
    /**
     * @constructor
     * Creates an instance of DefaultAuthenticationProvider
     * @param {AuthProviderCallback} provider - An authProvider function
     * @returns An instance of DefaultAuthenticationProvider
     */
    constructor(provider: AuthProvider);
    /**
     * @public
     * @async
     * To get the access token
     * @returns The promise that resolves to an access token
     */
    getAccessToken(): Promise<any>;
}
