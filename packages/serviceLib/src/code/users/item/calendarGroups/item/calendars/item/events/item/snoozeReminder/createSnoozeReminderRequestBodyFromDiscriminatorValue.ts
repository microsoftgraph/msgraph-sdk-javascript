import {SnoozeReminderRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSnoozeReminderRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SnoozeReminderRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SnoozeReminderRequestBody();
}
