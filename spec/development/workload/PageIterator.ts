/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";
import { Event } from "microsoft-graph";

import { PageIterator, PageIteratorCallback, GraphRequestOptions, PageCollection } from "../../../src/tasks/PageIterator";
import { getClient } from "../test-helper";
import { ChaosHandler } from "../../../src/middleware/ChaosHandler";
import { ChaosHandlerOptions } from "../../../src/middleware/options/ChaosHandlerOptions";
import { ChaosStrategy } from "../../../src/middleware/options/ChaosStrategy";
import { Client, ClientOptions } from "../../../src";

const client = getClient();
describe("PageIterator", function() {
	const pstHeader = { Prefer: 'outlook.timezone= "pacific standard time"' };
	const utc = "UTC";
	const pst = "Pacific Standard Time";
	const testURL = "/me/events";

	before(async function() {
		this.timeout(20000);

		const response = await client.api(testURL).get();
		const numberOfEvents = 4;
		const existingEventsCount = response.value.length;

		if (existingEventsCount >= numberOfEvents) {
			return;
		}
		const eventSubject = '"subject": "Test event ';
		const eventTimeZone = '"timeZone": "UTC"';
		const eventStartDateTime = '"start": { "dateTime":"' + new Date().toISOString() + '",' + eventTimeZone + "}";
		const eventEndDateTime = '"end": { "dateTime":"' + new Date().toISOString() + '",' + eventTimeZone + "}";

		for (let i = 1; i <= numberOfEvents - existingEventsCount; i++) {
			const eventBody = "{" + eventSubject + "" + 1 + '",' + eventStartDateTime + "," + eventEndDateTime + "}";
			const response = await client.api(testURL).post(eventBody);
			if (response.error) {
				throw response.error;
			}
		}
	});

	it("same headers passed with pageIterator", async () => {
		const response = await client
			.api(`${testURL}?$top=2`)
			.headers(pstHeader)
			.select("id,start,end")
			.get();

		const callback: PageIteratorCallback = (eventResponse) => {
			const event = eventResponse as Event;
			assert.equal(event.start.timeZone, pst);
			return true;
		};
		var requestOptions: GraphRequestOptions = { options: { headers: pstHeader } };
		if (response["@odata.nextLink"]) {
			const pageIterator = new PageIterator(client, response, callback, requestOptions);
			await pageIterator.iterate();
			assert.isTrue(pageIterator.isComplete());
		}
	}).timeout(30 * 1000);

	it("different headers passed with pageIterator", async () => {
		const response = await client
			.api(`${testURL}?$top=2`)
			.headers({ Prefer: `outlook.timezone= "${utc}"` })
			.select("id,start,end")
			.get();

		let counter = 0;
		const callback: PageIteratorCallback = (eventResponse) => {
			const event = eventResponse as Event;
			if (counter < 2) {
				assert.equal(event.start.timeZone, utc);
				counter++;
			} else {
				assert.equal(event.start.timeZone, pst);
			}
			return true;
		};

		var requestOptions = { headers: pstHeader };
		if (response["@odata.nextLink"]) {
			const pageIterator = new PageIterator(client, response, callback, requestOptions);
			await pageIterator.iterate();
			assert.isTrue(pageIterator.isComplete());
		}
	}).timeout(30 * 1000);

	it("setting middleware with pageIterator", async () => {
		const middleware = new ChaosHandler();
		const getPageCollection = () => {
			return {
				value: [],
				"@odata.nextLink": "nextURL",
				additionalContent: "additional content",
			};
		};
		const clientOptions: ClientOptions = {
			middleware,
		};
		const responseBody = { value: [{ event1: "value1" }, { event2: "value2" }] };
		let counter = 1;
		const callback: PageIteratorCallback = (data) => {
			assert.equal(data["event" + counter], "value" + counter);
			counter++;
			return true;
		};

		const middlewareOptions = [new ChaosHandlerOptions(ChaosStrategy.MANUAL, 200, "middleware options for pageIterator", 0, responseBody)];
		const requestOptions = { middlewareOptions };

		const client = Client.initWithMiddleware(clientOptions);
		const pageIterator = new PageIterator(client, getPageCollection(), callback, requestOptions);
		await pageIterator.iterate();
	});
});
