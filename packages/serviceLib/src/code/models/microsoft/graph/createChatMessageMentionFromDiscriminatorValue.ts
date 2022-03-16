import {ChatMessageMention} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageMentionFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatMessageMention {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatMessageMention();
}
