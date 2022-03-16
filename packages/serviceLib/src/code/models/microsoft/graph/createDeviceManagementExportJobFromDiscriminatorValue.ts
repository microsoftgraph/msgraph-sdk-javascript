import {DeviceManagementExportJob} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementExportJobFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceManagementExportJob {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceManagementExportJob();
}
