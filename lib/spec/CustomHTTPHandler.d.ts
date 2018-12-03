/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import { Middleware } from "../src/IMiddleware";
import { Context } from "../src/IContext";
export declare class CustomHTTPHandler implements Middleware {
    execute(context: Context): Promise<void>;
}
