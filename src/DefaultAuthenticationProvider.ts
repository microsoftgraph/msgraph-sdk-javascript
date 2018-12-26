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
import { AuthProvider } from "./IAuthProvider";

/**
 * @class
 * Class representing DefaultAuthenticationProvider
 * @extends AuthenticationProvider
 */
export class DefaultAuthenticationProvider implements AuthenticationProvider {

    /**
     * @private
     * A member to hold authProvider callback
     */
    private provider: AuthProvider;

    /**
     * @constructor
     * Creates an instance of DefaultAuthenticationProvider
     * @param {AuthProviderCallback} provider - An authProvider function
     * @returns An instance of DefaultAuthenticationProvider
     */
    constructor(provider: AuthProvider) {
        this.provider = provider;
    }

    /**
     * @public
     * @async
     * To get the access token
     * @returns The promise that resolves to an access token
     */
    public async getAccessToken(): Promise<any> {
        return new Promise((resolve: Function, reject: Function) => {
            this.provider((error: any, accessToken: string | null) => {
                if (accessToken) {
                    resolve(accessToken);
                } else {
                    reject(error);
                }
            });
        });
    }
}
