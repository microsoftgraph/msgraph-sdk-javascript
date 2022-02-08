import {GraphServiceClient} from "graph-service-library";

const authProvider = null;
const  client =  GraphServiceClient.init();

async function  test() {
const user = await client.usersById("1");
const coreMe = await client.api("/me").get();
}


