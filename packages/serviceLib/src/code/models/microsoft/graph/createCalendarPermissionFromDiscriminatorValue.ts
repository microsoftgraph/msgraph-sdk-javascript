import {CalendarPermission} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalendarPermissionFromDiscriminatorValue(parseNode: ParseNode | undefined) : CalendarPermission {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CalendarPermission();
}
