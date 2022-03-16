import {RemoveGroupResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoveGroupResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RemoveGroupResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemoveGroupResponse();
}
