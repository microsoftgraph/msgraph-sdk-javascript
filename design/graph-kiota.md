### Current Graph Core Design

```typescript
class Client {
    httpClient : HttpClient;
    init(): Client;
    api(httpClient):GraphRequest;

}

class HttpClient {
    middleware : Middleware | Middlewares 

    send(context):Promise<Respnse> // triggers the middleware chain
}

class GraphRequest {
    httpClient : HttpClient;

    // following methods call httpClient.send() triggering the middleware to make the request
    get();
    post();
    put();
    delete();

}
```

### Graph Core with Kiota dependency

```typescript
class Client {
    init(): Client;
    kiotaHttpClient : KiotaHttpClient; // importing the HttpClient from Kiota
    api(kiotaHttpClient):GraphRequest;

}


class GraphRequest {
    kiotaHttpClient : KiotaHttpClient;

    // following methods call kiotaHttpClient.fetch() triggering the middleware to make the request
    get();
    post();
    put();
    delete();

}

```

### Middleware

- Authentication ?
- Redirect middleware - import from Kiota
- Retry middleware - import from Kiota
- Telemtetry - same as before
- HttpMessageHandler - import from Kiota

Concerns with Middleware 

- Accomodating Graph Specific conditions
- Feature flags

### GraphServiceClient

```typescript

// GraphServiceClient extends from the GraphCoreClient
class GraphServiceClient extends Client {
    kiotaHttpCore : KiotaHttpCore =  new KiotaCore(super.KiotaHttpClient);

}
```

Reasons to extend from the core client:

- GraphServiceClient will exhibit the capabilities of core client and enable use of request builders
- A user can use the GraphServiceClient()
- Tasks 
    - User should be able to achieve GraphServiceClient.api("").get(). Simple implemetation and design concerns.
    - `LargeFileUpload` and `PageIterator` task constructors expect the `Client` object parameter. Passing the  `GraphServiceClient` object should work as expected too.
    - `Batching` task override the functions in the `GraphServiceClient` such that requests and responses from the request builders can be batched.  

