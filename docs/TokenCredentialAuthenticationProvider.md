#### Creating an instance of TokenCredentialAuthentication

**Note**: The `TokenCredentialAuthentication` is introduced in version 3.0.0 of Microsoft Graph Client Library

###### Links for more information -

-   [GitHub - Azure Identity client library for JavaScript ](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/identity/identity/README.md)

-   [npm - Azure Identity client library for JavaScript](https://www.npmjs.com/package/@azure/identity)

-   Check the [javascript](../samples/javascript/clientInitialization/tokenCredentialAuthenticationProvider/index.js) and [typescript](../samples/typescript/clientInitialization/tokenCredentialAuthenticationProvider/index.ts)`TokenCredentialAuthenticationProvider` samples . The ClientSecretCredentialFlow is an example of using TokenCredential to authenticate a node application. **Important Note:** TokenCredentials provides support for multiple authentication flows. This includes support to authenticate server applications.

###### Example of how to create and pass a token credential -

```typescript
// Import the TokenCredential class that you wish to use. This example uses a Client SecretCredential

import { ClientSecretCredential } from "@azure/identity";
import { TokenCredentialAuthenticationProvider, TokenCredentialAuthenticationProviderOptions } from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials";

// Create an instance of the TokenCredential class that is imported
const tokenCredential = new ClientSecretCredential("your_tenantId", "your_clientId", "your_clientSecret");

// Set your scopes and options for TokenCredential.getToken (Check the ` interface GetTokenOptions` in (TokenCredential Implementation)[https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/core/core-auth/src/tokenCredential.ts])

const options: TokenCredentialAuthenticationProviderOptions = { scopes: [scopes], getTokenOptions };

// Create an instance of the TokenCredentialAuthenticationProvider by passing the tokenCredential instance and options to the constructor
const authProvider = new TokenCredentialAuthenticationProvider(tokenCredential, options);
const client = Client.initWithMiddleware({
	debugLogging: true,
	authProvider: authProvider,
});
const res = await client.api("/users/").get();
```

```javascript
// Import the TokenCredential class that you wish to use. This examples uses a ClientSecretCredential

const { ClientSecretCredential } = require("@azure/identity");
const { Client } = require("@microsoft/microsoft-graph-client");
const { TokenCredentialAuthenticationProvider } = require("@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials");

// Create an instance of the TokenCredential class that is imported
const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);

// Set your scopes and options for TokenCredential.getToken (Check the ` interface GetTokenOptions` in (TokenCredential Implementation)[https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/core/core-auth/src/tokenCredential.ts])

const authProvider = new TokenCredentialAuthenticationProvider(credential, { scopes: [scopes] });

const client = Client.initWithMiddleware({
	debugLogging: true,
	authProvider,
});
const res = await client.api("/users/").get();
```

The `TokenCredentialAuthenticationProvider` and the `TokenCredentialAuthenticationProviderOptions` are bundled into the `lib/graph-client-tokenCredentialAuthProvider.js` file in an `iife` format.

The browser use of the file is as follows:

```html
<!-- include the script -->
<script type="text/javascript" src="<PATH_TO_SCRIPT>/graph-client-tokenCredentialAuthProvider.js"></script>
; // create an authProvider var authProvider = new MicrosoftGraphTokenCredentialAuthProvider.TokenCredentialAuthenticationProvider(tokenCred, { scopes: scopes }); client = MicrosoftGraph.Client.initWithMiddleware({ authProvider: authProvider, });
```
