import {ConversationMember} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConversationMemberFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConversationMember {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConversationMember();
}
