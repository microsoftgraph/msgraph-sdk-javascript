/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/*tslint:disable*/
import { AzureIdentityAuthenticationProvider } from "@microsoft/kiota-authentication-azure"
import { AccessToken, ClientSecretCredential } from "@azure/identity";
import { assert } from "chai";
import * as sinon from "sinon";

import { TokenCredentialAuthenticationProviderOptions } from "../../../src/authentication/azureTokenCredentials/ITokenCredentialAuthenticationProviderOptions";
import { TokenCredentialAuthenticationProvider } from "../../../src/authentication/azureTokenCredentials/TokenCredentialAuthenticationProvider";
describe("TokenCredentialAuthenticationProvider.ts", () => {
	const tenantId = "0000-1111-0000-1111";
	const clientId = "CLIENT_ID";
	const clientSecret = "CLIENT_SECRET";
	const scopes = ["test_scopes"];
	it("AccessToken is returned correctly from getToken function", async () => {
		const client = new ClientSecretCredential(tenantId, clientId, clientSecret);
		if (typeof client.getToken !== "function") {
			throw new Error("Method definition for getToken is not found");
		}

		const authProviderOptions: TokenCredentialAuthenticationProviderOptions = {
			getTokenoptions: null,
			scopes,
		};
		const accessToken: AccessToken = { token: "dummy_valid_token", expiresOnTimestamp: 1 };

		const moq = sinon.mock(client);
		moq.expects("getToken").resolves(accessToken);
		const tokenCredentialAuthenticationProvider = new TokenCredentialAuthenticationProvider(client, authProviderOptions);
		const access = await tokenCredentialAuthenticationProvider.getAccessToken();
		assert.equal(access, accessToken.token);
	});

	it("Error is thrown when accessToken cannot be retrieved from getToken function", async () => {
		let expectedError;
		try {
			const client = new ClientSecretCredential(tenantId, clientId, clientSecret);
			if (typeof client.getToken !== "function") {
				throw new Error("Method definition for getToken is not found");
			}
			const authProviderOptions: TokenCredentialAuthenticationProviderOptions = {
				getTokenoptions: null,
				scopes,
			};
			const accessToken: AccessToken = undefined;

			const moq = sinon.mock(client);
			moq.expects("getToken").resolves(accessToken);
			const tokenCredentialAuthenticationProvider = new TokenCredentialAuthenticationProvider(client, authProviderOptions);
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const access = await tokenCredentialAuthenticationProvider.getAccessToken();
		} catch (err) {
			expectedError = err;
		}
		assert.equal(expectedError.name, "Access token is undefined");
	});
});
