"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * @class
 * Class for PageIterator
 */
var PageIterator = /** @class */ (function () {
    /**
     * @constructor
     * Creates new instance for PageIterator
     * @param {Client} client - The graph client instance
     * @param {PageCollection} pageCollection - The page collection object
     * @param {PageIteratorCallback} callBack - The callback function
     * @returns An instance of a PageIterator
     */
    function PageIterator(client, pageCollection, callback) {
        var self = this;
        self.client = client;
        self.collection = pageCollection.value;
        self.nextLink = pageCollection["@odata.nextLink"];
        self.deltaLink = pageCollection["@odata.deltaLink"];
        self.callback = callback;
    }
    /**
     * @private
     * Iterates over a collection by enqueuing entries one by one and kicking the callback with the enqueued entry
     * @returns A boolean indicating the continue flag to process next page
     */
    PageIterator.prototype.iterationHelper = function () {
        var self = this;
        if (self.collection === undefined) {
            return false;
        }
        var advance = true;
        while (advance && self.collection.length !== 0) {
            var item = self.collection.shift();
            advance = self.callback(item);
        }
        return advance;
    };
    /**
     * @private
     * @async
     * Helper to make a get request to fetch next page with nextLink url and update the page iterator instance with the returned response
     * @returns A promise that resolves to a response data with next page collection
     */
    PageIterator.prototype.fetchAndUpdateNextPageData = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var self_1, response, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        self_1 = this;
                        return [4 /*yield*/, self_1.client.api(self_1.nextLink).get()];
                    case 1:
                        response = _a.sent();
                        self_1.collection = response.value;
                        self_1.nextLink = response["@odata.nextLink"];
                        self_1.deltaLink = response["@odata.deltaLink"];
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @public
     * Getter to get the deltaLink in the current response
     * @returns A deltaLink which is being used to make delta requests in future
     */
    PageIterator.prototype.getDeltaLink = function () {
        return this.deltaLink;
    };
    /**
     * @public
     * @async
     * Iterates over the collection and kicks callback for each item on iteration. Fetches next set of data through nextLink and iterates over again
     * This happens until the nextLink is drained out or the user responds with a red flag to continue from callback
     * @returns A Promise that resolves to nothing on completion and throws error incase of any discrepancy.
     */
    PageIterator.prototype.iterate = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var self_2, advance, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        self_2 = this, advance = self_2.iterationHelper();
                        _a.label = 1;
                    case 1:
                        if (!advance) return [3 /*break*/, 5];
                        if (!(self_2.nextLink !== undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, self_2.fetchAndUpdateNextPageData()];
                    case 2:
                        _a.sent();
                        advance = self_2.iterationHelper();
                        return [3 /*break*/, 4];
                    case 3:
                        advance = false;
                        _a.label = 4;
                    case 4: return [3 /*break*/, 1];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_2 = _a.sent();
                        throw error_2;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @public
     * @async
     * This internally calls the iterate method, It's just for more readability.
     * @returns A Promise that resolves to nothing on completion and throws error incase of any discrepancy
     */
    PageIterator.prototype.resume = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                try {
                    return [2 /*return*/, this.iterate()];
                }
                catch (error) {
                    throw error;
                }
                return [2 /*return*/];
            });
        });
    };
    return PageIterator;
}());
exports.PageIterator = PageIterator;
//# sourceMappingURL=PageIterator.js.map