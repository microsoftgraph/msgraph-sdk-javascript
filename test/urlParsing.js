"use strict";
var MicrosoftGraph = require("../lib/index.js");
var assert = require('assert');

var client = MicrosoftGraph.init({});

let testCases = {
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
}

describe('#parsePath()', function() {
    for (let path in testCases) {
        it('should correctly parse ' + path, function() {        
            var request = client.api(path);
            assert.equal(request.buildFullUrl(), testCases[path]);
        });
    }
})