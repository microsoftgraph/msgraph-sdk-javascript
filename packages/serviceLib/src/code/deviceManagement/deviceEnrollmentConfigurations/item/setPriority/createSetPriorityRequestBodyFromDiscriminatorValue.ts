import {SetPriorityRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetPriorityRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SetPriorityRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SetPriorityRequestBody();
}
