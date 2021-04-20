# Microsoft JavaScript SDK v3 upgrade guide

- [Breaking Changes](#Breaking-Changes)
- [Enhancements](#Enhancements)
- [Deprecation](#Deprecation)
## Breaking Changes

### Supported Node version and TypeScript update
- Microsoft Graph JS SDK requires Node.js 10 LTS or higher.
- Updated to TypeScript 4.x.

### LargeFileUploadTask 
- Modified the `FileObject` interface which now contains the `sliceFile` function. Learn more [LargeFileUploadTask](./docs/tasks/LargeFileUploadTask.md). 
- The `FileObject` instance passed on creation of the `LargeFileUploadTask` object should contain the implementation of the `sliceFile` function.
- Added new classes `FileUpload` and `StreamUpload` implementing the `FileObject` interface.

### Removed `timeout` option from `FetchOptions` interface
- Recommended way is to [cancel a request](./docs/CancellingAHTTPRequest.md) by passing a signal.

### Update in the `package.json` entry points.
```json
{
    "main": "lib/src/index.js"
    "module": "lib/es/src/index.js
    "browser": {
	    "./lib/es/src/index.js": "./lib/es/src/browser/index.js",
    }
}
```
## Removed the `graph-es-sdk.js`
* `graph-es-sdk.js` - the bundled file in ES format will not be shipped anymore as the ES modules are being shipped.
* `graph-js-sdk.js` will be shipped as is.

## Enhancements

### Introducing support for `@azure/identity TokenCredentials`
- Added a `TokenCredentialAuthenticationProvider` enabling the use of `@azure/identity` `credential classes` for authentication purposes. 
- The `TokenCredentialAuthenticationProvider` enables server-side authentication using `credential classes` such as `ClientSecretCredential` or `ClientCertificateCredential`.

### LargeFileUploadTask

- Added support for Node.js Stream upload. Learn more [LargeFileUploadTask](./docs/tasks/LargeFileUploadTask.md). 
- Added capabilities to track the upload progress using `UploadEventHandlers`.
- Resolved a bug to enable large file uploads to Outlook and Print APIs.

### Added `browser` field in package.json.
- The `browser` field indicates the entry point for client applications using Microsoft Graph JS SDK library.

## Deprecation

### Deprecating ImplicitMSALAuthenticationProvider 
* Use of ImplicitMSALAuthenticationProvider, that is,using the implicit authorization flow is not recommended any more.
* Use the TokenCredentialAuthenticationProvider with azure/identity library or a CustomAuthenticationProvider with an auth library of your choice instead.

