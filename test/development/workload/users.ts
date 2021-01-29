/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import "isomorphic-fetch";

import { User } from "@microsoft/microsoft-graph-types";
import { assert } from "chai";

import { getClient, randomString } from "../test-helper";

const client = getClient();

describe("Users", function() {
	this.timeout(10 * 1000);

	it("Fetch the authenticated user and access entity properties", async () => {
		const res = await client.api("/me").get();
		const user = res as User;
		assert.isDefined(user.displayName);
		assert.isDefined(user.mail);
		assert.isDefined(user.id);

		assert.isDefined(user.surname);
		assert.isDefined(user.userPrincipalName);

		assert.isArray(user.businessPhones);
		assert.isUndefined(user["random fake property that should be null"]);
	});

	it("Fetch the authenticated user and access entity properties", async () => {
		const res = await client.api("/me").get();
		const user = res as User;
		assert.isDefined(user.displayName);
		assert.isDefined(user.mail);
		assert.isDefined(user.id);

		assert.isDefined(user.surname);
		assert.isDefined(user.userPrincipalName);

		assert.isArray(user.businessPhones);
		assert.isUndefined(user["random fake property that should be null"]);
	});

	it("Modify and verify officeLocation property", async () => {
		const officeLocation = randomString();
		await client.api("/me").patch({ officeLocation });
		const res = await client.api("/me").get();
		const user = res as User;
		assert.equal(user.officeLocation, officeLocation);
	});

	it("Modify and verify givenName property", async () => {
		const givenName = randomString();
		await client.api("/me").patch({ givenName });
		const res = await client.api("/me").get();
		const user = res as User;
		assert.equal(user.givenName, givenName);
	});

	it("Fetch a list of users and access properties on a collection item", async () => {
		const collection = await client.api("/users").get();
		const users: User[] = collection.value;
		assert.isDefined(users[0].displayName);
		assert.isDefined(users[0].id);
		assert.isDefined(users[0].mail);
	});

	it("Filters on users list", async () => {
		await client
			.api("/users")
			.filter("Department eq 'Finance'")
			.get();
	});
});
