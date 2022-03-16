import {DeviceComplianceActionItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceComplianceActionItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceComplianceActionItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceComplianceActionItem();
}
