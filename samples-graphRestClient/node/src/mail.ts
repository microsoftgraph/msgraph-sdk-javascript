import { graphRestClient } from "./graphClient";
import "@microsoft/microsoft-graph-client/mail"
import { MicrosoftGraphMessage, MicrosoftGraphUser } from "@microsoft/microsoft-graph-types";

async function getMyMessages(): Promise<MicrosoftGraphMessage[]> {
    const messageCollectionResponse = await graphRestClient.api("/me/messages").get();
    return messageCollectionResponse.value!;
}

async function createMessage(){
    const message: MicrosoftGraphMessage =  {
            subject: "Meet for lunch?",
            body: {
                contentType: "text",
                content: "The new cafeteria is open."
            },
            toRecipients: [
                {
                    "emailAddress": {
                        "address": "garthf@contoso.com"
                    }
                }
            ]
    }
    const requestBody = {
        Message: message
    }
    const sendMailResponse = await graphRestClient.api("/me/microsoft.graph.sendMail").post(requestBody);
    console.log(sendMailResponse);
}

createMessage();

