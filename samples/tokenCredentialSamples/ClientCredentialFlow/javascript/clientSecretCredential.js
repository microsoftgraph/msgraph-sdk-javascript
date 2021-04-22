const { Client } = require("@microsoft/microsoft-graph-client");
const { TokenCredentialAuthenticationProvider } = require("@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials");
const { ClientSecretCredential } = require("@azure/identity");
const { clientId, clientSecret, scopes, tenantId } = require("./secrets");

require("isomorphic-fetch");

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
