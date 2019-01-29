/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";
import { LargeFileUploadTask } from "../../src/tasks/LargeFileUploadTask";
import { getClient } from "../test-helper";

describe("LargeFileUploadTask.ts", function () {
    describe('Parsing Range', () => {
        let name = "sample_image.jpg",
            arrayBuffer = new ArrayBuffer(80000),
            size = 100000;
        let fileObj = {
            content: arrayBuffer,
            name,
            size
        };
        let uploadSession = {
            url: "test url",
            expiry: new Date()
        };
        let options = {};
        let uploadTask = new LargeFileUploadTask(getClient(), fileObj, uploadSession, options);
        it('Should return default range for given undefined range', (done) => {
            let range = uploadTask.parseRange([]);
            assert.equal(range.minValue, -1);
            assert.equal(range.maxValue, -1);
            done();
        });

        it('Should return default range for given empty range', (done) => {
            let range = uploadTask.parseRange([""]);
            assert.equal(range.minValue, -1);
            assert.equal(range.maxValue, -1);
            done();
        });

        it('Should return valid range for given range with from and to values', (done) => {
            let range = uploadTask.parseRange(["100-200"]);
            assert.equal(range.minValue, 100);
            assert.equal(range.maxValue, 200);
            done();
        });

        it('Should return valid range for given range without to value', (done) => {
            let range = uploadTask.parseRange(["0-"]);
            assert.equal(range.minValue, 0);
            assert.equal(range.maxValue, 99999);
            done();
        });
    });

    describe('Update Task Status', () => {
        let name = "sample_image.jpg",
            arrayBuffer = new ArrayBuffer(80000),
            size = 100000;
        let fileObj = {
            content: arrayBuffer,
            name,
            size
        };
        let uploadSession = {
            url: "test url",
            expiry: new Date()
        };
        let options = {};
        let uploadTask = new LargeFileUploadTask(getClient(), fileObj, uploadSession, options);
        it('Should update status with expiration date and next expected ranges as given', (done) => {
            let statusResponse = {
                expirationDateTime: "2018-08-06T09:05:45.195Z",
                nextExpectedRanges: ["100-2000"]
            }
            uploadTask.updateTaskStatus(statusResponse);
            assert.equal(uploadTask["nextRange"].minValue, 100);
            assert.equal(uploadTask["nextRange"].maxValue, 2000);
            done();
        });
        it('Should update status with given expiration date and (fileSize - 1) for next expected range maxValue', (done) => {
            let statusResponse = {
                expirationDateTime: "2018-08-06T09:05:45.195Z",
                nextExpectedRanges: ["100-"]
            }
            uploadTask.updateTaskStatus(statusResponse);
            assert.equal(uploadTask["nextRange"].minValue, 100);
            assert.equal(uploadTask["nextRange"].maxValue, 99999);
            done();
        });
    });

    describe('GetNextRange', () => {
        let name = "sample_image.jpg",
            arrayBuffer = new ArrayBuffer(80000),
            size = 328680;
        let fileObj = {
            content: arrayBuffer,
            name,
            size
        };
        let uploadSession = {
            url: "test url",
            expiry: new Date()
        };
        let options = {
            rangeSize: 327680
        };
        let uploadTask = new LargeFileUploadTask(getClient(), fileObj, uploadSession, options);

        it('Should return proper next range well within the file size', (done) => {
            let nextRange = uploadTask.getNextRange();
            assert.equal(nextRange.minValue, 0);
            assert.equal(nextRange.maxValue, 327679);
            done();
        });

        it('Should return next range maxValue equal to the file size', (done) => {
            let statusResponse = {
                expirationDateTime: "2018-08-06T09:05:45.195Z",
                nextExpectedRanges: ["327680-"]
            };
            uploadTask.updateTaskStatus(statusResponse);
            let nextRange = uploadTask.getNextRange();
            assert.equal(nextRange.minValue, 327680);
            assert.equal(nextRange.maxValue, 328679);
            done();
        });

        it('Should return next range as default(empty) range, this is for the upload task completed', (done) => {
            let statusResponse = {
                expirationDateTime: "2018-08-06T09:05:45.195Z",
                nextExpectedRanges: []
            };
            uploadTask.updateTaskStatus(statusResponse);
            let nextRange = uploadTask.getNextRange();
            assert.equal(nextRange.minValue, -1);
            assert.equal(nextRange.maxValue, -1);
            done();
        });
    });

    describe('Upload File', () => {
        let name = "sample_image.jpg",
            arrayBuffer = new ArrayBuffer(80000),
            size = 328680;
        let fileObj = {
            content: arrayBuffer,
            name,
            size
        };
        let uploadSession = {
            url: "test url",
            expiry: new Date()
        };
        let options = {
            rangeSize: 327680
        };
        let uploadTask = new LargeFileUploadTask(getClient(), fileObj, uploadSession, options);
        it('Should return an exception while trying to upload the file upload completed task', (done) => {
            let statusResponse = {
                expirationDateTime: "2018-08-06T09:05:45.195Z",
                nextExpectedRanges: []
            };
            uploadTask.updateTaskStatus(statusResponse);
            uploadTask.upload()
                .then((res) => {
                    throw new Error("Upload is working for upload completed task");
                })
                .catch((err) => {
                    assert.equal(err.name, "Invalid Session");
                    assert.equal(err.message, "Task with which you are trying to upload is already completed, Please check for your uploaded file");
                    done();
                });
        });
    });
});
