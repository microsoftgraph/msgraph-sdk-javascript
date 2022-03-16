import {GetTeamsDeviceUsageUserDetailWithDateResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetTeamsDeviceUsageUserDetailWithDateResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetTeamsDeviceUsageUserDetailWithDateResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetTeamsDeviceUsageUserDetailWithDateResponse();
}
