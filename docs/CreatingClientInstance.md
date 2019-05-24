# Creating Client Instance

Initialization of the Client can be done in one of below two ways

## 1. Create With ClientOptions [Recommended]

In order to instantiate a Client object, one has to pass in the `authProvider` or `middleware` chain in [ClientOptions](../src/IClientOptions.ts).

### Option A. Default Middleware chain

Pass an instance of a class which implements [AuthenticationProvider](../src/IAuthenticationProvider.ts) interface as `authProvider` in [ClientOptions](../src/IClientOptions.ts), which will instantiate the Client with default set of middleware chain.

Library is shipped with one such authentication provider named [ImplicitMSALAuthenticationProvider](../src/ImplicitMSALAuthenticationProvider.ts). This ImplicitMSALAuthenticationProvider depends on an authentication library [msal.js](https://github.com/AzureAD/microsoft-authentication-library-for-js) which is not shipped along with the library, one has to externally include msal.js to use ImplicitMSALAuthenticationProvider.

```typescript
// Instantiating Client with ImplicitMSALAuthenticationProvider
let clientOptions: ClientOptions = {
    authProvider: new ImplicitMSALAuthenticationProvider(<CLIENT_ID>, <SCOPES>, <OPTIONS>)
};
const client = Client.initWithMiddleware(clientOptions);
```

Want to use own preferred authentication library, for which one has to implement [AuthenticationProvider](../src/IAuthenticationProvider.ts) interface and pass in the instance of it as `authProvider` in [ClientOptions](../src/IClientOptions.ts).

```typescript
let clientOptions: ClientOptions = {
	// MyCustomAuthenticationProvider is the user's own authentication provider implementing AuthenticationProvider interface
	authProvider: new MyCustomAuthenticationProvider(),
};
const client = Client.initWithMiddleware(clientOptions);
```

Refer, [custom authentication provider](./CustomAuthenticationProvider.md) for more detailed information.

### Option B. Custom Middleware chain

Want to have complete control over the request and the response objects, one can provide his own chain of middleware. Have to pass first middleware in the chain as `middleware` in [ClientOptions](../src/IClientOptions.ts).

```typescript
let clientOptions: ClientOptions = {
	// MyFirstMiddleware is the first middleware in my custom middleware chain
	middleware: new MyFirstMiddleware(),
};
const client = Client.initWithMiddleware(clientOptions);
```

Refer, [custom middleware chain](./CustomMiddlewareChain.md) for more detailed information.

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
