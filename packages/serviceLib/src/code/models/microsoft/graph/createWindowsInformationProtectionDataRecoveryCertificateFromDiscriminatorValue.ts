import {WindowsInformationProtectionDataRecoveryCertificate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionDataRecoveryCertificateFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtectionDataRecoveryCertificate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsInformationProtectionDataRecoveryCertificate();
}
