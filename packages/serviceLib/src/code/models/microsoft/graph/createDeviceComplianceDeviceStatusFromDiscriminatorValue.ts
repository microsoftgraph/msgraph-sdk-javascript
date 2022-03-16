import {DeviceComplianceDeviceStatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceComplianceDeviceStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceComplianceDeviceStatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceComplianceDeviceStatus();
}
