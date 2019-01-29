/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";
import { Range } from "../../src/Range";

describe("Range.ts", function () {
    describe("Constructor", function () {

        let defaultValue = -1;

        it("Should create a Range instance with given min and max values", () => {
            let min = 1,
                max = 10,
                range = new Range(min, max);
            assert.equal(range.minValue, min);
            assert.equal(range.maxValue, max);
        });

        it("Should create a range instance with default values", () => {
            let range = new Range();
            assert.equal(range.minValue, defaultValue);
            assert.equal(range.maxValue, defaultValue);
        });

        it("Should create a range instance with default max value", () => {
            let min = 1,
                range = new Range(min);
            assert.equal(range.minValue, min);
            assert.equal(range.maxValue, defaultValue);
        });
    });
});