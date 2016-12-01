"use strict";
const GraphRequest_1 = require("../src/GraphRequest");
const assert = require('assert');
const OK_SUPERAGENT_RES = {
    ok: true,
    body: {
        a: 1
    }
};
describe('#handleResponse()', function () {
    it('should correctly pass through response with no err ', function () {
        GraphRequest_1.GraphRequest.handleResponse(null, OK_SUPERAGENT_RES, (req, res) => {
            assert.equal(res, OK_SUPERAGENT_RES["body"]);
        });
    });
});
//# sourceMappingURL=responseHandling.js.map