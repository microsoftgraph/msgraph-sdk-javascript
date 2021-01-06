/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { Event } from "@microsoft/microsoft-graph-types";
import { assert } from "chai";
import "isomorphic-fetch";

import { getClient, randomString } from "../test-helper";

const client = getClient();

describe("Delta Query", function() {
	this.timeout(10 * 1000);
	const today = new Date();
	const tomorrow = new Date(today.getTime() + 1 * 24 * 60 * 60 * 1000);
	const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

	let deltaLink: string;

	const subject: string = randomString();

	const mockEvent: Event = {
		originalStartTimeZone: tomorrow.toISOString(),
		originalEndTimeZone: tomorrow.toISOString(),
		reminderMinutesBeforeStart: 99,
		isReminderOn: true,
		subject,
	};

	it("Gets the delta link for the initial calendar view list", async () => {
		try {
			let res = await client
				.api("/me/calendarview/delta")
				.query({
					startdatetime: today.toISOString(),
					enddatetime: nextWeek.toISOString(),
				})
				.get();
			while (res["@odata.nextLink"] !== undefined) {
				res = await client.api(res["@odata.nextLink"]).get();
			}
			assert.isDefined(res["@odata.deltaLink"]);
			deltaLink = res["@odata.deltaLink"];
		} catch (error) {
			throw error;
		}
	});

	it("Creates a calendar event to see changes in the delta response", async () => {
		try {
			const response = await client.api("/me/events").post(mockEvent);
			assert.isDefined(response.id);
			assert.equal(response.subject, subject);
		} catch (error) {
			throw error;
		}
	});

	it("Uses delta token to see changed calendar view", async () => {
		try {
			let found = false;
			if (typeof deltaLink !== "undefined") {
				const res = await client.api(deltaLink).get();
				const events: Event[] = res.value;
				for (const event of events) {
					if (event.subject === mockEvent.subject) {
						found = true;
					}
				}
			}
			assert.isTrue(found);
		} catch (error) {
			throw error;
		}
	});
});
