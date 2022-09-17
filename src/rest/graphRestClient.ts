import { Client } from "../Client";
import { GraphApis } from "./graphAPIs";

export type GraphRestSDKClient = Client & {
	api: GraphApis;
};

export const getGraphRestSDKClient = (client: Client): GraphRestSDKClient => {
	return client as unknown as GraphRestSDKClient;
};
