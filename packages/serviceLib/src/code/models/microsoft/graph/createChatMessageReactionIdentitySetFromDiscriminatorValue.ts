import {ChatMessageReactionIdentitySet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageReactionIdentitySetFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatMessageReactionIdentitySet {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatMessageReactionIdentitySet();
}
