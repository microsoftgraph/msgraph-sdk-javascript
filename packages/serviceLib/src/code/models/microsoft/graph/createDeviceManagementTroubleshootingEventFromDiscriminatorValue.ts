import {DeviceManagementTroubleshootingEvent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementTroubleshootingEventFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceManagementTroubleshootingEvent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceManagementTroubleshootingEvent();
}
