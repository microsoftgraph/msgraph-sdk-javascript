import {GetScheduleRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetScheduleRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetScheduleRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetScheduleRequestBody();
}
