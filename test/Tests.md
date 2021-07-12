The /test folder consists of unit tests written using the following testing tools

-   mocha
-   chai
-   karma
-   @istanbuljs/nyc-config-typescript

Scripts used

-   `npm run test` - To run unit tests in test/common and test/node.
-   `npm run test:cjs` - To run unit tests in test/common and test/node compiled as CommonJS modules.
-   `npm run test:esm` - To run unit tests in test/common and test/node compiled as ESM modules.
-   `npm run test:development` - To run tests in test/development folder.
-   `npm run test:coverage` - To get the test code coverage after running the tests.
-   `npm run karma` - To run the units tests in test/common and test/browser folders on a headless browser.
