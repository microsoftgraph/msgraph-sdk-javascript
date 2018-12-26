"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
var BatchResponseContent_1 = require("../../src/content/BatchResponseContent");
var chai_1 = require("chai");
var redirect = {
    "id": "1",
    "status": 302,
    "headers": {
        "location": "https://b0mpua-by3301.files.1drv.com/y23vmagahszhxzlcvhasdhasghasodfi"
    }
};
var forbidden = {
    "id": "3",
    "status": 401,
    "body": {
        "error": {
            "code": "Forbidden",
            "message": "..."
        }
    }
};
var okWithBody = {
    "id": "2",
    "status": 200,
    "body": {
        "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#Collection(microsoft.graph.plannerTask)",
        "value": []
    }
};
var okWithoutBody = {
    "id": "4",
    "status": 204,
    "body": null
};
describe("BatchResponseContent.ts", function () {
    describe('update', function () {
        this.timeout(20 * 1000);
        it('Should update instance with nextLink responses', function (done) {
            var responses = [redirect, forbidden];
            var batchRes = new BatchResponseContent_1.BatchResponseContent({
                responses: responses,
                "@nextLink": "dummy nextlink"
            });
            batchRes.update({
                responses: [okWithoutBody, okWithBody]
            });
            chai_1.assert.isDefined(batchRes.getResponseById("2"));
            chai_1.assert.isDefined(batchRes.getResponseById("4"));
            done();
        });
    });
    describe('createResponseObject', function () {
        this.timeout(20 * 1000);
        it('Should create batch response content instance for 302, 402, 202, 204 responses', function (done) {
            var batchRes = new BatchResponseContent_1.BatchResponseContent({
                responses: [redirect, forbidden, okWithBody, okWithoutBody]
            });
            chai_1.assert.isDefined(batchRes.getResponseById("1"));
            chai_1.assert.isDefined(batchRes.getResponseById("2"));
            chai_1.assert.isDefined(batchRes.getResponseById("3"));
            chai_1.assert.isDefined(batchRes.getResponseById("4"));
            done();
        });
    });
    describe('getResponseById', function () {
        this.timeout(20 * 1000);
        it('Should return response object for given id', function (done) {
            var batchRes = new BatchResponseContent_1.BatchResponseContent({
                responses: [redirect]
            });
            chai_1.assert.isDefined(batchRes.getResponseById("1"));
            done();
        });
        it('Should return undefined for given id for which the response is not present', function (done) {
            var batchRes = new BatchResponseContent_1.BatchResponseContent({
                responses: [redirect]
            });
            chai_1.assert.isUndefined(batchRes.getResponseById("100"));
            done();
        });
    });
    describe('getResponses', function () {
        this.timeout(20 * 1000);
        it('Should return responses map', function (done) {
            var batchRes = new BatchResponseContent_1.BatchResponseContent({
                responses: [redirect]
            });
            chai_1.assert.isDefined(batchRes.getResponses());
            done();
        });
    });
    describe('getResponsesIterator', function () {
        this.timeout(20 * 1000);
        it('Should return iterator', function (done) {
            var batchRes = new BatchResponseContent_1.BatchResponseContent({
                responses: [redirect, forbidden, okWithBody, okWithoutBody]
            });
            var count = 0;
            var iterator = batchRes.getResponsesIterator();
            var data = iterator.next();
            while (!data.done) {
                data = iterator.next();
                count++;
            }
            chai_1.assert.equal(count, 4);
            done();
        });
    });
});
//# sourceMappingURL=BatchResponseContent.js.map