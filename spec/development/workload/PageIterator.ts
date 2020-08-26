import { PageIterator, PageIteratorCallback } from "../../../src/tasks/PageIterator";
import { Event } from "microsoft-graph";
import { assert } from "chai";
import { getClient } from "../test-helper";

const client = getClient();
describe("PageIterator", function() {
	describe("sameHeadersPassedWithPageIterator", () => {
		it("verify same headers", async () => {
			const response = await client
				.api(`/me/events?$top=2`)
				.headers({ Prefer: 'outlook.timezone= "pacific standard time"' })
				.select("id,start,end")
				.get();

			const callback: PageIteratorCallback = (eventResponse) => {
				const event = eventResponse as Event;
				assert.equal(event.start.timeZone, "Pacific Standard Time");
				return true;
			};
			var requestOptions = { headers: { Prefer: 'outlook.timezone= "pacific standard time"' } };
			if (response["@odata.nextLink"]) {
				const pageIterator = new PageIterator(client, response, callback, requestOptions);
				await pageIterator.iterate();
				assert.isTrue(pageIterator.isComplete());
			}
		});

		it("differentHeadersPassedWithPageIterator", async () => {
			const response = await client
				.api(`/me/events?$top=4`)
				.headers({ Prefer: 'outlook.timezone= "UTC"' })
				.select("id,start,end")
				.get();

			let counter = 0;
			const callback: PageIteratorCallback = (eventResponse) => {
				const event = eventResponse as Event;
				if (counter < 4) {
					assert.equal(event.start.timeZone, "UTC");
					counter++;
				} else {
					assert.equal(event.start.timeZone, "Pacific Standard Time");
				}
				return true;
			};

			var requestOptions = { headers: { Prefer: 'outlook.timezone= "pacific standard time"' } };
			if (response["@odata.nextLink"]) {
				const pageIterator = new PageIterator(client, response, callback, requestOptions);
				await pageIterator.iterate();
				assert.isTrue(pageIterator.isComplete());
			}
		});
	});
});
