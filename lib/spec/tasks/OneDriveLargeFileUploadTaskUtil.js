"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var OneDriveLargeFileUploadTaskUtil = require("../../src/tasks/OneDriveLargeFileUploadTaskUtil");
describe("OneDriveLargeFileUploadTaskUtil", function () {
    describe('getValidRangeSize', function () {
        it('Should return size in multiple of 320KB for the size not a multiple of 320KB', function (done) {
            chai_1.assert.equal(327680, OneDriveLargeFileUploadTaskUtil.getValidRangeSize(327685));
            done();
        });
        it('Should return same size for the size less than 320 KB', function (done) {
            chai_1.assert.equal(100, OneDriveLargeFileUploadTaskUtil.getValidRangeSize(100));
            done();
        });
        it('Should return size in multiple of 320KB with max range of 60 MB for file size more than 60 MB', function (done) {
            chai_1.assert.equal(62914560, OneDriveLargeFileUploadTaskUtil.getValidRangeSize(104857600));
            done();
        });
        it('Should return size in multiple of 320KB for the size multiple of 320 KB', function (done) {
            chai_1.assert.equal(1638400, OneDriveLargeFileUploadTaskUtil.getValidRangeSize(1638400));
            done();
        });
    });
});
//# sourceMappingURL=OneDriveLargeFileUploadTaskUtil.js.map