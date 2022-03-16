import {LicenseAssignmentState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLicenseAssignmentStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : LicenseAssignmentState {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LicenseAssignmentState();
}
