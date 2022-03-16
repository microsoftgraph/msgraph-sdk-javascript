import {PlannerTaskCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerTaskCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerTaskCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerTaskCollectionResponse();
}
