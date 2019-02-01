/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { GraphError } from "./GraphError";
/**
 * @interface
 * Signature to define the GraphRequest callback
 * @callback - The anonymous callback function
 */
export type GraphRequestCallback = (error: GraphError, response: any, rawResponse?: any) => void;
