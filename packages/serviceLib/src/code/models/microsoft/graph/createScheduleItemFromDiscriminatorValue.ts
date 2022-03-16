import {ScheduleItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScheduleItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : ScheduleItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ScheduleItem();
}
