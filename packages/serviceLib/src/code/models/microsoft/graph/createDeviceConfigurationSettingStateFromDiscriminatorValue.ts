import {DeviceConfigurationSettingState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationSettingStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceConfigurationSettingState {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceConfigurationSettingState();
}
