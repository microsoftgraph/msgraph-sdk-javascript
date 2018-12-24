/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import { GraphError } from "./IGraphError";
/**
 * @interface
 * Signature to define the GraphRequest callback
 * @callback - The anonymous callback function
 */
export interface GraphRequestCallback {
    (error: GraphError, response: any, rawResponse?: any): void;
}
