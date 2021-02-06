/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { Client } from "../src/index";
import { DummyAuthenticationProvider } from "./DummyAuthenticationProvider";

export function getClient(): Client {
	return Client.initWithMiddleware({
		authProvider: new DummyAuthenticationProvider(),
	});
}

export function randomString() {
	return Math.random()
		.toString(36)
		.substring(7);
}
