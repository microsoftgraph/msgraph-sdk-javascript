import {AttendanceInterval} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttendanceIntervalFromDiscriminatorValue(parseNode: ParseNode | undefined) : AttendanceInterval {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AttendanceInterval();
}
