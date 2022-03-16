import {AssignedLicense} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssignedLicenseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssignedLicense {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssignedLicense();
}
