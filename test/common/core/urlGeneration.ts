// /**
//  * -------------------------------------------------------------------------------------------
//  * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
//  * See License in the project root for license information.
//  * -------------------------------------------------------------------------------------------
//  */

// import { assert } from "chai";

// import { getClient } from "../../test-helper";

// const client = getClient();
// const cases = [];

// cases.push({
// 	url: "https://graph.microsoft.com/v1.0/me?$select=displayName",
// 	request: client.api("/me").select("displayName"),
// });

// cases.push({
// 	url: "https://graph.microsoft.com/v1.0/me?$select=displayName",
// 	request: client.api("/me").select("displayName"),
// });

// cases.push({
// 	url: "https://graph.microsoft.com/v1.0/me?$select=displayName,jobTitle",
// 	request: client.api("me").select(...["displayName", "jobTitle"]),
// });

// cases.push({
// 	url: "https://graph.microsoft.com/v1.0/me?$select=displayName,jobTitle",
// 	request: client.api("/me").select("displayName").select("jobTitle"),
// });

// cases.push({
// 	url: "https://graph.microsoft.com/beta/me?$select=displayName,jobTitle",
// 	request: client.api("/me").version("beta").select("displayName").select("jobTitle"),
// });

// cases.push({
// 	url: "https://graph.microsoft.com/beta/me?$select=displayName,jobTitle",
// 	request: client
// 		.api("/me")
// 		.version("beta")
// 		.select(...["displayName"])
// 		.select("jobTitle"),
// });

// // Need to figure out type signature of select() to allow string, array of strings, and unlimited string parameters
// // cases.push({
// //     url: "https://graph.microsoft.com/beta/me?$select=displayName,jobTitle,mailNickname",
// //     request: client.api("/me")
// //                 .version("beta")
// //                 .select("displayName", "jobTitle", "mailNickname")
// // })

// cases.push({
// 	url: "https://graph.microsoft.com/beta/me/people?$select=displayName,title&$count=true",
// 	request: client
// 		.api("/me/people")
// 		.version("beta")
// 		.select(...["displayName"])
// 		.select("title")
// 		.count(true),
// });

// cases.push({
// 	url: "https://graph.microsoft.com/beta/me/people?$select=displayName,title&$count=true&$search=senior",
// 	request: client
// 		.api("/me/people")
// 		.version("beta")
// 		.select(...["displayName", "title"])
// 		.count(true)
// 		.query({ $search: "senior" }),
// });

// cases.push({
// 	url: "https://graph.microsoft.com/beta/me/people?$select=displayName,title&$count=true&$search=senior",
// 	request: client
// 		.api("/me/people")
// 		.version("beta")
// 		.select(...["displayName", "title"])
// 		.count(true)
// 		.query("$search=senior"),
// });

// cases.push({
// 	url: "https://graph.microsoft.com/beta/me/people?$select=displayName,title,id&$count=false&$expand=a($expand=a,b)",
// 	request: client.api("/me/people").version("beta").select("displayName", "title").count(true).expand("a($expand=a,b)").query("$select=id").query("$count=false"),
// });

// cases.push({
// 	url: "https://graph.microsoft.com/v1.0/me/people?$select=displayName,title,id&select=value",
// 	request: client
// 		.api("/me/people")
// 		.version("v1.0")
// 		.select(...["displayName", "title"])
// 		.query({ select: "value" })
// 		.query({ $select: "id" }),
// });

// // handling an invalid input
// cases.push({
// 	url: "https://graph.microsoft.com/v1.0/me/people?$select=displayName,title&select=value&test",
// 	request: client
// 		.api("/me/people")
// 		.version("v1.0")
// 		.select(...["displayName", "title"])
// 		.query({ select: "value" })
// 		.query("test"),
// });

// // handling an invalid input
// cases.push({
// 	url: "https://graph.microsoft.com/v1.0/me/people?$expand=address($select=home,$expand=city)&$select=home,displayName,title&select=value&test",
// 	request: client
// 		.api("/me/people?$expand=address($select=home,$expand=city)&$select=home")
// 		.version("v1.0")
// 		.select(...["displayName", "title"])
// 		.query({ select: "value" })
// 		.query("test"),
// });

// cases.push({
// 	url: "https://graph.microsoft.com/v1.0/me/people?$expand=home($select=home)&name=test",
// 	request: client.api("/me/people").query("?name=test&$expand=home($select=home)"),
// });
// cases.push({
// 	url: "https://graph.microsoft.com/v1.0/me/people?$expand=home($select=home)&name=test",
// 	request: client.api("/me/people?name=test&$expand=home($select=home)"),
// });

// cases.push({
// 	url: "https://graph.microsoft.com/v1.0/me/drive/root?$expand=children($select=name),permissions",
// 	request: client.api("me/drive/root").expand("children($select=name)").expand("permissions"),
// });

// describe("urlGeneration.ts", () => {
// 	describe("buildFullUrl", () => {
// 		for (const testCase of cases) {
// 			it("should correctly build " + testCase.url, () => {
// 				assert.equal(testCase.url, testCase.request["buildFullUrl"]());
// 			});
// 		}
// 	});
// });
