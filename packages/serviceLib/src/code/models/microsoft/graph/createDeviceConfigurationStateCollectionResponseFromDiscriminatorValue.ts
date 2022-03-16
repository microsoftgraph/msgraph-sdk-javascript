import {DeviceConfigurationStateCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationStateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceConfigurationStateCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceConfigurationStateCollectionResponse();
}
