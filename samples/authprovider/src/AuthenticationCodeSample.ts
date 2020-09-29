/*tslint:disable*/
import { Server } from "http";

import { AuthorizationCodeCredential } from "@azure/identity";

import { TokenCredentialAuthenticationProvider } from "../../../src/authentication/TokenCredentialAuthenticationProvider";

require("isomorphic-fetch");
const MicrosoftGraph = require("../../../lib/src/index.js");
// NOTE: When using this code, you must change the module below to "@azure/identity"

// You will need to install these external dependencies with NPM:
import qs from "qs";
import open from "open";
import express from "express";
// console.log("hello");
// class AuthorizationCodeSample{
//     private tenantID= "d4cc7a42-3c44-44f3-aaf3-666302aeab08";
//     private clientID= "7fd56a8a-209e-46f2-af55-ab409da96008";
//     private clientSecret= "P4KX.w0EeT9x3LS6bLSJOb3o~c_y8P_1xD";
//     //public void(){

//     //}
//     private  getAuthProvider():TokenCredentialAuthenticationProvider{
//         //const tokenCredential = new AuthorizationCodeCredential(this.tenantID,this.clientID,this.clientSecret);
//         // const response = fetch();
//         // try {
// 		// 	context.response = await fetch(context.request, context.options);
// 		// 	return;
// 		// } catch (error) {
// 		// 	throw error;
// 		// }
//         return null;
//     }
// }

const port = 8050;
const tenantId = "d4cc7a42-3c44-44f3-aaf3-666302aeab08";
const clientId = "7fd56a8a-209e-46f2-af55-ab409da96008";
const clientSecret = "P4KX.w0EeT9x3LS6bLSJOb3o~c_y8P_1xD";
const redirectUri = `http://localhost:8050/`;
const authorityHost = "https://login.microsoftonline.com";
const scopes = "user.read";

if (tenantId === undefined || clientId === undefined) {
	console.error("AZURE_TENANT_ID and AZURE_CLIENT_ID environment variables must be set");
	process.exit(1);
}

function getAuthorizeUrl(tenantId: string, clientId: string, scopes: string): string {
	const queryParams = qs.stringify({
		client_id: clientId,
		response_type: "code",
		redirect_uri: redirectUri,
		scope: scopes,
	});

	return `${authorityHost}/${tenantId}/oauth2/v2.0/authorize?${queryParams}`;
}

async function getCredential(): Promise<AuthorizationCodeCredential> {
	// Set up a temporary local endpoint that can wait for the
	// authentication redirect to be sent to the local redirect URI.
	const authCodePromise = new Promise<string>((resolve, reject) => {
		const app = express();
		let server: Server | undefined = undefined;

		app.get("/", (req, res) => {
			// Close the temporary server once we've received the redirect.
			res.sendStatus(200);
			if (server) {
				server.close();
			}

			// The redirect will either contain a "code" or an "error"
			const authorizationCode = req.query["code"];
			if (authorizationCode) {
				resolve(authorizationCode.toString());
			} else {
				reject(new Error(`Authentication Error "${req.query["error"]}":\n\n${req.query["error_description"]}`));
			}
		});

		server = app.listen(port, () => console.log(`Authorization code redirect server listening on port ${port}`));
	});

	// Direct the user to the authentication URI either by opening a
	// browser (desktop and mobile apps) or redirecting their browser
	// using a Location header (web apps and APIs).
	const authenticateUrl = getAuthorizeUrl(tenantId!, clientId!, scopes);
	console.log("Opening user's browser to URL:", authenticateUrl);
	await open(authenticateUrl);

	// Wait for the authorization response to be send to the redirect URI
	const authorizationCode = await authCodePromise;
	console.log("\nReceived authorization code:", authorizationCode);

	// Once we have the authorization code, the AuthorizationCodeCredential
	// can be created.  This credential will take care of requesting and
	// refreshing the access token from this point forward.
	if (clientSecret) {
		return new AuthorizationCodeCredential(
			tenantId!,
			clientId!,
			clientSecret,
			authorizationCode,
			redirectUri,
			// NOTE: It is not necessary to explicitly pass the authorityHost when using
			// the default authority host: https://login.microsoftonline.com.  It is only
			// necesary when a different authority host is used in the initial authorization
			// URI.
			{ authorityHost },
		);
	} else {
		// NOTE: If there is no client secret, we can construct an auth code credential
		// using this method.
		return new AuthorizationCodeCredential(
			tenantId!,
			clientId!,
			authorizationCode,
			redirectUri,
			// NOTE: It is not necessary to explicitly pass the authorityHost when using
			// the default authority host: https://login.microsoftonline.com.  It is only
			// necesary when a different authority host is used in the initial authorization
			// URI.
			{ authorityHost },
		);
	}
}

async function runExample() {
	// Get the credential to be used with any TypeScript API client
	// that accepts a TokenCredential.  The access token will be
	// requested on demand and refreshed when necessary.
	const credential = await getCredential();

	// This line demonstrates that it is possible to obtain an access
	// token using this credential but you *should not* use the credential
	// like this under normal circumstances.  The intended usage pattern is
	// to pass the credential directly into an API client class constructor.
	const accessToken = await credential.getToken(scopes);

	const authProvider = new TokenCredentialAuthenticationProvider(credential, { scopes: [scopes] });

	const client = MicrosoftGraph.Client.initWithMiddleware({
		debugLogging: true,
		authProvider: authProvider,
	});
	const response = await client.api("/me").get();
	console.log(response);
	if (accessToken) {
		//console.log("\nAccess token:", accessToken.token);
		console.log("true");
	} else {
		console.error("Could not retrieve an access token!");
	}
}

runExample().catch((err) => {
	console.log("Encountered an error:\n\n", err);
});
