import { Client } from "../Client";
import { GraphRequest } from "../GraphRequest";
import { ClientOptions, ServiceClientOptions } from "../IClientOptions";

export type StaticThis<T> = { new (clientOptions:ServiceClientOptions): T };

export class GraphBaseClient extends Client {
    constructor(clientOptions: ServiceClientOptions){
        super(clientOptions);
    }

    static init<T extends GraphBaseClient>(this: StaticThis<T>, clientOptions: ServiceClientOptions) {
        const that = new this(clientOptions);

        console.log("calls this");
        //append telemetry here
        return that;
    }

    public api(path: string): GraphRequest {
        return super.api(path);
    }

    
}