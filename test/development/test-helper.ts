/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import "isomorphic-fetch";

import { Client, SimpleAuthenticationProvider } from "../../src/index";
import { AccessToken } from "./secrets";

export function getClient(): Client {
	return Client.init({
		authProvider: new SimpleAuthenticationProvider(async () => {
			return AccessToken;
		}, ["scope1", "scope2"]),
	});
}

export function randomString() {
	return Math.random().toString(36).substring(7);
}
