import * as assert from 'assert';

import { Client as GraphClient } from "../../src/index"

const client = GraphClient.init();

let cases = [];

cases.push({
    url: "https://graph.microsoft.com/v1.0/me?$select=displayName",
    request: client.api("/me")
                .select("displayName")
});

cases.push({
    url:"https://graph.microsoft.com/v1.0/me?$select=displayName",
    request: client.api("/me")
                .select(["displayName"])
});

cases.push({
    url: "https://graph.microsoft.com/v1.0/me?$select=displayName,jobTitle",
    request: client.api("me")
                .select(["displayName", "jobTitle"])
});

cases.push({
    url: "https://graph.microsoft.com/v1.0/me?$select=displayName,jobTitle",
    request: client.api("/me")
                .select(["displayName"])
                .select("jobTitle")
});

cases.push({
    url: "https://graph.microsoft.com/beta/me?$select=displayName,jobTitle",
    request: client.api("/me")
            .version("beta")
            .select(["displayName"])
            .select("jobTitle")
});

cases.push({
    url: "https://graph.microsoft.com/beta/me?$select=displayName,jobTitle",
    request: client.api("/me")
                .version("beta")
                .select(["displayName"])
                .select("jobTitle")
});


// Need to figure out type signature of select() to allow string, array of strings, and unlimited string parameters
// cases.push({
//     url: "https://graph.microsoft.com/beta/me?$select=displayName,jobTitle,mailNickname",
//     request: client.api("/me")
//                 .version("beta")
//                 .select("displayName", "jobTitle", "mailNickname")
// })

cases.push({
    url: "https://graph.microsoft.com/beta/me/people?$select=displayName,title&$count=true",
    request: client.api("/me/people")
                .version("beta")
                .select(["displayName"])
                .select("title")
                .count(true)
});

cases.push({
    url: "https://graph.microsoft.com/beta/me/people?$select=displayName,title&$count=true&$search=senior",
    request: client.api("/me/people")
                .version("beta")
                .select(['displayName', 'title'])
                .count(true)
                .query({"$search": "senior"})
});

cases.push({
    url: "https://graph.microsoft.com/beta/me/people?$select=displayName,title&$count=true&$search=senior",
    request: client.api("/me/people")
                .version("beta")
                .select(['displayName', 'title'])
                .count(true)
                .query("$search=senior")
});

cases.push({
    url: "https://graph.microsoft.com/v1.0/me/drive/root?$expand=children($select=name),permissions",
    request: client.api("me/drive/root")
            .expand("children($select=name)")
            .expand("permissions")
});

describe('#buildFullUrl()', function() {
    for (let i=0; i<cases.length; i++) {
        let testCase = cases[i];
        it('should correctly build ' + testCase.url, function() {
            assert.equal(testCase.url, testCase.request.buildFullUrl());
        })
    }
});