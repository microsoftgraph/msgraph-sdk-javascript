"use strict";
const ResponseHandler_1 = require("../src/ResponseHandler");
const assert = require('assert');
const _200_SUPERAGENT_RES = {
    ok: true,
    statusCode: 200,
    body: {
        a: 1
    }
};
const _500_SUPERAGENT_RES = {
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
    it('passes through response with no err', function () {
        ResponseHandler_1.ResponseHandler.init(null, _200_SUPERAGENT_RES, (err, res) => {
            assert.equal(res, _200_SUPERAGENT_RES.body);
        });
    });
});
describe('#ParseError()', function () {
    it('500 error => res param in callback is null', function () {
        ResponseHandler_1.ResponseHandler.init(null, _500_SUPERAGENT_RES, (err, res) => {
            assert.equal(res, null);
        });
    });
    it('extracts code and request-id from the JSON body of 500 errors', function () {
        ResponseHandler_1.ResponseHandler.init(null, _500_SUPERAGENT_RES, (err, res) => {
            assert.equal(err.code, _500_SUPERAGENT_RES.response.body.error.code);
            assert.equal(err.requestId, _500_SUPERAGENT_RES.response.body.error.innerError["request-id"]);
        });
    });
});
//# sourceMappingURL=responseHandling.js.map