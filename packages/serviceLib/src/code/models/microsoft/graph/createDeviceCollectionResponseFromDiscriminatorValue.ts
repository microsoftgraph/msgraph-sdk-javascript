import {DeviceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceCollectionResponse();
}
