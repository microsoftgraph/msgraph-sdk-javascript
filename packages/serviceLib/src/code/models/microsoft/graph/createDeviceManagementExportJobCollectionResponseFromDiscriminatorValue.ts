import {DeviceManagementExportJobCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementExportJobCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceManagementExportJobCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceManagementExportJobCollectionResponse();
}
