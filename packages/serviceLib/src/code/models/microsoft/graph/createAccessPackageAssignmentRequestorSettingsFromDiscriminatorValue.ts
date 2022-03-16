import {AccessPackageAssignmentRequestorSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentRequestorSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageAssignmentRequestorSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageAssignmentRequestorSettings();
}
