import {AssignUserToDeviceRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssignUserToDeviceRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssignUserToDeviceRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssignUserToDeviceRequestBody();
}
