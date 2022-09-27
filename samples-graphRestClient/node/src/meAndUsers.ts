import { graphRestClient } from "./graphClient";
import "@microsoft/microsoft-graph-client/users"
import { MicrosoftGraphUser } from "@microsoft/microsoft-graph-types";

 async function getMe(): Promise<MicrosoftGraphUser> {
    const me = await graphRestClient.api("/me").get(undefined, { $select: "displayName" });
    return me;
}

async function getUser(): Promise<MicrosoftGraphUser[]>  {
    const userCollectionResponse = await graphRestClient.api("/users").get();
    const users: MicrosoftGraphUser[] = (await userCollectionResponse).value!;
    return users;
}


async function patchUser(id){
    const patchResponse = await graphRestClient.api("/users/{user-id}","52a29f04-dfa9-4347-9a1f-7113879bd272").patch({
        "department": "Sales & Marketing"
    })

    console.log(patchResponse);
}


getUser().then((response) => console.log(response));
getMe().then((response) => console.log(response));

patchUser("some-user-id").then();

