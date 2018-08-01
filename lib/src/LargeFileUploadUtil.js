"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DEFAULT_FILE_SIZE = 5 * 1024 * 1024;
var roundTo320KB = function (value) {
    if (value > (320 * 1024)) {
        value = Math.floor(value / (320 * 1024)) * 320 * 1024;
    }
    return value;
};
exports.getValidRangeSize = function (rangeSize) {
    if (rangeSize === void 0) { rangeSize = DEFAULT_FILE_SIZE; }
    var sixtyMB = 60 * 1024 * 1024;
    if (rangeSize > sixtyMB) {
        rangeSize = sixtyMB;
    }
    return roundTo320KB(rangeSize);
};
//# sourceMappingURL=LargeFileUploadUtil.js.map