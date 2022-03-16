import {DeviceOperatingSystemSummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceOperatingSystemSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceOperatingSystemSummary {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceOperatingSystemSummary();
}
