import {ReminderViewWithStartDateTimeWithEndDateTimeResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReminderViewWithStartDateTimeWithEndDateTimeResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ReminderViewWithStartDateTimeWithEndDateTimeResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReminderViewWithStartDateTimeWithEndDateTimeResponse();
}
