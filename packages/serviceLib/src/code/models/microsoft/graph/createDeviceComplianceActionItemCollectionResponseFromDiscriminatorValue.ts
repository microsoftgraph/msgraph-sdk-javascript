import {DeviceComplianceActionItemCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceComplianceActionItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceComplianceActionItemCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceComplianceActionItemCollectionResponse();
}
