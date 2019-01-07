/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module HTTPClient
 */

import { Context } from "./IContext";
import { FetchOptions } from "./IFetchOptions";
import { Middleware } from "./IMiddleware";
import { MiddlewareOptions } from "./IMiddlewareOptions";

/**
 * @class
 * Class representing HTTPClient
 */
export class HTTPClient {

    /**
     * @private
     * A member holding first middleware of the middleware chain
     */
    private middleware: Middleware;

    /**
     * @constructor
     * Creates an instance of a HTTPClient
     * @param {Middleware} middleware - The first middleware of the middleware chain
     */
    constructor(middleware: Middleware) {
        this.middleware = middleware;
    }

    /**
     * @public
     * @async
     * To send the request through the middleware chain
     * @param {RequestInfo} request - The request url string or the Request instance 
     * @param {FetchOptions} options - The options of a request
     * @param {MiddlewareOptions} middlewareOptions - The options of a middleware chain
     * @returns A promise that resolves to the response
     */
    public async sendRequest(request: RequestInfo, options: FetchOptions, middlewareOptions: MiddlewareOptions): Promise<Context> {
        try {
            let context: Context = {
                request,
                options,
                middlewareOptions
            };
            await this.middleware.execute(context);
            return context;
        } catch (error) {
            throw error;
        }
    }
}
