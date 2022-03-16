import {SetMobileDeviceManagementAuthorityResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetMobileDeviceManagementAuthorityResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SetMobileDeviceManagementAuthorityResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SetMobileDeviceManagementAuthorityResponse();
}
