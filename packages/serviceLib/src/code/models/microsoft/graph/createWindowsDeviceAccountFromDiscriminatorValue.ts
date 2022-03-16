import {WindowsDeviceAccount} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsDeviceAccountFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsDeviceAccount {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsDeviceAccount();
}
