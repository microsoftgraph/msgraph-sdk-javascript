"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Range = (function () {
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