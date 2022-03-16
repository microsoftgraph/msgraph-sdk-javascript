import {ConditionalAccessConditionSet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessConditionSetFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessConditionSet {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessConditionSet();
}
