"use strict";
let assert = require('assert');

const MicrosoftGraph = require("../lib/index.js");


const secrets = require('./secrets')
const client = MicrosoftGraph.init({
    authProvider: (done) => {
        done(null, secrets.accessToken);
    }
});

let cases = [];


// 404 without an error object
cases.push({
    url: "https://graph.microsoft.com/v1.0/users/e78341f8-fad2-4296-a24c-622616f0ad3d/photo/$value",
    statusCode: 404
});

// 404 that returns an error object
cases.push({
    url: "https://graph.microsoft.com/v1.0/users/notSupportedOperation",
    statusCode: 404,
    code: "Request_ResourceNotFound"
});

// 403 that returns an error object
cases.push({
    url: "https://graph.microsoft.com/v1.0/groups",
    statusCode: 403,
    code: "Authorization_RequestDenied"
});

// 400 that returns an error object
cases.push({
    url: "https://graph.microsoft.com/v1.0/me/drives/foobar",
    statusCode: 400,
    code: "invalidRequest"
});

// 501 that returns an error object
cases.push({
    url: "https://graph.microsoft.com/v1.0/me/events?$top=3&$search=foo",
    statusCode: 501,
    code: "SearchEvents"
})

describe('#testErrorParsing()', function() {
    for (let i=0; i<cases.length; i++) {
        let testCase = cases[i];
        it(testCase.url, function(done) {
            client.api(testCase.url).get((err, res) => {
                assert.equal(testCase.statusCode, err.statusCode);

                if ("code" in testCase) {
                    assert.equal(testCase.code, err.code);
                }
                done();
            });
        })
    }
});