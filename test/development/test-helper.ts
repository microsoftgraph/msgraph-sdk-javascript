/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import "isomorphic-fetch";

import { Client } from "../../src/index";
import { HardCodedAuthenticationProvider } from "./HardCodedAuthenticationProvider";

export function getClient(): Client {
	return Client.initWithMiddleware({
		authProvider: new HardCodedAuthenticationProvider(),
	});
}

export function randomString() {
	return Math.random()
		.toString(36)
		.substring(7);
}
