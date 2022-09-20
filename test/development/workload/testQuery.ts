import { assert } from "chai";

import { getGraphRestSDKClient } from "../../../src";
import { getClient } from "../test-helper";

const restClient = getGraphRestSDKClient(getClient());

describe("QueryOptions", () => {
	it("should provide only displayName", async () => {
		const response = await restClient.api("/me").get({}, { $select: "displayName" });
		assert.isDefined(response.displayName);
	});

	it("should list values specified by top query", async () => {
		const response = await restClient.api("/groups").get({}, { $top: 3 });
		assert.equal(response.value.length, 3);
	});
});
