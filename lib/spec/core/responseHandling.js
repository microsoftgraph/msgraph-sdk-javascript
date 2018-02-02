"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("whatwg-fetch");
var ResponseHandler_1 = require("../../src/ResponseHandler");
var assert = require("assert");
var _200_SUPERAGENT_RES_BODY = { a: 1 };
var _200_SUPERAGENT_RES_INIT = { status: 200 };
var _200_SUPERAGENT_RES = new Response(_200_SUPERAGENT_RES_BODY, _200_SUPERAGENT_RES_INIT);
var _500_SUPERAGENT_RES_BODY = {
    error: {
        "code": "SearchEvents",
        "message": "The parameter $search is not currently supported on the Events resource.",
        "innerError": {
            "request-id": "b31c83fd-944c-4663-aa50-5d9ceb367e19",
            "date": "2016-11-17T18:37:45"
        }
    }
};
var _500_SUPERAGENT_RES_INIT = { status: 500 };
var _500_SUPERAGENT_RES = new Response(_200_SUPERAGENT_RES_BODY, _200_SUPERAGENT_RES_INIT);
var error = new Error();
error.statusCode = 404;
describe('#handleResponse()', function () {
    it('passes through response to callback', function () {
        ResponseHandler_1.ResponseHandler.init(_200_SUPERAGENT_RES, null, _200_SUPERAGENT_RES_BODY, function (err, res) {
            assert.equal(res, _200_SUPERAGENT_RES.body);
        });
    });
    it('200 response => err is null', function () {
        ResponseHandler_1.ResponseHandler.init(_200_SUPERAGENT_RES, null, _200_SUPERAGENT_RES_BODY, function (err, res) {
            assert.equal(err, null);
        });
    });
});
describe('#ParseResponse()', function () {
    it('extracts code and request-id from the JSON body of 500 errors', function () {
        ResponseHandler_1.ResponseHandler.init(_500_SUPERAGENT_RES, null, _500_SUPERAGENT_RES_BODY, function (err, res) {
            assert.equal(err.code, _500_SUPERAGENT_RES_BODY.error.code);
            assert.equal(err.requestId, _500_SUPERAGENT_RES_BODY.error.innerError["request-id"]);
        });
    });
});
describe('#ParseError()', function () {
    it('500 error => res param in callback is null', function () {
        ResponseHandler_1.ResponseHandler.init(null, null, null, function (err, res) {
            assert.equal(res, null);
        });
    });
    it('parses a 404 superagent error', function () {
        var graphErr = ResponseHandler_1.ResponseHandler.ParseError(error);
        ResponseHandler_1.ResponseHandler.init(null, null, null, function (err, res) {
            assert.equal(graphErr.statusCode, 404);
        });
    });
});
//# sourceMappingURL=responseHandling.js.map