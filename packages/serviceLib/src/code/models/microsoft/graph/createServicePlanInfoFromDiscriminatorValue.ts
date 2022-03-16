import {ServicePlanInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServicePlanInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServicePlanInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServicePlanInfo();
}
