import {DeviceManagement} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceManagement {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceManagement();
}
