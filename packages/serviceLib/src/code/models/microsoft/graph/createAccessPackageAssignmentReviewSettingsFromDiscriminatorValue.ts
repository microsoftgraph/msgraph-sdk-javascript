import {AccessPackageAssignmentReviewSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentReviewSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageAssignmentReviewSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageAssignmentReviewSettings();
}
