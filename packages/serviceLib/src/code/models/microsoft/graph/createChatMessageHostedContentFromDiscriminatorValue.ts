import {ChatMessageHostedContent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageHostedContentFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatMessageHostedContent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatMessageHostedContent();
}
