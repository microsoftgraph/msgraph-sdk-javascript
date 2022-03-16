import {PlannerUser} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerUserFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerUser {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerUser();
}
