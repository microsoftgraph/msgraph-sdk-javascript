import { GraphServiceClient } from "graph-service-library";
import { SimpleAuthenticationProvider } from "@microsoft/microsoft-graph-client";





const token = "ACCESS_TOKEN";

const authProvider = new SimpleAuthenticationProvider(async () => { return token; });
const serviceclient = GraphServiceClient.init({ authProvider });


async function test() {
    const messages = await serviceclient.usersById("813956a3-4a30-4596-914f-bfd86a657a09").messages.get();

    console.log(messages);

    const coreMe = await serviceclient.api("/me").get();
    console.log(coreMe);
}

test().catch(console.error);

