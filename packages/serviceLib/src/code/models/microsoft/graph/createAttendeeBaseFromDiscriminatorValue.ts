import {AttendeeBase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttendeeBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AttendeeBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AttendeeBase();
}
