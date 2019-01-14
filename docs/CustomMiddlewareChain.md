# Using Custom Middleware Chain

## Middleware

As name suggests it comes in middle of something and that is request and response cycle. It has access to context object which contains request, response objects and any other options that are specific to middleware. Also it has an access to execute next middleware in the chain.

## Step by step procedure

### Implement Middlewares

Create own set of middlewares by implementing [Middleware](../src/IMiddleware.ts) interface. Here two middlewares are created one for handling Logging and another for handling http request and response.

First middleware is passed with the context object containing request, and other middleware specific options. One has to explicitly make call to execute method of the next middleware with context object once the current middleware work is over.

NOTE: Http message handler should set the response object in the context object.

```typescript
// MyLoggingHandler.ts
import { Middleware } from "@microsoft/microsoft-graph-client";
import { Context } from "@microsoft/microsoft-graph-client";

export class MyLoggingHandler implements Middleware {

    private nextMiddleware: Middleware;

    public async execute(context: Context): Promise<void> {
        try {
            let url: string;
            if (typeof context.request === "string") {
                url = context.request;
            } else {
                url = context.request.url;
            }
            console.log(url);
            await this.nextMiddleware.execute(context);
        } catch(error) {
            throw error;
        }
    }

    public setNext(next: Middleware): void {
        this.nextMiddleware = next;
    }
}
```

```typescript
// MyHttpMessageHandler.ts
import { Middleware } from "@microsoft/microsoft-graph-client";

export class MyHttpMessageHandler implements Middleware {
    public async execute(context: Context): Promise<void> {
        try {
            // For more information about context object refer "Context" section below
            let response = await fetch(context.request, context.options);
            // Set the response back in the context
            context.response = response;
        } catch (error) {
            throw error;
        }
    }
}
```

### Create Middleware Chain

Can use own middlewares and the ones shipped with the library [[Here](../src/middleware) are the set of Middlwares shipped with the library] to create the middleware chain. Create a chain out of these one has to link them in sequentially manner in own preferred order using `.setNext()` method.

Using AuthenticationHandler [one shipped with the library] and MyLoggingHandler, and MyHttpMessageHandler [custom ones] to create a middleware chain here.

NOTE: Instead of MSALAuthenticationProvider, one can provide his own Authentication Handler. For more about using custom authentication provider, refer [here](./CustomAuthenticationProvider.md).

```typescript
import { MSALAuthenticationProvider } from "@microsoft/microsoft-graph-client";
import { MyLoggingHandler } from "./MyLoggingHandler";
import { MyHttpMessageHandler } from "./MyHttpMessageHandler";

let authProvider = new MSALAuthenticationProvider("<CLIENT_ID>", ["user.read"]);
let authenticationHandler = new AuthenticationHandler(authProvider);
let myLoggingHandler = new MyLoggingHandler();
let myHttpMessageHandler = new MyHttpMessageHandler();

// Note: myHttpMessageHandler is the last in the chain so there is no need of setting next middleware for it.
authenticationHandler.setNext(myLoggingHandler);
myLoggingHandler.setNext(myHttpMessageHandler);
```

### Initialize Client

Pass first middleware in the chain for initializing the client.

```typescript
let clientOptions: ClientOptions = {
    middleware: authenticationHandler
};
const client = Client.initWithMiddleware(clientOptions);
```

## Passing Options for Middleware

One can pass any middleware specific options or data while initializing the client, this will be available in the `context.middlewareOptions`.

```typescript
let clientOptions: ClientOptions = {
    middleware: authenticationHandler,
    middlewareOptions: {
        loggingPrefix: "MSGraph-Client-Library"
    }
}
```

The above middlewareOptions object will be available in the context object that is being passed to the execute method of a middleware.

```typescript
// MyLoggingHandler.ts
import { Middleware } from "@microsoft/microsoft-graph-client";
import { Context } from "@microsoft/microsoft-graph-client";

export class MyLoggingHandler implements Middleware {

    private nextMiddleware: Middleware;

    public async execute(context: Context): Promise<void> {
        try {
            let url: string;
            if (typeof context.request === "string") {
                url = context.request;
            } else {
                url = context.request.url;
            }
            if (context.middlewareOptions !== undefined && context.middlewareOptions.loggingPrefix !== undefined) {
                console.log(`${context.middlewareOptions.loggingPrefix}: ${url}`);
            } else {
                console.log(url);
            }
            await this.nextMiddleware.execute(context);
        } catch(error) {
            throw error;
        }
    }

    public setNext(next: Middleware): void {
        this.nextMiddleware = next;
    }
}
```

Refer [MiddlewareOptions](../src/IMiddlewareOptions.ts) interface to know its structure.
