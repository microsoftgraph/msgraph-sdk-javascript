const { Client } = require("@microsoft/microsoft-graph-client");
require("isomorphic-fetch");

const error = "error throw by the authentication handler";

const client = Client.init({
    defaultVersion: "v1.0",
    debugLogging: true,
    authProvider: (done) => {
        done(error, "ACCESS_TOKEN");
    },
});

client
    .api("/me")
    .select("displayName")
    .get()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = {
    client: client
};

