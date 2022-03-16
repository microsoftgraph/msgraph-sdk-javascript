import {ScheduleChangeRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScheduleChangeRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : ScheduleChangeRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ScheduleChangeRequest();
}
