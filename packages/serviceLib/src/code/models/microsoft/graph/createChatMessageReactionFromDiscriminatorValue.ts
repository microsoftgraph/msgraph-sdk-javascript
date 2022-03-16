import {ChatMessageReaction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageReactionFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatMessageReaction {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatMessageReaction();
}
