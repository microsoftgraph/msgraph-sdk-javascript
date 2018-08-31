import { assert } from "chai";
import { randomString } from "../test-helper";
import { BatchResponseContent } from "../../lib/src/BatchResponseContent";

declare const describe, it;

let redirect = {
    "id": "1",
    "status": 302,
    "headers": {
        "location": "https://b0mpua-by3301.files.1drv.com/y23vmagahszhxzlcvhasdhasghasodfi"
    }
};
let forbidden = {
    "id": "3",
    "status": 401,
    "body": {
        "error": {
            "code": "Forbidden",
            "message": "..."
        }
    }
};
let okWithBody = {
    "id": "2",
    "status": 200,
    "body": {
        "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#Collection(microsoft.graph.plannerTask)",
        "value": []
    }
};
let okWithoutBody = {
    "id": "4",
    "status": 204,
    "body": null
};

describe('update', function() {
    this.timeout(20 * 1000);

    it('Should update instance with nextLink responses', (done) => {
        let responses = [redirect, forbidden];
        let batchRes = new BatchResponseContent({
            responses,
            "@nextLink": "dummy nextlink"
        });
        batchRes.update({
            responses: [okWithoutBody, okWithBody]
        })
        assert.isDefined(batchRes.getResponseById("2"));
        assert.isDefined(batchRes.getResponseById("4"));
        done();
    });
});

describe('createResponseObject', function() {
    this.timeout(20 * 1000);
    
    it('Should create batch response content instance for 302, 402, 202, 204 responses', (done) => {
        let batchRes = new BatchResponseContent({
            responses: [redirect, forbidden, okWithBody, okWithoutBody]
        });
        assert.isDefined(batchRes.getResponseById("1"));
        assert.isDefined(batchRes.getResponseById("2"));
        assert.isDefined(batchRes.getResponseById("3"));
        assert.isDefined(batchRes.getResponseById("4"));
        done();
    });
});

describe('getResponseById', function() {
    this.timeout(20 * 1000);

    it('Should return response object for given id', (done) => {
        let batchRes = new BatchResponseContent({
            responses: [redirect]
        });
        assert.isDefined(batchRes.getResponseById("1"));
        done();
    });

    it('Should return undefined for given id for which the response is not present', (done) => {
        let batchRes = new BatchResponseContent({
            responses: [redirect]
        });
        assert.isUndefined(batchRes.getResponseById("100"));
        done();
    });
});

describe('getResponses', function() {
    this.timeout(20 * 1000);

    it('Should return responses map', (done) => {
        let batchRes = new BatchResponseContent({
            responses: [redirect]
        });
        assert.isDefined(batchRes.getResponses());
        done();
    });
});

describe('getResponsesIterator', function() {
    this.timeout(20 * 1000);

    it('Should return iterator', (done) => {
        let batchRes = new BatchResponseContent({
            responses: [redirect, forbidden, okWithBody, okWithoutBody]
        });
        let count = 0;
        let iterator = batchRes.getResponsesIterator();
        let data = iterator.next();
        while (!data.done) {
            data = iterator.next();
            count++;
        }
        assert.equal(count, 4);
        done();
    });
});