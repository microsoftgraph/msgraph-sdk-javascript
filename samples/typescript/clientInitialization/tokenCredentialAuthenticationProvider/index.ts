/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/* eslint-disable @typescript-eslint/no-unused-vars*/

import "isomorphic-fetch";

import { ClientSecretCredential } from "@azure/identity";
import { Client } from "@microsoft/microsoft-graph-client";
import { TokenCredentialAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials";

const port = "<PORT_NUMBER>";
const tenantId = "<TENANT_ID>";
const clientId = "<CLIENT_ID>";
const clientSecret = "<CLIENT_SECRET>";
const scopes = "<SCOPE>";
const redirectUri = `http://localhost:${port}/authresponse`;
const authorityHost = "https://login.microsoftonline.com";

async function runExample() {
	const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);
	const authProvider = new TokenCredentialAuthenticationProvider(credential, { scopes: [scopes] });
	const client = Client.initWithMiddleware({
		debugLogging: true,
		authProvider,
	});
	const res = await client.api("/users/").get();
	console.log(res);
}

runExample().catch((err) => {
	console.log("Encountered an error:\n\n", err);
});
