import {DeviceComplianceSettingStateCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceComplianceSettingStateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceComplianceSettingStateCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceComplianceSettingStateCollectionResponse();
}
