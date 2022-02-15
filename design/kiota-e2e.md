# End-to-end usage of kiota-generated SDKs in Javascript

While working with the Kiota + Javascript teams, it became clear that we needed more context and provide a better vision on how we should be using a kiota-generated SDK. This design document aims at providing clarity and a better understanding on how developers will be using our SDKs and the underlying kiota packages.

## Status

| Date                | Version | Author           | Status |
| ------------------- | ------- | ---------------- | ------ |
| February 15th, 2022 | v0.2    | Sébastien Levert | Draft  |
| January 17th, 2022  | v0.1    | Sébastien Levert | Draft  |

## Constraints

Before we jump into the end-to-end walk-through, it's important to set some constraints.

| Type      | Environment | Description                                                                                       |
| --------- | ----------- | ------------------------------------------------------------------------------------------------- |
| Platforms | Node        | Current and Previous LTS (14 / 16)                                                                |
| Platforms | Web         | Edge, Chrome, Firefox and Safari (Latest released version + immediate previous version)           |
| Modules   | Node        | ESM + CJS                                                                                         |
| Modules   | Web         | ESM                                                                                               |
| Types     | All         | Typings / Models should be available for both the core and the service libraries for Graph models |

## Table of Contents

-   [NodeJS e2e using the Service library](#node-service-library)
-   [NodeJS e2e using the Core library](#node-core-library)

## <a id="node-service-library"></a> NodeJS e2e using the Service library

### Concept

This example is utilizing both the core and the service library. That means that as a developer, we want the full fluent API, allowing me discover APIs via the intellisence. Because the service library leverages the core library, we also want to highlight that we can leverage the core components directly (like the `.api()` method).

### Install the Microsoft Graph Javascript Service Library

There will be two versions of the service library for the Graph Javascript SDK. The default one will bring the representation of the v1.0 of Microsoft Graph. The second one will bring the representation of the beta of Microsoft Graph. This will be the only difference between these two libraries, as all the handcrafted code (delivering authentication, middlewares, tasks, etc.) will happen in the core library.

The Microsoft Graph Javascript Service Library includes the following packages:

-   `@microsoft/msgraph-sdk-javascript` ([npm](https://www.npmjs.com/package/@microsoft/msgraph-sdk-javascript-core)) - The service library for making fluent calls to Microsoft Graph v1.0.
-   `@microsoft/msgraph-sdk-javascript-beta` ([npm](https://www.npmjs.com/package/@microsoft/msgraph-sdk-javascript-type)) - The service library for making fluent calls to Microsoft Graph beta.

You can use [npm](https://www.npmjs.com) to install the Microsoft Graph Javascript Service Library :

```shell
npm install @microsoft/msgraph-sdk-javascript --save
```

### Importing the right functionalities from the Graph Javascript Service Library

```typescript
// App.ts

import { Client } from "@microsoft/msgraph-sdk-javascript";
import { User, Message, BodyType } from "@microsoft/msgraph-sdk-javascript/models";

// The authentication providers would get re-exported from @microsoft/msgraph-sdk-javascript-core/authentication
import { AzureIdentityAuthenticationProvider } from "@microsoft/msgraph-sdk-javascript/authentication";
import { DeviceCodeCredential } from "@azure/identity";
```

### Setting up the app to work with the Graph Javascript Service Library

```typescript
const deviceCodeCredentials = new DeviceCodeCredential({
	tenantId: "b61f9af1-d6cf-4cc0-a6f6-befb38bc00ed",
	clientId: "bde251a6-0ef9-42a8-a40b-9ad9bb594b2c",
});

const scopes = ["User.Read", "Mail.Send"];

const graphClient = Client.init({
	authenticationTokenProvider: new AzureIdentityAuthenticationProvider(deviceCodeCredentials, scopes),
});
```

### Calling Microsoft Graph via the Graph Javascript Service Library

The core value of the Microsoft Graph Javascript Service Library is the availability of the Fluent API. This provides developers with typechecking and discoverability when building on Microsoft Graph. This Fluent API is made available via the Request Builder concept and highlights the full spectrum of capabilities on Microsoft Graph.

Models are also available in this package and should reflect the underlying version of Graph we are targeting. Developers using our types should do it in a way that will be familiar to how they are used to with other SDKs and APIs. We should provide an easy-to-use model that feels natural in the Javascript world. This means we should not be forcing developers to use Classes and / or other structures that will make their code less natural to them.

We have an open issue about the above topic that can be followed here : [TypeScript - Use of interface models instead of class models](https://github.com/microsoft/kiota/issues/1013)

```typescript
const me: User | undefined = await getMe();
const meRaw: User | undefined = await getMeRaw();
await sendMail();
await sendMailRaw();

// The types returned by the fluent API should be the same as the .api() area. It should also be the same (or at least very similar) as the current @microsoft/microsoft-graph-types to offer seamless migration.
async function getMe(): Promise<User | undefined> {
	return await graphClient.me.get();
}

// Allowing raw calls (using the .api() method instead of the full fluent API) is important for migration purposes and cases we don't know the resource beforehands (thinking Graph Explorer, mgt-get, etc.)
async function getMeRaw(): Promise<User | undefined> {
	return await graphClient.api("/me").get<User>();
}

// Sending an email via the fluent API
async function sendMail(): Promise<void> {
	const message: Message = {
		subject: "Hello Graph TypeScript SDK!",
		body: {
			contentType: BodyType.Html,
			content: "<bold>Hello Graph TypeScript SDK!</bold>",
		},
		toRecipients: [
			{
				emailAddress: {
					address: "admin@m365x263716.onmicrosoft.com",
				},
			},
		],
	};

	return await client.me.sendMail.post(message);
}

// Sending the email via the .api() method
async function sendMailRaw(): Promise<void> {
	const message: Message = {
		subject: "Hello Graph TypeScript SDK!",
		body: {
			contentType: BodyType.Html,
			content: "<bold>Hello Graph TypeScript SDK!</bold>",
		},
		toRecipients: [
			{
				emailAddress: {
					address: "admin@m365x263716.onmicrosoft.com",
				},
			},
		],
	};

	return await client.api("/me/sendMail").post({
		message: message,
	});
}
```

## <a id="node-core-library"></a> NodeJS e2e using the Core library

### Concept

This example brings very similar concepts, but utilizing only the core library. That means that as a developer, we only care about the core capabilities (authentication, serialization, etc.) but we don't need / want the fluent API. This also highlights that types are still important in this case (similarly to how they were important with the v3 of the SDK using our Typings).

### Install the Microsoft Graph Javascript Core SDK

The Microsoft Graph Javascript Core SDK includes the following packages:

-   `@microsoft/msgraph-sdk-javascript-core` ([npm](https://www.npmjs.com/package/@microsoft/msgraph-sdk-javascript))- The core library for making calls to Microsoft Graph.
-   `@microsoft/msgraph-sdk-javascript-type` ([npm](https://www.npmjs.com/package/@microsoft/msgraph-sdk-javascript-type)) - The Typescript types for the Microsoft Graph entities.

You can use [npm](https://www.npmjs.com) to install the Microsoft Graph Javascript SDK:

```Shell
npm install @microsoft/msgraph-sdk-javascript-core --save
npm install @microsoft/msgraph-sdk-javascript-types --save-dev
```

As a developer, the only package you really need is the `@microsoft/msgraph-sdk-javascript-core` one. This will deliver the expected capabilities (authentication, middlewares, tasks, etc.) and should be used in a comprehensive way for existing NodeJS developers. The types are recommended but optional.

### Importing the right functionalities from the Graph Javascript Core SDK

```typescript
import { Client } from "@microsoft/msgraph-sdk-javascript-core";
import { User, Message, BodyType } from "@microsoft/msgraph-sdk-javascript-core-types";
import { AzureIdentityAuthenticationProvider } from "@microsoft/msgraph-sdk-javascript-core/authentication";
import { DeviceCodeCredential } from "@azure/identity";
```

### Setting up the app to work with the Graph Javascript Core SDK

There should not be a difference between using the core library and the service library. The setup code should remain the same to deliver a simplified developer experience.

```typescript
const deviceCodeCredentials = new DeviceCodeCredential({
	tenantId: "b61f9af1-d6cf-4cc0-a6f6-befb38bc00ed",
	clientId: "bde251a6-0ef9-42a8-a40b-9ad9bb594b2c",
});

const scopes = ["User.Read", "Mail.Send"];

const graphClient = Client.init({
	authenticationTokenProvider: new AzureIdentityAuthenticationProvider(deviceCodeCredentials, scopes),
});
```

### Calling Microsoft Graph via the Graph Javascript Core SDK

Calling the API should be done in a familiar way and should most importantly return the same models that the service library returns. That means that I can build on top of either modules without the need to redefine the types that I'll be receiving back from the API.

Developers using our types should do it in a way that will be familiar to how they are used to with other SDKs and APIs. We should provide an easy-to-use model that feels natural in the Javascript world. This means we should not be forcing developers to use Classes and / or other structures that will make their code less natural to them.

We have an open issue about the above topic that can be followed here : [TypeScript - Use of interface models instead of class models](https://github.com/microsoft/kiota/issues/1013)

```typescript
const me: User = await getMe();
await sendMail();

async function getMe(): Promise<User | undefined> {
	return await graphClient.api("/me").get<User>();
}

async function sendMail(): Promise<void> {
	const message: Message = {
		subject: "Hello Graph TypeScript SDK!",
		body: {
			contentType: BodyType.Html,
			content: "<bold>Hello Graph TypeScript SDK!</bold>",
		},
		toRecipients: [
			{
				emailAddress: {
					address: "admin@m365x263716.onmicrosoft.com",
				},
			},
		],
	};

	return await client.api("/me/sendMail").post({
		message: message,
	});
}
```
