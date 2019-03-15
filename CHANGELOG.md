# Changelog

## 1.4.0

New Features

-   Added Search query param functionality

Bug Fixes

-   https://github.com/microsoftgraph/msgraph-sdk-javascript/issues/115
-   https://github.com/microsoftgraph/msgraph-sdk-javascript/issues/107

## 1.3.0

New Features

-   Support for Large File upload [[#1](https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/driveitem_createuploadsession), [#2](https://github.com/microsoftgraph/msgraph-sdk-javascript/blob/dev/docs/tasks/LargeFileUploadTask.md)]
-   Batching made easy [[#1](https://developer.microsoft.com/en-us/graph/docs/concepts/json_batching), [#2](https://github.com/microsoftgraph/msgraph-sdk-javascript/blob/dev/docs/content/Batching.md)]

Bug Fixes

-   https://github.com/microsoftgraph/msgraph-sdk-javascript/issues/97
-   https://github.com/microsoftgraph/msgraph-sdk-javascript/issues/110
-   https://github.com/microsoftgraph/msgraph-sdk-javascript/issues/39
-   https://github.com/microsoftgraph/msgraph-sdk-javascript/issues/111

## 1.2.0

Updates

-   Two output js files, one with polyfills for Fetch-API and ES6-Promises lib/graph-js-sdk-web.js and one without lib/graph-js-sdk-core.js [Refer [README.md](https://github.com/microsoftgraph/msgraph-sdk-javascript#browser) for usage]
-   Enum for ResponseType, which lists down the available ResponseType options in autocomplete

Bug Fix

-   Cannot access the property "request-id" of undefined in GraphError handling

## 1.1.0

New Features

-   Support for Multipart POST request

Updates

-   Light weight FetchAPI dependency (in replacement for SuperAgent)

Bug Fixes

-   Updated putStream and getStream to work for all sized files
-   Added obfuscation for output js file (graph-js-sdk-web.js)
-   Updated versions of mocha and chai to 5.2.0 and 4.1.2 to fix security vulnerability in growl (which is a dependency of mocha)
-   Running unit test files under types directory
-   Compiling ts files

## 1.0.0

-   Added tests for new Graph functionality - Delta query, Extensibility, OneNote, and more.

## 0.4.0

-   Add support for ES5. Make sure to use `graph-js-sdk-web.js` for web apps
-   Removed iterator helper method.

## 0.3.1

-   Support for Node.js versions 4 and 5

## 0.3.0

-   Migrated away from typings in client library core and TypeScript sample

## 0.2.2

-   Updated SuperAgent to version `3.3.0`

## 0.2.0

-   **Breaking change for existing apps** - Initialize the client library with `MicrosoftGraph.Client.init({...})`. See the updated usage section below for code samples.
-   Added response handling tests to simulate Graph calls
-   Added type declarations file for core client library, which adds intellisense for chained methods.
