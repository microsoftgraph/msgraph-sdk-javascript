"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
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
        it("Should iterate over a complete collection without nextLink", function () { return __awaiter(_this, void 0, void 0, function () {
            var pageIterator, error_1;
            return __generator(this, function (_a) {
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
        it("Should not iterate over an empty collection", function () { return __awaiter(_this, void 0, void 0, function () {
            var pageIterator, error_2;
            return __generator(this, function (_a) {
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
        it("Should break in the middle way", function () { return __awaiter(_this, void 0, void 0, function () {
            var pageIterator, error_3;
            return __generator(this, function (_a) {
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
    describe("resume", function () {
        var _this = this;
        it("Should start from the place where it left the iteration", function () { return __awaiter(_this, void 0, void 0, function () {
            var pageIterator, error_4;
            return __generator(this, function (_a) {
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