/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * Initializes browserify, adds a wrapper file and outputs the browserified file
 */
const Browserify = require("browserify");
const browserify = Browserify();
browserify.add("./browser-wrapper.js");
browserify.add("./browser-wrapper-dependency.js");
browserify.exclude("isomorphic-fetch");
browserify.exclude("es6-promise");
browserify.bundle().pipe(process.stdout);
