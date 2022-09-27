
import { graphRestClient } from "./graphClient";
import "@microsoft/microsoft-graph-client/groups/group";
import { MicrosoftGraphGroup, MicrosoftGraphUser } from "@microsoft/microsoft-graph-types";

async function getGroups(): Promise<MicrosoftGraphGroup[]>  {
    const groupCollectionResponse = await graphRestClient.api("/groups").get();
    const groups: MicrosoftGraphGroup[] = (await groupCollectionResponse).value!;
    return groups;
}

