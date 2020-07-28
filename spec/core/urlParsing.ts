/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";

import { getClient } from "../test-helper";

const client = getClient();

const testCases = {
	"/me": "https://graph.microsoft.com/v1.0/me",
	"/me/": "https://graph.microsoft.com/v1.0/me/",
	me: "https://graph.microsoft.com/v1.0/me",
	"me/events": "https://graph.microsoft.com/v1.0/me/events",
	"/me/events": "https://graph.microsoft.com/v1.0/me/events",
	"https://graph.microsoft.com/v1.0/me/events": "https://graph.microsoft.com/v1.0/me/events",
	"https://graph.microsoft.com/beta/me/events?$filter=startswith(subject, 'update')": "https://graph.microsoft.com/beta/me/events?$filter=startswith(subject, 'update')",
	"me/events?$filter=startswith(subject, 'update')": "https://graph.microsoft.com/v1.0/me/events?$filter=startswith(subject, 'update')",
	"/me?a=b": "https://graph.microsoft.com/v1.0/me?a=b",
	"/me?$filter=b&c=d": "https://graph.microsoft.com/v1.0/me?$filter=b&c=d",
	"me?$filter=b&c=d": "https://graph.microsoft.com/v1.0/me?$filter=b&c=d",

	// oData params should work with and without $
	"me?$select=displayName": "https://graph.microsoft.com/v1.0/me?$select=displayName",
	"me?select=displayName": "https://graph.microsoft.com/v1.0/me?select=displayName",
	"https://graph.microsoft.com/beta/me?select=displayName": "https://graph.microsoft.com/beta/me?select=displayName",

	// test for nested query parameters
	"https://graph.microsoft.com/beta/identityGovernance/entitlementManagement/accessPackages/?$expand=accessPackageAssignmentPolicies,accessPackageResourceRoleScopes($expand=accessPackageResourceRole,accessPackageResourceScope)": "https://graph.microsoft.com/beta/identityGovernance/entitlementManagement/accessPackages/?$expand=accessPackageAssignmentPolicies,accessPackageResourceRoleScopes($expand=accessPackageResourceRole,accessPackageResourceScope)",
	"me?$select=displayName&$select=id": "https://graph.microsoft.com/v1.0/me?$select=displayName,id",
	"/me?$filter=b&$filter=a": "https://graph.microsoft.com/v1.0/me?$filter=a",
	"https://graph.microsoft.com/v1.0/me?$top=4&$expand=4&$iscount=true&$top=2": "https://graph.microsoft.com/v1.0/me?$top=2&$expand=4&$iscount=true",
};

describe("urlParsing.ts", () => {
	/* tslint:disable: no-string-literal */
	describe("parsePath", () => {
		for (const path in testCases) {
			if (testCases.hasOwnProperty(path)) {
				it("should correctly parse " + path, () => {
					const request = client.api(path);
					assert.equal(request["buildFullUrl"](), testCases[path]);
				});
			}
		}
	});
});
/* tslint:enable: no-string-literal */
