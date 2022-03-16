import {WindowsInformationProtectionPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtectionPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsInformationProtectionPolicy();
}
