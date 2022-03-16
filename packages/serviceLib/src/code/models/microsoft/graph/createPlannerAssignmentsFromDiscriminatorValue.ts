import {PlannerAssignments} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerAssignmentsFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerAssignments {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerAssignments();
}
