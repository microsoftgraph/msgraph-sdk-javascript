import {DeviceManagementPartner} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementPartnerFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceManagementPartner {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceManagementPartner();
}
