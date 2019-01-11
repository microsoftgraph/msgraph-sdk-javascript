# Microsoft Graph JavaScript Client Library

[![npm version badge](https://img.shields.io/npm/v/@microsoft/microsoft-graph-client.svg?maxAge=86400)](https://www.npmjs.com/package/@microsoft/microsoft-graph-client)
[![Travis](https://travis-ci.org/microsoftgraph/msgraph-sdk-javascript.svg?branch=master&style=flat-square)](https://travis-ci.org/microsoftgraph/msgraph-sdk-javascript)

The Microsoft Graph JavaScript client library is a lightweight wrapper around the Microsoft Graph API that can be used server-side and in the browser.

**Looking for IntelliSense on models (Users, Groups, etc.)? Check out the [Microsoft Graph Types](https://github.com/microsoftgraph/msgraph-typescript-typings) repository!**

[![TypeScript demo](https://raw.githubusercontent.com/microsoftgraph/msgraph-sdk-javascript/master/types-demo.PNG)](https://github.com/microsoftgraph/msgraph-typescript-typings)

## Installation

### Via npm

```cmd
npm install @microsoft/microsoft-graph-client
```

### Via Script Tag

Include [lib/graph-js-sdk-web.js](./lib/graph-js-sdk-web.js) in your page.

```HTML
<script type="text/javascript" src="graph-js-sdk-web.js"></script>
```

## Getting started

### 1. Register your application

Register your application to use Microsoft Graph API using one of the following
supported authentication portals:

* [Microsoft Application Registration Portal](https://apps.dev.microsoft.com):
  Register a new application that works with Microsoft Account and/or
  organizational accounts using the unified V2 Authentication Endpoint.
* [Microsoft Azure Active Directory](https://manage.windowsazure.com): Register
  a new application in your tenant's Active Directory to support work or school
  users for your tenant or multiple tenants.

### 2. Authenticate for the Microsoft Graph service

The Microsoft Graph JavaScript Client Library has an adapter implementation ([MSALAuthenticationProvider](src/MSALAuthenticationProvider.ts)) for [MSAL](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-core) (Microsoft Authentication Library) which takes care of getting the `accessToken`. MSAL library does not ship with this library, user have to include it externally (For including MSAL, refer [this](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-core#installation)).
Creating an instance of MSALAuthenticationProvider,

```typescript
const clientID = 'your_client_id'; // Client Id of the registered application
const graphScopes = ["user.read", "mail.send"]; // An array of graph scopes
const options = { // An Optional options for initializing the MSAL @see https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics#configuration-options
    redirectUri: "Your redirect URI"
};
const authProvider = new MSALAuthenticationProvider(clientId, scopes, options);
```

User can integrate own preferred authentication library by implementing `IAuthenticationProvider` interface.

### 3. Initialize a Microsoft Graph Client object with an authentication provider

An instance of the **Client** class handles requests to Microsoft Graph API and processing the responses. To create a new instance of this class, you need to provide an instance of [`IAuthenticationProvider`](src/IAuthenticationProvider.ts) which needs to be passed as a value for `authProvider` key in [`Options`](src/IOptions.ts) to a static initializer method `Client.init`.

```typescript
const options = {
    authProvider // An instance created from previous step
};
const client = MicrosoftGraph.Client.init(options);
```

For more information on initializing client, refer [this](./docs/CreatingClientInstance.md).

### 4. Make requests to the graph

Once you have authentication setup and an instance of Client, you can begin to make calls to the service. All requests should be start with `client.api(path)` and end with an action.

Getting user details,

```typescript
try {
    let userDetails = await client.api("/me").get();
    console.log(userDetails);
} catch(error) {
    throw error;
}
```

Sending an email to the recipients

```typescript
// Construct email object
const mail = {
    subject: "Microsoft Graph JavaScript Sample",
    toRecipients: [{
        emailAddress: {
            address: "example@example.com"
        }
    }],
    body: {
        content: "<h1>MicrosoftGraph JavaScript Sample</h1>Check out https://github.com/microsoftgraph/msgraph-sdk-javascript",
        contentType: "html"
    }
};
try {
    let response = await client.api("/me/sendMail").post({message: mail});
    console.log(response);
} catch(error) {
    throw error;
}
```

For more information, refer: [Calling Pattern](docs/CallingPattern.md), [Actions](docs/Actions.md), [Query Params](docs/QueryParameters.md), [API Methods](docs/APIMethods.md) and [more](docs/).

## Documentation

* [Batching](docs/content/Batching.md)
* [Large File Upload Task](docs/tasks/LargeFileUploadTask.md)
* [Page Iterator](docs/tasks/PageIterator.md)
* [Actions](docs/Actions.md)
* [Query Parameters](docs/QueryParameters.md)
* [Other APIs](docs/OtherAPIs.md)
* [Getting Raw Response](docs/GettingRawResponse.md)

## Questions and comments

We'd love to get your feedback about the Microsoft Graph JavaScript client library. You can send your questions and suggestions to us in the [Issues](https://github.com/microsoftgraph/msgraph-sdk-javascript/issues) section of this repository.

## Contributing

Please see the [contributing guidelines](CONTRIBUTING.md).

## Additional resources

* [Microsoft Graph website](https://graph.microsoft.io)
* [Microsoft Graph TypeScript types](https://github.com/microsoftgraph/msgraph-typescript-typings/)
* [Angular.js sample using the JavaScript client library](https://github.com/microsoftgraph/angular-connect-sample)
* [Node.js sample using the JavaScript client library](https://github.com/microsoftgraph/nodejs-connect-sample)
* [Office Dev Center](http://dev.office.com/)

## Copyright

Copyright (c) Microsoft Corporation. All rights reserved.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Third Party Notices

See [Third Party Notices](https://github.com/microsoftgraph/msgraph-sdk-javascript/blob/master/THIRD%20PARTY%20NOTICES) for information on the packages that are included in the [package.json](https://github.com/microsoftgraph/msgraph-sdk-javascript/blob/master/package.json)
