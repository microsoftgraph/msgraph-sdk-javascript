import {AccessPackageAssignmentPolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageAssignmentPolicyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageAssignmentPolicyCollectionResponse();
}
