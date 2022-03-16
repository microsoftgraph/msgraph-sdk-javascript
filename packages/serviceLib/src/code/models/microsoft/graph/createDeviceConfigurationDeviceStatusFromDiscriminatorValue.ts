import {DeviceConfigurationDeviceStatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationDeviceStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceConfigurationDeviceStatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceConfigurationDeviceStatus();
}
