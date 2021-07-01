/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { Client } from "@microsoft/microsoft-graph-client";

const error = "error throw by the authentication handler";

export const client = Client.init({
	defaultVersion: "v1.0",
	debugLogging: true,
	authProvider: (done) => {
		done(error, "ACCESS_TOKEN");
	},
});

// Following is the example of how to make requests to the Microsoft Graph API using the client instance

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
