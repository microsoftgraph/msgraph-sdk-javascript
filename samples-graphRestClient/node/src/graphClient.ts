import {getGraphRestSDKClient, Client, SimpleAuthenticationProvider} from "@microsoft/microsoft-graph-client";

const accessToken = "YOUR_ACCESS_TOKEN";
export const client = Client.init({
    authProvider: new SimpleAuthenticationProvider(async () => {return accessToken} )
})

export const graphRestClient = getGraphRestSDKClient(client);