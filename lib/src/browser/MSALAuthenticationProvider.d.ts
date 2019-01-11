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
 * @class
 * Class representing MSALAuthenticationProvider
 * @extends AuthenticationProvider
 */
export declare class MSALAuthenticationProvider implements AuthenticationProvider {
    /**
     * @private
     * A member holding the clientId of an application
     */
    private clientId;
    /**
     * @private
     * A member holding the list of graph scopes
     */
    private scopes;
    /**
     * @private
     * A member holding an instance of UserAgentApplication returned from MSAL
     */
    private userAgentApplication;
    /**
     * @constructor
     * Creates an instance of MSALAuthenticationProvider
     * @param {string} clientId - The clientId value of an application
     * @param {string[]} scopes - An array of graph scopes
     * @param {any} [options] - An options object for MSAL initialization
     * @returns An instance of MSALAuthenticationProvider
     */
    constructor(clientId: string, scopes: string[], options?: any);
    /**
     * @public
     * @async
     * To get the access token
     * @returns The promise that resolves to an access token
     */
    getAccessToken(): Promise<any>;
    /**
     * @public
     * To add the scopes to the existing set of scopes
     * @param {string[]} scopes - The array of graph scope values
     * @returns Nothing
     */
    addScopes(scopes: string[]): void;
    /**
     * @public
     * To clear the graph scopes
     * @returns Nothing
     */
    clearScopes(): void;
}
