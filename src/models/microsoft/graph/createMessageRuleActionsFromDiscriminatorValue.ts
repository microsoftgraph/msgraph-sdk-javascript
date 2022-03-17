import {MessageRuleActions} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMessageRuleActionsFromDiscriminatorValue(parseNode: ParseNode | undefined) : MessageRuleActions {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MessageRuleActions();
}
