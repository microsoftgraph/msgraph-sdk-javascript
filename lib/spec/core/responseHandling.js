"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseHandler_1 = require("../../src/ResponseHandler");
var assert = require("assert");
var _200_SUPERAGENT_RES = {
    ok: true,
    statusCode: 200,
    body: {
        a: 1
    }
};
var _500_SUPERAGENT_RES = {
    ok: false,
    response: {
        body: {
            error: {
                "code": "SearchEvents",
                "message": "The parameter $search is not currently supported on the Events resource.",
                "innerError": {
                    "request-id": "b31c83fd-944c-4663-aa50-5d9ceb367e19",
                    "date": "2016-11-17T18:37:45"
                }
            }
        }
    },
    statusCode: 500
};
describe('#handleResponse()', function () {
    it('passes through response to callback', function () {
        ResponseHandler_1.ResponseHandler.init(null, _200_SUPERAGENT_RES, function (err, res) {
            assert.equal(res, _200_SUPERAGENT_RES.body);
        });
    });
    it('200 response => err is null', function () {
        ResponseHandler_1.ResponseHandler.init(null, _200_SUPERAGENT_RES, function (err, res) {
            assert.equal(err, null);
        });
    });
});
describe('#ParseError()', function () {
    it('500 error => res param in callback is null', function () {
        ResponseHandler_1.ResponseHandler.init(null, _500_SUPERAGENT_RES, function (err, res) {
            assert.equal(res, null);
        });
    });
    it('extracts code and request-id from the JSON body of 500 errors', function () {
        ResponseHandler_1.ResponseHandler.init(null, _500_SUPERAGENT_RES, function (err, res) {
            assert.equal(err.code, _500_SUPERAGENT_RES.response.body.error.code);
            assert.equal(err.requestId, _500_SUPERAGENT_RES.response.body.error.innerError["request-id"]);
        });
    });
    it('parses a 404 superagent error', function () {
        var rawErr = JSON.parse('{"original":null,"response":{"req":{"method":"GET","url":"https://graph.microsoft.com/v1.0/users/4470c514-8ac5-4f2d-8116-870d2c41bdf6/photo/$value","headers":{"authorization":"Bearer abc","cache-control":"no-cache","sdkversion":"graph-js-0.2.0"}},"xhr":{},"text":null,"statusText":"Not Found","statusCode":404,"status":404,"statusType":4,"info":false,"ok":false,"clientError":true,"serverError":false,"error":{"status":404,"method":"GET","url":"https://graph.microsoft.com/v1.0/users/4470c514-8ac5-4f2d-8116-870d2c41bdf6/photo/$value"},"accepted":false,"noContent":false,"badRequest":false,"unauthorized":false,"notAcceptable":false,"notFound":true,"forbidden":false,"headers":{"client-request-id":"3726fdf7-8ae6-47c0-9f6a-5847982738d2","content-type":"text/plain","cache-control":"private","request-id":"3726fdf7-8ae6-47c0-9f6a-5847982738d2"},"header":{"client-request-id":"3726fdf7-8ae6-47c0-9f6a-5847982738d2","content-type":"text/plain","cache-control":"private","request-id":"3726fdf7-8ae6-47c0-9f6a-5847982738d2"},"type":"text/plain","body":null},"status":404}');
        var graphErr = ResponseHandler_1.ResponseHandler.ParseError(rawErr);
        assert.equal(graphErr.statusCode, 404);
    });
});
//# sourceMappingURL=responseHandling.js.map