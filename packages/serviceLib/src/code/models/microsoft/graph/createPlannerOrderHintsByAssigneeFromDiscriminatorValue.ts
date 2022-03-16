import {PlannerOrderHintsByAssignee} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerOrderHintsByAssigneeFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerOrderHintsByAssignee {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerOrderHintsByAssignee();
}
