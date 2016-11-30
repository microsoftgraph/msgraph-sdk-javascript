"use strict";
const GraphRequest_1 = require("../src/GraphRequest");
const assert = require('assert');
exports.OK_SUPERAGENT_RES = {
    ok: true,
    body: {
        a: 1
    }
};
describe('#handleResponse()', function () {
    it('should correctly pass through response with no err ', function () {
        GraphRequest_1.GraphRequest.handleResponse(null, exports.OK_SUPERAGENT_RES, (req, res) => {
            assert.equal(res, exports.OK_SUPERAGENT_RES["bodyd"]);
        });
    });
});
//# sourceMappingURL=responseHandling.js.map