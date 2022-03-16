import {AccessPackageAssignmentApprovalSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentApprovalSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageAssignmentApprovalSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageAssignmentApprovalSettings();
}
