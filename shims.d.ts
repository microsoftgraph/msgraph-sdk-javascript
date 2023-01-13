/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * Shim for Node stream interface.
 */
interface NodeStream {
    /**
     * Shim for Node stream interface when the environment does not use @types/node.
     * Using @types/node appends the ambient Node definition to the global scope which is not desirable.
     * https://github.com/microsoftgraph/msgraph-sdk-javascript/issues/600
     */
    readable: boolean;
    readableLength: number;
    read(size?: number): any;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
}

interface Headers{}