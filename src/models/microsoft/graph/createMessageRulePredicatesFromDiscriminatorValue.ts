import {MessageRulePredicates} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMessageRulePredicatesFromDiscriminatorValue(parseNode: ParseNode | undefined) : MessageRulePredicates {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MessageRulePredicates();
}
