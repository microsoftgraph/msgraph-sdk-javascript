# Other APIs

## VERSION

Passing in a version through `.version()` has the highest priority. It overrides the Microsoft Graph client default version from `.init()` and the global library default (currently v1.0).

```typescript
try {
	let res = await client
		.api("/me/ownedDevices")
		.version("beta")
		.get();
	console.log(res);
} catch (error) {
	throw error;
}
```

## QUERY

You can pass in any URL query parameters through `.query()` as a dictionary or string.

```typescript
try {
	// Below three statements are same
	let res1 = await client
		.api("/me")
		.query({ $select: "displayName" })
		.get();
	let res2 = await client
		.api("/me")
		.query("$select=displayName")
		.get();
	let res3 = await client
		.api("/me")
		.select("displayName")
		.get();
} catch (error) {
	throw error;
}
```

## HEADER AND HEADERS

You can pass in additional request headers through `.header()` or `.headers()` either individually or in a dictionary.

```typescript
try {
	let messageBody = {
		message: {
			subject: "Meet for lunch?",
			body: {
				contentType: "Text",
				content: "The new cafeteria is open.",
			},
			toRecipients: [
				{
					emailAddress: {
						address: "garthf@contoso.com",
					},
				},
			],
		},
	};
	// Below two statements are same
	let res1 = await client
		.api("/me/sendMail")
		.header("content-type", "application/json")
		.post(messageBody);
	let res2 = await client
		.api("/me/sendMail")
		.headers({ "content-type": "application/json" })
		.post(messageBody);
} catch (error) {
	throw error;
}
```

## OPTION AND OPTIONS

You can pass in additional request options through `.option()` and `.options()`, either individually or in a dictionary. Options can be [node specific](https://github.com/bitinn/node-fetch#options) or [from fetch standard](https://fetch.spec.whatwg.org/#requestinit)

```typescript
let HttpProxyAgent = require('http-proxy-agent');
try {
    // HTTP/HTTPS proxy to connect to
    let proxy = <YOUR PROXY>;
    let agent = new HttpProxyAgent(proxy);
    // Below two statements are same
    let res1 = await client.api("/me").option("agent", agent).get();
    let res2 = await client.api("/me").options({agent: agent}).get();
} catch (error) {
    throw error;
}
```

## MIDDLEWAREOPTION

You can pass in the middleware options for a request through `.middlewareOption()`. This takes array of strongly typed middleware options, these middleware options should be an implementation of MiddlewareOption interface

```typescript
try {
	let res = await client
		.api("/me/messages")
		.middlewareOption([new RetryHandlerOption(5000)])
		.get();
	console.log(res);
} catch (error) {
	throw error;
}
```

## RESPONSETYPE

To set a custom response type, use the`.responseType(<ResponseType>)` method. Refer [ResponseType.ts](./src/ResponseType.ts) for available options.

```typescript
try {
	let res = await client
		.api(`/me/drive/root/children/${fileName}/content`)
		.responseType(MicrosoftGraph.ResponseType.BLOB)
		.get();
	console.log(res);
} catch (error) {
	throw error;
}
```
