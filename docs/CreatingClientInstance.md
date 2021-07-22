# Creating Client Instance

Initialization of the Client can be done in one of below two ways

## 1. Create With ClientOptions [Recommended]

The Microsoft Graph SDK client configures a default set of middleware that allows the SDK to communicate with the Microsoft Graph endpoints. This default set is customizable, allowing you to change the behavior of the client

In order to instantiate a Client object, one has to pass in the `authProvider` or `middleware` chain in [ClientOptions](../src/IClientOptions.ts).

### Option A. Default Middleware chain

The default middleware chain contains consecutively chained instances of the following:
- [AuthenticationHandler](../src/middleware/AuthenticationHandler.ts)
- [RetryHandler](../src/middleware/RetryHandler.ts)
- [RedirectHandler](../src/middleware/RedirectHandler.ts)
- [TelemetryHandler](../src/middleware/TelemetryHandler.ts)
- [HTTPMessageHandler](../src/middleware/HTTPMessageHandler.ts)

To create a client instance with the default middleware chain:

1. Create an instance of a class which implements [AuthenticationProvider](../src/IAuthenticationProvider.ts) interface. This class should contain the logic to get the access token to be passed to the Microsoft Graph API.

2. Pass the instance as `authProvider` in [ClientOptions](../src/IClientOptions.ts) to instantiate the Client which will create and set the default middleware chain.

```typescript
let clientOptions: ClientOptions = {
	authProvider: new YourAuthProviderClass(),
};
const client = Client.initWithMiddleware(clientOptions);
```

The Microsoft Graph JavaScript Client Library has an adapter implementation for the following -

-   ([TokenCredentialAuthenticationProvider](../src/authentication/azureTokenCredentials/TokenCredentialAuthenticationProvider.ts)) to support [Azure Identity TokenCredential](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/identity/identity/README.md) (Azure Identity client library for JavaScript) which takes care of getting the `accessToken`. @azure/identity library does not ship with this library, user has to include it externally (For including @azure/identity, refer [this](https://www.npmjs.com/package/@azure/identity)).

    > Learn how to [create an instance of TokenCredentialAuthenticationProvider](./TokenCredentialAuthenticationProvider.md).

**User can integrate any preferred authentication library by implementing `IAuthenticationProvider` interface**. Refer implementing [Custom Authentication Provider](./CustomAuthenticationProvider.md) for more detailed information.

```typescript
let clientOptions: ClientOptions = {
	// MyCustomAuthenticationProvider is the user's own authentication provider implementing AuthenticationProvider interface
	authProvider: new MyCustomAuthenticationProvider(),
};
const client = Client.initWithMiddleware(clientOptions);
```

### Option B. Custom Middleware chain

The Microsoft Graph SDK client allows configuring custom middleware, allowing you to change the behavior of the client. For example, you can insert customized logging, or add a test handler to simulate specific scenarios.

To create a client instance with the custom middleware chain:

1. Refer to [custom middleware chain](./CustomMiddlewareChain.md) for more detailed information.
2. Create the middleware chain and pass first middleware in the chain as `middleware` in [ClientOptions](../src/IClientOptions.ts).

```typescript
let clientOptions: ClientOptions = {
	// MyFirstMiddleware is the first middleware in my custom middleware chain
	middleware: new MyFirstMiddleware(),
};
const client = Client.initWithMiddleware(clientOptions);
```

## 2. Create With Options

Pass an [authProvider function](../src/IAuthProvider.ts) in [Options](../src/IOptions.ts) while initializing the Client. In this case, user has to provide his own implementation for getting and refreshing accessToken. A callback will be passed into this authProvider function, accessToken or error needs to be passed in to that callback.

```typescript
// Some callback function
const authProvider: AuthProvider = (callback: AuthProviderCallback) => {
	// Your logic for getting and refreshing accessToken

	// Error should be passed in case of error while authenticating
	// accessToken should be passed upon successful authentication
	callback(error, accessToken);
};
let options: Options = {
	authProvider,
};
const client = Client.init(options);
```
