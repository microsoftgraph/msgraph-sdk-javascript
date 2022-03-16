import {PatternedRecurrence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPatternedRecurrenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : PatternedRecurrence {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PatternedRecurrence();
}
