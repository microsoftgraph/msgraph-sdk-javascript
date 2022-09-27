import { graphRestClient } from "./graphClient";
import "@microsoft/microsoft-graph-client/mail"
import { MicrosoftGraphMessage, MicrosoftGraphUser } from "@microsoft/microsoft-graph-types";

async function getMyMessages(): Promise<MicrosoftGraphMessage[]> {
    const messageCollectionResponse = await graphRestClient.api("/me/messages").get();
    return messageCollectionResponse.value!;
}

getMyMessages().then((response) => console.log(response));
