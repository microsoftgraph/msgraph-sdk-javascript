import { GraphServiceClient } from "../code/graphServiceClient";
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary";
//import { Auth } from "./auth"

import { SimpleAuthenticationProvider } from "@microsoft/microsoft-graph-client";
import { Message } from "../code/models/microsoft/graph";





const token = "eyJ0eXAiOiJKV1QiLCJub25jZSI6InBpeExUYVppZmZLUWl0Rm9zZ3VtVlpiVks5REFlQ1RBLWlUeDBFaFNEWU0iLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kNGNjN2E0Mi0zYzQ0LTQ0ZjMtYWFmMy02NjYzMDJhZWFiMDgvIiwiaWF0IjoxNjQ3NDU0MDE2LCJuYmYiOjE2NDc0NTQwMTYsImV4cCI6MTY0NzQ1ODg0MiwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkUyWmdZTWpUWW1KazVlZmp1eTFhbVdOaEp1dzNuNC9CVmlOWC9tRmh3bVdtdnA2S1dBQT0iLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIEV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkNoZXR0aWFyIiwiZ2l2ZW5fbmFtZSI6Inp5YXlhbCIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjczLjE2OS4xNDguNzIiLCJuYW1lIjoiTmlraXRoYSBVZGF5a3VtYXIgQ2hldHRpYXIiLCJvaWQiOiI4MTM5NTZhMy00YTMwLTQ1OTYtOTE0Zi1iZmQ4NmE2NTdhMDkiLCJwbGF0ZiI6IjMiLCJwdWlkIjoiMTAwMzIwMDBEMjg0RkFDQSIsInB3ZF9leHAiOiIwIiwicHdkX3VybCI6Imh0dHBzOi8vcG9ydGFsLm1pY3Jvc29mdG9ubGluZS5jb20vQ2hhbmdlUGFzc3dvcmQuYXNweCIsInJoIjoiMC5BVmtBUW5yTTFFUTg4MFNxODJaakFxNnJDQU1BQUFBQUFBQUF3QUFBQUFBQUFBQlpBQlUuIiwic2NwIjoiQ2FsZW5kYXJzLlJlYWQgQ2FsZW5kYXJzLlJlYWRXcml0ZSBDb250YWN0cy5SZWFkIENvbnRhY3RzLlJlYWRXcml0ZSBEaXJlY3RvcnkuQWNjZXNzQXNVc2VyLkFsbCBEaXJlY3RvcnkuUmVhZC5BbGwgRGlyZWN0b3J5LlJlYWRXcml0ZS5BbGwgRW50aXRsZW1lbnRNYW5hZ2VtZW50LlJlYWRXcml0ZS5BbGwgRmlsZXMuUmVhZCBGaWxlcy5SZWFkLkFsbCBGaWxlcy5SZWFkV3JpdGUgRmlsZXMuUmVhZFdyaXRlLkFsbCBHcm91cC5SZWFkLkFsbCBHcm91cC5SZWFkV3JpdGUuQWxsIE1haWwuUmVhZCBNYWlsLlJlYWQuU2hhcmVkIE1haWwuUmVhZEJhc2ljIE1haWwuUmVhZFdyaXRlIE1haWwuUmVhZFdyaXRlLlNoYXJlZCBNYWlsLlNlbmQgTWFpbGJveFNldHRpbmdzLlJlYWRXcml0ZSBOb3Rlcy5DcmVhdGUgTm90ZXMuUmVhZCBOb3Rlcy5SZWFkLkFsbCBOb3Rlcy5SZWFkV3JpdGUgTm90ZXMuUmVhZFdyaXRlLkFsbCBvcGVuaWQgT3JnQ29udGFjdC5SZWFkLkFsbCBQZW9wbGUuUmVhZCBQZW9wbGUuUmVhZC5BbGwgUHJpbnRlci5GdWxsQ29udHJvbC5BbGwgUHJpbnRlci5SZWFkLkFsbCBQcmludGVyLlJlYWRXcml0ZS5BbGwgUHJpbnRlclNoYXJlLlJlYWQuQWxsIFByaW50ZXJTaGFyZS5SZWFkV3JpdGUuQWxsIHByb2ZpbGUgUmVwb3J0cy5SZWFkLkFsbCBTaXRlcy5GdWxsQ29udHJvbC5BbGwgU2l0ZXMuTWFuYWdlLkFsbCBTaXRlcy5SZWFkLkFsbCBTaXRlcy5SZWFkV3JpdGUuQWxsIFRhc2tzLlJlYWQgVGFza3MuUmVhZC5TaGFyZWQgVGFza3MuUmVhZFdyaXRlIFRhc2tzLlJlYWRXcml0ZS5TaGFyZWQgVXNlci5SZWFkIGVtYWlsIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoidG9waDEyYUVZMlpXOHdvczNZNjFpWlcyajlpNTVPa2tMWWRBT09idFpIcyIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJOQSIsInRpZCI6ImQ0Y2M3YTQyLTNjNDQtNDRmMy1hYWYzLTY2NjMwMmFlYWIwOCIsInVuaXF1ZV9uYW1lIjoibmNoZXR0aWFAZ3JhcGhqc2RlbW8ub25taWNyb3NvZnQuY29tIiwidXBuIjoibmNoZXR0aWFAZ3JhcGhqc2RlbW8ub25taWNyb3NvZnQuY29tIiwidXRpIjoiUnhWVEJLVXNZazJHQUgzQko2QV9BQSIsInZlciI6IjEuMCIsIndpZHMiOlsiNjJlOTAzOTQtNjlmNS00MjM3LTkxOTAtMDEyMTc3MTQ1ZTEwIiwiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19zdCI6eyJzdWIiOiJNWkJUSUFQQWNLUTRPSkxuREdzRW5EZHoxNkFzNmZFLTJ0NWVfLTZDdVRJIn0sInhtc190Y2R0IjoxNTk1NTM0ODMxfQ.ORAbWXkNpVxPUOgQl8GuA4yhGQHDFh60i49szlEdtgTUrOZUqzQaPhyhwtp8TU7wMc51g-WXWVqKFgre6CXlj_xUCMauFNULXFPRcpIIdSXKGiiXTkhCZwDL48RJjEGtay406-gfcYSRXluIMLh8U-_vulyyxvPPCEl_ybdVDU4AO8WUj1Y-KvrJnPQaOLGB3YlNCnnMfUsgdDyLfhcXj_GqFFYHzHJCoC4WHrP7wNvAcYSFowxmWLx3s4XEMWaTD9ZpwTdmlxUzoLRoDahpzWfg_M4xDXY3qnYdJeTAcwvKXERNeWCfOPodEyCq_aWlMpMcn6BxAhX1zb5JAQ-TbA";
const authProvider = new SimpleAuthenticationProvider(async () => { return token; });


