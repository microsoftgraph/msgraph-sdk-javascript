import {LicenseDetails} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLicenseDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) : LicenseDetails {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LicenseDetails();
}
