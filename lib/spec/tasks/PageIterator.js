"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var chai_1 = require("chai");
var PageIterator_1 = require("../../src/tasks/PageIterator");
var test_helper_1 = require("../test-helper");
var client = test_helper_1.getClient();
var value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var getPageCollection = function () {
    return {
        value: Object.assign([], value),
        additionalContent: "additional content"
    };
};
var getPageCollectionWithNext = function () {
    return {
        value: Object.assign([], value),
        "@odata.nextLink": "nextURL",
        additionalContent: "additional content"
    };
};
var getEmptyPageCollection = function () {
    return {
        value: []
    };
};
var getEmptyPageCollectionWithNext = function () {
    return {
        value: [],
        "@odata.nextLink": "nextURL"
    };
};
var truthyCallback = function (data) {
    return true;
};
var truthyCallbackCounter = 5;
var truthyCallbackWithCounter = function (data) {
    truthyCallbackCounter--;
    return true;
};
var halfWayCallbackCounter = 5;
var halfWayCallback = function (data) {
    halfWayCallbackCounter--;
    if (halfWayCallbackCounter === 0) {
        return false;
    }
    else {
        return true;
    }
};
describe("PageIterator.ts", function () {
    describe("Constructor", function () {
        it("Should create instance without nextLink", function () {
            var pageIterator = new PageIterator_1.PageIterator(client, getPageCollection(), truthyCallback);
            chai_1.assert.equal(pageIterator.constructor.name, "PageIterator");
        });
        it("Should create instance with nextLink", function () {
            var pageIterator = new PageIterator_1.PageIterator(client, getPageCollectionWithNext(), truthyCallback);
            chai_1.assert.equal(pageIterator.constructor.name, "PageIterator");
        });
    });
    describe("iterate", function () {
        var _this = this;
        it("Should iterate over a complete collection without nextLink", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var pageIterator, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        truthyCallbackCounter = 10;
                        pageIterator = new PageIterator_1.PageIterator(client, getPageCollection(), truthyCallbackWithCounter);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, pageIterator.iterate()];
                    case 2:
                        _a.sent();
                        chai_1.assert.equal(truthyCallbackCounter, 0);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
        it("Should not iterate over an empty collection", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var pageIterator, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pageIterator = new PageIterator_1.PageIterator(client, getEmptyPageCollection(), truthyCallback);
                        halfWayCallbackCounter = 1;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, pageIterator.iterate()];
                    case 2:
                        _a.sent();
                        chai_1.assert.equal(halfWayCallbackCounter, 1);
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        throw error_2;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
        it("Should break in the middle way", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var pageIterator, error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pageIterator = new PageIterator_1.PageIterator(client, getPageCollection(), halfWayCallback);
                        halfWayCallbackCounter = 5;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, pageIterator.iterate()];
                    case 2:
                        _a.sent();
                        chai_1.assert.equal(halfWayCallbackCounter, 0);
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        throw error_3;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    });
    describe("iterationHelper", function () {
        it("Should return true for empty collection with next link", function () {
            var pageIterator = new PageIterator_1.PageIterator(client, getEmptyPageCollectionWithNext(), truthyCallback);
            try {
                var advance = pageIterator["iterationHelper"]();
                chai_1.assert.isTrue(advance);
            }
            catch (error) {
                throw error;
            }
        });
    });
    describe("resume", function () {
        var _this = this;
        it("Should start from the place where it left the iteration", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var pageIterator, error_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pageIterator = new PageIterator_1.PageIterator(client, getPageCollection(), halfWayCallback);
                        halfWayCallbackCounter = 5;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, pageIterator.iterate()];
                    case 2:
                        _a.sent();
                        chai_1.assert.equal(halfWayCallbackCounter, 0);
                        halfWayCallbackCounter = 5;
                        return [4 /*yield*/, pageIterator.resume()];
                    case 3:
                        _a.sent();
                        chai_1.assert.equal(halfWayCallbackCounter, 0);
                        return [3 /*break*/, 5];
                    case 4:
                        error_4 = _a.sent();
                        throw error_4;
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    });
});
//# sourceMappingURL=PageIterator.js.map