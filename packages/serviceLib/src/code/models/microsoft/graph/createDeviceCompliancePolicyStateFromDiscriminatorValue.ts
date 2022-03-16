import {DeviceCompliancePolicyState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicyStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceCompliancePolicyState {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceCompliancePolicyState();
}
