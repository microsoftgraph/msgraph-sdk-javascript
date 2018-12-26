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
var BatchRequestContent_1 = require("../../src/content/BatchRequestContent");
var chai_1 = require("chai");
var fs = require("fs");
require("isomorphic-fetch");
var test_helper_1 = require("../test-helper");
var folderName = test_helper_1.randomString();
var folderDetails = {
    "name": folderName,
    "folder": {}
};
var createFolderRequest = new Request("/me/drive/root/children", {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(folderDetails)
});
var getCreateFolderRequestCopy = function () {
    return {
        id: "1",
        request: createFolderRequest
    };
};
var getCreateFolderRequestWithDependsOnCopy = function () {
    var data = {
        id: "1",
        request: createFolderRequest,
        dependsOn: undefined
    };
    data.dependsOn = [];
    return data;
};
describe("BatchRequestContent.ts", function () {
    describe('Create', function () {
        this.timeout(20 * 1000);
        it('Should Create BatchRequestContent instance with no requests', function (done) {
            var batchReq = new BatchRequestContent_1.BatchRequestContent();
            chai_1.assert.equal(batchReq.constructor.name, "BatchRequestContent");
            done();
        });
        it('Should create BatchRequestContent instance with empty array', function (done) {
            var batchReq = new BatchRequestContent_1.BatchRequestContent([]);
            chai_1.assert.equal(batchReq.constructor.name, "BatchRequestContent");
            done();
        });
        it('Should create BatchRequestContent instance with requests', function (done) {
            var createFolderDuplicate1 = getCreateFolderRequestCopy();
            var createFolderDuplicate2 = getCreateFolderRequestCopy();
            createFolderDuplicate2.id = "2";
            var batchReq = new BatchRequestContent_1.BatchRequestContent([createFolderDuplicate1, createFolderDuplicate2]);
            chai_1.assert.equal(batchReq.requests.size, 2);
            done();
        });
        it('Should throw error for empty request id', function (done) {
            var createFolderDuplicate1 = getCreateFolderRequestCopy();
            createFolderDuplicate1.id = "";
            try {
                var batchReq = new BatchRequestContent_1.BatchRequestContent([createFolderDuplicate1]);
                throw new Error("Something wrong with the empty id check");
            }
            catch (error) {
                chai_1.assert.equal(error.name, "Empty Id For Request");
            }
            done();
        });
        it('Should return error incase of number of requests limit exceeding', function (done) {
            var requests = [];
            for (var i = 0; i < 25; i++) {
                var req = getCreateFolderRequestCopy();
                req.id = "" + i;
                requests.push(req);
            }
            try {
                var batchReq = new BatchRequestContent_1.BatchRequestContent(requests);
                throw new Error('Something wrong with the limiting requests');
            }
            catch (error) {
                chai_1.assert.equal(error.name, "Limit Exceeded Error");
                done();
            }
        });
    });
    describe('addRequest', function () {
        this.timeout(20 * 1000);
        it('Should emit size exceed error', function (done) {
            var requests = [];
            for (var i = 0; i < 20; i++) {
                var req_1 = getCreateFolderRequestCopy();
                req_1.id = "" + i;
                requests.push(req_1);
            }
            var req = getCreateFolderRequestCopy();
            req.id = "100";
            var batchReq = new BatchRequestContent_1.BatchRequestContent(requests);
            try {
                batchReq.addRequest(req);
                throw new Error("Something wrong with the limiting requests");
            }
            catch (error) {
                chai_1.assert.equal(error.name, "Limit Exceeded Error");
                done();
            }
        });
        it('Should add Request JSON to the BatchRequestContent instance', function (done) {
            var req = getCreateFolderRequestCopy();
            req.id = "100";
            var batchReq = new BatchRequestContent_1.BatchRequestContent();
            var id = batchReq.addRequest(req);
            chai_1.assert.equal(req.id, id);
            done();
        });
        it('Should throw duplicate id error', function (done) {
            var req1 = getCreateFolderRequestCopy();
            var req2 = getCreateFolderRequestCopy();
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1]);
            try {
                batchReq.addRequest(req2);
                throw new Error("Something wrong with duplicate id validation");
            }
            catch (error) {
                chai_1.assert.equal(error.name, "Duplicate RequestId Error");
                done();
            }
        });
        it('Should throw duplicate id error', function (done) {
            var req = getCreateFolderRequestCopy();
            req.id = "";
            var batchReq = new BatchRequestContent_1.BatchRequestContent();
            try {
                batchReq.addRequest(req);
                throw new Error("Something wrong with empty id validation");
            }
            catch (error) {
                chai_1.assert.equal(error.name, "Empty Id For Request");
                done();
            }
        });
    });
    describe('removeRequest', function () {
        it('Should delete the request present in the batch', function (done) {
            var req = getCreateFolderRequestCopy();
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req]);
            chai_1.assert.equal(true, batchReq.removeRequest(req.id));
            done();
        });
        it('Should return false for the request that is not present in the batch', function (done) {
            var req = getCreateFolderRequestCopy();
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req]);
            chai_1.assert.equal(false, batchReq.removeRequest("1000"));
            done();
        });
        it('Should remove dependencies in case dependencies present', function (done) {
            var req1 = getCreateFolderRequestCopy(), req2 = getCreateFolderRequestCopy(), req3 = getCreateFolderRequestCopy(), req4 = getCreateFolderRequestCopy();
            req1.id = "1";
            req2.id = "2";
            req3.id = "3";
            req4.id = "4";
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1, req2, req3, req4]);
            batchReq.addDependency("2", "1");
            batchReq.addDependency("3", "2");
            batchReq.addDependency("4", "1");
            batchReq.addDependency("4", "2");
            batchReq.addDependency("4", "3");
            batchReq.removeRequest("2");
            chai_1.assert.isUndefined(batchReq.requests.get("1").dependsOn);
            chai_1.assert.isUndefined(batchReq.requests.get("3").dependsOn);
            chai_1.assert.equal(batchReq.requests.get("4").dependsOn.length, 2);
            done();
        });
    });
    describe('addDependency', function () {
        this.timeout(20 * 1000);
        it('Should return error for request with dependent id not present', function (done) {
            var req = getCreateFolderRequestCopy();
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req]);
            try {
                batchReq.addDependency("1");
                throw new Error("Dependent validation is failing");
            }
            catch (err) {
                chai_1.assert.equal(err.name, "Invalid Dependency Addition");
                done();
            }
        });
        it('Should return error for the request with given dependency id is not present', function (done) {
            var req = getCreateFolderRequestCopy();
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req]);
            try {
                batchReq.addDependency("1", "100");
                throw new Error("Dependency validation is failing");
            }
            catch (err) {
                chai_1.assert.equal(err.name, "Invalid Dependency");
                done();
            }
        });
        it('Should add dependency for a given dependent', function (done) {
            var req1 = getCreateFolderRequestCopy(), req2 = getCreateFolderRequestCopy(), req3 = getCreateFolderRequestCopy();
            req1.id = "1";
            req2.id = "2";
            req3.id = "3";
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1, req2, req3]);
            batchReq.addDependency("2", "1");
            chai_1.assert.isDefined(batchReq.requests.get("2").dependsOn);
            batchReq.addDependency("2", "3");
            chai_1.assert.equal(batchReq.requests.get("2").dependsOn.length, 2);
            done();
        });
        it('Should return error for adding duplicate dependency', function (done) {
            var req1 = getCreateFolderRequestCopy(), req2 = getCreateFolderRequestCopy();
            req1.id = "1";
            req2.id = "2";
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1, req2]);
            batchReq.addDependency("2", "1");
            try {
                batchReq.addDependency("2", "1");
            }
            catch (e) {
                chai_1.assert.equal(e.name, "Duplicate Dependency");
                done();
            }
        });
        it('Should add dependency for dependency id not given', function (done) {
            var req1 = getCreateFolderRequestCopy(), req2 = getCreateFolderRequestCopy(), req3 = getCreateFolderRequestCopy();
            req1.id = "1";
            req2.id = "2";
            req3.id = "3";
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1, req2, req3]);
            batchReq.addDependency("2");
            chai_1.assert.isDefined(batchReq.requests.get("2").dependsOn);
            batchReq.addDependency("3");
            chai_1.assert.isDefined(batchReq.requests.get("3").dependsOn);
            done();
        });
        it('Should return error for adding duplicate dependency when dependency id not given', function (done) {
            var req1 = getCreateFolderRequestCopy(), req2 = getCreateFolderRequestCopy();
            req1.id = "1";
            req2.id = "2";
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1, req2]);
            batchReq.addDependency("2");
            chai_1.assert.isDefined(batchReq.requests.get("2").dependsOn);
            try {
                batchReq.addDependency("2");
            }
            catch (e) {
                chai_1.assert.equal(e.name, "Duplicate Dependency");
                done();
            }
        });
        it('Should return error for adding dependency when only one request is present and dependency id not given', function (done) {
            var req1 = getCreateFolderRequestCopy();
            req1.id = "1";
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1]);
            try {
                batchReq.addDependency("1");
            }
            catch (e) {
                chai_1.assert.equal(e.name, "Invalid Dependency Addition");
                done();
            }
        });
    });
    describe('getContent', function () {
        var _this = this;
        it('Should return error for empty requests', function () { return __awaiter(_this, void 0, void 0, function () {
            var batchReq, content, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        batchReq = new BatchRequestContent_1.BatchRequestContent();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, batchReq.getContent()];
                    case 2:
                        content = _a.sent();
                        throw new Error("Something wrong with the empty requests validation");
                    case 3:
                        error_1 = _a.sent();
                        chai_1.assert.equal(error_1.name, "Empty Payload");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
        it('Should return json content', function () { return __awaiter(_this, void 0, void 0, function () {
            var req, batchReq, content, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        req = getCreateFolderRequestCopy();
                        batchReq = new BatchRequestContent_1.BatchRequestContent([req]);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, batchReq.getContent()];
                    case 2:
                        content = _a.sent();
                        chai_1.assert.isDefined(content.requests[0].body);
                        chai_1.assert.equal(typeof content.requests[0].body, "object");
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        throw error_2;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
        it('Should return image\'s base64 string', function () { return __awaiter(_this, void 0, void 0, function () {
            var fileName;
            var _this = this;
            return __generator(this, function (_a) {
                fileName = "sample_image.jpg";
                fs.readFile("./spec/sample_files/" + fileName, {}, function (err, file) { return __awaiter(_this, void 0, void 0, function () {
                    var uploadOneDriveFile, batchReq, content, error_3;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (err) {
                                    throw err;
                                }
                                uploadOneDriveFile = {
                                    id: "1",
                                    request: new Request("/me/drive/root:/Documents/" + fileName + ":/content", {
                                        method: "PUT",
                                        headers: {
                                            "Content-type": "image/jpg"
                                        },
                                        body: file
                                    })
                                };
                                batchReq = new BatchRequestContent_1.BatchRequestContent([uploadOneDriveFile]);
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, batchReq.getContent()];
                            case 2:
                                content = _a.sent();
                                chai_1.assert.isDefined(content.requests[0].body);
                                return [3 /*break*/, 4];
                            case 3:
                                error_3 = _a.sent();
                                throw error_3;
                            case 4: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
        it('Should throw error for request does not have content-type header if it does have a body', function () { return __awaiter(_this, void 0, void 0, function () {
            var createFolderReqWithoutHeader, batchReq, content, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        createFolderReqWithoutHeader = new Request("/me/drive/root/children", {
                            method: "POST",
                            body: JSON.stringify(folderDetails)
                        });
                        batchReq = new BatchRequestContent_1.BatchRequestContent([{
                                id: "1",
                                request: createFolderReqWithoutHeader
                            }]);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, batchReq.getContent()];
                    case 2:
                        content = _a.sent();
                        throw new Error("Something wrong with the header checking");
                    case 3:
                        error_4 = _a.sent();
                        chai_1.assert.equal(error_4.name, "Invalid Content-type header");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    });
    describe('removeDependency', function () {
        this.timeout(20 * 1000);
        it('Should return false for dependent not present', function (done) {
            var batchReq = new BatchRequestContent_1.BatchRequestContent();
            chai_1.assert.equal(false, batchReq.removeDependency("1"));
            done();
        });
        it('Should return false for dependency array not present in the request', function (done) {
            var req1 = getCreateFolderRequestCopy();
            var req2 = getCreateFolderRequestCopy();
            req1.id = "1";
            req2.id = "2";
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1, req2]);
            chai_1.assert.equal(false, batchReq.removeDependency("2"));
            done();
        });
        it('Should return false for given dependency id is not present in the dependent request', function (done) {
            var req1 = getCreateFolderRequestCopy();
            var req2 = getCreateFolderRequestCopy();
            req1.id = "1";
            req2.id = "2";
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1, req2]);
            batchReq.addDependency("2");
            chai_1.assert.equal(false, batchReq.removeDependency("2", "5"));
            done();
        });
        it('Should delete the given dependency and dependent', function (done) {
            var req1 = getCreateFolderRequestCopy();
            var req2 = getCreateFolderRequestCopy();
            req1.id = "1";
            req2.id = "2";
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1, req2]);
            batchReq.addDependency("2");
            chai_1.assert.equal(true, batchReq.removeDependency("2", "1"));
            done();
        });
        it('Should delete all dependencies for a given dependent', function (done) {
            var req1 = getCreateFolderRequestCopy();
            var req2 = getCreateFolderRequestCopy();
            var req3 = getCreateFolderRequestCopy();
            req1.id = "1";
            req2.id = "2";
            req3.id = "3";
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1, req2, req3]);
            batchReq.addDependency("3", "1");
            batchReq.addDependency("3", "2");
            chai_1.assert.equal(true, batchReq.removeDependency("3"));
            done();
        });
    });
    describe('validateDependencies', function () {
        it('Should throw error for empty request object', function (done) {
            try {
                BatchRequestContent_1.BatchRequestContent["validateDependencies"](new Map());
                throw new Error("Something wrong with the empty requests check");
            }
            catch (error) {
                chai_1.assert.equal(error.name, "Empty Requests Error");
                done();
            }
        });
        it('isParallel - Should validate for single request', function () {
            var req = getCreateFolderRequestCopy();
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req]);
            chai_1.assert.equal(true, BatchRequestContent_1.BatchRequestContent["validateDependencies"](batchReq.requests));
        });
        it('isParallel - Should validate for multiple requests', function () {
            var req1 = getCreateFolderRequestCopy();
            var req2 = getCreateFolderRequestCopy();
            req2.id = "2";
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1, req2]);
            chai_1.assert.equal(true, BatchRequestContent_1.BatchRequestContent["validateDependencies"](batchReq.requests));
        });
        it('isParallel - Should validate for requests with undefined dependsOn', function () {
            var req1 = getCreateFolderRequestCopy();
            req1.id = "1";
            var req2 = getCreateFolderRequestCopy();
            req2.id = "2";
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1, req2]);
            chai_1.assert.equal(true, BatchRequestContent_1.BatchRequestContent["validateDependencies"](batchReq.requests));
        });
        it('isParallel - Should validate for requests with empty dependsOn array', function () {
            var req1 = getCreateFolderRequestCopy();
            req1.id = "1";
            var req2 = getCreateFolderRequestWithDependsOnCopy();
            req2.id = "2";
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1, req2]);
            chai_1.assert.equal(true, BatchRequestContent_1.BatchRequestContent["validateDependencies"](batchReq.requests));
        });
        it('isSerial - Should not validate for first request having dependsOn', function () {
            var req1 = getCreateFolderRequestWithDependsOnCopy();
            req1.dependsOn = ["2"];
            var req2 = getCreateFolderRequestWithDependsOnCopy();
            req2.id = "2";
            var req3 = getCreateFolderRequestWithDependsOnCopy();
            req3.id = "3";
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1, req2, req3]);
            chai_1.assert.equal(false, BatchRequestContent_1.BatchRequestContent["validateDependencies"](batchReq.requests));
        });
        it('isSerial - Should validate for first request with undefined dependsOn', function () {
            var req1 = getCreateFolderRequestWithDependsOnCopy();
            req1.dependsOn = undefined;
            var req2 = getCreateFolderRequestWithDependsOnCopy();
            req2.id = "2";
            req2.dependsOn = ["1"];
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1, req2]);
            chai_1.assert.equal(true, BatchRequestContent_1.BatchRequestContent["validateDependencies"](batchReq.requests));
        });
        it('isSerial - Should validate for first request with empty dependsOn array', function () {
            var req1 = getCreateFolderRequestWithDependsOnCopy();
            var req2 = getCreateFolderRequestWithDependsOnCopy();
            req2.id = "2";
            req2.dependsOn = ["1"];
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1, req2]);
            chai_1.assert.equal(true, BatchRequestContent_1.BatchRequestContent["validateDependencies"](batchReq.requests));
        });
        it('isSerial - Should not validate for a request does not depend on anything', function () {
            var req1 = getCreateFolderRequestWithDependsOnCopy();
            var req2 = getCreateFolderRequestWithDependsOnCopy();
            req2.id = "2";
            req2.dependsOn = ["1"];
            var req3 = getCreateFolderRequestWithDependsOnCopy();
            req3.id = "3";
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1, req2, req3]);
            chai_1.assert.equal(false, BatchRequestContent_1.BatchRequestContent["validateDependencies"](batchReq.requests));
        });
        it('isSerial - Should not validate for a request does not depend on previous request', function () {
            var req1 = getCreateFolderRequestWithDependsOnCopy();
            var req2 = getCreateFolderRequestWithDependsOnCopy();
            req2.id = "2";
            req2.dependsOn = ["1"];
            var req3 = getCreateFolderRequestWithDependsOnCopy();
            req3.id = "3";
            req3.dependsOn = ["4"];
            var req4 = getCreateFolderRequestWithDependsOnCopy();
            req4.id = "4";
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1, req2, req3, req4]);
            chai_1.assert.equal(false, BatchRequestContent_1.BatchRequestContent["validateDependencies"](batchReq.requests));
        });
        it('isSerial - Should not validate for requests having more than one dependencies', function () {
            var req1 = getCreateFolderRequestWithDependsOnCopy();
            var req2 = getCreateFolderRequestWithDependsOnCopy();
            req2.id = "2";
            req2.dependsOn = ["1"];
            var req3 = getCreateFolderRequestWithDependsOnCopy();
            req3.id = "3";
            req3.dependsOn = ["2"];
            var req4 = getCreateFolderRequestWithDependsOnCopy();
            req4.id = "4";
            req4.dependsOn = ["2", "3"];
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1, req2, req3, req4]);
            chai_1.assert.equal(false, BatchRequestContent_1.BatchRequestContent["validateDependencies"](batchReq.requests));
        });
        it('isSerial - Should validate for proper serial dependencies', function () {
            var req1 = getCreateFolderRequestWithDependsOnCopy();
            var req2 = getCreateFolderRequestWithDependsOnCopy();
            req2.id = "2";
            req2.dependsOn = ["1"];
            var req3 = getCreateFolderRequestWithDependsOnCopy();
            req3.id = "3";
            req3.dependsOn = ["2"];
            var req4 = getCreateFolderRequestWithDependsOnCopy();
            req4.id = "4";
            req4.dependsOn = ["3"];
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1, req2, req3, req4]);
            chai_1.assert.equal(true, BatchRequestContent_1.BatchRequestContent["validateDependencies"](batchReq.requests));
        });
        it('isSame - Should validate for first request with undefined dependsOn', function () {
            var req1 = getCreateFolderRequestCopy();
            var req2 = getCreateFolderRequestWithDependsOnCopy();
            req2.id = "2";
            req2.dependsOn = ["1"];
            var req3 = getCreateFolderRequestWithDependsOnCopy();
            req3.id = "3";
            req3.dependsOn = ["1"];
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1, req2, req3]);
            chai_1.assert.equal(true, BatchRequestContent_1.BatchRequestContent["validateDependencies"](batchReq.requests));
        });
        it('isSame - Should validate for first request with empty dependsOn array', function () {
            var req1 = getCreateFolderRequestWithDependsOnCopy();
            req1.id = "1";
            var req2 = getCreateFolderRequestWithDependsOnCopy();
            req2.id = "2";
            req2.dependsOn = ["1"];
            var req3 = getCreateFolderRequestWithDependsOnCopy();
            req3.id = "3";
            req3.dependsOn = ["1"];
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1, req2, req3]);
            chai_1.assert.equal(true, BatchRequestContent_1.BatchRequestContent["validateDependencies"](batchReq.requests));
        });
        it('isSame - Should not validate for first request having dependency on itself', function () {
            var req1 = getCreateFolderRequestWithDependsOnCopy();
            req1.dependsOn = ["1"];
            var req2 = getCreateFolderRequestWithDependsOnCopy();
            req2.id = "2";
            req2.dependsOn = ["1"];
            var req3 = getCreateFolderRequestWithDependsOnCopy();
            req3.id = "3";
            req3.dependsOn = ["1"];
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1, req2, req3]);
            chai_1.assert.equal(false, BatchRequestContent_1.BatchRequestContent["validateDependencies"](batchReq.requests));
        });
        it('isSame - Should not validate for first request having dependency on non existing request', function () {
            var req1 = getCreateFolderRequestWithDependsOnCopy();
            req1.dependsOn = ["10"];
            var req2 = getCreateFolderRequestWithDependsOnCopy();
            req2.id = "2";
            req2.dependsOn = ["10"];
            var req3 = getCreateFolderRequestWithDependsOnCopy();
            req3.id = "3";
            req3.dependsOn = ["10"];
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1, req2, req3]);
            chai_1.assert.equal(false, BatchRequestContent_1.BatchRequestContent["validateDependencies"](batchReq.requests));
        });
        it('isSame - Should validate for requests dependsOn some middle order request', function () {
            var req1 = getCreateFolderRequestWithDependsOnCopy();
            req1.dependsOn = ["2"];
            var req2 = getCreateFolderRequestWithDependsOnCopy();
            req2.id = "2";
            var req3 = getCreateFolderRequestWithDependsOnCopy();
            req3.id = "3";
            req3.dependsOn = ["2"];
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1, req2, req3]);
            chai_1.assert.equal(true, BatchRequestContent_1.BatchRequestContent["validateDependencies"](batchReq.requests));
        });
        it('isSame - Should not validate for middle order request with empty dependsOn', function () {
            var req1 = getCreateFolderRequestWithDependsOnCopy();
            var req2 = getCreateFolderRequestWithDependsOnCopy();
            req2.id = "2";
            var req3 = getCreateFolderRequestWithDependsOnCopy();
            req3.id = "3";
            req3.dependsOn = ["1"];
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1, req2, req3]);
            chai_1.assert.equal(false, BatchRequestContent_1.BatchRequestContent["validateDependencies"](batchReq.requests));
        });
        it('isSame - Should not validate for middle order request dependency request has its own dependency', function () {
            var req1 = getCreateFolderRequestWithDependsOnCopy();
            req1.dependsOn = ["2"];
            var req2 = getCreateFolderRequestWithDependsOnCopy();
            req2.id = "2";
            req2.dependsOn = ["2"];
            var req3 = getCreateFolderRequestWithDependsOnCopy();
            req3.id = "3";
            req3.dependsOn = ["2"];
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1, req2, req3]);
            chai_1.assert.equal(false, BatchRequestContent_1.BatchRequestContent["validateDependencies"](batchReq.requests));
        });
        it('isSame - Should not validate for middle order request does depend on some other request other than dependency request', function () {
            var req1 = getCreateFolderRequestWithDependsOnCopy();
            req1.dependsOn = ["2"];
            var req2 = getCreateFolderRequestWithDependsOnCopy();
            req2.id = "2";
            var req3 = getCreateFolderRequestWithDependsOnCopy();
            req3.id = "3";
            req3.dependsOn = ["3"];
            var batchReq = new BatchRequestContent_1.BatchRequestContent([req1, req2, req3]);
            chai_1.assert.equal(false, BatchRequestContent_1.BatchRequestContent["validateDependencies"](batchReq.requests));
        });
    });
});
//# sourceMappingURL=BatchRequestContent.js.map