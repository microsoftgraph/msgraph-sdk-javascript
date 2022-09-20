/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { MicrosoftGraphPerson as Person } from "@microsoft/microsoft-graph-types";
import { assert } from "chai";

import { getClient } from "../test-helper";

const client = getClient();

describe("Social and Insights", function () {
	this.timeout(10 * 1000);
	it("Fetch a list of people", async () => {
		const res = await client.api("/me/people").get();
		const person = res.value[0] as Person;
		assert.isDefined(person.displayName);
		assert.isDefined(person.surname);
		assert.isDefined(person.id);
		assert.isUndefined(person["random fake property that should be null"]);
	});

	it("Searches the people list", async () => {
		await client.api("/me/people").query("$search=j").get();
	});

	it("Searches the people list with a topic", async () => {
		await client.api("/me/people").query(`$search="topic: planning"`).get();
	});

	it("Finds items trending around me", async () => {
		await client.api("/me/insights/trending").version("beta").get();
	});
});
