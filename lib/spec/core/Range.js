"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Range_1 = require("../../src/Range");
describe("Range.ts", function () {
    describe("Constructor", function () {
        var defaultValue = -1;
        it("Should create a Range instance with given min and max values", function () {
            var min = 1, max = 10, range = new Range_1.Range(min, max);
            chai_1.assert.equal(range.minValue, min);
            chai_1.assert.equal(range.maxValue, max);
        });
        it("Should create a range instance with default values", function () {
            var range = new Range_1.Range();
            chai_1.assert.equal(range.minValue, defaultValue);
            chai_1.assert.equal(range.maxValue, defaultValue);
        });
        it("Should create a range instance with default max value", function () {
            var min = 1, range = new Range_1.Range(min);
            chai_1.assert.equal(range.minValue, min);
            chai_1.assert.equal(range.maxValue, defaultValue);
        });
    });
});
//# sourceMappingURL=Range.js.map