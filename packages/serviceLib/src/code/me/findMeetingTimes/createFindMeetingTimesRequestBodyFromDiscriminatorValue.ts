import {FindMeetingTimesRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFindMeetingTimesRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : FindMeetingTimesRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FindMeetingTimesRequestBody();
}
