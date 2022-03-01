import { GraphServiceClient } from "msgraph-javascript-sdk";
import { SimpleAuthenticationProvider } from "@microsoft/microsoft-graph-client";
import { Message } from "msgraph-javascript-sdk/dist/cjs/src/code/models/microsoft/graph";





const token = "";
const authProvider = new SimpleAuthenticationProvider(async () => { return token; });
const serviceclient = GraphServiceClient.init({authProvider});

async function getMe(){
    const me = await serviceclient.me.get();    
    
    console.log(me);
}
getMe().catch(console.error);


async function getMail() {
    const messages = await serviceclient.usersById("813956a3-4a30-4596-914f-bfd86a657a09").messages.get();

    console.log(messages);
}
getMail().catch(console.error);

async function post() {
    const userRequestBuilder = serviceclient.usersById("813956a3-4a30-4596-914f-bfd86a657a09");
    const messagesRequestBuilder = userRequestBuilder.messages;
    const message = new Message();
    message.subject = "test subject";
    const post = await messagesRequestBuilder.post(message);


    console.log((await (post)).subject);
}
post().catch((e) => console.log(e));



