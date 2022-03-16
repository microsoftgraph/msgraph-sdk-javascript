import {PlannerTaskDetails} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerTaskDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerTaskDetails {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerTaskDetails();
}
