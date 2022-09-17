import { GraphApis } from "../../lib/src/rest/graphAPIs";

import { operation4558, operation4559, operation4560, operation7571, operation7572, operation7573 } from "../../lib/src/rest/operations";

declare module "../../lib/src/rest/graphAPIs" {
    export interface GraphApis {
        // master categories
        (api: "/me/outlook/masterCategories"): operation4558,
        (api: "/me/outlook/masterCategories/{outlookCategory-id}", outlookCategoryid: string): operation4559,
        (api: "/me/outlook/masterCategories/$count"): operation4560,

        (api: "/users/{user-id}/outlook/masterCategories", userid: string): operation7571,
        (api: "/users/{user-id}/outlook/masterCategories/{outlookCategory-id}", userid: string, outlookCategoryid: string): operation7572,
        (api: "/users/{user-id}/outlook/masterCategories/$count", userid: string): operation7573,
    }
}

export{};