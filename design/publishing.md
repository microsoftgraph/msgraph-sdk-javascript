##### This design document focuses on the following -

1. Separate entry points for node and browser.
2. Specifying the browser field in package.json.
3. Changes in the bundling process.

##### Terms -

-   bundler - Module bundlers are tools frontend developers used to bundle JavaScript modules into a single JavaScript files that can be executed in the browser.

-   rollup - rollup.js is the module bundler that the JS SDK uses.

-   package.json fields -

    -   main - The main field is a module ID that is the primary entry point to your program. Points to the CJS modules.

    -   module - The module field is not an official npm feature but a common convention among bundlers to designate how to import an ESM version of a library. Points to the ES modules.

    -   browser - If the module is meant to be used client-side, the browser field should be used instead of the main field.

##### Current set up -

1.                       TypeScript Source Code
                                / \
                      Transpiles into JavaScript
                             'lib' folder
                               /   \
                     CJS module     ES modules
2.  main - `lib/src/index.js` module - `lib/es/src/index.js`

3.  Rollup bundling output

-   `graph-js-sdk.js` - Bundled and minified file in IIFE format. This file can be directly used in the browser with a `<script>` tag.
-   `graph-es-sdk.js` - Bundled file in ES format.

4. Entry point for rollup - `lib/es/src/browser/index.js`.

##### Difference between src/index.js and src/browser/index.js

1. `src/browser/index.js` does not export `RedirectHandler` and `RedirectHandlerOptions`. Redirection is handled by the browser.
2. `src/browser/index.js` exports `src/browser/ImplicitMsalProvider`.
3. `src/browser/ImplicitMsalProvider` does not import or require 'msal' dependency. While, `src/ImplicitMsalProvider` imports or requires 'msal' in the implementation.
4. My assumtion is that `src/browser/ImplicitMsalProvider` is implemented specifically for the rollup process and to skip the rollup external dependency while using `graph-js-sdk.js` in the browser.

Note - Browser applications using the ES modules from the npm package of the JS SDK refer to the `module` entry point - `lib/es/src/index.js`(not the browser entry point). Example - Graph Explorer.

##### Upcoming changes -

1. Use the browser field for the following -

-   The Graph JS SDK currently has two entry files, `src/index` and `src/browser/index`. Use the browser field to indicate the browser entry point. Example -

```json
"browser":
{ "lib/es/src/index.js": "lib/es/src/browser/index.js" }
```

Currently, the main and "module field in the package.json. This will remain the same.

-   Better way to handle environment specific implementation. For example, using the `browser` field as follows - "browser":

```json
{
	"stream": "stream-browserify",
	"Feature-Node.js": "Feature-Browser.js"
}
```

2. Remove export of `src/browser/ImplicitMsalProvider` from `src/browser/index`.

-   Till `ImplicitMsalProvider` is maintained in the repo, maintain a separate entry point say `rollup-index` for the rollup process which exports `src/browser/index` and `src/browser/ImplicitMsalProvider`.
-   Continue rolling up the `src/browser/ImplicitMsalProvider` as it is currently done and not introduce breaking changes here as it is going to be deprecated.
-   Remove the separate entry point once `ImplicitMsalProvider` is removed and use the browser entry point for roll up thereafter. The goal is to maintain a consistent entry point or usage for browser applications using the JS SDK and the rollup/bundling process.

3. Bundle the authproviders separately as they are optional.

4. Stop bundling in ES format, that is remove `graph-es-sdk.js` as the ES modules are being shipped.
