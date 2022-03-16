import {DeviceConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceConfiguration();
}
