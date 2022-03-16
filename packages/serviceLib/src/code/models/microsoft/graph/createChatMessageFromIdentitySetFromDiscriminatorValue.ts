import {ChatMessageFromIdentitySet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageFromIdentitySetFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatMessageFromIdentitySet {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatMessageFromIdentitySet();
}
