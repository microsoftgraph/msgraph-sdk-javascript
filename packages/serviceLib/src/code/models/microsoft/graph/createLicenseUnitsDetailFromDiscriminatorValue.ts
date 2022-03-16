import {LicenseUnitsDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLicenseUnitsDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : LicenseUnitsDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LicenseUnitsDetail();
}
