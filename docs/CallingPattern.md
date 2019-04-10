# Calling Pattern

All calls to Microsoft Graph are chained together starting with **.api()**, then chain [query parameters](./QueryParameters.md) and end with an [action](./Actions.md).

## Path supports the following formats

* `me`
* `/me`
* `https://graph.microsoft.com/v1.0/me`
* `https://graph.microsoft.com/beta/me`
* `me/events?$filter=startswith(subject, "Adventure")`

## Promise based calling

Getting user details with `async`/`await`,

```typescript
try {
    let res = await client.api("/me").get();
    console.log(res);
} catch (error) {
    throw error;
}
```

Getting user details with `then`/`catch`,

```typescript
client
    .api('/me')
    .get()
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });
```

## Callback based calling

Getting user details by passing `callback`,

```typescript
client
    .api('/me')
    .get((err, res) => {
        console.log(res);
    });
```