/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { Group } from "@microsoft/microsoft-graph-types";
import { assert } from "chai";

import { getClient, randomString } from "../test-helper";

const client = getClient();

describe("Groups", function () {
	this.timeout(10 * 1000);
	it("Fetch a list of groups and access properties on a collection item", async () => {
		const res = await client.api("/groups").get();
		const group = res.value[0] as Group;
		assert.isDefined(group.displayName);
		assert.isDefined(group.mail);
		assert.isDefined(group.id);
		assert.isUndefined(group["random fake property that should be null"]);
	});

	it("Create a group and validate properties were set", async () => {
		const group: Group = {
			displayName: randomString(),
			description: randomString(),
			groupTypes: ["Unified"],
			mailEnabled: true,
			mailNickname: randomString(),
			securityEnabled: true,
		};
		const res = await client.api("/groups").post(group);
		const createdGroup = res as Group;
		assert.equal(createdGroup.displayName, group.displayName);
		assert.equal(createdGroup.description, group.description);
		assert.equal(createdGroup.mailEnabled, group.mailEnabled);
		assert.isString(createdGroup.id);
	});
});
