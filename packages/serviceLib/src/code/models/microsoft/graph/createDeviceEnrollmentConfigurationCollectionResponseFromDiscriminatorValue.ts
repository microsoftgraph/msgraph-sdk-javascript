import {DeviceEnrollmentConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceEnrollmentConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceEnrollmentConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceEnrollmentConfigurationCollectionResponse();
}
