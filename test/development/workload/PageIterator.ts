/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { Event } from "@microsoft/microsoft-graph-types";
import { assert } from "chai";

import { Client, ClientOptions, SimpleAccessTokenProvider, SimpleAuthenticationProvider } from "../../../src";
import { ChaosHandler } from "../../../src/middleware/ChaosHandler";
import { ChaosHandlerOptions } from "../../../src/middleware/options/ChaosHandlerOptions";
import { ChaosStrategy } from "../../../src/middleware/options/ChaosStrategy";
import { GraphRequestOptions, PageIterator, PageIteratorCallback } from "../../../src/tasks/PageIterator";
import { getClient } from "../test-helper";
const client = getClient();
describe("PageIterator", () => {
	const pstHeader = { Prefer: 'outlook.timezone= "pacific standard time"' };
	const utc = "UTC";
	const pst = "Pacific Standard Time";
	const testURL = "/me/events";

	before(async function () {
		this.timeout(20000);

		const response = await client.api(testURL + "?count=true").get();
		const numberOfEvents = 4;
		const existingEventsCount = response.value["@odata.count"];

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
		const response = await client.api(`${testURL}?$top=2`).headers(pstHeader).select("id,start,end").get();

		const callback: PageIteratorCallback = (eventResponse) => {
			const event = eventResponse as Event;
			assert.equal(event.start.timeZone, pst);
			return true;
		};
		const requestOptions: GraphRequestOptions = { options: { headers: pstHeader } };
		if (response["@odata.nextLink"]) {
			const pageIterator = new PageIterator(client, response, callback, requestOptions);
			await pageIterator.iterate();
			assert.isTrue(pageIterator.isComplete());
		}
	}).timeout(0);

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

		const requestOptions = { headers: pstHeader };
		if (response["@odata.nextLink"]) {
			const pageIterator = new PageIterator(client, response, callback, requestOptions);
			await pageIterator.iterate();
			assert.isTrue(pageIterator.isComplete());
		}
	}).timeout(0);

	// TODO - Temporariliy commenting this test.
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
			authProvider: new SimpleAuthenticationProvider(async () => {
				return "Dummy_Token";
			}),
			middleware,
		};
		const responseBody = { value: [{ event1: "value1" }, { event2: "value2" }] };
		let counter = 1;
		const callback: PageIteratorCallback = (data) => {
			assert.equal(data["event" + counter], "value" + counter);
			counter++;
			return true;
		};

		const middlewareOptions = new ChaosHandlerOptions(ChaosStrategy.MANUAL, "middleware options for pageIterator", 200, 0, JSON.stringify(responseBody), new Headers({ "Content-Type": "application/json", "content-length": "100" }));
		const key = middlewareOptions.getKey();
		const requestOptions: GraphRequestOptions = { middlewareOptions: { [key]: middlewareOptions } };

		const client = Client.init(clientOptions);
		const pageIterator = new PageIterator(client, getPageCollection(), callback, requestOptions);
		await pageIterator.iterate();
	});
});
