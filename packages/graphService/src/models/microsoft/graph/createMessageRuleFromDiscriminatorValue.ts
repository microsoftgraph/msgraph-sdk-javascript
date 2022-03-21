import {MessageRule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMessageRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) : MessageRule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MessageRule();
}
