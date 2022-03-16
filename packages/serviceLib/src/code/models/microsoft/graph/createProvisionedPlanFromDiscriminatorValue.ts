import {ProvisionedPlan} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisionedPlanFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProvisionedPlan {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProvisionedPlan();
}
