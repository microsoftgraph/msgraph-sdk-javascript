import {AccessPackageAssignmentPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageAssignmentPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageAssignmentPolicy();
}
