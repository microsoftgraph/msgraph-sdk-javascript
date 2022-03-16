import {WindowsInformationProtection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtection {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsInformationProtection();
}
