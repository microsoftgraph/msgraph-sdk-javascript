import {DeviceManagementReports} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementReportsFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceManagementReports {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceManagementReports();
}
