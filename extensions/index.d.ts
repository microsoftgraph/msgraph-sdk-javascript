import { GraphApis } from "../lib/src/rest/graphAPIs";

import { operation5130, operation5131, operation5132 } from "../lib/src/rest/operations";

declare module "../lib/src/rest/graphAPIs" {
    export interface GraphApis {
        (api:"/schemaExtensions"):operation5130,
        (api:"/schemaExtensions/{schemaExtension-id}",schemaExtensionid: string):operation5131,
        (api:"/schemaExtensions/$count"):operation5132,
    }
}