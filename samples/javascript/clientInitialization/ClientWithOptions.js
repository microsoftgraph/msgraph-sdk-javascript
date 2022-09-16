/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

const { Client, SimpleAuthenticationProvider, ResponseType } = require("@microsoft/microsoft-graph-client");
require("isomorphic-fetch");

const token = "eyJ0eXAiOiJKV1QiLCJub25jZSI6IkxwSUswQm13dTVlQlE0Q2NtRDEwYTVlbDJDckI1ZHl3SHJXR2IyWWJ0Tk0iLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kNGNjN2E0Mi0zYzQ0LTQ0ZjMtYWFmMy02NjYzMDJhZWFiMDgvIiwiaWF0IjoxNjYzMzQ5NDc3LCJuYmYiOjE2NjMzNDk0NzcsImV4cCI6MTY2MzM1NTA2NywiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhUQUFBQUdia052VnNhc3VKRDZaZ0V1QmZBZHpjRXhHUGlpU0E5VDZJRCtNZ1BFaVRoMHdPWkszT0czOW5MbFdITFBqNVIiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIEV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkNoZXR0aWFyIiwiZ2l2ZW5fbmFtZSI6Im1qN3VzIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiNzYuMTQ2LjkwLjIyMyIsIm5hbWUiOiJOaWtpdGhhIFVkYXlrdW1hciBDaGV0dGlhciIsIm9pZCI6IjgxMzk1NmEzLTRhMzAtNDU5Ni05MTRmLWJmZDg2YTY1N2EwOSIsInBsYXRmIjoiMyIsInB1aWQiOiIxMDAzMjAwMEQyODRGQUNBIiwicmgiOiIwLkFWa0FRbnJNMUVRODgwU3E4MlpqQXE2ckNBTUFBQUFBQUFBQXdBQUFBQUFBQUFCWkFCVS4iLCJzY3AiOiJDYWxlbmRhcnMuUmVhZCBDYWxlbmRhcnMuUmVhZFdyaXRlIENvbnRhY3RzLlJlYWQgQ29udGFjdHMuUmVhZFdyaXRlIERldmljZU1hbmFnZW1lbnRBcHBzLlJlYWQuQWxsIERldmljZU1hbmFnZW1lbnRBcHBzLlJlYWRXcml0ZS5BbGwgRGV2aWNlTWFuYWdlbWVudE1hbmFnZWREZXZpY2VzLlJlYWQuQWxsIERldmljZU1hbmFnZW1lbnRNYW5hZ2VkRGV2aWNlcy5SZWFkV3JpdGUuQWxsIERldmljZU1hbmFnZW1lbnRTZXJ2aWNlQ29uZmlnLlJlYWQuQWxsIERldmljZU1hbmFnZW1lbnRTZXJ2aWNlQ29uZmlnLlJlYWRXcml0ZS5BbGwgRGlyZWN0b3J5LkFjY2Vzc0FzVXNlci5BbGwgRGlyZWN0b3J5LlJlYWQuQWxsIERpcmVjdG9yeS5SZWFkV3JpdGUuQWxsIEVudGl0bGVtZW50TWFuYWdlbWVudC5SZWFkV3JpdGUuQWxsIEZpbGVzLlJlYWQgRmlsZXMuUmVhZC5BbGwgRmlsZXMuUmVhZFdyaXRlIEZpbGVzLlJlYWRXcml0ZS5BbGwgR3JvdXAuUmVhZC5BbGwgR3JvdXAuUmVhZFdyaXRlLkFsbCBNYWlsLlJlYWQgTWFpbC5SZWFkLlNoYXJlZCBNYWlsLlJlYWRCYXNpYyBNYWlsLlJlYWRXcml0ZSBNYWlsLlJlYWRXcml0ZS5TaGFyZWQgTWFpbC5TZW5kIE1haWxib3hTZXR0aW5ncy5SZWFkV3JpdGUgTm90ZXMuQ3JlYXRlIE5vdGVzLlJlYWQgTm90ZXMuUmVhZC5BbGwgTm90ZXMuUmVhZFdyaXRlIE5vdGVzLlJlYWRXcml0ZS5BbGwgb3BlbmlkIE9yZ0NvbnRhY3QuUmVhZC5BbGwgUGVvcGxlLlJlYWQgUGVvcGxlLlJlYWQuQWxsIFByaW50ZXIuRnVsbENvbnRyb2wuQWxsIFByaW50ZXIuUmVhZC5BbGwgUHJpbnRlci5SZWFkV3JpdGUuQWxsIFByaW50ZXJTaGFyZS5SZWFkLkFsbCBQcmludGVyU2hhcmUuUmVhZFdyaXRlLkFsbCBwcm9maWxlIFJlcG9ydHMuUmVhZC5BbGwgU2l0ZXMuRnVsbENvbnRyb2wuQWxsIFNpdGVzLk1hbmFnZS5BbGwgU2l0ZXMuUmVhZC5BbGwgU2l0ZXMuUmVhZFdyaXRlLkFsbCBUYXNrcy5SZWFkIFRhc2tzLlJlYWQuU2hhcmVkIFRhc2tzLlJlYWRXcml0ZSBUYXNrcy5SZWFkV3JpdGUuU2hhcmVkIFVzZXIuUmVhZCBVc2VyLlJlYWQuQWxsIFVzZXIuUmVhZEJhc2ljLkFsbCBVc2VyLlJlYWRXcml0ZSBVc2VyLlJlYWRXcml0ZS5BbGwgZW1haWwiLCJzdWIiOiJ0b3BoMTJhRVkyWlc4d29zM1k2MWlaVzJqOWk1NU9ra0xZZEFPT2J0WkhzIiwidGVuYW50X3JlZ2lvbl9zY29wZSI6Ik5BIiwidGlkIjoiZDRjYzdhNDItM2M0NC00NGYzLWFhZjMtNjY2MzAyYWVhYjA4IiwidW5pcXVlX25hbWUiOiJuY2hldHRpYUBncmFwaGpzZGVtby5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJuY2hldHRpYUBncmFwaGpzZGVtby5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJHTGM2SURyLTgwdUUyZENZa24yRkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiLCJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX3N0Ijp7InN1YiI6Ik1aQlRJQVBBY0tRNE9KTG5ER3NFbkRkejE2QXM2ZkUtMnQ1ZV8tNkN1VEkifSwieG1zX3RjZHQiOjE1OTU1MzQ4MzF9.jLhN5nM6dpRmaDjmSpUbnZZ7n16ezASaiZjJx_MN6bH9x3pJ1_XfwReBuI83fi4rZi-vCdGX2EkcVVZjuhT5JgPtlp15V3UXX5-dV6Wbk8QJNzQb6bw98xBNCPfhcoBqsxEQYFg5lSNzIOoL-cbj0gZBfDEWzaed6Coer5MBy0xC0WLqNCeT9J6t1lIMEYKjykikm1NejsqioYKNQK3383vKcAAGaTqLO_Yhdg-9YnEpUNKYifyXolnvwgbmktQyoEh_L1U7Fll3AUsP_g_7IPOBdBIr3BNzHJsijz0r6kvH3dxS1_1aFKwxTAs594gYgqu4Yf7kmMI8fmESCZajtQ";
const client = Client.init({
	defaultVersion: "v1.0",
	debugLogging: true,
	authProvider: new SimpleAuthenticationProvider(async () => {
        return token;
    }, ["scope1", "scope2"]),
});

// client
// 	.api("/me").responseType(ResponseType.RAW)
// 	.get({},{$select:"displayName"})
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

client
	.api("/groups/079ca70f-7e38-45c2-9fb1-9f04fd2c059c").responseType(ResponseType.RAW)
	.delete()
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});

module.exports = {
	client: client,
};
