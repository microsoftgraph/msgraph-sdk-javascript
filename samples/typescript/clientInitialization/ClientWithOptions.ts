/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import "isomorphic-fetch";

import { Client } from "@microsoft/microsoft-graph-client";

import { SimpleAuthenticationProvider } from "./authentication/SimpleAuthentication/SimpleAuthenticationProvider";

const token = "";
const simpleAuthenticationProvider = new SimpleAuthenticationProvider({
	getAccessTokenCallback: async () => {
		return token;
	},
});
const client = Client.init({
	authProvider: simpleAuthenticationProvider,
});

client
	.api("/me")
	.get(undefined, { $select: "displayName" })
	.then((res) => {
		console.log(res);
	});
