import {GetScheduleResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetScheduleResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetScheduleResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetScheduleResponse();
}
