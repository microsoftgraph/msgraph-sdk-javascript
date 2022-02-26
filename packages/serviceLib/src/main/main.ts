import { GraphServiceClient } from "../code/graphServiceClient";
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary";
//import { Auth } from "./auth"

import { SimpleAuthenticationProvider } from "@microsoft/microsoft-graph-client";
import { Message } from "../code/models/microsoft/graph";





const token = "eyJ0eXAiOiJKV1QiLCJub25jZSI6ImRueFJkdHJEVXR5dHZ5anFqYmZpcUpRX05SNUJ2d3hHX2hSQmJsN2dyQm8iLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kNGNjN2E0Mi0zYzQ0LTQ0ZjMtYWFmMy02NjYzMDJhZWFiMDgvIiwiaWF0IjoxNjQ1NTEwODU5LCJuYmYiOjE2NDU1MTA4NTksImV4cCI6MTY0NTUxNDc5NywiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFTUUEyLzhUQUFBQUZheEtRbmpwV3NDbnZ3bjc0NjRUdTMvZjlremZXNnFhOWZiQUJUY2U5TnM9IiwiYW1yIjpbInB3ZCJdLCJhcHBfZGlzcGxheW5hbWUiOiJHcmFwaCBFeHBsb3JlciIsImFwcGlkIjoiZGU4YmM4YjUtZDlmOS00OGIxLWE4YWQtYjc0OGRhNzI1MDY0IiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJDaGV0dGlhciIsImdpdmVuX25hbWUiOiI1bmFsZGMiLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiI3My4xNjkuMTQ4LjcyIiwibmFtZSI6Ik5pa2l0aGEgVWRheWt1bWFyIENoZXR0aWFyIiwib2lkIjoiODEzOTU2YTMtNGEzMC00NTk2LTkxNGYtYmZkODZhNjU3YTA5IiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMyMDAwRDI4NEZBQ0EiLCJwd2RfZXhwIjoiMCIsInB3ZF91cmwiOiJodHRwczovL3BvcnRhbC5taWNyb3NvZnRvbmxpbmUuY29tL0NoYW5nZVBhc3N3b3JkLmFzcHgiLCJyaCI6IjAuQVZrQVFuck0xRVE4ODBTcTgyWmpBcTZyQ0FNQUFBQUFBQUFBd0FBQUFBQUFBQUJaQUJVLiIsInNjcCI6IkNhbGVuZGFycy5SZWFkIENhbGVuZGFycy5SZWFkV3JpdGUgQ29udGFjdHMuUmVhZCBDb250YWN0cy5SZWFkV3JpdGUgRGlyZWN0b3J5LkFjY2Vzc0FzVXNlci5BbGwgRGlyZWN0b3J5LlJlYWQuQWxsIERpcmVjdG9yeS5SZWFkV3JpdGUuQWxsIEVudGl0bGVtZW50TWFuYWdlbWVudC5SZWFkV3JpdGUuQWxsIEZpbGVzLlJlYWQgRmlsZXMuUmVhZC5BbGwgRmlsZXMuUmVhZFdyaXRlIEZpbGVzLlJlYWRXcml0ZS5BbGwgR3JvdXAuUmVhZC5BbGwgR3JvdXAuUmVhZFdyaXRlLkFsbCBNYWlsLlJlYWQgTWFpbC5SZWFkLlNoYXJlZCBNYWlsLlJlYWRCYXNpYyBNYWlsLlJlYWRXcml0ZSBNYWlsLlJlYWRXcml0ZS5TaGFyZWQgTWFpbC5TZW5kIE1haWxib3hTZXR0aW5ncy5SZWFkV3JpdGUgTm90ZXMuQ3JlYXRlIE5vdGVzLlJlYWQgTm90ZXMuUmVhZC5BbGwgTm90ZXMuUmVhZFdyaXRlIE5vdGVzLlJlYWRXcml0ZS5BbGwgb3BlbmlkIE9yZ0NvbnRhY3QuUmVhZC5BbGwgUGVvcGxlLlJlYWQgUGVvcGxlLlJlYWQuQWxsIFByaW50ZXIuRnVsbENvbnRyb2wuQWxsIFByaW50ZXIuUmVhZC5BbGwgUHJpbnRlci5SZWFkV3JpdGUuQWxsIFByaW50ZXJTaGFyZS5SZWFkLkFsbCBQcmludGVyU2hhcmUuUmVhZFdyaXRlLkFsbCBwcm9maWxlIFJlcG9ydHMuUmVhZC5BbGwgU2l0ZXMuRnVsbENvbnRyb2wuQWxsIFNpdGVzLk1hbmFnZS5BbGwgU2l0ZXMuUmVhZC5BbGwgU2l0ZXMuUmVhZFdyaXRlLkFsbCBUYXNrcy5SZWFkIFRhc2tzLlJlYWQuU2hhcmVkIFRhc2tzLlJlYWRXcml0ZSBUYXNrcy5SZWFkV3JpdGUuU2hhcmVkIFVzZXIuUmVhZCBlbWFpbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6InRvcGgxMmFFWTJaVzh3b3MzWTYxaVpXMmo5aTU1T2trTFlkQU9PYnRaSHMiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiTkEiLCJ0aWQiOiJkNGNjN2E0Mi0zYzQ0LTQ0ZjMtYWFmMy02NjYzMDJhZWFiMDgiLCJ1bmlxdWVfbmFtZSI6Im5jaGV0dGlhQGdyYXBoanNkZW1vLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6Im5jaGV0dGlhQGdyYXBoanNkZW1vLm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6InNwaU5GNnpuZUUyVk9BRGl0dUpYQVEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfc3QiOnsic3ViIjoiTVpCVElBUEFjS1E0T0pMbkRHc0VuRGR6MTZBczZmRS0ydDVlXy02Q3VUSSJ9LCJ4bXNfdGNkdCI6MTU5NTUzNDgzMX0.gSURSv_6JeNbo6jKHZSAK3NChNQXM_MdNsQMeO3A4Z9DSxiq_0JHNPhIxNRIlJinc3PJ5U0BHpBkmbif5cMcd5KKBheQV5DzfeGH1gyvMTMmTMHN2S7IIxuPswau08QzTSN-7e9UEeFG7SUXmoqhSD8tEULOd7H3vwd2Ef8WT-fDQ7ilS9rT6tcMKjemm7aW_khxKmLPHwoQR2X5Gc8UcFCbnJ4YIHKI2thVA1jJ3VwQ8kkdd1HYk1aAasA_xAoNI6KINZ095jk3sFmvkXiM8IoU_K-fi8O2AFdHbUjHKh3bk0F6e6mcPOiO2XSE7npfry443LsgjDyqndgQxaeLkg";

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

post().catch((e) => console.log(e));

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
