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
export class AuthenticationHandler implements Middleware {

    /**
     * @private
     * A member to hold an AuthenticationProvider instance
     */
    private authProvider: AuthenticationProvider;

    /**
     * @private
     * A member to hold next middleware in the middleware chain
     */
    private nextMiddleware: Middleware;

    /**
     * @constructor
     * Creates an instance of AuthenticationHandler
     * @param {AuthenticationProvider} authProvider - The authentication provider for the authentication handler
     */
    constructor(authProvider: AuthenticationProvider) {
        this.authProvider = authProvider;
    }

    /**
     * @public
     * @async
     * To execute the current middleware
     * @param {context} context - The context object of the request
     * @return A Promise that resolves to nothing
     */
    public async execute(context: Context): Promise<void> {
        try {
            let token = await this.authProvider.getAccessToken();
            let bearerKey = `Bearer ${token}`;
            if (context.request.constructor.name === "Request") {
                (<Request>context.request).headers.set("Authorization", bearerKey);
            } else {
                let options = context.options;
                if (options.headers === undefined) {
                    options.headers = {
                        "Authorization": bearerKey
                    };
                } else {
                    let headerType = options.headers.constructor.name;
                    if (headerType === "Headers") {
                        (<Headers>options.headers).set("Authorization", bearerKey);
                    } else if (headerType === "Array") {
                        (<string[][]>options.headers).push(["Authorization", bearerKey]);
                    } else {
                        Object.assign(options.headers, { Authorization: bearerKey });
                    }
                }
            }
            await this.nextMiddleware.execute(context);
        } catch (error) {
            throw error;
        }
    }

    /**
     * @public
     * To set the next middleware in the chain
     * @param {Middleware} next - The middleware instance
     * @return nothing
     */
    public setNext(next: Middleware): void {
        this.nextMiddleware = next;
    }
}