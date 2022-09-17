import { GraphApis } from "../lib/src/rest/graphAPIs";

import { operation1413, operation1414, operation1415, operation1416, operation1417, operation1418, operation1419, operation1420, operation1421, operation1422, operation1423, operation1424, operation1425, operation1426, operation1428, operation1429 } from "../lib/src/rest/operations";

declare module "../lib/src/rest/graphAPIs" {
    export interface GraphApis {
        (api: "/external"): operation1413,
        (api: "/external/connections"): operation1414,
        (api: "/external/connections/{externalConnection-id}", externalConnectionid: string): operation1415,
        (api: "/external/connections/{externalConnection-id}/groups", externalConnectionid: string): operation1416,
        (api: "/external/connections/{externalConnection-id}/groups/{externalGroup-id}", externalConnectionid: string, externalGroupid: string): operation1417,
        (api: "/external/connections/{externalConnection-id}/groups/{externalGroup-id}/members", externalConnectionid: string, externalGroupid: string): operation1418,
        (api: "/external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}", externalConnectionid: string, externalGroupid: string, identityid: string): operation1419,
        (api: "/external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/$count", externalConnectionid: string, externalGroupid: string): operation1420,
        (api: "/external/connections/{externalConnection-id}/groups/$count", externalConnectionid: string): operation1421,
        (api: "/external/connections/{externalConnection-id}/items", externalConnectionid: string): operation1422,
        (api: "/external/connections/{externalConnection-id}/items/{externalItem-id}", externalConnectionid: string, externalItemid: string): operation1423,
        (api: "/external/connections/{externalConnection-id}/items/$count", externalConnectionid: string): operation1424,
        (api: "/external/connections/{externalConnection-id}/operations", externalConnectionid: string): operation1425,
        (api: "/external/connections/{externalConnection-id}/operations/{connectionOperation-id}", externalConnectionid: string, connectionOperationid: string): operation1426,

        (api: "/external/connections/$count"): operation1429, ernalConnectionid: string): operation1427,
        (api: "/external/connections/{externalConnection-id}/schema", externalConnectionid: string): operation1428,


    }
}
export{}