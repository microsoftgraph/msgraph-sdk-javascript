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


