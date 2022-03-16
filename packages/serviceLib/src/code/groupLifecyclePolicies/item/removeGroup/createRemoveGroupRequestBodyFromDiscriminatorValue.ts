import {RemoveGroupRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoveGroupRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RemoveGroupRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemoveGroupRequestBody();
}
