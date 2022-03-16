import {DeviceInstallStateCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceInstallStateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceInstallStateCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceInstallStateCollectionResponse();
}
