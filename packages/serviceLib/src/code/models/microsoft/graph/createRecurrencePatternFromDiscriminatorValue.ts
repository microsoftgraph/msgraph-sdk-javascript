import {RecurrencePattern} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecurrencePatternFromDiscriminatorValue(parseNode: ParseNode | undefined) : RecurrencePattern {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RecurrencePattern();
}
