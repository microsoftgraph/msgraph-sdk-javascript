import {TargetedManagedAppPolicyAssignmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTargetedManagedAppPolicyAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TargetedManagedAppPolicyAssignmentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TargetedManagedAppPolicyAssignmentCollectionResponse();
}
