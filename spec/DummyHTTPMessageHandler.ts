/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module DummyHTTPMessageHandler
 */

import { Context } from "../src/IContext";
import { Middleware } from "../src/middleware/IMiddleware";

/**
 * @class
 * @implements Middleware
 * Class representing DummyHTTPMessageHandler
 */
export class DummyHTTPMessageHandler implements Middleware {

    /**
     * @public
     * @async
     * To execute the current middleware
     * @param {Context} context - The request context object
     * @returns A promise that resolves to nothing
     */
    public async execute(context: Context) {
        return;
    }
}