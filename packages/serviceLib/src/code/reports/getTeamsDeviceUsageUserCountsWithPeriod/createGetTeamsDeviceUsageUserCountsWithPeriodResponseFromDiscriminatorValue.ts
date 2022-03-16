import {GetTeamsDeviceUsageUserCountsWithPeriodResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetTeamsDeviceUsageUserCountsWithPeriodResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetTeamsDeviceUsageUserCountsWithPeriodResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetTeamsDeviceUsageUserCountsWithPeriodResponse();
}
