# Testing Handler

### How to include

> Uses [Custom Middleware Chain](https://github.com/microsoftgraph/msgraph-sdk-javascript/blob/dev/docs/CustomMiddlewareChain.md), it's not included in default middleware chain

### Modes in Testing Handler

-   Manual mode - Setting the Response code manually. - Global/Client Level - Provide a map declared manually containing response code for the requests. - Request Level - Providing response code per request. This would be overriding the Global level response code (if any).
-   Random mode - We get a random Response code from a set of response code defined for each method.

### Samples

```js
require("isomorphic-fetch");
const MicrosoftGraph = require("../../lib/src/index.js");
const secrets = require("./secrets");
const fs = require("fs");
// Initialising the client
const client = MicrosoftGraph.Client.init({
	defaultVersion: "v1.0",
	debugLogging: true,
	authProvider: (done) => {
		done(null, secrets.accessToken);
	},
});

// Declaring the Map, containing response codes for the urls
const manualMap = new Map([["/me/messages/.*", new Map([["GET", 429], ["PATCH", 429]])], ["/me", new Map([["POST", 502]])]]);

// Declaring the chaosHandler and passing the map (if using map, we have to put default strategy as MANUAL)
const chaosHandler = new MicrosoftGraph.ChaosHandler(new MicrosoftGraph.ChaosHandlerOptions(MicrosoftGraph.ChaosStrategy.MANUAL), manualMap);

// Modifying the default middleware chain to add chaos handler, just before httpMessageHandler, otherwise there can be a problem
let arr = client.getMiddlewareChain();
arr.splice(arr.length - 1, 0, chaosHandler);
client.setMiddlewareChain(arr);

// This request would use the Map (Manual mode)
const mail = {
    subject: "Testing Handler Samples",
    toRecipients: [
        {
            emailAddress: {
                address: "admin@M365x003297.OnMicrosoft.com",
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
        console.log(res, "This is for sendMail");
    })
    .catch((err) => {
        console.log(err, "This is for sendMail in error case");
    });
   
   
// OverRiding to Random mode, providing the chaos percentage as 60(percentage times the error would be generated from handler)
client
	.api("/me")
    .middlewareOptions([new MicrosoftGraph.ChaosHandlerOptions(MicrosoftGraph.ChaosStrategy.RANDOM, undefined, "I generated the error", 60)])
	.get()
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
    });
    
    
// This request is passed to the graph and gets a response from the graph, as no entry for /me GET request in the Map    
client
    .api("/me")
    .get()
    .then((res) => {
        console.log("Found", res, "users");
    })
    .catch((err) => {
        console.log(err,"!!!!!!!!!");
    });
 
 
// Using Manual Map with regex matching
client
    .api("/me/messages/hjdlfslod-fdssdkjfs-6zdkmghs-sadhsu2")
    .header("content-type", "application/json")
    .update({
        birthday: "1908-12-22T00:00:00Z",
    })
    .then((res) => {
        console.log("This is regex matching... Updated Bday");
    })
    .catch((err) => {
        console.log(err, "matched");
    });
   
```
