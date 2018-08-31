import 'isomorphic-fetch';
import {ResponseHandler} from "../../src/ResponseHandler"
import {GraphError} from '../../src/common'

import * as mocha from 'mocha'

import * as assert from 'assert';

declare const describe, it;

const _200_RES_BODY: any = { a: 1 }; 
const _200_RES_INIT: ResponseInit = { status: 200 };
const _200_RES: Response =
    new Response(_200_RES_BODY, _200_RES_INIT);

const _500_RES_BODY: any = {
    error: {
        "code": "SearchEvents",
        "message": "The parameter $search is not currently supported on the Events resource.",
        "innerError": {
            "request-id": "b31c83fd-944c-4663-aa50-5d9ceb367e19",
            "date": "2016-11-17T18:37:45"
        }
    }
};

const _500_RES_INIT: ResponseInit = { status: 500 };
const _500_RES: Response =
    new Response(_500_RES_BODY, _500_RES_INIT);

describe('#handleResponse()', function() {
    it('passes through response to callback', function() {
        ResponseHandler.init(_200_RES, null, _200_RES_BODY, (err:GraphError, res) => {
            assert.equal(res, _200_RES.body);
        });
    });

    it('200 response => err is null', function() {
        ResponseHandler.init(_200_RES, null, _200_RES_BODY, (err:GraphError, res) => {
            assert.equal(err, null);
        });
    });
});

describe('#ParseResponse()', function() {
    it('extracts code and request-id from the JSON body of 500 errors', function() {
        ResponseHandler.init(_500_RES, null, _500_RES_BODY, (err:GraphError, res) => {
            assert.equal(err.code, _500_RES_BODY.error.code);
            assert.equal(err.requestId, _500_RES_BODY.error.innerError["request-id"]);
        });
    });
});

describe('#ParseError()', function() {
    it('res param in callback is null', function() {
        ResponseHandler.init(null, null, null, (err:GraphError, res) => {
            assert.equal(res, null);
            assert.equal(err.statusCode, -1);
        });
    });
});