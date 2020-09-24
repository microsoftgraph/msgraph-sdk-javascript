# Using Custom Authentication Provider

Using preferred choice of Authentication library for authenticating with Microsoft is possible.

## Step by step procedure

### Implement AuthenticationProvider

Create own implementation of Authentication provider which implements [AuthenticationProvider](../src/IAuthenticationProvider.ts) interface.

```typescript
// MyAuthenticationProvider.ts
import { AuthenticationProvider } from "@microsoft/microsoft-graph-client";

class MyAuthenticationProvider implements AuthenticationProvider {
	/**
	 * This method will get called before every request to the msgraph server
	 * This should return a Promise that resolves to an accessToken (in case of success) or rejects with error (in case of failure)
	 * Basically this method will contain the implementation for getting and refreshing accessTokens
	 */
	public async getAccessToken(): Promise<string> {}
}
```

### Initialize Client

Pass instance of MyAuthenticationProvider while initializing.

```typescript
import { MyAuthenticationProvider } from "./MyAuthenticationProvider";

let clientOptions: ClientOptions = {
	authProvider: new MyAuthenticationProvider(),
};
const client = Client.initWithMiddleware(clientOptions);
```
