/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";

import packageJSON from "../../package.json";
import { PACKAGE_VERSION } from "../../src/Constants";

describe("Constants.js", () => {
	it("Should return true for validating version in package.json", () => {
		assert.equal(packageJSON.version, PACKAGE_VERSION);
	});
});
