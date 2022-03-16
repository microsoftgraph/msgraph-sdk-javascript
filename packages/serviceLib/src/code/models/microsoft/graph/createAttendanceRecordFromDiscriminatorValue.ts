import {AttendanceRecord} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttendanceRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) : AttendanceRecord {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AttendanceRecord();
}
