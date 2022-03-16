import {TimeOffRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeOffRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeOffRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimeOffRequest();
}
