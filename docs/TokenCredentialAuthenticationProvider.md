#### Creating an instance of TokenCredentialAuthentication

###### Links for more information -

-   [GitHub - Azure Identity client library for JavaScript ](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/identity/identity/README.md)

-   [npm - Azure Identity client library for JavaScript](https://www.npmjs.com/package/@azure/identity)

-   Check the [tokenCredentialSamples folder][../samples/tokencredentialsamples].

###### Example of how to create and pass a token credential sample -

```typescript
    // Import the TokenCredential class that you wish to use. This examples uses a Client SecretCredential
    import { ClientSecretCredential } from "@azure/identity";

    // Create an instance of the TokenCredential Class that is imported
	const tokenCredential = new ClientSecretCredential("your_tenantId", "your_clientId", "your_clientSecret");

	// Set your scopes and options for TokenCredential.getToken (Check the ` interface GetTokenOptions` in (TokenCredential Implementation)[https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/core/core-auth/src/tokenCredential.ts])
	const options:TokenCredentialAuthenticationProviderOptions = { scopes: [scopes], getTokenoptions: <> }

    // Create an instance of the TokenCredentialAuthenticationProvider by passing the tokenCredential instance and options to the constructor
	const authProvider = new TokenCredentialAuthenticationProvider(tokenCredential, options);
	const client = Client.initWithMiddleware({
		debugLogging: true,
		authProvider: authProvider,
	});
	const res = await client.api("/users/").get();
```
