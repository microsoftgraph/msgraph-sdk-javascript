import { GraphApis } from "../lib/src/rest/graphAPIs";

import { operation4657, operation4658, operation4659, operation4660, operation4661, operation4662, operation4663, operation4664, operation4665, operation4666, operation4667, operation4668, operation4669, operation4670, operation4671, operation4672, operation4673, operation4674, operation4675, operation4676, operation4677, operation4678, operation4679, operation4680, operation4681, operation4682, operation4683, operation4684, operation4685, operation4686, operation7670, operation7671, operation7672, operation7673, operation7674, operation7675, operation7676, operation7677, operation7678, operation7679, operation7680, operation7681, operation7682, operation7683, operation7684, operation7685, operation7686, operation7687, operation7688, operation7689, operation7690, operation7691, operation7692, operation7693, operation7694, operation7695, operation7696, operation7697, operation7698, operation7699 } from "../lib/src/rest/operations";

declare module "../lib/src/rest/graphAPIs" {
    export interface GraphApis {
        (api: "/me/todo"): operation4657,
        (api: "/me/todo/lists"): operation4658,
        (api: "/me/todo/lists/{todoTaskList-id}", todoTaskListid: string): operation4659,
        (api: "/me/todo/lists/{todoTaskList-id}/extensions", todoTaskListid: string): operation4660,
        (api: "/me/todo/lists/{todoTaskList-id}/extensions/{extension-id}", todoTaskListid: string, extensionid: string): operation4661,
        (api: "/me/todo/lists/{todoTaskList-id}/extensions/$count", todoTaskListid: string): operation4662,
        (api: "/me/todo/lists/{todoTaskList-id}/tasks", todoTaskListid: string): operation4663,
        (api: "/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}", todoTaskListid: string, todoTaskid: string): operation4664,
        (api: "/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments", todoTaskListid: string, todoTaskid: string): operation4665,
        (api: "/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}", todoTaskListid: string, todoTaskid: string, attachmentBaseid: string): operation4666,
        (api: "/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}/$value", todoTaskListid: string, todoTaskid: string, attachmentBaseid: string): operation4667,
        (api: "/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/$count", todoTaskListid: string, todoTaskid: string): operation4668,
        (api: "/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/microsoft.graph.createUploadSession", todoTaskListid: string, todoTaskid: string): operation4669,
        (api: "/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions", todoTaskListid: string, todoTaskid: string): operation4670,
        (api: "/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}", todoTaskListid: string, todoTaskid: string, attachmentSessionid: string): operation4671,
        (api: "/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}/content", todoTaskListid: string, todoTaskid: string, attachmentSessionid: string): operation4672,
        (api: "/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/$count", todoTaskListid: string, todoTaskid: string): operation4673,
        (api: "/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems", todoTaskListid: string, todoTaskid: string): operation4674,
        (api: "/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}", todoTaskListid: string, todoTaskid: string, checklistItemid: string): operation4675,
        (api: "/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/$count", todoTaskListid: string, todoTaskid: string): operation4676,
        (api: "/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions", todoTaskListid: string, todoTaskid: string): operation4677,
        (api: "/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}", todoTaskListid: string, todoTaskid: string, extensionid: string): operation4678,
        (api: "/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/$count", todoTaskListid: string, todoTaskid: string): operation4679,
        (api: "/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources", todoTaskListid: string, todoTaskid: string): operation4680,
        (api: "/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}", todoTaskListid: string, todoTaskid: string, linkedResourceid: string): operation4681,
        (api: "/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/$count", todoTaskListid: string, todoTaskid: string): operation4682,
        (api: "/me/todo/lists/{todoTaskList-id}/tasks/$count", todoTaskListid: string): operation4683,
        (api: "/me/todo/lists/{todoTaskList-id}/tasks/microsoft.graph.delta()", todoTaskListid: string): operation4684,
        (api: "/me/todo/lists/$count"): operation4685,
        (api: "/me/todo/lists/microsoft.graph.delta()"): operation4686,


        // user to-do

        (api: "/users/{user-id}/todo", userid: string): operation7670,
        (api: "/users/{user-id}/todo/lists", userid: string): operation7671,
        (api: "/users/{user-id}/todo/lists/{todoTaskList-id}", userid: string, todoTaskListid: string): operation7672,
        (api: "/users/{user-id}/todo/lists/{todoTaskList-id}/extensions", userid: string, todoTaskListid: string): operation7673,
        (api: "/users/{user-id}/todo/lists/{todoTaskList-id}/extensions/{extension-id}", userid: string, todoTaskListid: string, extensionid: string): operation7674,
        (api: "/users/{user-id}/todo/lists/{todoTaskList-id}/extensions/$count", userid: string, todoTaskListid: string): operation7675,
        (api: "/users/{user-id}/todo/lists/{todoTaskList-id}/tasks", userid: string, todoTaskListid: string): operation7676,
        (api: "/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}", userid: string, todoTaskListid: string, todoTaskid: string): operation7677,
        (api: "/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments", userid: string, todoTaskListid: string, todoTaskid: string): operation7678,
        (api: "/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}", userid: string, todoTaskListid: string, todoTaskid: string, attachmentBaseid: string): operation7679,
        (api: "/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}/$value", userid: string, todoTaskListid: string, todoTaskid: string, attachmentBaseid: string): operation7680,
        (api: "/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/$count", userid: string, todoTaskListid: string, todoTaskid: string): operation7681,
        (api: "/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/microsoft.graph.createUploadSession", userid: string, todoTaskListid: string, todoTaskid: string): operation7682,
        (api: "/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions", userid: string, todoTaskListid: string, todoTaskid: string): operation7683,
        (api: "/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}", userid: string, todoTaskListid: string, todoTaskid: string, attachmentSessionid: string): operation7684,
        (api: "/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}/content", userid: string, todoTaskListid: string, todoTaskid: string, attachmentSessionid: string): operation7685,
        (api: "/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/$count", userid: string, todoTaskListid: string, todoTaskid: string): operation7686,
        (api: "/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems", userid: string, todoTaskListid: string, todoTaskid: string): operation7687,
        (api: "/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}", userid: string, todoTaskListid: string, todoTaskid: string, checklistItemid: string): operation7688,
        (api: "/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/$count", userid: string, todoTaskListid: string, todoTaskid: string): operation7689,
        (api: "/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions", userid: string, todoTaskListid: string, todoTaskid: string): operation7690,
        (api: "/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}", userid: string, todoTaskListid: string, todoTaskid: string, extensionid: string): operation7691,
        (api: "/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/$count", userid: string, todoTaskListid: string, todoTaskid: string): operation7692,
        (api: "/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources", userid: string, todoTaskListid: string, todoTaskid: string): operation7693,
        (api: "/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/{linkedResource-id}", userid: string, todoTaskListid: string, todoTaskid: string, linkedResourceid: string): operation7694,
        (api: "/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/linkedResources/$count", userid: string, todoTaskListid: string, todoTaskid: string): operation7695,
        (api: "/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/$count", userid: string, todoTaskListid: string): operation7696,
        (api: "/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/microsoft.graph.delta()", userid: string, todoTaskListid: string): operation7697,
        (api: "/users/{user-id}/todo/lists/$count", userid: string): operation7698,
        (api: "/users/{user-id}/todo/lists/microsoft.graph.delta()", userid: string): operation7699,
    }
}

export { };