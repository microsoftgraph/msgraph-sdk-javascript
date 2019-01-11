"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var LargeFileUploadTask_1 = require("../../src/tasks/LargeFileUploadTask");
var test_helper_1 = require("../test-helper");
describe("LargeFileUploadTask.ts", function () {
    describe('Parsing Range', function () {
        var name = "sample_image.jpg", arrayBuffer = new ArrayBuffer(80000), size = 100000;
        var fileObj = {
            content: arrayBuffer,
            name: name,
            size: size
        };
        var uploadSession = {
            url: "test url",
            expiry: new Date()
        };
        var options = {};
        var uploadTask = new LargeFileUploadTask_1.LargeFileUploadTask(test_helper_1.getClient(), fileObj, uploadSession, options);
        it('Should return default range for given undefined range', function (done) {
            var range = uploadTask.parseRange([]);
            chai_1.assert.equal(range.minValue, -1);
            chai_1.assert.equal(range.maxValue, -1);
            done();
        });
        it('Should return default range for given empty range', function (done) {
            var range = uploadTask.parseRange([""]);
            chai_1.assert.equal(range.minValue, -1);
            chai_1.assert.equal(range.maxValue, -1);
            done();
        });
        it('Should return valid range for given range with from and to values', function (done) {
            var range = uploadTask.parseRange(["100-200"]);
            chai_1.assert.equal(range.minValue, 100);
            chai_1.assert.equal(range.maxValue, 200);
            done();
        });
        it('Should return valid range for given range without to value', function (done) {
            var range = uploadTask.parseRange(["0-"]);
            chai_1.assert.equal(range.minValue, 0);
            chai_1.assert.equal(range.maxValue, 99999);
            done();
        });
    });
    describe('Update Task Status', function () {
        var name = "sample_image.jpg", arrayBuffer = new ArrayBuffer(80000), size = 100000;
        var fileObj = {
            content: arrayBuffer,
            name: name,
            size: size
        };
        var uploadSession = {
            url: "test url",
            expiry: new Date()
        };
        var options = {};
        var uploadTask = new LargeFileUploadTask_1.LargeFileUploadTask(test_helper_1.getClient(), fileObj, uploadSession, options);
        it('Should update status with expiration date and next expected ranges as given', function (done) {
            var statusResponse = {
                expirationDateTime: "2018-08-06T09:05:45.195Z",
                nextExpectedRanges: ["100-2000"]
            };
            uploadTask.updateTaskStatus(statusResponse);
            chai_1.assert.equal(uploadTask["nextRange"].minValue, 100);
            chai_1.assert.equal(uploadTask["nextRange"].maxValue, 2000);
            done();
        });
        it('Should update status with given expiration date and (fileSize - 1) for next expected range maxValue', function (done) {
            var statusResponse = {
                expirationDateTime: "2018-08-06T09:05:45.195Z",
                nextExpectedRanges: ["100-"]
            };
            uploadTask.updateTaskStatus(statusResponse);
            chai_1.assert.equal(uploadTask["nextRange"].minValue, 100);
            chai_1.assert.equal(uploadTask["nextRange"].maxValue, 99999);
            done();
        });
    });
    describe('GetNextRange', function () {
        var name = "sample_image.jpg", arrayBuffer = new ArrayBuffer(80000), size = 328680;
        var fileObj = {
            content: arrayBuffer,
            name: name,
            size: size
        };
        var uploadSession = {
            url: "test url",
            expiry: new Date()
        };
        var options = {
            rangeSize: 327680
        };
        var uploadTask = new LargeFileUploadTask_1.LargeFileUploadTask(test_helper_1.getClient(), fileObj, uploadSession, options);
        it('Should return proper next range well within the file size', function (done) {
            var nextRange = uploadTask.getNextRange();
            chai_1.assert.equal(nextRange.minValue, 0);
            chai_1.assert.equal(nextRange.maxValue, 327679);
            done();
        });
        it('Should return next range maxValue equal to the file size', function (done) {
            var statusResponse = {
                expirationDateTime: "2018-08-06T09:05:45.195Z",
                nextExpectedRanges: ["327680-"]
            };
            uploadTask.updateTaskStatus(statusResponse);
            var nextRange = uploadTask.getNextRange();
            chai_1.assert.equal(nextRange.minValue, 327680);
            chai_1.assert.equal(nextRange.maxValue, 328679);
            done();
        });
        it('Should return next range as default(empty) range, this is for the upload task completed', function (done) {
            var statusResponse = {
                expirationDateTime: "2018-08-06T09:05:45.195Z",
                nextExpectedRanges: []
            };
            uploadTask.updateTaskStatus(statusResponse);
            var nextRange = uploadTask.getNextRange();
            chai_1.assert.equal(nextRange.minValue, -1);
            chai_1.assert.equal(nextRange.maxValue, -1);
            done();
        });
    });
    describe('Upload File', function () {
        var name = "sample_image.jpg", arrayBuffer = new ArrayBuffer(80000), size = 328680;
        var fileObj = {
            content: arrayBuffer,
            name: name,
            size: size
        };
        var uploadSession = {
            url: "test url",
            expiry: new Date()
        };
        var options = {
            rangeSize: 327680
        };
        var uploadTask = new LargeFileUploadTask_1.LargeFileUploadTask(test_helper_1.getClient(), fileObj, uploadSession, options);
        it('Should return an exception while trying to upload the file upload completed task', function (done) {
            var statusResponse = {
                expirationDateTime: "2018-08-06T09:05:45.195Z",
                nextExpectedRanges: []
            };
            uploadTask.updateTaskStatus(statusResponse);
            uploadTask.upload()
                .then(function (res) {
                throw new Error("Upload is working for upload completed task");
            })
                .catch(function (err) {
                chai_1.assert.equal(err.name, "Invalid Session");
                chai_1.assert.equal(err.message, "Task with which you are trying to upload is already completed, Please check for your uploaded file");
                done();
            });
        });
    });
});
//# sourceMappingURL=LargeFileUploadTask.js.map