import {AssignLicenseRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssignLicenseRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssignLicenseRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssignLicenseRequestBody();
}
