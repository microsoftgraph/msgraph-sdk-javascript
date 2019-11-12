# Testing Handler

### How to include

> Uses [Custom Middleware Chain](https://github.com/microsoftgraph/msgraph-sdk-javascript/blob/dev/docs/CustomMiddlewareChain.md), not included by default

### Modes in Testing Handler

-   Manual mode - Setting the Response code manually. - Global/Client Level - Provide a map declared manually containing response code for the requests. - Request Level - Providing response code per request. This would be overriding the Global level response code (if any).
-   Random mode - We get a random Response code from a set of response code defined for each method.

### Samples

```js
// imports
import { RedirectHandler } from "../../src/middleware/RedirectHandler";
import { RedirectHandlerOptions } from "../../src/middleware/options/RedirectHandlerOptions";
import { ChaosHandler } from "../../src/middleware/ChaosHandler";
import { TelemetryHandler } from "../../src/middleware/TelemetryHandler";
import { ChaosHandlerOptions } from "../../src/middleware/options/ChaosHandlerOptions";
import { ChaosStrategy } from "../../src/middleware/options/ChaosStrategy";
require("isomorphic-fetch");
import { Client } from "../../src/Client";

//Declaring a Manual Map for all the requests
const manualMap: Map<string, Map<string, number>> = new Map([["/me/messages/.*", new Map([["GET", 200], ["PATCH", 200]])], ["/users/me/sendMail", new Map([["GET", 404], ["POST", 307]])]]);

//Declaring a Custom Middleware Chain
const telemetryHandler = new TelemetryHandler();
const ChaosHandler = new ChaosHandler(new ChaosHandlerOptions(ChaosStrategy.MANUAL), manualMap);
const redirectHandler = new RedirectHandler(new RedirectHandlerOptions());
redirectHandler.setNext(telemetryHandler);
telemetryHandler.setNext(ChaosHandler);

const client = Client.initWithMiddleware({
	middleware: redirectHandler,
});

// Using Manual Mode at Global Level
const mail = {
	subject: "Testing Handler Samples",
	toRecipients: [
		{
			emailAddress: {
				address: "",
			},
		},
	],
	body: {
		content: "<h1>Testing Handler Samples Sample</h1><br>https://github.com/microsoftgraph/msgraph-sdk-javascript",
		contentType: "html",
	},
};
client
	.api("/users/me/sendMail")
	.post({
		message: mail,
	})
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});

// Manual Mode in Request Level Case
client
	.api("/me")
	.version("beta")
	.middlewareOptions([new ChaosHandlerOptions(ChaosStrategy.MANUAL, 200)])
	.get()
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});

// Random Mode
client
	.api("/me")
	.version("beta")
	.middlewareOptions([new ChaosHandlerOptions(ChaosStrategy.RANDOM)])
	.get()
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});

// Using Manual Map with regex matching
client
	.api("/me/messages/hjdlfslod-fdssdkjfs-6zdkmghs-sadhsu2")
	.header("content-type", "application/json")
	.update({
		birthday: "1908-12-22T00:00:00Z",
	})
	.then((res) => {
		console.log("Updated my birthday");
	})
	.catch((err) => {
		console.log(err);
	});
```
