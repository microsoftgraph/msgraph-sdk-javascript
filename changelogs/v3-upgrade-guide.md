# Microsoft JavaScript SDK v3 upgrade guide

-   [Breaking Changes](#Breaking-Changes)
-   [Enhancements](#Enhancements)
-   [Deprecation](#Deprecation)

## Breaking Changes

### Supported Node version and TypeScript update

-   Microsoft Graph JS SDK requires Node.js 12 LTS or higher. The active Long Term Service (LTS) version of Node.js is used for on-going testing of existing and upcoming product features.
-   Updated to TypeScript 4.x.

### Removing `ImplicitMSALAuthenticationProvider` and `MSALAuthenticationProviderOptions` class.

-   Use of `ImplicitMSALAuthenticationProvider`, that is,using the implicit authorization flow is not recommended any more. [OAuth 2.0 Implicit Grant](https://oauth.net/2/grant-types/implicit/).
-   The 3.0.0 version introduces `AuthCodeMSALBrowserAuthenticationProvider` which supports the [MSAL Browser](https://www.npmjs.com/package/@azure/msal-browser) and enables authorization using the Authentication Code Flow with PKCE. Learn more about the [AuthCodeMSALBrowserAuthenticationProvider](https://github.com/microsoftgraph/msgraph-sdk-javascript/blob/dev/docs/AuthCodeMSALBrowserAuthenticationProvider.md).
-   Alternatively, you can implement a `CustomAuthenticationProvider` with an auth library of your choice. Learn more using the [samples](https://github.com/microsoftgraph/msgraph-sdk-javascript#samples-and-tutorials).

### LargeFileUploadTask

-   Modified the `FileObject` interface which now contains the `sliceFile` function. Learn more [LargeFileUploadTask](../docs/tasks/LargeFileUploadTask.md).
-   The `FileObject` instance passed on creation of the `LargeFileUploadTask` object should contain the implementation of the `sliceFile` function.
-   Added new classes `FileUpload` and `StreamUpload` implementing the `FileObject` interface.

### Removed `timeout` option from `FetchOptions` interface

-   Recommended way is to [cancel a request](../docs/CancellingAHTTPRequest.md) by passing a signal.

### Update in the `package.json` entry points.

```json
{
	"main": "lib/src/index.js",
	"module": "lib/es/src/index.js",
	"browser": {
		"./lib/es/src/index.js": "./lib/es/src/browser/index.js"
	}
}
```

## Removed the `graph-es-sdk.js`

-   `graph-es-sdk.js` - the bundled file in ES format will not be shipped anymore as the ES modules are being shipped.
-   `graph-js-sdk.js` will be shipped as is.

## Changed folder paths

-   Files in `lib/es` have been moved to `lib/es/src`. The `lib` folder contains the transpiled `src` files. - The `lib` contains the ES and CJS modules as follows: `lib │ └─── src (CJS modules) | │ └─── es |___ src (ES modules)`
-   `Range`: `src/Range` changed to `src/tasks/FileUploadTask/Range`.
-   `ImplicitMSALAuthenticationProvider`: - `src/ImplicitMSALAuthenticationProvider` changed to `src/authentication/msal/ImplicitMSALAuthenticationProvider`. - Alternatively, `ImplicitMSALAuthenticationProvider` can be imported or required from `@microsoft/microsoft-graph-client/authProviders/msal`.
-   `MSALAuthenticationProviderOptions`: - `src/MSALAuthenticationProviderOptions` changed to `src/authentication/msal/MSALAuthenticationProviderOptions`. - Alternatively, `MSALAuthenticationProviderOptions` can be imported or required from `@microsoft/microsoft-graph-client/authProviders/msal`.

## Enhancements

### Introducing support for `@azure/msal-browser`
- The 3.0.0 version introduces `AuthCodeMSALBrowserAuthenticationProvider` which supports authentication using the [MSAL Browser](https://www.npmjs.com/package/@azure/msal-browser)
-  `AuthCodeMSALBrowserAuthenticationProvider` enables authorization using the Authentication Code Flow with PKCE. Learn more about the [AuthCodeMSALBrowserAuthenticationProvider](https://github.com/microsoftgraph/msgraph-sdk-javascript/blob/dev/docs/AuthCodeMSALBrowserAuthenticationProvider.md).

### Introducing support for `@azure/identity TokenCredentials`

-   Added a `TokenCredentialAuthenticationProvider` enabling the use of `@azure/identity` `credential classes` for authentication purposes.
-   The `TokenCredentialAuthenticationProvider` enables server-side authentication using `credential classes` such as `ClientSecretCredential` or `ClientCertificateCredential`.
-   Find the samples on how to use `TokenCredentialAuthenticationProvider` here - [TokenCredentialAuthenticationProvider samples](../samples/javascript/clientInitialization/tokenCredentialAuthenticationProvider)

### LargeFileUploadTask

-   Added support for Node.js Stream upload. Learn more [LargeFileUploadTask](../docs/tasks/LargeFileUploadTask.md).
-   Added capabilities to track the upload progress using `UploadEventHandlers`.
-   Resolved a bug to enable large file uploads to Outlook and Print APIs.

### Added `browser` field in package.json.

-   The `browser` field indicates the entry point for client applications using Microsoft Graph JS SDK library.

### Added `customHosts` options

-   The `AuthenticationHandler` and `TelemetryHandler` will add or update the request headers only if the request URL is a Graph endpoint or a custom endpoint.
-   `customHosts` property in `IOptions`, `IClientOptions` takes in a `Set` of custom hosts.

```typescript
// Consider the custom request url is https://CUSTOM_HOST.com
const customHost = "CUSTOM_HOST";
const customHosts = new Set<string>([customHost]);
const client = Client.initWithMiddleware({ middleware, customHosts });
```

### Added `GraphClientError`

-   `GraphClientError` handles client-side errors encountered within the JavaScript Client SDK whereas, `GraphError` class should be used to handle errors in the response from the Graph API.

## Deprecation

### Deprecating the `sliceFile` function of the `LargeFileUploadTask` class.

-   The `sliceFile` function has been moved to the `FileObject` interface.
