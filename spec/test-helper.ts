/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { Client } from "../src/index";
import * as PolyFill from "../src/PolyFill";

import { DummyAuthenticationProvider } from "./DummyAuthenticationProvider";

export function getClient(): Client {
	/**
	 * PolyFill fetch and promise before initializing client, otherwise error will be thrown
	 */
	PolyFill.init();
	return Client.initWithMiddleware({
		authProvider: new DummyAuthenticationProvider(),
	});
}

export function randomString() {
	return Math.random()
		.toString(36)
		.substring(7);
}
