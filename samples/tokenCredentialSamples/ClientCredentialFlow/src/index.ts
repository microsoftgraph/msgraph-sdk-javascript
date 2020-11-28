import { ClientSecretCredential } from "@azure/identity";

import "isomorphic-fetch";
import { Client, TokenCredentialAuthenticationProvider } from "../../../../lib/src";
import { tenantId, clientId, clientSecret, scopes } from "./Secrets";

async function runExample() {
	const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);

	const authProvider = new TokenCredentialAuthenticationProvider(credential, { scopes: [scopes] });
	const client = Client.initWithMiddleware({
		debugLogging: true,
		authProvider: authProvider,
	});
	const res = await client.api("/users/").get();
}

runExample().catch((err) => {
	console.log("Encountered an error:\n\n", err);
});
