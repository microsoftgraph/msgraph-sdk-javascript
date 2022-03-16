import {DeviceCompliancePolicySettingStateSummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicySettingStateSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceCompliancePolicySettingStateSummary {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceCompliancePolicySettingStateSummary();
}