const core = new FetchRequestAdapter(authProvider);
const client = new GraphServiceClient(core);

// async function getMessage() {
//     // GET /users/{id | userPrincipalName}/messages
//     const userRequestBuilder = client.usersById("813956a3-4a30-4596-914f-bfd86a657a09");
//     const messageRequestBuilder = userRequestBuilder.messages;
//     const message = messageRequestBuilder.get();
//     console.log((await (message)).value);
// }
async function getME() {
    // GET /users/{id | userPrincipalName}/messages
    const meRequestBuilder = client.me;
    const me = await meRequestBuilder.get();
    console.log(me);
}

me().catch((e) => console.log(e));

// async function post() {
//     // GET /users/{id | userPrincipalName}/messages
//     const userRequestBuilder = client.usersById("813956a3-4a30-4596-914f-bfd86a657a09");
//     const messagesRequestBuilder = userRequestBuilder.messages;
//     const message = new Message();
//     message.subject = "test subject";
   
//    // itemBody.content = JSON.stringify({});
//     const post = await messagesRequestBuilder.post(message);


//     console.log((await (post)).subject);
// }


// async function post() {
//     // GET /users/{id | userPrincipalName}/messages
//     const userRequestBuilder = client.usersById("813956a3-4a30-4596-914f-bfd86a657a09");
//     const messagesRequestBuilder = userRequestBuilder.messages;
//     const message = new Message();
//     message.subject = "test subject";
//    // const itemBody: ItemBody = new ItemBody();
//    // itemBody.content = JSON.stringify({});
//     const post = await messagesRequestBuilder.post(message);


//     console.log((await (post)).subject);
// }
