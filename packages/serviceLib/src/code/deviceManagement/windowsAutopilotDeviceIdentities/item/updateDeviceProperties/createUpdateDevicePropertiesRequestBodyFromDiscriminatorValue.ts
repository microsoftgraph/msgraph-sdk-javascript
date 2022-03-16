import {UpdateDevicePropertiesRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpdateDevicePropertiesRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UpdateDevicePropertiesRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UpdateDevicePropertiesRequestBody();
}
