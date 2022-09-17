import { GraphApis } from "../../lib/src/rest/graphAPIs";

import { operation4750, operation4751, operation4752, operation4753, operation4754, operation4755 } from "../../lib/src/rest/operations";

declare module "../../lib/src/rest/graphAPIs" {
    export interface GraphApis {
        (api:"/places"):operation4750,
        (api:"/places/{place-id}",placeid: string):operation4751,
        (api:"/places/{place-id}/microsoft.graph.room",placeid: string):operation4752,
        (api:"/places/$count"):operation4753,
        (api:"/places/microsoft.graph.room"):operation4754,
        (api:"/places/microsoft.graph.room/$count"):operation4755,
    }
}
export{}