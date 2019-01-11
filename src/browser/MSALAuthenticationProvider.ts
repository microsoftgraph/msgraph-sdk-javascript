/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module MSALAuthenticationProvider
 */

import { AuthenticationProvider } from "../IAuthenticationProvider";

/**
 * @constant
 * A declaration of a Msal library
 */
declare const Msal: any;

/**
 * @class
 * Class representing MSALAuthenticationProvider
 * @extends AuthenticationProvider
 */
export class MSALAuthenticationProvider implements AuthenticationProvider {

    /**
     * @private
     * A member holding the clientId of an application
     */
    private clientId: string;

    /**
     * @private
     * A member holding the list of graph scopes
     */
    private scopes: string[];

    /**
     * @private
     * A member holding an instance of UserAgentApplication returned from MSAL
     */
    private userAgentApplication: any;

    /**
     * @constructor
     * Creates an instance of MSALAuthenticationProvider
     * @param {string} clientId - The clientId value of an application
     * @param {string[]} scopes - An array of graph scopes
     * @param {any} [options] - An options object for MSAL initialization
     * @returns An instance of MSALAuthenticationProvider
     */
    constructor(clientId: string, scopes: string[], options?: any) {
        const callback = (errorDesc, token, error, tokenType) => {

        };
        let self = this;
        self.clientId = clientId;
        self.scopes = scopes;
        self.userAgentApplication = new Msal.UserAgentApplication(self.clientId, undefined, callback, options);
    }

    /**
     * @public
     * @async
     * To get the access token
     * @returns The promise that resolves to an access token
     */
    public async getAccessToken(): Promise<any> {
        let self = this;
        if (self.scopes.length === 0) {
            let error = new Error();
            error.name = "EmptyScopes";
            error.message = "Scopes cannot be empty, Please provide a scope";
            throw error;
        }
        try {
            let accessToken: string = await self.userAgentApplication.acquireTokenSilent(self.scopes);
            return accessToken;
        } catch (errorMsg) {
            try {
                let idToken: string = await self.userAgentApplication.loginPopup(self.scopes);
                try {
                    let accessToken: string = await self.userAgentApplication.acquireTokenSilent(self.scopes);
                    return accessToken;
                } catch (error) {
                    let accessToken: string = await self.userAgentApplication.acquireTokenPopup(self.scopes);
                    return accessToken;
                }
            } catch (errorMsg) {
                throw new Error(errorMsg);
            }
        }
    }

    /**
     * @public
     * To add the scopes to the existing set of scopes
     * @param {string[]} scopes - The array of graph scope values
     * @returns Nothing
     */
    public addScopes(scopes: string[]): void {
        if (scopes.length === 0) {
            let error = new Error();
            error.name = "EmptyScopes";
            error.message = "Scopes array cannot be empty";
            throw error;
        }
        let self = this;
        self.scopes = Array.from(new Set(self.scopes.concat(scopes)));
    }

    /**
     * @public
     * To clear the graph scopes
     * @returns Nothing
     */
    public clearScopes(): void {
        this.scopes = [];
    }
}
