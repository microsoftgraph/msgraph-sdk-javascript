import {DeviceComplianceSettingState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceComplianceSettingStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceComplianceSettingState {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceComplianceSettingState();
}
