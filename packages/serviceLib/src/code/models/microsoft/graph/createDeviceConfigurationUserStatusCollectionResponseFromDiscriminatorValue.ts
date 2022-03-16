import {DeviceConfigurationUserStatusCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationUserStatusCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceConfigurationUserStatusCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceConfigurationUserStatusCollectionResponse();
}
