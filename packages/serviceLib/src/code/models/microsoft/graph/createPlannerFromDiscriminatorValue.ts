import {Planner} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerFromDiscriminatorValue(parseNode: ParseNode | undefined) : Planner {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Planner();
}
