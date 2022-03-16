import {PlannerPlan} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerPlanFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerPlan {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerPlan();
}
