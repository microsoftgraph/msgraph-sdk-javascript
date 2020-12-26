/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import * as tslib_1 from "tslib";
import { assert } from "chai";
import { PageIterator } from "../../../src/tasks/PageIterator";
import { getClient } from "../test-helper";
const client = getClient();
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
const truthyCallback = (data) => {
	return true;
};
let halfWayCallbackCounter = 5;
const halfWayCallback = (data) => {
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
		it("Should iterate over a complete collection without nextLink", () =>
			tslib_1.__awaiter(this, void 0, void 0, function*() {
				const pageIterator = new PageIterator(client, getPageCollection(), truthyCallback);
				try {
					yield pageIterator.iterate();
					assert.isTrue(pageIterator.isComplete());
				} catch (error) {
					throw error;
				}
			}));
		it("Should not iterate over an empty collection", () =>
			tslib_1.__awaiter(this, void 0, void 0, function*() {
				const pageIterator = new PageIterator(client, getEmptyPageCollection(), truthyCallback);
				halfWayCallbackCounter = 1;
				try {
					yield pageIterator.iterate();
					assert.equal(halfWayCallbackCounter, 1);
				} catch (error) {
					throw error;
				}
			}));
		it("Should break in the middle way", () =>
			tslib_1.__awaiter(this, void 0, void 0, function*() {
				const pageIterator = new PageIterator(client, getPageCollection(), halfWayCallback);
				halfWayCallbackCounter = 5;
				try {
					yield pageIterator.iterate();
					assert.isFalse(pageIterator.isComplete());
				} catch (error) {
					throw error;
				}
			}));
	});
	/* tslint:disable: no-string-literal */
	describe("iterationHelper", () => {
		it("Should return true for empty collection with next link", () => {
			const pageIterator = new PageIterator(client, getEmptyPageCollectionWithNext(), truthyCallback);
			try {
				const advance = pageIterator["iterationHelper"]();
				assert.isTrue(advance);
			} catch (error) {
				throw error;
			}
		});
	});
	describe("resume", () => {
		it("Should start from the place where it left the iteration", () =>
			tslib_1.__awaiter(this, void 0, void 0, function*() {
				const pageIterator = new PageIterator(client, getPageCollection(), halfWayCallback);
				halfWayCallbackCounter = 5;
				try {
					yield pageIterator.iterate();
					assert.isFalse(pageIterator.isComplete());
					yield pageIterator.resume();
					assert.isTrue(pageIterator.isComplete());
				} catch (error) {
					throw error;
				}
			}));
	});
	describe("isComplete", () => {
		it("Should return false for incomplete iteration", () =>
			tslib_1.__awaiter(this, void 0, void 0, function*() {
				const pageIterator = new PageIterator(client, getPageCollection(), halfWayCallback);
				halfWayCallbackCounter = 5;
				try {
					yield pageIterator.iterate();
					assert.isFalse(pageIterator.isComplete());
				} catch (error) {
					throw error;
				}
			}));
		it("Should return true for complete iteration", () =>
			tslib_1.__awaiter(this, void 0, void 0, function*() {
				const pageIterator = new PageIterator(client, getPageCollection(), truthyCallback);
				try {
					yield pageIterator.iterate();
					assert.isTrue(pageIterator.isComplete());
				} catch (error) {
					throw error;
				}
			}));
	});
	/* tslint:enable: no-string-literal */
});
//# sourceMappingURL=PageIterator.js.map
