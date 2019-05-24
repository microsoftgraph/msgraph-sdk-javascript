# Getting Raw Response

Steps for getting the raw response [i.e [Response Object](https://developer.mozilla.org/en-US/docs/Web/API/Response)]

## Initialize the Client

Refer [this documentation](../CreatingClientInstance.md) for initializing the client.

## Getting Raw Response by setting ResponseType

To get the raw response set the responseType of a request to ResponseType.RAW.

```typescript
const rawResponse = await client
	.api("/me")
	.select("displayName")
	.responseType(ResponseType.RAW)
	.get();
console.log(rawResponse);
```

Using callback method,

```typescript
client
	.api("/me")
	.select("displayName")
	.responseType(ResponseType.RAW)
	.get((error, rawResponse) => {
		console.log(rawResponse)
	});
```
