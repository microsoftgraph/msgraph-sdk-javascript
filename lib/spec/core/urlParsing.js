"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var index_1 = require("../../src/index");
var client = index_1.Client.init();
var testCases = {
    "/me": "https://graph.microsoft.com/v1.0/me",
    "/me/": "https://graph.microsoft.com/v1.0/me/",
    "me": "https://graph.microsoft.com/v1.0/me",
    "me/events": "https://graph.microsoft.com/v1.0/me/events",
    "/me/events": "https://graph.microsoft.com/v1.0/me/events",
    "https://graph.microsoft.com/v1.0/me/events": "https://graph.microsoft.com/v1.0/me/events",
    "https://graph.microsoft.com/beta/me/events?$filter=startswith(subject, 'update')": "https://graph.microsoft.com/beta/me/events?$filter=startswith(subject, 'update')",
    "me/events?$filter=startswith(subject, 'update')": "https://graph.microsoft.com/v1.0/me/events?$filter=startswith(subject, 'update')",
    "/me?a=b": "https://graph.microsoft.com/v1.0/me?a=b",
    "/me?$filter=b&c=d": "https://graph.microsoft.com/v1.0/me?$filter=b&c=d",
    "me?$filter=b&c=d": "https://graph.microsoft.com/v1.0/me?$filter=b&c=d",
    "me?$select=displayName": "https://graph.microsoft.com/v1.0/me?$select=displayName",
    "me?select=displayName": "https://graph.microsoft.com/v1.0/me?select=displayName",
    "https://graph.microsoft.com/beta/me?select=displayName": "https://graph.microsoft.com/beta/me?select=displayName"
};
describe('#parsePath()', function () {
    var _loop_1 = function (path) {
        it('should correctly parse ' + path, function () {
            var request = client.api(path);
            assert.equal(request.buildFullUrl(), testCases[path]);
        });
    };
    for (var path in testCases) {
        _loop_1(path);
    }
});
//# sourceMappingURL=urlParsing.js.map