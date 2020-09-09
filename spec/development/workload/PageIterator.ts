import { assert } from "chai";
import { Event } from "microsoft-graph";

import { PageIterator, PageIteratorCallback, GraphRequestOptions } from "../../../src/tasks/PageIterator";
import { getClient } from "../test-helper";

const client = getClient();
describe("PageIterator", function() {
	describe("sameHeadersPassedWithPageIterator", () => {
		const pstHeader = { Prefer: 'outlook.timezone= "pacific standard time"' };
		const utc = "UTC";
		const pst = "Pacific Standard Time";

		it("verify same headers", async () => {
			const response = await client
				.api(`/me/events?$top=2`)
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
		}).timeout(20 * 1000);

		it("differentHeadersPassedWithPageIterator", async () => {
			const response = await client
				.api(`/me/events?$top=4`)
				.headers({ Prefer: `outlook.timezone= "${utc}"` })
				.select("id,start,end")
				.get();

			let counter = 0;
			const callback: PageIteratorCallback = (eventResponse) => {
				const event = eventResponse as Event;
				if (counter < 4) {
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
		});
	});
});
