/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";
import { Client } from "../../src/index";
import { PageIterator, PageIteratorCallback } from "../../src/tasks/PageIterator";
import { getClient } from "../test-helper";

let client: Client = getClient();

let value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getPageCollection = () => {
    return {
        value: Object.assign([], value),
        additionalContent: "additional content"
    }
};

const getPageCollectionWithNext = () => {
    return {
        value: Object.assign([], value),
        "@odata.nextLink": "nextURL",
        additionalContent: "additional content"
    }
};

const getEmptyPageCollection = () => {
    return {
        value: []
    }
};

const getEmptyPageCollectionWithNext = () => {
    return {
        value: [],
        "@odata.nextLink": "nextURL"
    }
};

let truthyCallback: PageIteratorCallback = (data) => {
    return true;
};

let truthyCallbackCounter = 5;
let truthyCallbackWithCounter: PageIteratorCallback = (data) => {
    truthyCallbackCounter--;
    return true;
};

let halfWayCallbackCounter = 5;
let halfWayCallback: PageIteratorCallback = (data) => {
    halfWayCallbackCounter--;
    if (halfWayCallbackCounter === 0) {
        return false;
    } else {
        return true;
    }
};

describe("PageIterator.ts", function () {
    describe("Constructor", function () {
        it("Should create instance without nextLink", () => {
            let pageIterator = new PageIterator(client, getPageCollection(), truthyCallback);
            assert.equal(pageIterator.constructor.name, "PageIterator");
        });

        it("Should create instance with nextLink", () => {
            let pageIterator = new PageIterator(client, getPageCollectionWithNext(), truthyCallback);
            assert.equal(pageIterator.constructor.name, "PageIterator");
        });
    });

    describe("iterate", function () {
        it("Should iterate over a complete collection without nextLink", async () => {
            truthyCallbackCounter = 10;
            let pageIterator = new PageIterator(client, getPageCollection(), truthyCallbackWithCounter);
            try {
                await pageIterator.iterate();
                assert.equal(truthyCallbackCounter, 0);
            } catch (error) {
                throw error;
            }
        });

        it("Should not iterate over an empty collection", async () => {
            let pageIterator = new PageIterator(client, getEmptyPageCollection(), truthyCallback);
            halfWayCallbackCounter = 1;
            try {
                await pageIterator.iterate();
                assert.equal(halfWayCallbackCounter, 1);
            } catch (error) {
                throw error;
            }
        });

        it("Should break in the middle way", async () => {
            let pageIterator = new PageIterator(client, getPageCollection(), halfWayCallback);
            halfWayCallbackCounter = 5;
            try {
                await pageIterator.iterate();
                assert.equal(halfWayCallbackCounter, 0);
            } catch (error) {
                throw error;
            }
        });
    });

    describe("iterationHelper", () => {
        it("Should return true for empty collection with next link", () => {
            const pageIterator = new PageIterator(client, getEmptyPageCollectionWithNext(), truthyCallback);
            try {
                let advance = pageIterator["iterationHelper"]();
                assert.isTrue(advance);
            } catch(error) {
                throw error;
            }
        });
    });

    describe("resume", function () {
        it("Should start from the place where it left the iteration", async () => {
            let pageIterator = new PageIterator(client, getPageCollection(), halfWayCallback);
            halfWayCallbackCounter = 5;
            try {
                await pageIterator.iterate();
                assert.equal(halfWayCallbackCounter, 0);
                halfWayCallbackCounter = 5;
                await pageIterator.resume();
                assert.equal(halfWayCallbackCounter, 0)
            } catch (error) {
                throw error;
            }
        });
    });
});