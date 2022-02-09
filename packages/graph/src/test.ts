import { Client } from ".";
import "isomorphic-fetch";
import { SimpleAuthenticationProvider } from "./authentication/SimpleAuthentication/SimpleAuthenticationProvider";

const token = "";
const simpleAuthenticationProvider = new SimpleAuthenticationProvider({getAccessTokenCallback:async () => { return token;}});
const client = Client.init({
    authProvider: simpleAuthenticationProvider
});

client.api('/me').get().then(res => {
    console.log(res);
});


const graphRequest = client.api("/me").select("displayName").count(true).headers({}).get();