import {MeetingAttendanceReport} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingAttendanceReportFromDiscriminatorValue(parseNode: ParseNode | undefined) : MeetingAttendanceReport {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MeetingAttendanceReport();
}
