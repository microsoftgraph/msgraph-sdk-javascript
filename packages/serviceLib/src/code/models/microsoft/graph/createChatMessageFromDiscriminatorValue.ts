import {ChatMessage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatMessage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatMessage();
}
