import { GraphRequest } from "../GraphRequest";

export interface GraphBaseClient {
	api(path: string): GraphRequest;
}
