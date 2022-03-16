import {PlannerTask} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerTaskFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerTask {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerTask();
}
