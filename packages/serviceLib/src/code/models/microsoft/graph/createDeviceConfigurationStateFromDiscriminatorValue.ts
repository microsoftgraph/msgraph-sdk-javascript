import {DeviceConfigurationState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceConfigurationState {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceConfigurationState();
}
