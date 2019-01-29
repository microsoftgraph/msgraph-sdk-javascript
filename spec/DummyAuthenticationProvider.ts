/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { AuthenticationProvider } from "../src/IAuthenticationProvider";

export class DummyAuthenticationProvider implements AuthenticationProvider {
    public async getAccessToken(): Promise<any> {
        let token = "DUMMY_TOKEN";
        return Promise.resolve(token);
    }
}