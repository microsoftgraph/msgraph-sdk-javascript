import {MeetingTimeSuggestion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingTimeSuggestionFromDiscriminatorValue(parseNode: ParseNode | undefined) : MeetingTimeSuggestion {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MeetingTimeSuggestion();
}
