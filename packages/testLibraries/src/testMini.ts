import { GraphServiceClient } from "msgraph-javascript-sdk/dist/cjs/src/code/graphModular";
import { SimpleAuthenticationProvider } from "@microsoft/microsoft-graph-client";





const token = ""
const authProvider = new SimpleAuthenticationProvider(async () => { return token; });
const serviceclient = GraphServiceClient.init({authProvider});

async function getMe(){
    const me = await serviceclient.me.get();    
    
    console.log(me);
}
getMe().catch(console.error);




