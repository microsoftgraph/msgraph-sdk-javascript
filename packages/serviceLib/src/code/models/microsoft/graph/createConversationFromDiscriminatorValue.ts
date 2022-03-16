import {Conversation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConversationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Conversation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Conversation();
}
