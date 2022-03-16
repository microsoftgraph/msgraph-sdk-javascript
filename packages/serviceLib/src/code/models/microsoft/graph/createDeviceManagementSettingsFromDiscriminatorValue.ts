import {DeviceManagementSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceManagementSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceManagementSettings();
}
