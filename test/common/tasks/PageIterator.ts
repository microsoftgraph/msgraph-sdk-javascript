/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { AllowedHostsValidator } from "@microsoft/kiota-abstractions";
import { assert } from "chai";

import { BaseBearerTokenAuthenticationProvider, ChaosHandler, ChaosHandlerOptions, ChaosStrategy, Client, ClientOptions } from "../../../src/index";
import { PageIterator, PageIteratorCallback } from "../../../src/tasks/PageIterator";
import { getClient } from "../../test-helper";

const client: Client = getClient();

const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getPageCollection = () => {
	return {
		value: [...value],
		additionalContent: "additional content",
	};
};

const getPageCollectionWithNext = () => {
	return {
		value: [...value],
		"@odata.nextLink": "nextURL",
		additionalContent: "additional content",
	};
};

const getEmptyPageCollection = () => {
	return {
		value: [],
	};
};

const getEmptyPageCollectionWithNext = () => {
	return {
		value: [],
		"@odata.nextLink": "nextURL",
	};
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const truthyCallback: PageIteratorCallback = (_data) => {
	return true;
};

let halfWayCallbackCounter = 5;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const halfWayCallback: PageIteratorCallback = (_data) => {
	halfWayCallbackCounter--;
	if (halfWayCallbackCounter === 0) {
		return false;
	} else {
		return true;
	}
};

describe("PageIterator.ts", () => {
	describe("Constructor", () => {
		it("Should create instance without nextLink", () => {
			const pageIterator = new PageIterator(client, getPageCollection(), truthyCallback);
			assert(pageIterator instanceof PageIterator);
		});

		it("Should create instance with nextLink", () => {
			const pageIterator = new PageIterator(client, getPageCollectionWithNext(), truthyCallback);
			assert(pageIterator instanceof PageIterator);
		});
	});

	describe("iterate", () => {
		it("Should iterate over a complete collection without nextLink", async () => {
			const pageIterator = new PageIterator(client, getPageCollection(), truthyCallback);
			await pageIterator.iterate();
			assert.isTrue(pageIterator.isComplete());
		});

		it("Should not mutate the collection", async () => {
			const collection = getPageCollection();
			const pageIterator = new PageIterator(client, collection, truthyCallback);
			await pageIterator.iterate();
			assert.deepEqual(collection, getPageCollection());
		});

		it("Should not iterate over an empty collection", async () => {
			const pageIterator = new PageIterator(client, getEmptyPageCollection(), truthyCallback);
			halfWayCallbackCounter = 1;
			await pageIterator.iterate();
			assert.equal(halfWayCallbackCounter, 1);
		});

		it("Should break in the middle way", async () => {
			const pageIterator = new PageIterator(client, getPageCollection(), halfWayCallback);
			halfWayCallbackCounter = 5;
			await pageIterator.iterate();
			assert.isFalse(pageIterator.isComplete());
		});
	});

	describe("iterationHelper", () => {
		it("Should return true for empty collection with next link", () => {
			const pageIterator = new PageIterator(client, getEmptyPageCollectionWithNext(), truthyCallback);
			const advance = pageIterator["iterationHelper"]();
			assert.isTrue(advance);
		});
	});

	describe("resume", () => {
		it("Should start from the place where it left the iteration", async () => {
			const pageIterator = new PageIterator(client, getPageCollection(), halfWayCallback);
			halfWayCallbackCounter = 5;
			await pageIterator.iterate();
			assert.isFalse(pageIterator.isComplete());
			await pageIterator.resume();
			assert.isTrue(pageIterator.isComplete());
		});
	});

	describe("isComplete", () => {
		it("Should return false for incomplete iteration", async () => {
			const pageIterator = new PageIterator(client, getPageCollection(), halfWayCallback);
			halfWayCallbackCounter = 5;
			await pageIterator.iterate();
			assert.isFalse(pageIterator.isComplete());
		});

		it("Should return true for complete iteration", async () => {
			const pageIterator = new PageIterator(client, getPageCollection(), truthyCallback);
			await pageIterator.iterate();
			assert.isTrue(pageIterator.isComplete());
		});
	});
	describe("Test iteration using ChaosHandler", () => {
		it("testing with 5000 results in initial and next page", async () => {
			const middleware = new ChaosHandler();

			const getPageCollection = () => {
				const initialPageResultValues: any[] = [];
				for (let i = 0; i < 5000; i++) {
					initialPageResultValues[i] = { event: "value" + i };
				}
				return {
					value: initialPageResultValues,
					"@odata.nextLink": "nextURL",
					additionalContent: "additional content",
				};
			};
			const clientOptions: ClientOptions = {
				middleware,
				authProvider: new BaseBearerTokenAuthenticationProvider({
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					getAuthorizationToken: async (_url?: string, _additionalAuthenticationContext?: Record<string, unknown>) => {
						return "";
					},
					getAllowedHostsValidator: () => new AllowedHostsValidator(),
				}),
			};

			const nextPageResultValues: any[] = [];

			for (let i = 0; i < 5000; i++) {
				nextPageResultValues[i] = { event: "valueNext" + i };
			}
			const responseBody = { value: nextPageResultValues };
			let countNextPageResult = 0;
			const callback: PageIteratorCallback = (data) => {

				if (data["event"] === "valueNext" + countNextPageResult) {
					countNextPageResult++;
				}

				return true;
			};
			const chaosOptions = new ChaosHandlerOptions(ChaosStrategy.MANUAL, "middleware options for pageIterator", 200, 0, JSON.stringify(responseBody), new Headers({ "Content-Type": "application/json", "content-length": "100" }));
			const middlewareOptions = {
				[chaosOptions.getKey()]: chaosOptions,
			};
			const requestOptions = { middlewareOptions };

			const client = Client.init(clientOptions);
			const pageIterator = new PageIterator(client, getPageCollection(), callback, requestOptions);
			await pageIterator.iterate();

			assert.equal(countNextPageResult, 5000);
		});

		it("Evaluate next page result being fetched", async () => {
			const middleware = new ChaosHandler();
			const getPageCollection = () => {
				return {
					value: [{ event1: "value1" }, { event2: "value2" }],
					"@odata.nextLink": "nextURL",
					additionalContent: "additional content",
				};
			};
			const clientOptions: ClientOptions = {
				middleware,
				authProvider: new BaseBearerTokenAuthenticationProvider({
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					getAuthorizationToken: async (_url?: string, _additionalAuthenticationContext?: Record<string, unknown>) => {
						return "";
					},
					getAllowedHostsValidator: () => new AllowedHostsValidator(),
				}),
			};
			const responseBody = { value: [{ event3: "value3" }, { event4: "value4" }] };
			let counter = 1;
			let countNextPageResult = 0;
			const callback: PageIteratorCallback = (data) => {
				assert.equal(data["event" + counter], "value" + counter);

				if (data["event" + counter] === "value3") {
					countNextPageResult++;
				}

				if (data["event" + counter] === "value4") {
					countNextPageResult++;
				}
				counter++;
				return true;
			};
			const chaosOptions = new ChaosHandlerOptions(ChaosStrategy.MANUAL, "middleware options for pageIterator", 200, 0, JSON.stringify(responseBody), new Headers({ "Content-Type": "application/json", "content-length": "100" }));
			const middlewareOptions = {
				[chaosOptions.getKey()]: chaosOptions,
			};
			const requestOptions = { middlewareOptions };

			const client = Client.init(clientOptions);
			const pageIterator = new PageIterator(client, getPageCollection(), callback, requestOptions);
			await pageIterator.iterate();

			assert.equal(countNextPageResult, 2);
		});
	});
});
