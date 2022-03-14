/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

const { Client, SimpleAuthenticationProvider } = require("@microsoft/microsoft-graph-client");
require("isomorphic-fetch");
const client = Client.init({
	defaultVersion: "v1.0",
	debugLogging: true,
	authProvider: new SimpleAuthenticationProvider(async () => {
        return "ACCESS_TOKEN";
    }, ["scope1", "scope2"]),
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
	client: client,
};
