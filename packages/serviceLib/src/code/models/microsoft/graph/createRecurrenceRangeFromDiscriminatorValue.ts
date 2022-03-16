import {RecurrenceRange} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecurrenceRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) : RecurrenceRange {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RecurrenceRange();
}
