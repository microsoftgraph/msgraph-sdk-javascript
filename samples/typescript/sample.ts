/// <reference path="../../typings/index.d.ts" />

// For more samples in JavaScript, see https://github.com/microsoftgraph/msgraph-sdk-javascript/blob/master/samples/node/node-sample.js

const secrets = require("../node/secrets");

// production apps should import from "msgraph-sdk-javascript"; to grab the NPM module with the types declarations

import {Client as GraphClient} from "../../lib/src/index";


// These are the typings for graph nodes that are published separetlely (User field types, etc.)
// To reference Microsoft Graph typings, see directions at https://github.com/microsoftgraph/msgraph-typescript-typings/
// The dependency has been added in typings.json, so just run typings install
import * as MicrosoftGraph from "microsoft-graph"


const client = GraphClient.init({
    authProvider: function(done) {
        done(null, secrets.accessToken);
    }
});

// Get the name of the authenticated user
client
    .api('/me')
    .select("displayName")
    .get((err, user:MicrosoftGraph.User) => {
        if (err) {
            console.error(err);
            return;
        }
        
        console.log(user.displayName);
    });

/*
// GET /users
client
    .api('/users')
    .version('beta')
    .get((err, res) => {
        if (err) {
            console.log(err);
            return;
        }

        let users:[MicrosoftGraph.User] = res.value;
        console.log("Found", users.length, "users");

        for (let user of users) {
            console.log(user.displayName, user.jobTitle, user.officeLocation);
        }
    });

// List my recent messages
client
    .api("/me/messages")
    .get((err, res) => {
        if (err) {
            console.error(err)
            return;
        }

        let messages:[MicrosoftGraph.Message] = res.value;
        for (let msg of messages) { //iterate through recent messages
            console.log(msg.subject);
            if (msg.toRecipients.length > 0)
               console.log(msg.toRecipients[0].emailAddress.address);
        }

    })
*/