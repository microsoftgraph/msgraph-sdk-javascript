# Getting Raw Response

Steps for getting the raw response [i.e [Response Object](https://developer.mozilla.org/en-US/docs/Web/API/Response)]

**Initialize the Client**

```typescript
const options = {
    authProvider: yourAuthProvider
};
const client = MicrosoftGraph.Client.init(options);
```

**Save request to get the raw response before calling action**

The graph request will be returned for all the method calls except for actions, because they makes call to the server, so have to save the copy of graph request instance before calling actions

```typescript
const graphRequest = client.api("/me").select("displayName")
let response = await graphRequest.get();
```

**Get the raw response**

Use `.getRawResponse()` method to get the raw response

```typescript
let rawResponse = graphRequest.getRawResponse();
console.log(rawResponse);
```