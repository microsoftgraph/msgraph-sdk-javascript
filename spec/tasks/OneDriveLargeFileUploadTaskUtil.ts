/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";
import * as OneDriveLargeFileUploadTaskUtil from "../../src/tasks/OneDriveLargeFileUploadTaskUtil";

describe("OneDriveLargeFileUploadTaskUtil", function () {
    describe('getValidRangeSize', () => {
        it('Should return size in multiple of 320KB for the size not a multiple of 320KB', (done) => {
            assert.equal(327680, OneDriveLargeFileUploadTaskUtil.getValidRangeSize(327685));
            done();
        });
        it('Should return same size for the size less than 320 KB', (done) => {
            assert.equal(100, OneDriveLargeFileUploadTaskUtil.getValidRangeSize(100));
            done();
        });
        it('Should return size in multiple of 320KB with max range of 60 MB for file size more than 60 MB', (done) => {
            assert.equal(62914560, OneDriveLargeFileUploadTaskUtil.getValidRangeSize(104857600));
            done();
        });
        it('Should return size in multiple of 320KB for the size multiple of 320 KB', (done) => {
            assert.equal(1638400, OneDriveLargeFileUploadTaskUtil.getValidRangeSize(1638400));
            done();
        })
    });
});
