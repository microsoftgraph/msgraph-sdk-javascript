import {AssignedPlan} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssignedPlanFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssignedPlan {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssignedPlan();
}
