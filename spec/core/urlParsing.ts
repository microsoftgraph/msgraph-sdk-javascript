import * as assert from 'assert';

import {Client as GraphClient} from "../../src/index"

const client = GraphClient.init();


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

    // oData params should work with and without $
    "me?$select=displayName": "https://graph.microsoft.com/v1.0/me?$select=displayName",
    "me?select=displayName": "https://graph.microsoft.com/v1.0/me?select=displayName",
    "https://graph.microsoft.com/beta/me?select=displayName": "https://graph.microsoft.com/beta/me?select=displayName"
}

describe('#parsePath()', function() {
    for (let path in testCases) {
        it('should correctly parse ' + path, function() {        
            var request = client.api(path);
            assert.equal(request.buildFullUrl(), testCases[path]);
        });
    }
});