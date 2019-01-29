/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { Context } from "../src/IContext";
import { Middleware } from "../src/IMiddleware";

export class CustomHTTPHandler implements Middleware {
    public async execute(context: Context) {
        
    }
}