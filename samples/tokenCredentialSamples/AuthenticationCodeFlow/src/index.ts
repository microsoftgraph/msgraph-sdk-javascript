/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * This sample is referenced from - https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/identity/identity/samples/manual/authorizationCodeSample.ts
 */
import "isomorphic-fetch";

import { AuthorizationCodeCredential } from "@azure/identity";
import { Client } from "@microsoft/microsoft-graph-client";
import { TokenCredentialAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials";
import express from "express";
import { Server } from "http";
import open from "open";
import qs from "qs";

import { authorityHost, clientId, clientSecret, port, redirectUri, scopes, tenantId } from "./secrets";

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
		const server: Server = app.listen(port, () => console.log(`Authorization code redirect server listening on port ${port}`));
		app.get("/authresponse", (req, res) => {
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
	});

	// Direct the user to the authentication URI either by opening a
	// browser (desktop and mobile apps) or redirecting their browser
	// using a Location header (web apps and APIs).
	const authorizeUrl = getAuthorizeUrl(tenantId, clientId, scopes);
	console.log("Opening user's browser to URL:", authorizeUrl);
	await open(authorizeUrl);

	// Wait for the authorization response to be send to the redirect URI
	const authorizationCode = await authCodePromise;
	console.log("\nReceived authorization code:", authorizationCode);

	// Once we have the authorization code, the AuthorizationCodeCredential
	// can be created. This credential will take care of requesting and
	// refreshing the access token from this point forward.
	if (clientSecret) {
		return new AuthorizationCodeCredential(
			tenantId,
			clientId,
			clientSecret,
			authorizationCode,
			redirectUri,
			// NOTE: It is not necessary to explicitly pass the authorityHost when using
			// the default authority host: https://login.microsoftonline.com.  It is only
			// necessary when a different authority host is used in the initial authorization
			// URI.
			{ authorityHost },
		);
	} else {
		// NOTE: If there is no client secret, we can construct an auth code credential
		// using this method.
		return new AuthorizationCodeCredential(
			tenantId,
			clientId,
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

	const authProvider = new TokenCredentialAuthenticationProvider(credential, { scopes: [scopes] });

	const client = Client.initWithMiddleware({
		debugLogging: true,
		authProvider,
	});
	const response = await client.api("/me").get();
	console.log(response);
}

runExample().catch((err) => {
	console.log("Encountered an error:\n\n", err);
});
