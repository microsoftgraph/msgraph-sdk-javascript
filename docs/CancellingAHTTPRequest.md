# Cancel a HTTP request

> The `abort()` method of the AbortController interface aborts a DOM request (e.g. a Fetch request) 
> 
> -- [AbortController interface](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)

References - 
* [AbortController interface](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
* [abortcontroller npm](https://www.npmjs.com/package/abort-controller)
* [abortcontroller-polyfill](https://www.npmjs.com/package/abortcontroller-polyfill)
* [Example of the AbortController implementation](https://github.com/node-fetch/node-fetch#request-cancellation-with-abortsignal)

#### Following is how canceling a fetch call works:

* Create an AbortController instance.
* That instance has a signal property.
* Pass the signal as a fetch option for signal.
* Call the AbortController's abort property to cancel all fetches that use that signal.

#### Setting the AbortController.signal as a fetch option while creating the MSGraph SDK Client instance:

```typescript
import { Client,FetchOptions } from "@microsoft/microsoft-graph-client";
import { AbortController } from "abort-controller"; // <- import when using the abort-controller npm package.

const controller = new AbortController();

const timeout = setTimeout(() => {
	controller.abort();
}, 150);

const fetchOptions: FetchOptions = {
	signal: controller.signal;
}

const client = Client.initWithMiddleware({
  fetchOptions, // Pass the FetchOptions value where the AbortController.signal is set
  authProvider,
  ...
});
```
