import "isomorphic-fetch";

import { ClientSecretCredential } from "@azure/identity";
import { Client } from "@microsoft/microsoft-graph-client";
import { TokenCredentialAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials";

import { clientId, clientSecret, scopes, tenantId } from "./secrets";

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
