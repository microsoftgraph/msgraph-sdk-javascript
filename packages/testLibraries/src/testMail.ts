import {GraphServiceClient} from "graph-service-library";

const authProvider = null;
const  serviceclient =  GraphServiceClient.init();

async function  test() {
const user = await serviceclient.usersById("1");
const coreMe = await serviceclient.api("/me").get();
}


