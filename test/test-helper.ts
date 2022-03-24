/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { Client, SimpleAuthenticationProvider } from "../src/index";

export function getClient(): Client {
	return Client.init({
		authProvider: new SimpleAuthenticationProvider(async () => {
			return "DUMMY_ACCESS_TOKEN";
		}, ["scope1", "scope2"]),
	});
}

export function randomString() {
	return Math.random().toString(36).substring(7);
}
