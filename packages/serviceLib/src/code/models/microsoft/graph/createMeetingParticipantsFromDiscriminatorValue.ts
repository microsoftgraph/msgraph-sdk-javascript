import {MeetingParticipants} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingParticipantsFromDiscriminatorValue(parseNode: ParseNode | undefined) : MeetingParticipants {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MeetingParticipants();
}
