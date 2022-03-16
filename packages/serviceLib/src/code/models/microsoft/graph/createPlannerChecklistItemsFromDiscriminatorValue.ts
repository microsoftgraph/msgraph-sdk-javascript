import {PlannerChecklistItems} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerChecklistItemsFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerChecklistItems {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerChecklistItems();
}
