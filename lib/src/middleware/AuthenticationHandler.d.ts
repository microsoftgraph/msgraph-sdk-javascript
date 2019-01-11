/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * @module AuthenticationHandler
 */
import { Middleware } from "../IMiddleware";
import { AuthenticationProvider } from "../IAuthenticationProvider";
import { Context } from "../IContext";
/**
 * @class
 * Class representing AuthenticationHandler
 * @extends Middleware
 */
export declare class AuthenticationHandler implements Middleware {
    /**
     * @private
     * A member to hold an AuthenticationProvider instance
     */
    private authProvider;
    /**
     * @private
     * A member to hold next middleware in the middleware chain
     */
    private nextMiddleware;
    /**
     * @constructor
     * Creates an instance of AuthenticationHandler
     * @param {AuthenticationProvider} authProvider - The authentication provider for the authentication handler
     */
    constructor(authProvider: AuthenticationProvider);
    /**
     * @public
     * @async
     * To execute the current middleware
     * @param {context} context - The context object of the request
     * @returns A Promise that resolves to Nothing
     */
    execute(context: Context): Promise<void>;
    /**
     * @public
     * To set the next middleware in the chain
     * @param {Middleware} next - The middleware instance
     * @returns Nothing
     */
    setNext(next: Middleware): void;
}
