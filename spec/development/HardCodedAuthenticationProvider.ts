/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import {AuthenticationProvider} from "../../src/IAuthenticationProvider";
import {AccessToken} from "./secrets";

export class HardCodedAuthenticationProvider implements AuthenticationProvider {
    public async getAccessToken() {
        return Promise.resolve(AccessToken);
    }
}
