"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var test_helper_1 = require("../test-helper");
var client = test_helper_1.getClient();
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
    // oData params should work with and without $
    "me?$select=displayName": "https://graph.microsoft.com/v1.0/me?$select=displayName",
    "me?select=displayName": "https://graph.microsoft.com/v1.0/me?select=displayName",
    "https://graph.microsoft.com/beta/me?select=displayName": "https://graph.microsoft.com/beta/me?select=displayName"
};
describe("urlParsing.ts", function () {
    describe('parsePath', function () {
        var _loop_1 = function (path) {
            it('should correctly parse ' + path, function () {
                var request = client.api(path);
                chai_1.assert.equal(request["buildFullUrl"](), testCases[path]);
            });
        };
        for (var path in testCases) {
            _loop_1(path);
        }
    });
});
//# sourceMappingURL=urlParsing.js.map