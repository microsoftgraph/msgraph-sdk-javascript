/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";
import { getClient } from "../test-helper";
import { Person } from '@microsoft/microsoft-graph-types';

const client = getClient();

describe('Social and Insights', function () {
	this.timeout(10 * 1000);
	it('Fetch a list of people', async () => {
		try {
			let res = await client.api("/me/people").get();
			const person = res.value[0] as Person;
			assert.isDefined(person.displayName);
			assert.isDefined(person.surname);
			assert.isDefined(person.id);

			assert.isUndefined(person['invalidPropertyName']);
		} catch (error) {
			throw error;
		}
	});

	it('Searches the people list', async () => {
		try {
			await client.api("/me/people").query("$search=j").get();
		} catch (error) {
			throw error;
		}
	});

	it('Searches the people list with a topic', async () => {
		try {
			await client.api("/me/people").query(`$search="topic: planning"`).get();
		} catch (error) {
			throw error;
		}
	});

	it('Finds items trending around me', async () => {
		try {
			await client.api("/me/insights/trending").version("beta").get();
		} catch (error) {
			throw error;
		}
	});
});
