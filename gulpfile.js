const { series } = require("gulp");

const licenseStr = `/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
`;

const moduleHeader = `/**
 * @module Version
 */
`;

const versionFile = `${licenseStr}
// THIS FILE IS AUTO GENERATED
// ANY CHANGES WILL BE LOST DURING BUILD

${moduleHeader}
export const PACKAGE_VERSION = "[VERSION]";
`;

async function setVersion() {
	var pkg = require("./package.json");
	var fs = require("fs");
	fs.writeFileSync("src/Version.ts", versionFile.replace("[VERSION]", pkg.version));
}

exports.setVersion = series(setVersion);
