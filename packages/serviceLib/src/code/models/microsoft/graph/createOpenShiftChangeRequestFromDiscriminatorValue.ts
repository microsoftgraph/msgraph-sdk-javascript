import {OpenShiftChangeRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOpenShiftChangeRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : OpenShiftChangeRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OpenShiftChangeRequest();
}
