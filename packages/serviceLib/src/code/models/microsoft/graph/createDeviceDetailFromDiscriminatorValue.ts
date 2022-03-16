import {DeviceDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceDetail();
}
