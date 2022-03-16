import {WindowsInformationProtectionApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtectionApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsInformationProtectionApp();
}
