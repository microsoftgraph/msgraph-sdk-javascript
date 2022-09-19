import { GraphApis } from "../lib/src/rest/graphAPIs";

import { operation3133, operation3134, operation3135, operation3136, operation3137, operation3138, operation3139, operation3140, operation6146, operation6147, operation6148, operation6149, operation6150, operation6151, operation6152, operation6153 } from "../lib/src/rest/operations";

declare module "../lib/src/rest/graphAPIs" {
    export interface GraphApis {
        (api:"/me/activities"):operation3133,
        (api:"/me/activities/{userActivity-id}",userActivityid: string):operation3134,
        (api:"/me/activities/{userActivity-id}/historyItems",userActivityid: string):operation3135,
        (api:"/me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}",userActivityid: string,activityHistoryItemid: string):operation3136,
        (api:"/me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}/activity",userActivityid: string,activityHistoryItemid: string):operation3137,
        (api:"/me/activities/{userActivity-id}/historyItems/$count",userActivityid: string):operation3138,
        (api:"/me/activities/$count"):operation3139,
        (api:"/me/activities/microsoft.graph.recent()"):operation3140,
        (api: "/users/{user-id}/activities", userid: string): operation6146,
        (api: "/users/{user-id}/activities/{userActivity-id}", userid: string, userActivityid: string): operation6147,
        (api: "/users/{user-id}/activities/{userActivity-id}/historyItems", userid: string, userActivityid: string): operation6148,
        (api: "/users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}", userid: string, userActivityid: string, activityHistoryItemid: string): operation6149,
        (api: "/users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}/activity", userid: string, userActivityid: string, activityHistoryItemid: string): operation6150,
        (api: "/users/{user-id}/activities/{userActivity-id}/historyItems/$count", userid: string, userActivityid: string): operation6151,
        (api: "/users/{user-id}/activities/$count", userid: string): operation6152,
        (api: "/users/{user-id}/activities/microsoft.graph.recent()", userid: string): operation6153,
        }
}