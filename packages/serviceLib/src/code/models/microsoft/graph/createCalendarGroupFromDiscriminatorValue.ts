import {CalendarGroup} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalendarGroupFromDiscriminatorValue(parseNode: ParseNode | undefined) : CalendarGroup {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CalendarGroup();
}
