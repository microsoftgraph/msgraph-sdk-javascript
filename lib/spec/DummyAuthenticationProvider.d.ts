/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import { AuthenticationProvider } from "../src/IAuthenticationProvider";
export declare class DummyAuthenticationProvider implements AuthenticationProvider {
    getAccessToken(): Promise<any>;
}
