import {IdentityUserFlowAttributeAssignmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityUserFlowAttributeAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityUserFlowAttributeAssignmentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityUserFlowAttributeAssignmentCollectionResponse();
}
