/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

const { Client } = require("@microsoft/microsoft-graph-client");
const { TokenCredentialAuthenticationProvider } = require("@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials");
const { ClientSecretCredential } = require("@azure/identity");
const { clientId, clientSecret, scopes, tenantId } = require("./secrets");

require("isomorphic-fetch");

const port = "<PORT_NUMBER>";
const redirectUri = `http://localhost:${port}/authresponse`;
const authorityHost = "https://login.microsoftonline.com";

const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);
const authProvider = new TokenCredentialAuthenticationProvider(credential, { scopes: [scopes] });
const client = Client.initWithMiddleware({
	debugLogging: true,
	authProvider,
});

client
	.api("/me")
	.select("displayName")
	.get()
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});

module.exports = {
	client: client,
};
