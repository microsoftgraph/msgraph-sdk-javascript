import {MdmWindowsInformationProtectionPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMdmWindowsInformationProtectionPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MdmWindowsInformationProtectionPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MdmWindowsInformationProtectionPolicy();
}
