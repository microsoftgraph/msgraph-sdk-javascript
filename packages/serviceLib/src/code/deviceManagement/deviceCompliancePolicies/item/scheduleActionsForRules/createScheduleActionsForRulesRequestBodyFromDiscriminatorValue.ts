import {ScheduleActionsForRulesRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScheduleActionsForRulesRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ScheduleActionsForRulesRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ScheduleActionsForRulesRequestBody();
}
