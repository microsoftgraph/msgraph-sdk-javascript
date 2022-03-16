import {PlannerCategoryDescriptions} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerCategoryDescriptionsFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerCategoryDescriptions {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerCategoryDescriptions();
}
