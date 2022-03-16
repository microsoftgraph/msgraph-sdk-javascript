import {DeviceManagementTroubleshootingEventCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementTroubleshootingEventCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceManagementTroubleshootingEventCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceManagementTroubleshootingEventCollectionResponse();
}
