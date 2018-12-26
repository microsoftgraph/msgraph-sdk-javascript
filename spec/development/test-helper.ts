/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { HardCodedAuthenticationProvider } from "./HardCodedAuthenticationProvider";
import { Client } from "../../src/index";

export function getClient(): Client {
    return new Client({
        authProvider: new HardCodedAuthenticationProvider()
    });
}

export function randomString() {
    return Math.random().toString(36).substring(7);
}
