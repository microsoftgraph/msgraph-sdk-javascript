import {MeetingAttendanceReportCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingAttendanceReportCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MeetingAttendanceReportCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MeetingAttendanceReportCollectionResponse();
}
