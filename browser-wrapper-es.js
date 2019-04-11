/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * Adds exports in index.js to the MicrosoftGraph property in window object
 */
window.MicrosoftGraph = require("./lib/es/browser/index.js");
