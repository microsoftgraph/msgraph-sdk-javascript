import { GraphApis } from "../lib/src/rest/graphAPIs";

import { operation6000, operation6001, operation6002 } from "../lib/src/rest/operations";

declare module "../lib/src/rest/graphAPIs" {
    export interface GraphApis {
        (api:"/subscriptions"):operation6000,
        (api:"/subscriptions/{subscription-id}",subscriptionid: string):operation6001,
        (api:"/subscriptions/{subscription-id}/microsoft.graph.reauthorize",subscriptionid: string):operation6002,
    }
}

export {};