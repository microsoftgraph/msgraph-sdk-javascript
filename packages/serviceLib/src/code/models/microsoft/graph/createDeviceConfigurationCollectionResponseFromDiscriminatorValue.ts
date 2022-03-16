import {DeviceConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceConfigurationCollectionResponse();
}
