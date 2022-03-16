import {DeviceConfigurationDeviceOverview} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationDeviceOverviewFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceConfigurationDeviceOverview {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceConfigurationDeviceOverview();
}
