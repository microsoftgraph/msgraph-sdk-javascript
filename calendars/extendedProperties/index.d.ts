import { GraphApis } from "../../lib/src/rest/graphAPIs";

import { operation1550, operation1551, operation1552, operation1553, operation1554, operation1555, operation3451, operation3452, operation3453, operation3454, operation3455, operation3456, operation3566, operation3567, operation3568, operation3569, operation3570, operation3571, operation3681, operation3682, operation3683, operation3684, operation3685, operation3686 } from "../../lib/src/rest/operations";

declare module "../../lib/src/rest/graphAPIs" {
    export interface GraphApis {
        (api: "/groups/{group-id}/calendar/multiValueExtendedProperties", groupid: string): operation1550,
        (api: "/groups/{group-id}/calendar/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}", groupid: string, multiValueLegacyExtendedPropertyid: string): operation1551,
        (api: "/groups/{group-id}/calendar/multiValueExtendedProperties/$count", groupid: string): operation1552,
        (api: "/groups/{group-id}/calendar/singleValueExtendedProperties", groupid: string): operation1553,
        (api: "/groups/{group-id}/calendar/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}", groupid: string, singleValueLegacyExtendedPropertyid: string): operation1554,
        (api: "/groups/{group-id}/calendar/singleValueExtendedProperties/$count", groupid: string): operation1555,

        (api: "/me/calendar/multiValueExtendedProperties"): operation3451,
        (api: "/me/calendar/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}", multiValueLegacyExtendedPropertyid: string): operation3452,
        (api: "/me/calendar/multiValueExtendedProperties/$count"): operation3453,
        (api: "/me/calendar/singleValueExtendedProperties"): operation3454,
        (api: "/me/calendar/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}", singleValueLegacyExtendedPropertyid: string): operation3455,
        (api: "/me/calendar/singleValueExtendedProperties/$count"): operation3456,

        (api: "/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/multiValueExtendedProperties", calendarGroupid: string, calendarid: string): operation3566,
        (api: "/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}", calendarGroupid: string, calendarid: string, multiValueLegacyExtendedPropertyid: string): operation3567,
        (api: "/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/multiValueExtendedProperties/$count", calendarGroupid: string, calendarid: string): operation3568,
        (api: "/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/singleValueExtendedProperties", calendarGroupid: string, calendarid: string): operation3569,
        (api: "/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}", calendarGroupid: string, calendarid: string, singleValueLegacyExtendedPropertyid: string): operation3570,
        (api: "/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/singleValueExtendedProperties/$count", calendarGroupid: string, calendarid: string): operation3571,

        (api: "/me/calendars/{calendar-id}/multiValueExtendedProperties", calendarid: string): operation3681,
        (api: "/me/calendars/{calendar-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}", calendarid: string, multiValueLegacyExtendedPropertyid: string): operation3682,
        (api: "/me/calendars/{calendar-id}/multiValueExtendedProperties/$count", calendarid: string): operation3683,
        (api: "/me/calendars/{calendar-id}/singleValueExtendedProperties", calendarid: string): operation3684,
        (api: "/me/calendars/{calendar-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}", calendarid: string, singleValueLegacyExtendedPropertyid: string): operation3685,
        (api: "/me/calendars/{calendar-id}/singleValueExtendedProperties/$count", calendarid: string): operation3686,

    }
}

export { };