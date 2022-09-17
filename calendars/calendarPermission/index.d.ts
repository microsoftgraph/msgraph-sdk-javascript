import { GraphApis } from "../../lib/src/rest/graphAPIs";

import { operation1445, operation1446, operation1447, operation3346, operation3347, operation3348, operation3461, operation3462, operation3463, operation3576, operation3577, operation3578, operation6359, operation6360, operation6361, operation6474, operation6475, operation6476, operation6589, operation6590, operation6591 } from "../../lib/src/rest/operations";

declare module "../../lib/src/rest/graphAPIs" {
    export interface GraphApis {

        (api: "/me/calendar/calendarPermissions"): operation3346,
        (api: "/me/calendar/calendarPermissions/{calendarPermission-id}", calendarPermissionid: string): operation3347,
        (api: "/me/calendar/calendarPermissions/$count"): operation3348,

        (api: "/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions", calendarGroupid: string, calendarid: string): operation3461,
        (api: "/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}", calendarGroupid: string, calendarid: string, calendarPermissionid: string): operation3462,
        (api: "/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/$count", calendarGroupid: string, calendarid: string): operation3463,

        (api: "/me/calendars/{calendar-id}/calendarPermissions", calendarid: string): operation3576,
        (api: "/me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}", calendarid: string, calendarPermissionid: string): operation3577,
        (api: "/me/calendars/{calendar-id}/calendarPermissions/$count", calendarid: string): operation3578,

        (api: "/users/{user-id}/calendar/calendarPermissions", userid: string): operation6359,
        (api: "/users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}", userid: string, calendarPermissionid: string): operation6360,
        (api: "/users/{user-id}/calendar/calendarPermissions/$count", userid: string): operation6361,

        (api: "/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions", userid: string, calendarGroupid: string, calendarid: string): operation6474,
        (api: "/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}", userid: string, calendarGroupid: string, calendarid: string, calendarPermissionid: string): operation6475,
        (api: "/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/$count", userid: string, calendarGroupid: string, calendarid: string): operation6476,

        (api: "/users/{user-id}/calendars/{calendar-id}/calendarPermissions", userid: string, calendarid: string): operation6589,
        (api: "/users/{user-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}", userid: string, calendarid: string, calendarPermissionid: string): operation6590,
        (api: "/users/{user-id}/calendars/{calendar-id}/calendarPermissions/$count", userid: string, calendarid: string): operation6591,

        (api: "/groups/{group-id}/calendar/calendarPermissions", groupid: string): operation1445,
        (api: "/groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}", groupid: string, calendarPermissionid: string): operation1446,
        (api: "/groups/{group-id}/calendar/calendarPermissions/$count", groupid: string): operation1447,

    }
}