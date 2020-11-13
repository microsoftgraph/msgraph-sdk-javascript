/*tslint:disable*/
import { ClientSecretCredential } from "@azure/identity";

import { TokenCredentialAuthenticationProvider } from "../../../src/authentication/TokenCredentialAuthenticationProvider";

require("isomorphic-fetch");
const MicrosoftGraph = require("../../../lib/src/index.js");
//node-code-credential
const tenantId = "d4cc7a42-3c44-44f3-aaf3-666302aeab08";
const clientId = "c4bf1e74-56d3-41be-aba7-a8979436d065";
const clientSecret = "8sv~jd6wE8__2hRW.e1vl-~2dJ4egm316X";
const scopes = "https://graph.microsoft.com/.default";
async function runExample() {
	// Get the credential to be used with any TypeScript API client
	// that accepts a TokenCredential.  The access token will be
	// requested on demand and refreshed when necessary.
	const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);

	// This line demonstrates that it is possible to obtain an access
	// token using this credential but you *should not* use the credential
	// like this under normal circumstances.  The intended usage pattern is
	// to pass the credential directly into an API client class constructor.
	//const accessToken = await credential.getToken(scopes);

	const authProvider = new TokenCredentialAuthenticationProvider(credential, { scopes: [scopes] });
	const client = MicrosoftGraph.Client.initWithMiddleware({
		debugLogging: true,
		authProvider: authProvider,
	});
	const res = await client.api("/places/microsoft.graph.room").get();

	console.log(res);

	// if (accessToken) {
	// 	//console.log("\nAccess token:", accessToken.token);
	// 	console.log("true");
	// } else {
	// 	console.error("Could not retrieve an access token!");
	// }
}

runExample().catch((err) => {
	console.log("Encountered an error:\n\n", err);
});

console.log("dhfhfh");
