import { GraphServiceClient } from "../code/graphServiceClient";
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary";
//import { Auth } from "./auth"

import { SimpleAuthenticationProvider } from "@microsoft/microsoft-graph-client";
import { Message } from "../code/models/microsoft/graph";





const token = "access_token";
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
