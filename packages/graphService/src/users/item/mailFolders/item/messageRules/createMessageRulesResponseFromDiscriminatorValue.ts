import {MessageRulesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMessageRulesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MessageRulesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MessageRulesResponse();
}
