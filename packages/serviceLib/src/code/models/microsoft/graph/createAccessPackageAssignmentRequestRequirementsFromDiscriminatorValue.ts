import {AccessPackageAssignmentRequestRequirements} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentRequestRequirementsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageAssignmentRequestRequirements {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageAssignmentRequestRequirements();
}
