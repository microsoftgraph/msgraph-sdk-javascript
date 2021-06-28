const { Client } = require("@microsoft/microsoft-graph-client");
const { TokenCredentialAuthenticationProvider } = require("@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials");
const { ClientSecretCredential } = require("@azure/identity");
const { clientId, clientSecret, scopes, tenantId } = require("./secrets");

require("isomorphic-fetch");

const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);
const authProvider = new TokenCredentialAuthenticationProvider(credential, { scopes: [scopes] });
const client = Client.initWithMiddleware({
    debugLogging: true,
    authProvider,
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