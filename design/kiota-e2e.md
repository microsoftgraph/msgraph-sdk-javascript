# End-to-end usage of kiota-generated SDKs in Javascript

While working with the Kiota + Javascript teams, it became clear that we needed more context and provide a better vision on how we should be using a kiota-generated SDK. This design document aims at providing clarity and a better understanding on how developers will be using our SDKs and the underlying kiota packages.

## Constraints

Before we jump into the end-to-end walk-through, it's important to set some constraints.

| Type      | Description                                                                                                                                   |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Platforms | Node : Current and Previous LTS (14 / 16)<br /> Web : Edge, Chrome, Firefox and Safari (Latest released version + immediate previous version) |
| Modules   | Node : CommonJS<br /> Web : ES Module (ES6)                                                                                                   |
| Types     | Typings should be available for both the core and the service libraries for Graph models                                                      |

## NodeJS e2e using the Service library

```bash
## Depending on the needs, you could also install the @microsoft/msgraph-sdk-javascript-beta side-by-side with the v1.0 one. Not covered in this walkthrough.
npm install @microsoft/msgraph-sdk-javascript --save ## Installing the Javascript service library should also install the core SDK and the types (based on the version of the service library).
npm install @microsoft/kiota-authentication-azure --save
```

```typescript
// App.ts

import { Client, User, Message, BodyType } from "@microsoft/msgraph-sdk-javascript";
import { AzureIdentityAuthenticationProvider } from "@microsoft/kiota-authentication-azure";
import { DeviceCodeCredential } from "@azure/identity";

const deviceCodeCredentials = new DeviceCodeCredential({
	tenantId: "b61f9af1-d6cf-4cc0-a6f6-befb38bc00ed",
	clientId: "bde251a6-0ef9-42a8-a40b-9ad9bb594b2c",
});

const scopes = ["User.Read", "Mail.Send"];

const graphClient = Client.init({
	// Note that this is not an authentication provider, but an access token provider.
	accessTokenProvider: new AzureIdentityAccessTokenProvider(deviceCodeCredentials, scopes),
});

// Calling the API via the fluent API
const me = await getMe();

// Allowing raw calls (using the .api() method instead of the full fluent API) is important for migration purposes and cases we don't know the resource beforehands (thinking Graph Explorer, mgt-get, etc.)
const meRaw = await getMeRaw();

// Sending an email via the fluent API
await sendMail();

// Sending the email via the .api() method
await sendMailRaw();

// The types returned by the fluent API should be the same as the .api() area. It should also be the same (or at least very similar) as the current @microsoft/microsoft-graph-types to offer seamless migration.
async function getMe(): Promise<User | undefined> {
	return await graphClient.me.get();
}

async function getMeRaw(): Promise<User | undefined> {
	return await graphClient.api("/me").get();
}

async function sendMail(): Promise<void> {
	// Noting that we are using Interfaces and not Classes. There is an open discussion about this topic here https://github.com/microsoft/kiota/issues/1013
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

## NodeJS e2e using the Core library

```bash
npm install @microsoft/msgraph-sdk-javascript-core --save
npm install @microsoft/msgraph-sdk-javascript-types --save
## npm install @microsoft/msgraph-sdk-javascript-types-beta --save
npm install @microsoft/kiota-authentication-azure --save
```

```typescript
// App.ts

import { Client } from "@microsoft/msgraph-sdk-javascript-core";
import { AzureIdentityAuthenticationProvider } from "@microsoft/kiota-authentication-azure";
import { DeviceCodeCredential } from "@azure/identity";

const deviceCodeCredentials = new DeviceCodeCredential({
	tenantId: "b61f9af1-d6cf-4cc0-a6f6-befb38bc00ed",
	clientId: "bde251a6-0ef9-42a8-a40b-9ad9bb594b2c",
});

const scopes = ["User.Read", "Mail.Send"];

const graphClient = Client.init({
	accessTokenProvider: new AzureIdentityAccessTokenProvider(deviceCodeCredentials, scopes),
});

const me = await getMe();
await sendMail();

async function getMe(): Promise<User | undefined> {
	return await graphClient.api("/me").get();
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
