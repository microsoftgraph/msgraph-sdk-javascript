# Microsoft Graph JavaScript Client Library
[![npm version badge](https://img.shields.io/npm/v/@microsoft/microsoft-graph-client.svg?maxAge=86400)](https://www.npmjs.com/package/@microsoft/microsoft-graph-client)
[![Travis](https://travis-ci.org/microsoftgraph/msgraph-sdk-javascript.svg?branch=master&style=flat-square)](https://travis-ci.org/microsoftgraph/msgraph-sdk-javascript)

The Microsoft Graph JavaScript client library is a lightweight wrapper around the Microsoft Graph API that supports both Node and the browser.  See the [samples](samples) folder for code examples.  You can also use our [TypeScript graph types](https://github.com/microsoftgraph/msgraph-typescript-typings) with this library. We love your feedback!  You can file an issue in this repository or write on our [UserVoice page](https://officespdev.uservoice.com/). 

## Installation
### Node
You can find installation instructions at the [Node.js website](https://nodejs.org/).

```npm install @microsoft/microsoft-graph-client```

Include the library in your JavaScript file with `const MicrosoftGraph = require("@microsoft/microsoft-graph-client");`

### Browser

Include [lib/graph-js-sdk-web.js](https://github.com/microsoftgraph/msgraph-sdk-javascript/raw/master/lib/graph-js-sdk-web.js) in your page.
```html
<script type="text/javascript" src="graph-js-sdk-web.js"></script>
```
## Changelog

#### 1.0.0
* Added tests for new Graph functionality - Delta query, Extensibility, OneNote, and more.

#### 0.4.0
* Add support for ES5. Make sure to use `graph-js-sdk-web.js` for web apps
* Removed iterator helper method.

#### 0.3.1
* Support for Node.js versions 4 and 5

#### 0.3.0
* Migrated away from typings in client library core and TypeScript sample

#### 0.2.2
* Updated SuperAgent to version ``` 3.3.0 ```

#### 0.2.0
* **Breaking change for existing apps** - Initialize the client library with `MicrosoftGraph.Client.init({...})`. See the updated usage section below for code samples.
* Added response handling tests to simulate Graph calls
* Added type declarations file for core client library, which adds intellisense for chained methods.


## Usage
### Initialize client with access token provider
This client library only handles authentication in the most basic way possible. The application is responsible for refreshing tokens and returning an immediately valid access token in the authentication provider.
```javascript

var client = MicrosoftGraph.Client.init({
    authProvider: (done) => {
        done(null, "PassInAccessTokenHere"); //first parameter takes an error if you can't get an access token
    }
});

```

### Calling pattern

All calls to Microsoft Graph are chained together starting with `client.api(path)`.  Path supports the following formats:  

* me
* /me
* https://graph.microsoft.com/v1.0/me
* https://graph.microsoft.com/beta/me
* me/events?$filter=startswith(subject, 'ship')

For more examples of accepted paths, see the [test cases](tests/urlParsing.js).

```javascript
// Example calling /me with no parameters
client
    .api('/me')
    .get((err, res) => {
        console.log(res); // prints info about authenticated user
    });
```

Calls should start with `.api()`, then chain query parameters and end with an action.
```javascript
// get the names of my top 5 contacts on the beta endpoint
client
    .api('me/people')
    .version("beta") //optional, but recommeded to have before query params
    .top(5)
    .select("displayName")
    .get((err, res) => {
        const topContacts = res.value.map((u) => {return u.displayName});    
        console.log("Your top contacts are", topContacts.join(", "));
    });
```

The actions(.get(), .put(), etc.) accept a callback or don't pass in a function to get back a Promise.
```javascript
client
    .api('/me')
    .select("displayName")
    .get()
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });
```

## Actions

### .post() and .patch()
The first parameter of `.post()` and `.patch()` takes an object that will be sent as the content of the request.

````javascript
// construct the email object
const mail = {
    subject: "Microsoft Graph JavaScript Sample",
    toRecipients: [{
        emailAddress: {
            address: "example@example.com"
        }
    }],
    body: {
        content: "<h1>MicrosoftGraph JavaScript Sample</h1>Check out https://github.com/microsoftgraph/msgraph-sdk-javascript",
        contentType: "html"
    }
}

client
    .api('/users/me/sendMail')
    .post({message: mail}, (err, res) => {
        console.log(res)
    })
````

### `.del()` and `.delete()`

````javascript
// delete a OneDrive item
client
    .api(`/me/drive/items/${ONE_DRIVE_FILE_ID_TO_DELETE}`)
    .delete((err, res) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log(res)
    })

````
### `.put()` and `.putStream()`

You can upload files to the graph using `.put()`.  For example, this can be used to update a profile picture from an HTML input form.  See the [browser sample](samples/browser) for complete code.

```javascript
var file = document.querySelector('input[type=file]').files[0];

client
    .api('/me/photo/$value')
    .put(file, (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("We've updated your picture!");
    });
```


Use `.putStream()` to upload files to Microsoft Graph with Node.js streams.
````javascript

// Upload a file to OneDrive
let fs = require('fs'); // requires filesystem module
let stream = fs.createReadStream('./logo.png'); //path to local file
client
    .api('/me/drive/root/children/logo.png/content') // path to the destination in OneDrive
    .put(stream, (err) => {
        console.log(err);
    });
````

### `.getStream()`
Use `.getStream()` to stream a download from Microsoft Graph.
````javascript
const fs = require('fs'); // requires filesystem module
client
    .api('/me/drive/root/children/Book.xlsx/content') // path of  source file in OneDrive
    .getStream((err, downloadStream) => {
        let writeStream = fs.createWriteStream('Book.xlsx'); // path to save file to
        downloadStream.pipe(writeStream).on('error', console.log);
    });
````


## Query Parameters
### $select, $expand and $orderby
These methods can take a string property, an array of strings or you can pass in each value as a separate argument.
````js
.select("birthday")
.select("department")
// same as
.select("birthday", "department")
// same as
.select(["birthday", "department"])
````
```javascript
client
    .api('/me/people')
    .select(["displayName", "department", "title"])
    .get((err, res) => {
        console.log(res)
    })
```

### $top and $skip
These parameters only take a number. Calling them multiple times is not supported.

````js
.top(5)
.skip(10)
````

### $count
Set .count() to true to also return the number of objects in the collection.

````js
.count(true)
````

### $filter
Pass a filter string to `.filter()` for filtering result collections.  Calling filter multiple times will override previous filter strings.
````js
client
    .api("/users")
    .filter("startswith(displayName, 'david')")
    .get((err, res) => {
        console.log(res)
    })
````

## Other API methods

### .version()
Passing in a version through `.version()` has the highest priority. It overrides the Microsoft Graph client default version from `.init()` and the global library default (currently v1.0).

### .query()
You can pass in any URL query parameters as a dictionary or string.
````javascript
.query({"$select":"displayName"})
// same as 
.query("$select=displayName")
// same as
.select("displayName")

````

### .header() and .headers()
You can pass in additional request headers, either individually or in a dictionary.
````javascript
.header("someHeaderName", "someHeaderValue")
// or
.headers({"someHeaderName":"someHeaderValue"})

````

### .responseType()
To set a custom response type, use the `.responseType(string)` method.  To see an example, check the [browser sample](samples/browser/index.html) that downloads an image and displays it in an `<img>` element.

## Additional information
### Options in `MicrosoftGraph.Client.init()`

The following are optional parameters to pass to MicrosoftGraph.Client.init(), except for the authProvider:
* defaultVersion - When .version() isn't called, this version is used. (defaults to v1.0)
* debugLogging - Set to true to see the URL of the request printed.
* authProvider - See the [usage](#usage) section for info.
* baseUrl - If you need to call a different URL instead of graph.microsoft.io, specify it as a string here.

### Full service response
The full response containing the headers, status code, and body can be obtained by passing a third parameter to the callback.
````javascript
client
    .api('/me')
    .select("displayName")
    .get((err, res, rawResponse) => {
        console.log(rawResponse.statusCode);
        console.log(rawResponse.header);
    });
````

### Native date objects can be passed in as parameters
```javascript
var date = new Date();
date.setDate(date.getDate()-365); // ~ 1 year ago

client
    .api('/me')
    .body({"birthday": date})
    .update((err, res) => {
        console.log("Updated my birthday")
    })
```

## Development
These steps are not required to use this library.

```npm install``` installs development dependencies (TypeScript, Mocha, etc.).
> **Note:** If you want to run ```tsc``` from the command line, install TypeScript globally with ```npm install -g typescript``` or reference `./node_modules/.bin/tsc`

```npm run build``` generates lib/ files for node and browser versions.

```npm pack``` bundles the npm module.

```npm test``` runs tests of the core library (URL parsing, mock responses, etc)

```npm run test:types``` to run tests against the Graph API for users, groups, Excel, OneNote, etc.

To build only browser version:
```
node node-browserify.js > lib/graph-js-sdk-web.js
```

## Questions and comments

We'd love to get your feedback about the Microsoft Graph JavaScript client library. You can send your questions and suggestions to us in the [Issues](https://github.com/microsoftgraph/msgraph-sdk-javascript/issues) section of this repository.


## Contributing
Please see the [contributing guidelines](CONTRIBUTING.md).

## Additional resources

* [Microsoft Graph website](https://graph.microsoft.io)
* [Microsoft Graph TypeScript types](https://github.com/microsoftgraph/msgraph-typescript-typings/)
* [Angular.js sample using the JavaScript client library](https://github.com/microsoftgraph/angular-connect-sample)
* [Node.js sample using the JavaScript client library](https://github.com/microsoftgraph/nodejs-connect-sample)
* [Office Dev Center](http://dev.office.com/)

## Copyright
Copyright (c) 2016 Microsoft. All rights reserved.
