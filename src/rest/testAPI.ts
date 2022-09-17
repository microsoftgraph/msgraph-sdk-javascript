import { GraphApis } from "./graphAPIs";

declare module "./graphAPIs" {
	export interface GraphApis {
		(api: "/applications"): string;
		(api: "/applications/sds"): string;
	}
}
