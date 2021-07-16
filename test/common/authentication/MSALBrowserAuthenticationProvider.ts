/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/*tslint:disable*/
import { AccountInfo, AuthenticationResult, InteractionType, PublicClientApplication } from "@azure/msal-browser";
import { assert } from "chai";
import * as sinon from "sinon";

import { MSALBrowserAuthenticationProvider } from "../../../src/authentication/msal-browser/MSALBrowserAuthenticationProvider";
import { MSALBrowserAuthenticationProviderOptions } from "../../../src/authentication/msalOptions/MSALAuthenticationProviderOptions";
describe("MSALBrowserAuthenticationProvider.ts", () => {
	const scopes = ["test_scopes"];
	it("AccessToken is returned correctly from getToken function", async () => {
		const dummyApp = new PublicClientApplication({
			auth: {
				clientId: "",
			},
		});
		if (typeof dummyApp.acquireTokenSilent !== "function") {
			throw new Error("Method definition for getToken is not found");
		}
		const account: AccountInfo = {
			homeAccountId: "",
			localAccountId: "",
			environment: "",
			tenantId: "",
			username: "",
		};
		const options: MSALBrowserAuthenticationProviderOptions = {
			interactionType: InteractionType.Popup,
			scopes,
			account,
		};
		const accessToken: AuthenticationResult = {
			accessToken: "dummy_valid_token",
			account,
			authority: "",
			scopes,
			uniqueId: "",
			tenantId: "",
			idToken: "",
			idTokenClaims: null,
			fromCache: false,
			expiresOn: new Date(),
            tokenType: "",
		};

		const moq = sinon.mock(dummyApp);
		moq.expects("acquireTokenSilent").resolves(accessToken);
		const msalBrowserAuthenticationProvider = new MSALBrowserAuthenticationProvider(dummyApp, options);
		const access = await msalBrowserAuthenticationProvider.getAccessToken();
		assert.equal(access, accessToken.accessToken);
	});

	// it("Error is thrown when accessToken cannot be retrieved from getToken function", async () => {
	// 	let expectedError;
	// 	try {
	// 		const client = new ClientSecretCredential(tenantId, clientId, clientSecret);
	// 		if (typeof client.getToken !== "function") {
	// 			throw new Error("Method definition for getToken is not found");
	// 		}
	// 		const authProviderOptions: TokenCredentialAuthenticationProviderOptions = {
	// 			getTokenoptions: null,
	// 			scopes,
	// 		};
	// 		const accessToken: AccessToken = undefined;

	// 		const moq = sinon.mock(client);
	// 		moq.expects("getToken").resolves(accessToken);
	// 		const tokenCredentialAuthenticationProvider = new TokenCredentialAuthenticationProvider(client, authProviderOptions);
	// 		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	// 		const access = await tokenCredentialAuthenticationProvider.getAccessToken();
	// 	} catch (err) {
	// 		expectedError = err;
	// 	}
	// 	assert.equal(expectedError.name, "Access token is undefined");
	// });
});
