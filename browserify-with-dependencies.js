/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * Initializes browserify, adds wrapper files and outputs the browserified file
 */
const Browserify = require("browserify");
const browserify = Browserify();
browserify.add("./browser-wrapper.js");
browserify.add("./browser-wrapper-dependency.js");
browserify.bundle().pipe(process.stdout);