import {PlannerAssignedToTaskBoardTaskFormat} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerAssignedToTaskBoardTaskFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerAssignedToTaskBoardTaskFormat {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerAssignedToTaskBoardTaskFormat();
}
