This design document focuses on the following - 
1. Separate entry points for node and browser.
2. Specifying the browser field in package.json
3. Changes in the bundling process

Terms -

bundler - Module bundlers are tools frontend developers used to bundle JavaScript modules into a single JavaScript files that can be executed in the browser.

package.json fields - 
* main - The main field is a module ID that is the primary entry point to your program. Points to the CJS modules.

* module - The module field is not an official npm feature but a common convention among bundlers to designate how to import an ESM version of a library. Points to the ES modules.

* browser - If your module is meant to be used client-side the browser field should be used instead of the main field.

Current set up -

1. 
                        TypeScript Source Code
                                / \
                      Transpiles into JavaScript 
                               /   \
                     CJS module     ES modules
2. main - `lib/src/index.js`
   module - `lib/src/es/index.js`

3. Rollup bundling output
* graph-js-sdk.js - IIFE bundled file. This file can be directly used in the browser with a `<script>` tag.
* graph-es-sdk.js - ES bundled file.
4. Entry point for rollup - `lib/es/browser/index.js`.
5. 

Upcoming changes - 

1. Bundle the authproviders serately as they are optional.
