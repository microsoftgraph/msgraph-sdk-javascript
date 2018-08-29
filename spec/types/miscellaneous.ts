/*
    Tests in this file tries to cover functionality in Graph API, it may not contain exhaustive end points. Functionality
    includes OData features, GET on complexType, GET on entity, POST an entity, POST an action etc..

    Please make sure the following before running the test:
        1. For the tests to run, make sure that all the app permissions are there. 
            Visit https://developer.microsoft.com/en-us/graph/docs/concepts/permissions_reference for further details
        2. It is also a requirement to add access token in secrets.js.

    Please follow the following steps to run the tests:
        1. cd into spec/types directory.
        2. npm install
        3. npm run test:types
*/

import { assert } from 'chai'
import { getClient, randomString } from "../test-helper"
import * as fs from "fs";

declare const describe, it;

describe('Fetch messages', function () {
    this.timeout(10 * 1000);
    /* 
        Following test assumes that number of messages exceed the default number for @odata.nextLink 
        to exist
    */
    it('Fetch the messages', function (done) {
        return getClient().api("/me/messages").get((err, res) => {
            assert.isTrue(err === null);
            assert.isDefined(res['@odata.context']);
            assert.isDefined(res['@odata.nextLink']);
            assert.isDefined(res['value']);
            done();
        });
    });

    /* 
        Following test assumes that number of messages exceed the default number for @odata.nextLink to 
        exist
    */
    it('Fetch the messages with $top', function (done) {
        return getClient().api("/me/messages?$top=5").get((err, res) => {
            assert.isTrue(err === null);
            assert.isDefined(res['@odata.context']);
            assert.isDefined(res['@odata.nextLink']);
            assert.isDefined(res['value']);
            assert.isTrue(res.value.length == 5);
            done();
        });
    });

    /* 
      Following test assumes that number of messages exceed the default number for @odata.nextLink to exist
    */
    it('Fetch the messages with $select', function (done) {
        return getClient().api("/me/messages?$select=createdDateTime").get((err, res) => {
            assert.isTrue(err === null);
            assert.isDefined(res['@odata.context']);
            assert.isDefined(res['@odata.nextLink']);
            assert.isDefined(res['value']);
            assert.isDefined(res.value[0]['createdDateTime']);
            done();
        });
    });
});

describe('GET/PATCH mailBoxSettings', function () {
    this.timeout(10 * 1000);
    it('GET mailBoxSettings', function (done) {
        return getClient().api("/me/mailboxSettings").get((err, res) => {
            assert.isDefined(res['@odata.context']);
            assert.isDefined(res['archiveFolder']);
            assert.isDefined(res['timeZone']);
            assert.isDefined(res['automaticRepliesSetting']);
            assert.isDefined(res['language']);
            assert.isDefined(res['workingHours']);
            done();
        });
    });

    it('PATCH mailBoxSettings', function (done) {
        return getClient().api("/me/mailboxSettings").patch({ "timeZone": "India Standard Time" }, (err, res) => {
            assert.isDefined(res['@odata.context']);
            assert.isDefined(res['timeZone']);
            assert.isTrue(res['timeZone'] == 'India Standard Time');
            done();
        });
    });
});

describe('Fetch inbox folder', function () {
    this.timeout(10 * 1000);
    it('GET me/mailfolders/inbox', function (done) {
        return getClient().api("/me/mailfolders/inbox").get((err, res) => {
            assert.isTrue(err === null);
            assert.isDefined(res['@odata.context']);
            assert.isDefined(res['id']);
            assert.isDefined(res['displayName']);
            assert.isDefined(res['parentFolderId']);
            assert.isDefined(res['childFolderCount']);
            assert.isDefined(res['unreadItemCount']);
            assert.isDefined(res['totalItemCount']);
            done();
        });
    });
});

describe('Fetch users and groups', function () {
    this.timeout(10 * 1000);
    it('GET users/{id}', function (done) {
        return getClient().api("/users").get((err, res) => {
            assert.isTrue(err === null);
            assert.isDefined(res);
            assert.isDefined(res['value']);
            const id = res['value'][0]['id'];
            return getClient().api("/users/" + id).get((err, res) => {
                assert.isTrue(err === null);
                assert.isDefined(res);
                assert.isTrue(res['id'] == id);
                done();
            });
        });
    });

    /* 
        Following test assumes that a group has been made in the tenant.
    */
    it('GET groups/{id}', function (done) {
        return getClient().api("/groups").get((err, res) => {
            assert.isTrue(err === null);
            assert.isDefined(res);
            const id = res['value'][0]['id'];
            return getClient().api("/groups/" + id).get((err, res) => {
                assert.isTrue(err === null);
                assert.isDefined(res);
                assert.isTrue(res['id'] == id);
                done();
            });
        });
    });
});

describe('Test for actions and functions', function () {
    this.timeout(10 * 1000);
    it('GET me/findrooms', function (done) {
        return getClient().api("/me/findRooms").version("beta").get((err, res) => {
            assert.isTrue(err === null);
            assert.isDefined(res['@odata.context']);
            assert.isDefined(res['value']);
            done();
        });
    });

    it('POST me/getMailTips', function (done) {
        return getClient().api("/me/getMailTips").version("beta").post({
            "EmailAddresses": [
                "danas@contoso.onmicrosoft.com",
                "fannyd@contoso.onmicrosoft.com"
            ],
            "MailTipsOptions": "automaticReplies, mailboxFullStatus"
        }, (err, res) => {
            assert.isTrue(err === null);
            assert.isDefined(res['@odata.context']);
            assert.isDefined(res['value']);
            assert.isUndefined(res['error']);
            done();
        });
    });
});

describe('Test for GET and PUT binary data', function () {
    this.timeout(10 * 1000);
    it('PUT me/photo', function (done) {
        const fs = require("fs");
        var nb = fs.readFileSync('sample.png');
        return getClient().api("/me/photo/$value").put(nb, (err, res) => {
            assert.isTrue(err === null);
            done();
        });
    });

    it('GET me/photo', function (done) {
        return getClient().api("/me/photo/$value").get((err, res) => {
            assert.isTrue(err === null);
            done();
        });
    });
});

describe("Test for PUT and GET streams", function () {
    this.timeout(10 * 1000);
    beforeEach((done) => {
        setTimeout(function () {
            done();
        }, 1000);
    });
    const imageFileName = `stream-image-${randomString()}.png`;
    it("Uploading drive item as a stream", (done)  => {
        let stream = fs.createReadStream('./sample.png');
        return getClient().api(`/me/drive/root/children/${imageFileName}/content`).putStream(stream, (err) => {
            assert.isTrue(err === null);
            done();
        });
    });

    it("GET drive item as a stream", (done) => {
        return getClient().api(`/me/drive/root:${imageFileName}:/content`).getStream((err, stream) => {
            let writeStream = fs.createWriteStream(`./${imageFileName}`);
            stream.pipe(writeStream).on('error', assert.fail);
            done();
        })
    });
});




