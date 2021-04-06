# Microsoft Graph JavaScript Client Library

[![npm version badge](https://img.shields.io/npm/v/@microsoft/microsoft-graph-client.svg?maxAge=86400)](https://www.npmjs.com/package/@microsoft/microsoft-graph-client) [![Travis](https://travis-ci.org/microsoftgraph/msgraph-sdk-javascript.svg?maxAge=86400)](https://travis-ci.org/microsoftgraph/msgraph-sdk-javascript) [![Known Vulnerabilities](https://snyk.io/test/github/microsoftgraph/msgraph-sdk-javascript/badge.svg?maxAge=86400)](https://snyk.io/test/github/microsoftgraph/msgraph-sdk-javascript) [![Licence](https://img.shields.io/github/license/microsoftgraph/msgraph-sdk-javascript.svg)](https://github.com/microsoftgraph/msgraph-sdk-javascript) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/microsoftgraph/msgraph-sdk-javascript) [![Downloads](https://img.shields.io/npm/dm/@microsoft/microsoft-graph-client.svg?maxAge=86400)](https://www.npmjs.com/package/@microsoft/microsoft-graph-client)

The Microsoft Graph JavaScript client library is a lightweight wrapper around the Microsoft Graph API that can be used server-side and in the browser.

- [Microsoft Graph JavaScript Client Library](#microsoft-graph-javascript-client-library)
  - [Installation](#installation)
    - [Via npm](#via-npm)
    - [Via Script Tag](#via-script-tag)
  - [Getting started](#getting-started)
    - [1. Register your application](#1-register-your-application)
    - [2. Create a Client Instance](#2-create-a-client-instance)
    - [3. Make requests to the graph](#3-make-requests-to-the-graph)
  - Documentation
    - [HTTP Actions](docs/Actions.md)
    - [Chained APIs to call Microsoft Graph](docs/CallingPattern.md)
    - [OData system query options - Query Parameters](docs/QueryParameters.md)
    - [Batch multiple requests into single HTTP request](docs/content/Batching.md)
    - [Configurations to your request](docs/OtherAPIs.md)
        - [Query](docs/OtherAPIs.md#QUERY)
        - [Version](docs/OtherAPIs.md#VERSION)
        - [Headers](docs/OtherAPIs.md#HEADER-AND-HEADERS)
        - [Options](docs/OtherAPIs.md#OPTION-AND-OPTIONS)
        - [MiddlewareOptions](docs/OtherAPIs.md#MIDDLEWAREOPTIONS)
        - [ResponseType](docs/OtherAPIs.md#RESPONSETYPE)
    -  [Upload large files to OneDrive, Outlook, Print API](docs/tasks/LargeFileUploadTask.md)
    - [Page Iteration](docs/tasks/PageIterator.md)
    - [Getting Raw Response](docs/GettingRawResponse.md)
    - [Creating an instance of TokenCredentialAuthentication](docs/TokenCredentialAuthenticationProvider.md)
  - [Questions and comments](#questions-and-comments)
  - [Contributing](#contributing)
  - [Additional resources](#additional-resources)
  - [Third Party Notices](#third-party-notices)
  - [Security Reporting](#security-reporting)
  - [License](#license)
  - [We Value and Adhere to the Microsoft Open Source Code of Conduct](#we-value-and-adhere-to-the-microsoft-open-source-code-of-conduct)

[![TypeScript demo](https://raw.githubusercontent.com/microsoftgraph/msgraph-sdk-javascript/master/types-demo.PNG)](https://github.com/microsoftgraph/msgraph-typescript-typings)

## Installation

### Via npm

```cmd
npm install @microsoft/microsoft-graph-client
```

import `@microsoft/microsoft-graph-client` into your module.

Also, you will need to import any fetch polyfill which suits your requirements.
Following are some fetch polyfills -
* [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch).
* [cross-fetch](https://www.npmjs.com/package/cross-fetch)
* [whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch)

```typescript
import "isomorphic-fetch"; // or import the fetch polyfill you installed
import { Client } from "@microsoft/microsoft-graph-client";
```

### Via Script Tag

Include [graph-js-sdk.js](https://cdn.jsdelivr.net/npm/@microsoft/microsoft-graph-client/lib/graph-js-sdk.js) in your HTML page.

```HTML
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@microsoft/microsoft-graph-client/lib/graph-js-sdk.js"></script>
```

In case your browser doesn't have support for [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) [[support](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#Browser_compatibility)] or [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) [[support](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Browser_compatibility)], you need to use polyfills like [github/fetch](https://github.com/github/fetch) for fetch and [es6-promise](https://github.com/stefanpenner/es6-promise) for promise.

```HTML
<!-- polyfilling promise -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/es6-promise/dist/es6-promise.auto.min.js"></script>

<!-- polyfilling fetch -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/whatwg-fetch/dist/fetch.umd.min.js"></script>

<!-- depending on your browser you might wanna include babel polyfill -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@babel/polyfill@7.4.4/dist/polyfill.min.js"></script>
```

## Getting started
### 1. Register your application

To call Microsoft Graph, your app must acquire an access token from the Microsoft identity platform.
Learn more about this -
- [Authentication and authorization basics for Microsoft Graph](https://docs.microsoft.com/en-us/graph/auth/auth-concepts)
- [Register your app with the Microsoft identity platform](https://docs.microsoft.com/en-us/graph/auth/auth-concepts)

### 2. Create a Client Instance

The Microsoft Graph client is designed to make it simple to make calls to Microsoft Graph. You can use a single client instance for the lifetime of the application.

For information on how to create a client instance, see [Creating Client Instance](./docs/CreatingClientInstance.md)


### 3. Make requests to the graph

Once you have authentication setup and an instance of Client, you can begin to make calls to the service. All requests should start with `client.api(path)` and end with an [action](./docs/Actions.md).

Getting user details -

```typescript
try {
	let userDetails = await client.api("/me").get();
	console.log(userDetails);
} catch (error) {
	throw error;
}
```

Sending an email to the recipients -

```typescript
// Construct email object
const mail = {
	subject: "Microsoft Graph JavaScript Sample",
	toRecipients: [
		{
			emailAddress: {
				address: "example@example.com",
			},
		},
	],
	body: {
		content: "<h1>MicrosoftGraph JavaScript Sample</h1>Check out https://github.com/microsoftgraph/msgraph-sdk-javascript",
		contentType: "html",
	},
};
try {
	let response = await client.api("/me/sendMail").post({ message: mail });
	console.log(response);
} catch (error) {
	throw error;
}
```

For more information, refer: [Calling Pattern](docs/CallingPattern.md), [Actions](docs/Actions.md), [Query Params](docs/QueryParameters.md), [API Methods](docs/OtherAPIs.md) and [more](docs/).

## Questions and comments

We'd love to get your feedback about the Microsoft Graph JavaScript client library. You can send your questions and suggestions to us in the [Issues](https://github.com/microsoftgraph/msgraph-sdk-javascript/issues) section of this repository.

## Contributing

Please see the [contributing guidelines](CONTRIBUTING.md).

## Additional resources

-   [Microsoft Graph website](https://graph.microsoft.io)
-   [Microsoft Graph TypeScript types](https://github.com/microsoftgraph/msgraph-typescript-typings/)
-   [Build Angular single-page apps with Microsoft Graph](https://github.com/microsoftgraph/msgraph-training-angularspa)
-   [Build Node.js Express apps with Microsoft Graph](https://github.com/microsoftgraph/msgraph-training-nodeexpressapp)
-   [Office Dev Center](http://dev.office.com/)

## Third Party Notices

See [Third Party Notices](./THIRD%20PARTY%20NOTICES) for information on the packages that are included in the [package.json](./package.json)

## Security Reporting

If you find a security issue with our libraries or services please report it to [secure@microsoft.com](mailto:secure@microsoft.com) with as much detail as possible. Your submission may be eligible for a bounty through the [Microsoft Bounty](http://aka.ms/bugbounty) program. Please do not post security issues to GitHub Issues or any other public site. We will contact you shortly upon receiving the information. We encourage you to get notifications of when security incidents occur by visiting [this page](https://technet.microsoft.com/en-us/security/dd252948) and subscribing to Security Advisory Alerts.

## License

Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT License (the "[License](./LICENSE)");

## We Value and Adhere to the Microsoft Open Source Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
