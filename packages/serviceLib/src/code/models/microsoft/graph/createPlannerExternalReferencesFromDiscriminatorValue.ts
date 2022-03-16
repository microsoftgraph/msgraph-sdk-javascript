import {PlannerExternalReferences} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerExternalReferencesFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerExternalReferences {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerExternalReferences();
}
