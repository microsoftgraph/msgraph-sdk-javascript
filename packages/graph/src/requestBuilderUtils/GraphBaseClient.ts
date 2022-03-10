import { Client } from "../Client";
import { GraphRequest } from "../GraphRequest";
import { ClientOptions } from "../IClientOptions";

export type StaticThis<T> = { new (clientOptions:ClientOptions): T };

export class GraphBaseClient extends Client {
    constructor(clientOptions: ClientOptions){
        super(clientOptions);
    }

    static init<T extends GraphBaseClient>(this: StaticThis<T>, clientOptions: ClientOptions) {
        const that = new this(clientOptions);

        console.log("calls this");
        //append telemetry here
        return that;
    }

    public api(path: string): GraphRequest {
        return super.api(path);
    }

    
}