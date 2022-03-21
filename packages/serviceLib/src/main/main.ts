import { GraphServiceClient } from "../code/graphServiceClient";
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary";
//import { Auth } from "./auth"

import { SimpleAuthenticationProvider } from "@microsoft/microsoft-graph-client";
import { Message } from "../code/models/microsoft/graph";





const token = "eyJ0eXAiOiJKV1QiLCJub25jZSI6IjRDVFJCSHM5WENnMGFIMC1jWnE3Wk52eUFyZ2VsZGRfN0pHQXd5T3ctZE0iLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kNGNjN2E0Mi0zYzQ0LTQ0ZjMtYWFmMy02NjYzMDJhZWFiMDgvIiwiaWF0IjoxNjQ3NjQyNTQxLCJuYmYiOjE2NDc2NDI1NDEsImV4cCI6MTY0NzY0NzY2MCwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFTUUEyLzhUQUFBQW1Ialc0R3EzNERDSS96Um1HMGJsOTNuQ2UwdlEvR21FM3gyZXZZWGViRUU9IiwiYW1yIjpbInB3ZCJdLCJhcHBfZGlzcGxheW5hbWUiOiJHcmFwaCBFeHBsb3JlciIsImFwcGlkIjoiZGU4YmM4YjUtZDlmOS00OGIxLWE4YWQtYjc0OGRhNzI1MDY0IiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJDaGV0dGlhciIsImdpdmVuX25hbWUiOiJ6eWF5YWwiLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiI3My4xNjkuMTQ4LjcyIiwibmFtZSI6Ik5pa2l0aGEgVWRheWt1bWFyIENoZXR0aWFyIiwib2lkIjoiODEzOTU2YTMtNGEzMC00NTk2LTkxNGYtYmZkODZhNjU3YTA5IiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMyMDAwRDI4NEZBQ0EiLCJwd2RfZXhwIjoiMCIsInB3ZF91cmwiOiJodHRwczovL3BvcnRhbC5taWNyb3NvZnRvbmxpbmUuY29tL0NoYW5nZVBhc3N3b3JkLmFzcHgiLCJyaCI6IjAuQVZrQVFuck0xRVE4ODBTcTgyWmpBcTZyQ0FNQUFBQUFBQUFBd0FBQUFBQUFBQUJaQUJVLiIsInNjcCI6IkNhbGVuZGFycy5SZWFkIENhbGVuZGFycy5SZWFkV3JpdGUgQ29udGFjdHMuUmVhZCBDb250YWN0cy5SZWFkV3JpdGUgRGlyZWN0b3J5LkFjY2Vzc0FzVXNlci5BbGwgRGlyZWN0b3J5LlJlYWQuQWxsIERpcmVjdG9yeS5SZWFkV3JpdGUuQWxsIEVudGl0bGVtZW50TWFuYWdlbWVudC5SZWFkV3JpdGUuQWxsIEZpbGVzLlJlYWQgRmlsZXMuUmVhZC5BbGwgRmlsZXMuUmVhZFdyaXRlIEZpbGVzLlJlYWRXcml0ZS5BbGwgR3JvdXAuUmVhZC5BbGwgR3JvdXAuUmVhZFdyaXRlLkFsbCBNYWlsLlJlYWQgTWFpbC5SZWFkLlNoYXJlZCBNYWlsLlJlYWRCYXNpYyBNYWlsLlJlYWRXcml0ZSBNYWlsLlJlYWRXcml0ZS5TaGFyZWQgTWFpbC5TZW5kIE1haWxib3hTZXR0aW5ncy5SZWFkV3JpdGUgTm90ZXMuQ3JlYXRlIE5vdGVzLlJlYWQgTm90ZXMuUmVhZC5BbGwgTm90ZXMuUmVhZFdyaXRlIE5vdGVzLlJlYWRXcml0ZS5BbGwgb3BlbmlkIE9yZ0NvbnRhY3QuUmVhZC5BbGwgUGVvcGxlLlJlYWQgUGVvcGxlLlJlYWQuQWxsIFByaW50ZXIuRnVsbENvbnRyb2wuQWxsIFByaW50ZXIuUmVhZC5BbGwgUHJpbnRlci5SZWFkV3JpdGUuQWxsIFByaW50ZXJTaGFyZS5SZWFkLkFsbCBQcmludGVyU2hhcmUuUmVhZFdyaXRlLkFsbCBwcm9maWxlIFJlcG9ydHMuUmVhZC5BbGwgU2l0ZXMuRnVsbENvbnRyb2wuQWxsIFNpdGVzLk1hbmFnZS5BbGwgU2l0ZXMuUmVhZC5BbGwgU2l0ZXMuUmVhZFdyaXRlLkFsbCBUYXNrcy5SZWFkIFRhc2tzLlJlYWQuU2hhcmVkIFRhc2tzLlJlYWRXcml0ZSBUYXNrcy5SZWFkV3JpdGUuU2hhcmVkIFVzZXIuUmVhZCBlbWFpbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6InRvcGgxMmFFWTJaVzh3b3MzWTYxaVpXMmo5aTU1T2trTFlkQU9PYnRaSHMiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiTkEiLCJ0aWQiOiJkNGNjN2E0Mi0zYzQ0LTQ0ZjMtYWFmMy02NjYzMDJhZWFiMDgiLCJ1bmlxdWVfbmFtZSI6Im5jaGV0dGlhQGdyYXBoanNkZW1vLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6Im5jaGV0dGlhQGdyYXBoanNkZW1vLm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6Il9OUTRFQXZDZmt1aF9HdXI1UHhtQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfc3QiOnsic3ViIjoiTVpCVElBUEFjS1E0T0pMbkRHc0VuRGR6MTZBczZmRS0ydDVlXy02Q3VUSSJ9LCJ4bXNfdGNkdCI6MTU5NTUzNDgzMX0.mfi-4h3-x_IhH85-R2Uqhe9NxEM-jjB2AbK9ue1XAvsKxrIY2fFhYJxChmW-4hm03idPMOL5awW0vGGA_Joq-67b8H51WA5LX9fbdvZIBwCNlmauCuCsfn2gaiT_WvOp8b6iJJOIdqD-yp6e5moFAJYk2Lr3jQcyJuWIyA5VrT_LhL_2-mArKkZzmfXimmG5VTT35opfYakjG4mkfHyFtQh_dR44pYPFDQusvLoLXoKW1e6TkeKR4LGQyJ3cxfyh0hepwt2WSBcru-Amijit7wv11zHt7efk3uo4n2bWg_jCLB6oGZ25WTZBUtC1uEnNJATpWfHLVB5zaM9feRtMiA";

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

getME().catch((e) => console.log(e));

async function post() {
    // GET /users/{id | userPrincipalName}/messages
    const userRequestBuilder = client.usersById("813956a3-4a30-4596-914f-bfd86a657a09");
    const messagesRequestBuilder = userRequestBuilder.messages;
    const message = new Message();
    message.subject = "test subject";
   
   // itemBody.content = JSON.stringify({});
    const post = await messagesRequestBuilder.post(message);


    console.log((await (post)).subject);
}

post().catch((e) => console.log(e));

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
