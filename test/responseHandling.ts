/// <reference path="../typings/index.d.ts" />

import {ResponseHandler} from "../src/ResponseHandler"

const assert = require('assert');

const OK_SUPERAGENT_RES = {
  ok: true,
  body: {
    a: 1
  }
};


describe('#handleResponse()', function() {
    it('correctly passes through response with no err ', function() {        
        ResponseHandler.init(null, OK_SUPERAGENT_RES, (req, res) => {
            assert.equal(res, OK_SUPERAGENT_RES["body"]);
        })
    });

    it('correctly passes through response with no err ', function() {        
        ResponseHandler.init(null, OK_SUPERAGENT_RES, (req, res) => {
            assert.equal(res, OK_SUPERAGENT_RES["body"]);
        })
    });

});