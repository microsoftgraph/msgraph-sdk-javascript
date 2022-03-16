import {PlannerPlanDetails} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerPlanDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerPlanDetails {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerPlanDetails();
}
