import {DeviceConfigurationUserStatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationUserStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceConfigurationUserStatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceConfigurationUserStatus();
}
