import {MeetingInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : MeetingInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MeetingInfo();
}
