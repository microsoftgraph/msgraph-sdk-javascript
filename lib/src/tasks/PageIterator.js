"use strict";
/**
 * @module PageIterator
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class for PageIterator
 */
var PageIterator = /** @class */ (function () {
    /**
     * Creates new instance for PageIterator
     * @param {Client} client - The graph client instance
     * @param {PageCollection} pageCollection - The page collection object
     * @param {PageIteratorCallback} callBack - The callback function
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
     * @return A boolean indicating the continue flag to process next page
     */
    PageIterator.prototype.iterationHelper = function () {
        var self = this;
        if (self.collection === undefined || self.collection.length === 0) {
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
     * @return A promise that resolves to a response data with next page collection
     */
    PageIterator.prototype.fetchAndUpdateNextPageData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self_1, response, error_1;
            return __generator(this, function (_a) {
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
     * Getter to get the deltaLink in the current response
     * @return A deltaLink which is being used to make delta requests in future
     */
    PageIterator.prototype.getDeltaLink = function () {
        return this.deltaLink;
    };
    /**
     * @async
     * Iterates over the collection and kicks callback for each item on iteration. Fetches next set of data through nextLink and iterates over again
     * This happens until the nextLink is drained out or the user responds with a red flag to continue from callback
     * @return A Promise that resolves to nothing on completion and throws error incase of any discrepancy.
     */
    PageIterator.prototype.iterate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self_2, advance, error_2;
            return __generator(this, function (_a) {
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
     * @async
     * This internally calls the iterate method, It's just for more readability.
     * @return A Promise that resolves to nothing on completion and throws error incase of any discrepancy
     */
    PageIterator.prototype.resume = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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