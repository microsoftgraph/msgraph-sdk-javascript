"use strict";
/**
 * @module Range
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
* Class representing Range
*/
var Range = /** @class */ (function () {
    /**
     * Creates a range for given min and max values
     * @param {number} [minVal = -1] - The minimum value.
     * @param {number} [maxVal = -1] - The maximum value.
     */
    function Range(minVal, maxVal) {
        if (minVal === void 0) { minVal = -1; }
        if (maxVal === void 0) { maxVal = -1; }
        var self = this;
        self.minValue = minVal;
        self.maxValue = maxVal;
    }
    return Range;
}());
exports.Range = Range;
//# sourceMappingURL=Range.js.map