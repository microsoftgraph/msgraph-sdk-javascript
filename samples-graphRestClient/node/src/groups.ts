
import { graphRestClient } from "./graphClient";
import "@microsoft/microsoft-graph-client/groups/group";
import { MicrosoftGraphGroup, MicrosoftGraphUser } from "@microsoft/microsoft-graph-types";

async function getGroups(): Promise<MicrosoftGraphGroup[]>  {
    const groupCollectionResponse = await graphRestClient.api("/groups").get();
    const groups: MicrosoftGraphGroup[] = (await groupCollectionResponse).value!;
    return groups;
}

async function deleteGroup(id:string){
    const response = await graphRestClient.api("/groups/{group-id}", id).delete();
    console.log(response)
}

async function createNewGroup(): Promise<MicrosoftGraphGroup>{
    const newGroup: MicrosoftGraphGroup = {
        "displayName": "Library Assist",
        "mailEnabled": true,
        "mailNickname": "library",
        "securityEnabled": true,
        "groupTypes": [
            "Unified"
        ]
    };

    const newlyCreatedGroup = await graphRestClient.api("/groups").post(newGroup);

    return newlyCreatedGroup;
}

getGroups().then((response) => console.log(response));
